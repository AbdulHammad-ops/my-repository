"use client"
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search, Heart, ShoppingCart, Menu, X, ChevronDown, ChevronRight } from 'lucide-react'
import { SignedOut, SignInButton, UserButton, SignedIn } from "@clerk/nextjs";

const megaMenuCategories = [
  {
    name: "Clothings",
    subcategories: ["T-Shirts", "Hoodies", "Long Sleeve T-Shirts", "Crewneck Sweatshirts", "Tank Tops", "Leggings"]
  },
  {
    name: "Accessories",
    subcategories: ["Phone cases", "Tote Bags", "Backpacks", "Fanny packs", "Hats", "Socks", "Flip Flops"]
  },
  {
    name: "Home & Living",
    subcategories: ["Mugs", "Wall art & Framed Posters", "Towels", "Water Bottles & Tumblers", "Pillows & Pillow Cases", "Aprons", "Coasters", "Magnets"]
  },
  {
    name: "Kids & Babies",
    subcategories: ["Kids T-Shirts", "Kids Hoodies", "Baby T-Shirts", "Baby Bodysuit"]
  },
  {
    name: "Stationary",
    subcategories: ["Notebooks", "Stickers", "Cards", "Mouse Pads", "Business Cards", "Wall Calendars", "Posters", "Puzzles"]
  },
  {
    name: "Pets",
    subcategories: ["Pet Bowls", "Pet Bandanas", "Pet Leash", "Pet Collar", "Pet Collar & Leash"]
  }
];

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [megaMenuOpen, setMegaMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    if (megaMenuOpen) setMegaMenuOpen(false)
  }

  const toggleMegaMenu = (event: React.MouseEvent) => {
    event.stopPropagation();
    setMegaMenuOpen(!megaMenuOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm">
        <div className={`flex items-center justify-between p-4 transition-all duration-300`}>
          <div className="flex items-center gap-4 md:gap-8">
            <div className="relative h-6 w-24 md:h-8 md:w-32">
              <Link href="/">
                <Image
                  src="https://i.ibb.co/7rqR3Zv/Dai-Y-white-logo.png"
                  alt="D.ai.Y Logo"
                  layout="fill"
                  objectFit="contain"
                  priority
                />
              </Link>
            </div>

            <nav className="hidden md:block">
              <ul className="flex gap-4 md:gap-6 text-white">
                <li>
                  <button
                    className="flex items-center gap-1 text-sm md:text-base hover:text-gray-200 transition-colors"
                    onClick={toggleMegaMenu}
                  >
                    Art Geneissance
                    <ChevronDown className={`h-3 w-3 md:h-4 md:w-4 transition-transform duration-200 ${megaMenuOpen ? 'rotate-180' : ''}`} />
                  </button>
                </li>
                <li>
                  <Link href="/shop" className="text-sm md:text-base hover:text-gray-200 transition-colors">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link href="/editor" className="text-sm md:text-base hover:text-gray-200 transition-colors">
                    Create Your Own
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <div className="relative hidden md:block">
              <input
                type="search"
                placeholder="Search"
                className="border-2 border-white/80 px-2 py-1 md:px-4 md:py-2 pr-8 md:pr-10 text-sm bg-transparent text-white placeholder-white/80 rounded-md focus:outline-none focus:border-white transition-colors"
              />
              <Search className="absolute right-2 md:right-3 top-1/2 h-3 w-3 md:h-4 md:w-4 -translate-y-1/2 text-white/80" />
            </div>
            <button className="p-1 md:p-2 hidden md:block">
              <SignedOut>
                <SignInButton mode="modal">
                  <div className="text-sm font-medium text-white hover:text-gray-200 transition-colors">
                    Sign In
                  </div>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </button>
            <button className="p-1 md:p-2 hidden md:block">
              <Heart className="h-4 w-4 md:h-5 md:w-5 text-white hover:text-gray-200 transition-colors" />
            </button>
            <button className="p-1 md:p-2">
              <ShoppingCart className="h-4 w-4 md:h-5 md:w-5 text-white hover:text-gray-200 transition-colors" />
            </button>
            <button className="p-1 md:p-2 md:hidden" onClick={toggleMenu}>
              <Menu className="h-5 w-5 md:h-6 md:w-6 text-white" />
            </button>
          </div>
        </div>

        {/* Mega Menu */}
        {megaMenuOpen && (
          <div className="absolute left-0 right-0 top-full bg-black shadow-lg border-t border-white/10">
            <div className="container mx-auto py-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 p-5">
                {megaMenuCategories.map((category) => (
                  <div key={category.name} className="space-y-4">
                    <h3 className="font-bold text-white flex items-center gap-1">
                      {category.name}
                      <ChevronRight className="h-4 w-4 text-white/60" />
                    </h3>
                    <ul className="space-y-2">
                      {category.subcategories.map((subcategory) => (
                        <li key={subcategory}>
                          <Link
                            href="#"
                            className="text-gray-400 hover:text-white text-sm block py-1 transition-colors"
                          >
                            {subcategory}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] bg-black">
          <div className="flex justify-between items-center p-4 border-b border-white/10">
            <Link href="/" className="relative h-6 w-24">
              <Image
                src="https://i.ibb.co/7rqR3Zv/Dai-Y-white-logo.png"
                alt="D.ai.Y"
                layout="fill"
                objectFit="contain"
                priority
              />
            </Link>
            <button onClick={toggleMenu}>
              <X className="h-6 w-6 text-white" />
            </button>
          </div>
          <nav className="p-4">
            <ul className="space-y-4">
              <li>
                <button
                  className="flex items-center justify-between w-full text-left text-white"
                  onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                >
                  Art Geneissance
                  <ChevronDown className={`h-4 w-4 transform transition-transform duration-200 ${megaMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                {megaMenuOpen && (
                  <div className="mt-2 ml-4 space-y-4">
                    {megaMenuCategories.map((category) => (
                      <div key={category.name}>
                        <h3 className="font-bold text-white">{category.name}</h3>
                        <ul className="ml-4 space-y-2 mt-2">
                          {category.subcategories.map((subcategory) => (
                            <li key={subcategory}>
                              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                {subcategory}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </li>
              <li>
                <Link href="/shop" className="block text-white hover:text-gray-200 transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/editor" className="block text-white hover:text-gray-200 transition-colors">
                  Create Your Own
                </Link>
              </li>
              <li>
                <Link href="#" className="block text-white hover:text-gray-200 transition-colors">
                  Search
                </Link>
              </li>
              <li>
                <SignedOut>
                  <SignInButton mode="modal">
                    <div className="text-white hover:text-gray-200 transition-colors">
                      Sign In
                    </div>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  )
}

export default HamburgerMenu