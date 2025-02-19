"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { useState, useEffect } from 'react'
import { Search, User, Heart, ShoppingCart, ChevronLeft, ChevronRight, ChevronDown, Menu, X } from 'lucide-react'
import { SignInButton, SignedIn, SignedOut, UserButton, useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation';
import ArtGenesistInterview from './components/ArtGenesistInterview';

export const dynamic = 'force-dynamic'

export default function Home() {
  const router = useRouter();
  const { isLoaded, isSignedIn, user } = useUser();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showInterview, setShowInterview] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);
  const slides = [
    {
      title: "Super Cool Anime designs you've never seen elsewhere!",
      description: "Check out crazy AI generated Anime designs you can print on your items!",
      cta: "Shop Anime Style"
    },
    {
      title: "Discover unique vintage-inspired artwork",
      description: "Explore our collection of retro and nostalgic designs",
      cta: "Browse Vintage"
    },
    {
      title: "Create your own custom designs",
      description: "Turn your imagination into reality with our design tools",
      cta: "Start Designing"
    }
  ];

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (megaMenuOpen && !(event.target as Element).closest('.mega-menu-container')) {
        setMegaMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [megaMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (megaMenuOpen) setMegaMenuOpen(false);
  };

  const toggleMegaMenu = (event: React.MouseEvent) => {
    event.stopPropagation();
    setMegaMenuOpen(!megaMenuOpen);
  };

  const handleEditorNavigation = (e: React.MouseEvent) => {
    e.preventDefault();
    if (user) {
      router.push('/editor');
    } else {
      router.push('/pricing');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <header className={`absolute top-0 left-0 right-0 z-50 flex items-center justify-between p-4 transition-colors duration-200 ${megaMenuOpen ? 'bg-black' : ''}`}>
        <div className="flex items-center gap-4 md:gap-8">
          <div className="relative h-6 w-24 md:h-8 md:w-32">
            <Image
              src="https://i.ibb.co/7rqR3Zv/Dai-Y-white-logo.png"
              alt="D.ai.Y Logo"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>

          <nav className="hidden md:block">
            <ul className="flex gap-4 md:gap-6 text-white">
              <li>
                <button
                  className="flex items-center gap-1 text-sm md:text-base"
                  onClick={toggleMegaMenu}
                >
                  Art Geneissance
                  <ChevronDown className="h-3 w-3 md:h-4 md:w-4 transition-transform duration-200 text-white" />
                </button>
              </li>
              <li className="text-md">
                <Link href="/shop">
                  Shop
                </Link>
              </li>
              <li className="text-md">
                <Link href="/editor">
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
              className="border-2 border-white px-2 py-1 md:px-4 md:py-2 pr-8 md:pr-10 text-sm bg-transparent text-white placeholder-white"
            />
            <Search className="absolute right-2 md:right-3 top-1/2 h-3 w-3 md:h-4 md:w-4 -translate-y-1/2 text-white" />
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
            <Heart className="h-4 w-4 md:h-5 md:w-5 text-white" />
          </button>
          <button className="p-1 md:p-2">
            <ShoppingCart className="h-4 w-4 md:h-5 md:w-5 text-white" />
          </button>
          <button className="p-1 md:p-2 md:hidden" onClick={toggleMobileMenu}>
            <Menu className="h-5 w-5 md:h-6 md:w-6 text-white" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="flex justify-between items-center p-4 border-b">
            <h1 className="text-xl font-bold">D.ai.Y</h1>
            <button onClick={() => setMobileMenuOpen(false)}>
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="p-4">
            <ul className="space-y-4">
              <li>
                <button
                  className="flex items-center justify-between w-full text-left"
                  onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                >
                  Art Geneissance
                  <ChevronDown className={`h-4 w-4 transform ${megaMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                {megaMenuOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {megaMenuCategories.map((category) => (
                      <div key={category.name}>
                        <h3 className="font-bold text-gray-900">{category.name}</h3>
                        <ul className="ml-4 space-y-1">
                          {category.subcategories.map((subcategory) => (
                            <li key={subcategory}>
                              <Link href="#" className="text-gray-600 hover:text-black">
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
              {/* <li><Link href="#" className="block">Shop</Link></li> */}
              <li><Link href="#" className="block">Search</Link></li>
              <li className="text-md md:text-base">
                <Link href="/shop" className=" block">
                  Shop
                </Link>
              </li>
          
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>

                <UserButton />
              </SignedIn>

            </ul>
          </nav>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative h-[90vh] bg-gray-900 overflow-hidden">
        {megaMenuOpen && (
          <div className="absolute left-0 right-0 top-[64px] bg-white shadow-lg z-40 border-t py-5">
            <div className="container mx-auto py-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 p-5">
                {megaMenuCategories.map((category) => (
                  <div key={category.name} className="space-y-4">
                    <h3 className="font-bold text-gray-900 flex items-center gap-1">
                      {category.name}
                      <ChevronRight className="h-4 w-4" />
                    </h3>
                    <ul className="space-y-2">
                      {category.subcategories.map((subcategory) => (
                        <li key={subcategory}>
                          <Link
                            href="#"
                            className="text-gray-600 hover:text-black text-sm block py-1"
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
        <div className="absolute inset-0 w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
                index === currentSlide ? 'opacity-100 z-[1]' : 'opacity-0 z-0'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-[2]" />
              <Image
                src="/home.jpg"
                alt={`Slide ${index + 1}`}
                layout="fill"
                objectFit="cover"
                quality={100}
                priority={index === currentSlide}
                className="object-right-top brightness-90"
              />
            </div>
          ))}
        </div>
        <div className="relative container mx-auto px-4 md:px-8 h-full flex items-center z-[15]">
          <div className="max-w-lg space-y-6 ml-4 md:ml-8">
            <span className="inline-block rounded-full bg-white/90 px-4 py-1.5 text-sm font-medium text-gray-900">
              FOMO Alert!
            </span>
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg leading-tight">
                {slides[currentSlide].title}
              </h2>
              <p className="text-base md:text-lg text-white/90 drop-shadow-md max-w-md">
                {slides[currentSlide].description}
              </p>
            </div>
            <div className="relative z-[20]">
              <button className="bg-[#00C4CC] text-white font-bold py-2.5 px-6 rounded-full text-base hover:bg-[#00B3BB] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                <Link href="/how-it-works" className="block">
                  {slides[currentSlide].cta}
                </Link>
              </button>
            </div>
          </div>
        </div>
        
        {/* Navigation Buttons */}
        <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex justify-between px-4 z-[20]">
          <button
            className="bg-black/50 p-2.5 rounded-full text-white hover:bg-black/70 transition-colors"
            onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            className="bg-black/50 p-2.5 rounded-full text-white hover:bg-black/70 transition-colors"
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-black py-4 md:py-8">
        <div className="container mx-auto px-2 md:px-4">
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 12.5}%)` }}
              >
                {[
                  { key: 1, name: 'Vintage', image: 'https://i.ibb.co/FwwmPNL/Category-Icon-Vintage.png' },
                  { key: 2, name: 'Surrealism', image: 'https://i.ibb.co/vvcBnkm/Category-Icon-Surrealism.jpg' },
                  { key: 3, name: 'Mindfulness', image: 'https://i.ibb.co/smLDfzq/Category-Icon-Mindfulness.jpg' },
                  { key: 4, name: 'Love', image: 'https://i.ibb.co/YcwsxRH/Category-Icon-Love.jpg' },
                  { key: 5, name: 'Anime', image: 'https://i.ibb.co/M27s5rK/Category-Icon-Anime.jpg' },
                  { key: 6, name: 'Animals', image: 'https://i.ibb.co/Zc0znbq/Category-Icon-Animal.webp' },
                  { key: 7, name: 'Nature', image: 'https://i.ibb.co/pRXBJzv/Category-Icon-Nature.jpg' },
                  { key: 8, name: 'Abstract', image: 'https://i.ibb.co/0q2KJt4/Category-Icon-Abstract.png' },
                  { key: 9, name: 'Vintage', image: 'https://i.ibb.co/FwwmPNL/Category-Icon-Vintage.png' },
                  { key: 10, name: 'Surrealism', image: 'https://i.ibb.co/vvcBnkm/Category-Icon-Surrealism.jpg' },
                  { key: 11, name: 'Mindfulness', image: 'https://i.ibb.co/smLDfzq/Category-Icon-Mindfulness.jpg' },
                  { key: 12, name: 'Love', image: 'https://i.ibb.co/YcwsxRH/Category-Icon-Love.jpg' },
                  { key: 13, name: 'Anime', image: 'https://i.ibb.co/M27s5rK/Category-Icon-Anime.jpg' },
                  { key: 14, name: 'Animals', image: 'https://i.ibb.co/Zc0znbq/Category-Icon-Animal.webp' },
                  { key: 15, name: 'Nature', image: 'https://i.ibb.co/pRXBJzv/Category-Icon-Nature.jpg' },
                  { key: 16, name: 'Be Strong', image: 'https://i.ibb.co/YcwsxRH/tree-strong.jpg' }
                ].map((category) => (
                  <div key={category.key} className="flex-shrink-0 w-1/4 sm:w-1/5 md:w-1/6 lg:w-1/12 px-0.5 md:px-1">
                    <div className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 mx-auto overflow-hidden rounded-full bg-gray-800">
                      <Link href="/how-it-works">
                        <Image
                          src={category.image}
                          alt={category.name}
                          width={96}
                          height={96}
                          className="h-full w-full object-cover"
                        />
                      </Link>
                    </div>
                    <p className="mt-1 text-center text-xs md:text-sm text-white">{category.name}</p>
                  </div>
                ))}
              </div>
            </div>
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 p-1 md:p-2 rounded-full"
              onClick={() => {
                const maxSlides = Math.ceil(16 / 8) - 1; // Calculate max slides based on total items divided by visible items
                setCurrentSlide((prev) => Math.max(0, prev - 1));
              }}
            >
              <ChevronLeft className="h-3 w-3 md:h-4 md:w-4 lg:h-6 lg:w-6 text-white" />
            </button>
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 p-1 md:p-2 rounded-full"
              onClick={() => {
                const maxSlides = Math.ceil(16 / 8) - 1; // Calculate max slides based on total items divided by visible items
                setCurrentSlide((prev) => Math.min(maxSlides, prev + 1));
              }}
            >
              <ChevronRight className="h-3 w-3 md:h-4 md:w-4 lg:h-6 lg:w-6 text-white" />
            </button>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="bg-black py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mb-4 md:mb-8">
            <span className="text-gray-400 text-sm md:text-base">Don't Miss This Week's Hottest Hits!</span>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">Weekly Best Sellers</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {[
              '/shop/product1.png',
              '/shop/product2.png',
              '/shop/product3.png',
              '/shop/product4.png',
              '/shop/product5.png',
              '/shop/product6.png',
              '/shop/product7.png',
              '/shop/product8.png',
              '/shop/product9.png',
              '/shop/product10.png',
            ].map((imgPath, i) => (
              <div key={i} className="group relative">
                <div className="relative space-y-2">
                  {/* Card Container with Shadow and Hover Effects */}
                  <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    {/* Image Container */}
                    <div className="aspect-square relative">
                      <Link href={user ? "/editor" : "/pricing"}>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                        <Image
                          src={imgPath}
                          alt={`Product ${i + 1}`}
                          width={400}
                          height={400}
                          className="w-full h-full object-cover"
                        />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                          <span className="text-white text-sm font-medium px-4 py-2 rounded-full bg-[#00C4CC]/90 transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            View Design
                          </span>
                        </div>
                      </Link>
                    </div>
                    
                    {/* Product Info with Gradient Background */}
                    <div className="p-4 bg-gradient-to-b from-gray-900 to-black">
                      <h3 className="text-white text-sm md:text-base font-medium truncate">
                        Product Name
                      </h3>
                      <p className="text-gray-400 text-xs md:text-sm mt-1">by Artist Name</p>
                      <div className="flex justify-between items-center mt-2">
                        <p className="text-white text-sm md:text-base font-bold">$99</p>
                        <button className="text-[#00C4CC] hover:text-white transition-colors duration-200">
                          <Heart className="h-4 w-4 md:h-5 md:w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signup Section - Only show if user is not signed in */}
      {isLoaded && !isSignedIn && (
        <section className="relative w-full py-16 overflow-hidden">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-200 via-yellow-100 to-pink-200 opacity-80"></div>
          
          {/* Bubble Effects */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white/30 backdrop-blur-sm animate-float"
                style={{
                  width: `${Math.random() * 40 + 10}px`,
                  height: `${Math.random() * 40 + 10}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${Math.random() * 10 + 5}s`
                }}
              ></div>
            ))}
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
              Sign Up for
            </h2>
            <p className="text-xl md:text-2xl font-semibold mb-8 text-gray-800">
              Free Credits plus 20% Discount!
            </p>
            <Link 
              href="/sign-up" 
              className="inline-block px-8 py-3 text-lg font-medium text-white bg-[#12B1A4] rounded-full hover:bg-[#0E9B8F] transition-colors duration-200 transform hover:scale-105"
            >
              Yes, I want to sign up
            </Link>
          </div>
        </section>
      )}

      {/* Top Artists Section */}
      <section className="bg-white py-8 md:py-16">
        <div className="container mx-auto px-4">
          <span className="text-gray-600 text-sm md:text-base">This Week's Trendiest Art Genesist</span>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-8 lg:mb-12">Weekly Top 5 Art Genesists</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-8">
            <div className="md:col-span-2">
              <div className="flex flex-col items-center md:items-start py-2 md:py-4 lg:flex lg:items-center lg:justify-center lg:h-full">
                <div className="aspect-square rounded-full overflow-hidden relative flex items-center justify-center w-48 h-48 md:w-64 md:h-64 lg:w-[450px] lg:h-[450px]  ">
                  <Link href={user ? "/editor" : "/pricing"}>
                    <Image
                      src="/cover.jpg"
                      alt="Featured Artist"
                      width={500}
                      height={600}
                      className="absolute inset-0 w-full h-full object-cover rounded-full"
                    />
                  </Link>
                  <p className="absolute bottom-10 mt-4 text-xl text-center text-white">Evan Moxwell</p>
                </div>
              </div>
            </div>
            <div className="md:col-span-3 grid grid-cols-2 gap-4 md:gap-8">
              {[
              { img: '/img4.png', name: 'Komorebi Studio' },
              { img: '/img3.jpg', name: 'Nova Chromatic' },
              { img: '/img2.jpg', name: 'Zephyr Cascade' },
              { img: '/img1.jpg', name: 'Sienna' },
              ].map((img, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="aspect-square rounded-full overflow-hidden bg-black flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48">
                    <Image
                      src={img.img}
                      alt={`Artist ${i + 1}`}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-2 md:mt-4 text-center md:text-left text-black">
                    <p className="text-sm md:text-base">{img.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {
  /* Style Your World Section */
}
;<section className="bg-white -mb-[1px]">
  <div className="w-full">
    <div className="relative overflow-hidden">
      <Image
        src="/About-Us-page-Product-types-banner.jpg"
        alt="Product Types Banner"
        width={1200}
        height={600}
        className="w-full h-auto"
      />
      <div className="absolute top-1/2 right-12 -translate-y-1/2 text-right">
        <h2
          className="text-6xl font-light text-white mb-4"
          style={{
            fontFamily: "'Dancing Script', cursive",
            textShadow: `
              0 0 2px rgba(255,255,255,0.3),
              0 0 4px rgba(255,255,255,0.2),
              0 0 6px rgba(255,255,255,0.1)
            `,
            letterSpacing: "0.05em",
          }}
        >
          Style Your World
        </h2>
        <p className="text-xl text-white mb-6">Personalize your gear, make it yours</p>
        <Link href="/editor">
          <Button className="bg-[#00BFB3] hover:bg-[#00a69b] text-white rounded-full px-8 py-2">
            Customize your design
          </Button>
        </Link>
      </div>
    </div>
  </div>
</section>

{
  /* Meet the Masters Section */
}
;<section className="bg-black py-6 md:py-10">{/**/}</section>

      <section className="bg-black py-6 md:py-10">
        <div className="container mx-auto px-4">
          <span className="text-gray-400 text-sm md:text-base">Step into the Worlds of our Art Genesists</span>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 md:mb-8 lg:mb-12">
            Meet the Masters: Inside Art Geneissance
          </h2>
          <div className="flex flex-wrap justify-between gap-4">
            {[
              { id: 1, image: "https://i.ibb.co/cQY353Y/pexels-photo-2379004.jpg", title: "The Journey of AI Art", artist: "Alexa Chen" },
              { id: 2, image: "https://i.ibb.co/cQY353Y/pexels-photo-2379004.jpg", title: "Exploring Digital Creativity", artist: "Marcus Rivera" },
              { id: 3, image: "https://i.ibb.co/cQY353Y/pexels-photo-2379004.jpg", title: "Future of Design", artist: "Sarah Johnson" },
              { id: 4, image: "https://i.ibb.co/cQY353Y/pexels-photo-2379004.jpg", title: "AI in Modern Art", artist: "David Kim" },
            ].map((article) => (
              <div 
                key={article.id} 
                className="flex flex-col w-full sm:w-[calc(25%-1rem)] h-[400px] cursor-pointer group"
                onClick={() => {
                  setSelectedArticle(article.id);
                  setShowInterview(true);
                }}
              >
                <div className="h-[300px] bg-white rounded-lg overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                    <span className="text-white text-sm font-medium px-4 py-2 rounded-full bg-[#00C4CC]/90 transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      Read Interview
                    </span>
                  </div>
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-2 md:mt-4 text-white text-base md:text-lg font-medium">{article.title}</h3>
                <p className="text-gray-400 text-sm md:text-base">Meet '{article.artist}'</p>
              </div>
            ))}
          </div>

          {/* Interview Modal */}
          {showInterview && (
            <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative">
                <button 
                  onClick={() => setShowInterview(false)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
                >
                  <X className="h-6 w-6" />
                </button>
                <ArtGenesistInterview />
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-8 md:py-16">
        <div className="container mx-auto px-4">
          <span className="text-gray-600 text-sm md:text-base">Found your new skill!</span>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-8 lg:mb-12">Become an Art Genesist</h2>
          <section className="relative h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] mb-1 sm:mb-16">
            <Image
              src="https://i.ibb.co/DL863Nx/Sell-your-art-banner.jpg"
              alt="Background image"
              layout="fill"
              objectFit="cover"
              priority
              className="z-0"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-8 z-10 container mx-auto">
              <div className="max-w-lg">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-4 drop-shadow-lg text-left">
                  Prompt.. Click.. Earn!
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-4 sm:mb-8 text-left">
                  Dai.Y's New Editing tool, powered with AI, makes creating your product range as easy as 1, 2, 3.
                </p>
                <Link href="editor" className="inline-flex items-center justify-center px-8 py-4 text-xl font-semibold text-white bg-[#00C4CC] rounded-full hover:bg-[#00B3BB] transition-all duration-200 transform hover:scale-105 w-fit">
                  Start Selling 
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-8 md:py-16">
        <div className="container mx-auto px-4">
          <span className="text-gray-600 text-sm md:text-base">Hear It Straight From Our Happy Customers!</span>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-8 lg:mb-12">Instagram</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 md:border-4 border-grey-500">
                <Link href={user ? "/editor" : "/pricing"}>
                  <Image
                    src="https://i.ibb.co/JqQjtqv/24-Q402-GM-Holiday-NJa-G-Homepage-Desktop-Tile-Phone-Cases.jpg"
                    alt={`Instagram post ${i + 1}`}
                    width={300}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}