import CreativeEditorSDK, { DesignBlockType } from '@cesdk/cesdk-js';
import { useUser } from '@clerk/nextjs';
// import BackgroundRemovalPlugin from '@imgly/plugin-background-removal-web';
import VectorizerPlugin from '@imgly/plugin-vectorizer-web';

import { useEffect, useRef, useState } from 'react';
import { toast } from 'sonner';

const config = {
    license: 'hdp7Bh6GtOygkf4N4VcYqzz52U2KYVCIijOh8L1zlcf29n3-ic87frosz5Ogp26b',
    userId: 'guides-user',
    // Enable local uploads in Asset Library
    callbacks: { onUpload: 'local' as const }
};


export default function CreativeEditorSDKComponent() {
    const cesdkContainerRef = useRef<HTMLDivElement>(null);
    const [cesdk, setCesdk] = useState<CreativeEditorSDK | null>(null);
    const [prompt, setPrompt] = useState('');
    const [loading, setLoading] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const { user } = useUser();

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
                    instance.addDemoAssetSources({ sceneMode: 'Design' }),
                    // instance.addPlugin(BackgroundRemovalPlugin({
                    //     ui:{
                    //         locations:'canvasMenu'
                    //     },
                    //     provider:{
                    //         type:'@imgly/background-removal',
                    //         configuration:{
                    //             device:'cpu'
                    //         }
                    //     }
                    // })),
                    instance.addPlugin(VectorizerPlugin({
                        ui:{
                            locations:'canvasMenu'
                        }
                    })),
                ]); 

                await instance.createDesignScene();

                setCesdk(instance);
            }
        );

        return () => {
            cleanedUp = true;
            instance?.dispose();
            setCesdk(null);
        };
    }, []);


    useEffect(() => {
        if (cesdk) {
        }
    }, [cesdk]);

    // Call OpenAI with the prompt to generate a DALL·E image, then insert it into the Editor
    const handleGenerateImage = async () => {
        if (!cesdk || !prompt) return;

        if(!user?.publicMetadata?.isActive) {
            toast.error('Please purchase a subscription plan to use this feature.');
            return;
        }

        setLoading(true);
        
        try {
            const proxyResponse = await fetch('/api/image-gen', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt }),
            });

            if (!proxyResponse.ok) {
                throw new Error('Failed to proxy image');
            }

            const blob = await proxyResponse.blob();
            const proxiedUrl = URL.createObjectURL(blob);

            // Load the proxied image into the current editor scene
            await cesdk.engine.scene.createFromImage(proxiedUrl);
            
            // if there is an image already in the scene add it to the background

            URL.revokeObjectURL(proxiedUrl);
            const blocks = cesdk.engine.block.findByKind('image');

            console.log(blocks);
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

    return (
        <div className="w-screen h-screen relative">
            {isVisible ? (
                <div className="fixed bottom-6 right-6 z-50 bg-white/95 shadow-lg rounded-xl p-6 w-[400px] backdrop-blur-sm border border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-lg font-semibold text-gray-800">D.ai.y Image Generator</span>
                        <button
                            onClick={() => {
                                setIsVisible(false);
                                setPrompt('');
                            }}
                            className="text-gray-500 hover:text-gray-700 transition-colors"
                        >
                            ✕
                        </button>
                    </div>
                    <div className="space-y-4">
                        <input
                            type="text"
                            placeholder="Enter a prompt..."
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        />
                        <button 
                            onClick={handleGenerateImage} 
                            disabled={loading || !prompt}
                            className={`w-full py-2.5 px-4 rounded-lg font-medium text-white transition-all
                                ${loading || !prompt 
                                    ? 'bg-gray-400 cursor-not-allowed' 
                                    : 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 shadow-md hover:shadow-lg'
                                }`}
                        >
                            {loading ? (
                                <span className="flex items-center justify-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Generating...
                                </span>
                            ) : 'Generate with D.ai.y'}
                        </button>
                    </div>
                </div>
            ) : (
                <button
                    onClick={() => setIsVisible(true)}
                    className="fixed bottom-6 right-6 z-50 px-4 py-2 bg-white/95 shadow-lg rounded-lg hover:shadow-xl transition-all text-gray-800 font-medium hover:bg-white"
                >
                    Show D.ai.y Generator
                </button>
            )}

            {/* The CreativeEditor container */}
            <div
                ref={cesdkContainerRef}
                className="w-full h-full"
            />
        </div>
    );
}