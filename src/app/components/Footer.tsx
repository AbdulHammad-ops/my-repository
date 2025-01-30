"use client"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-black py-8 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-20">
          <div>
            <Link href="/" className="block">
              <div className="w-12 h-12 bg-[#00BFB3] rounded-full flex items-center justify-center text-white font-bold">
                <Image
                  src="https://i.ibb.co/Sw9dRZY/DAIY-white-round.png"
                  alt="Background image"
                  width={40}
                  height={40}
                  className="z-0 w-[40px] h-[40px] text-gray-500"
                />
              </div>
            </Link>
          </div>
          <nav className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
            <div>
              <h3 className="font-medium text-white mb-2 md:mb-4">Art Genesists</h3>
              <ul className="space-y-1 md:space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white text-sm md:text-base">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-gray-400 hover:text-white text-sm md:text-base">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/how-it-works" className="text-gray-400 hover:text-white text-sm md:text-base">
                    How It Works
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-white mb-2 md:mb-4">About Us</h3>
              <ul className="space-y-1 md:space-y-2">
                <li>
                  <Link href="/about-us" className="text-gray-400 hover:text-white text-sm md:text-base">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white text-sm md:text-base">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white text-sm md:text-base">
                    Trending
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-white mb-2 md:mb-4">Shop</h3>
              <ul className="space-y-1 md:space-y-2">
                <li>
                  <Link href="/sell-your-art" className="text-gray-400 hover:text-white text-sm md:text-base">
                    Sell Your Art
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-white mb-2 md:mb-4">Help</h3>
              <ul className="space-y-1 md:space-y-2">
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-white text-sm md:text-base">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-white text-sm md:text-base">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  )
}

