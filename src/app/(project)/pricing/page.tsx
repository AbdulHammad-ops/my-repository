"use client"
import { Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'
import { useUser } from '@clerk/nextjs'

export default function PricingPage() {

    const router = useRouter()
    const { user } = useUser()
    if (!user) {
        router.push("/sign-in")
    }


    const handleGetStarted = async () => {
        const response = await fetch("/api/stripe/create-checkout", {
            method: "POST",
            body: JSON.stringify({ priceId: "price_1QfS36K8nArCkbAAiaDYsW7c", email: user?.emailAddresses[0].emailAddress }),
        });

        const data = await response.json()
        console.log(data)
        window.location.href = data.sessionUrl
    };

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4">
            <div className="max-w-md w-full">
                <h1 className="text-4xl font-bold text-center mb-8 text-white">D.ai.Y</h1>
                <div className="bg-zinc-900 rounded-lg border border-zinc-800 overflow-hidden transform transition-all hover:scale-105 duration-300">
                    <div className="p-6 bg-zinc-800 text-white text-center">
                        <h2 className="text-2xl font-semibold">Premium Package</h2>
                        <div className="mt-4 flex items-center justify-center">
                            <span className="text-5xl font-bold">$29</span>
                            <span className="text-xl ml-2">/month</span>
                        </div>
                    </div>
                    <div className="p-6">
                        <ul className="space-y-4">
                            {[
                                "Unlimited access to all features",
                                "24/7 customer support",
                                "99.9% uptime guarantee"
                            ].map((feature, index) => (
                                <li key={index} className="flex items-center text-gray-300">
                                    <Check className="h-5 w-5 text-white mr-2" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8 text-center">
                            <Button
                                size="lg"
                                className="w-full bg-white hover:bg-gray-200 text-black transition-colors"
                                onClick={handleGetStarted}
                            >
                                Get Started
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

