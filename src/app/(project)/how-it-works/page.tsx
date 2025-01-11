'use client'

import { useState } from 'react'
import Image from "next/image"
import { User, Heart, ShoppingCart, Menu, X } from 'lucide-react'
import { Footer } from '../../components/Footer'
export default function Page() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      {/* Main Content */}
      <main className="bg-neutral-100">
        <div className="container mx-auto px-4 py-8 md:py-12 lg:px-[200px]">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-16 text-black">How D.ai.Y works</h2>

          {/* Artists Section */}
          <section className="mb-12 md:mb-24">
            <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
              <div className="relative order-2 md:order-1 md:col-span-1">
                <div className="flex justify-center">
                  <Image
                    src="https://i.ibb.co/pKJj2Y6/How-it-works-1.png"
                    alt="Artist creating designs"
                    width={300}
                    height={300}
                    layout="fixed"
                    className="w-full h-auto max-w-[300px] max-h-[300px] object-cover"
                  />
                </div>
              </div>
              <div className="order-1 md:order-2 md:col-span-2">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-8 text-black">Artists (How to Become an Art Geneisist!)</h3>
                <ol className="space-y-4 md:space-y-6">
                  <li>
                    <p className="font-semibold text-black">1. Open an Art Geneisist Shop:</p>
                    <p className="text-sm md:text-base text-gray-900">Art Geneisists sign up for free and set up Art Geneisist shop.</p>
                    <p className="text-sm md:text-base text-gray-900">It's simple, quick, and you can start selling right away!</p>
                  </li>
                  <li>
                    <p className="font-semibold text-black">2. Upload Designs:</p>
                    <p className="text-sm md:text-base text-gray-900">
                      Use our AI-enhanced editing tool to either create new art or upload existing designs.
                      Our platform helps transform your creativity into designs that can go on hundreds of different products.
                    </p>
                  </li>
                </ol>
              </div>
            </div>
          </section>

          {/* Customers Section */}
          <section className="mb-12 md:mb-24">
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-8 text-black">Customers (How easy is it to buy?)</h3>
            <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center mb-12 md:mb-24">
              <div className="md:col-span-2">
                <ol className="space-y-4 md:space-y-6" start={3}>
                  <li>
                    <p className="font-semibold text-black">3. Discover Unique Art:</p>
                    <p className="text-sm md:text-base text-gray-900">
                      Browse our marketplace, a vibrant collection of unique, AI-enhanced art pieces from artists
                      around the world. Whether you're looking for apparel, home decor, or accessories,
                      each product features unique art work that makes it truly one-of-a-kind.
                    </p>
                  </li>
                  <li>
                    <p className="font-semibold text-black">4. Shop Your Favorites:</p>
                    <p className="text-sm md:text-base text-gray-900">
                      When you find a design that captures your heart on a product you love, simply place your
                      order. Our third-party print-on-demand facility will produce the product just for you.
                    </p>
                  </li>
                </ol>
              </div>
              <div className="relative">
                <div className="flex justify-center">
                  <Image
                    src="https://i.ibb.co/SRcDypq/How-it-works-2.png"
                    alt="Customer shopping with cat"
                    width={300}
                    height={300}
                    layout="fixed"
                    className="w-full h-auto max-w-[300px] max-h-[300px] object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
              <div className="relative order-2 md:order-1 md:col-span-1">
                <div className="flex justify-center">
                  <Image
                    src="https://i.ibb.co/HqdGTk9/How-it-works-3.png"
                    alt="Artist earning"
                    width={300}
                    height={300}
                    layout="fixed"
                    className="w-full h-auto max-w-[300px] max-h-[300px] object-cover"
                  />
                </div>
              </div>
              <div className="order-1 md:order-2 md:col-span-2">
                <ol className="space-y-4 md:space-y-6" start={5}>
                  <li>
                    <p className="font-semibold text-black">5. Art Geneisist Earn:</p>
                    <p className="text-sm md:text-base text-gray-900">
                      Every purchase pays an Art Geneisist. Our Art Geneisists earn money with each sale,
                      fostering a thriving community of creatives.
                    </p>
                  </li>
                </ol>
              </div>
            </div>
          </section>

          {/* Celebration Section */}
          <section className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
            <div className="md:col-span-2">
              <ol className="space-y-4 md:space-y-6" start={6}>
                <li>
                  <p className="font-semibold text-black">6. We Celebrate:</p>
                  <p className="text-sm md:text-base text-gray-900">
                    Our customers not only get a uniquely personalized item, but also support the creative community,
                    contributing to a culture of appreciation and innovation in digital art.
                  </p>
                </li>
              </ol>
            </div>
            <div className="relative">
              <div className="flex justify-center">
                <Image
                  src="https://i.ibb.co/xS6LFSj/How-it-works-4.png"
                  alt="Celebration illustration"
                  width={300}
                  height={300}
                  layout="fixed"
                  className="w-full h-auto max-w-[300px] max-h-[300px] object-cover"
                />
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </main>

    </div>
  )
}

