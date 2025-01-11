import CreativeEditorSDK, { DesignBlockType } from '@cesdk/cesdk-js';
import OpenAI from 'openai';

import { useEffect, useRef, useState } from 'react';

const config = {
    license: 'hdp7Bh6GtOygkf4N4VcYqzz52U2KYVCIijOh8L1zlcf29n3-ic87frosz5Ogp26b',
    userId: 'guides-user',
    // Enable local uploads in Asset Library
    callbacks: { onUpload: 'local' as const }
};

// Replace with your actual API key or retrieve it from a secure location.
// For example, you might do: process.env.NEXT_PUBLIC_OPENAI_API_KEY
const openaiApiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

// Mock image URL
const MOCK_IMAGE_URL = 'https://i.ibb.co/FwwmPNL/Category-Icon-Vintage.png';

export default function CreativeEditorSDKComponent() {
    const cesdkContainerRef = useRef<HTMLDivElement>(null);
    const [cesdk, setCesdk] = useState<CreativeEditorSDK | null>(null);
    const [prompt, setPrompt] = useState('');
    const [loading, setLoading] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState({ x: window.innerWidth - 300, y: window.innerHeight - 150 });
    const [isVisible, setIsVisible] = useState(true);
    const dragRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!cesdkContainerRef.current) return;

        let cleanedUp = false;
        let instance: CreativeEditorSDK;

        CreativeEditorSDK.create(cesdkContainerRef.current, config).then(
            async (_instance) => {
                instance = _instance;
                if (cleanedUp) {
                    instance.dispose();
                    return;
                }

                // Load assets first
                await Promise.all([
                    instance.addDefaultAssetSources(),
                    instance.addDemoAssetSources({ sceneMode: 'Design' })
                ]);

                // Create a new design scene and ensure it's ready
                const scene = await instance.createDesignScene();

                setCesdk(instance);
            }
        );

        return () => {
            cleanedUp = true;
            instance?.dispose();
            setCesdk(null);
        };
    }, []);

    // Call OpenAI with the prompt to generate a DALL·E image, then insert it into the Editor
    const handleGenerateImage = async () => {
        if (!cesdk || !prompt) return;
        setLoading(true);
        try {
            // Initialize OpenAI client
            const openai = new OpenAI({ apiKey: openaiApiKey, dangerouslyAllowBrowser: true });

            // Generate image with DALL-E
            const response = await openai.images.generate({
                model: "dall-e-3",
                prompt: prompt,
                n: 1,
                size: "1024x1024",
            });

            const imageUrl = response.data[0]?.url;
            if (!imageUrl) throw new Error('No image URL received from DALL-E');

            // Fetch the image through your backend proxy
            const proxyResponse = await fetch('/api/proxy-image', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ imageUrl }),
            });

            if (!proxyResponse.ok) {
                throw new Error('Failed to proxy image');
            }

            const blob = await proxyResponse.blob();
            const proxiedUrl = URL.createObjectURL(blob);

            // Load the proxied image into the current editor scene
            await cesdk.engine.scene.createFromImage(proxiedUrl);

            URL.revokeObjectURL(proxiedUrl);
            const blocks = cesdk.engine.block.findByKind('image');
            if (blocks.length > 0) {
                cesdk.engine.block.setSelected(blocks[blocks.length - 1], true);
            }

            console.log('DALL-E image added successfully to scene');
        } catch (err) {
            console.error('Error generating/adding DALL-E image:', err);
        } finally {
            setLoading(false);
        }
    };

    // Add drag handlers
    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        const startX = e.pageX - position.x;
        const startY = e.pageY - position.y;

        const handleMouseMove = (e: MouseEvent) => {
            setPosition({
                x: e.pageX - startX,
                y: e.pageY - startY
            });
        };

        const handleMouseUp = () => {
            setIsDragging(false);
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    return (
        <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
            {isVisible ? (
                <div
                    ref={dragRef}
                    style={{
                        position: 'fixed',
                        bottom: window.innerHeight - position.y,
                        right: window.innerWidth - position.x,
                        zIndex: 999,
                        background: 'rgba(255, 255, 255, 0.9)',
                        padding: '1rem',
                        borderRadius: '8px',
                        cursor: isDragging ? 'grabbing' : 'grab',
                        userSelect: 'none',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginBottom: '0.5rem'
                        }}
                        onMouseDown={handleMouseDown}
                    >
                        <span>D.ai.y Image Generator</span>
                        <button
                            onClick={() => {
                                setIsVisible(false);
                                setPrompt('');
                                setPosition({ x: window.innerWidth - 20, y: window.innerHeight - 20 });
                            }}
                            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                        >
                            ✕
                        </button>
                    </div>
                    <input
                        type="text"
                        placeholder="Enter a prompt..."
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        style={{ width: '200px', marginRight: '0.5rem' }}
                    />
                    <button onClick={handleGenerateImage} disabled={loading || !prompt}>
                        {loading ? 'Generating...' : 'Generate with D.ai.y'}
                    </button>
                </div>
            ) : (
                <button
                    onClick={() => setIsVisible(true)}
                    style={{
                        position: 'fixed',
                        bottom: '20px',
                        right: '20px',
                        zIndex: 999,
                        padding: '0.5rem',
                        borderRadius: '4px',
                        background: 'rgba(255, 255, 255, 0.9)',
                        cursor: 'pointer'
                    }}
                >
                    Show D.ai.y Generator
                </button>
            )}

            {/* The CreativeEditor container */}
            <div
                ref={cesdkContainerRef}
                style={{ width: '100%', height: '100%' }}
            ></div>
        </div>
    );
}