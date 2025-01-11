import React from 'react'
import { CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { getStripeSession } from '@/lib/stripe'

export default async function Success(props: {
    params: Promise<{ slug: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    const searchParams = await props.searchParams;
    const { session_id } = searchParams;

    if (!session_id) {
        redirect('/')
    }

    const session = await getStripeSession(session_id as string)

    if (!session) {
        redirect('/')
    }

    return (
        <div className="min-h-[80vh] flex items-center justify-center">
            <div className="max-w-md w-full p-6 text-center">
                <div className="mb-4 flex justify-center">
                    <CheckCircle2 className="h-16 w-16 text-green-500" />
                </div>
                <h1 className="text-2xl font-bold mb-2">Payment Successful!</h1>
                <p className="text-gray-600 mb-2">
                    Thank you for your purchase. You can now start using the editor.
                </p>

                <p className="text-sm text-gray-500 mb-6">
                    Order amount: {session.amount_total ? (session.amount_total / 100).toFixed(2) : '0.00'} {session.currency?.toUpperCase()}
                </p>
                <Link
                    href="/editor"
                    className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Go to Editor
                </Link>
            </div>
        </div>
    )
}

