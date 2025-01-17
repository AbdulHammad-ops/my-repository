import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Facebook, Instagram, Youtube } from "lucide-react";
import ProductGrid from "./components/products";

const Shop = () => {
  return (
    <div className="w-full">
      {/* Hero Image Section */}
      <div className="relative w-full h-[400px]">
        <Image
          src="/Shopfront banner.png"
          alt="Japanese themed artwork with sushi roll and flowers"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Profile Section */}
      <div className="flex flex-col items-center justify-center bg-black">
        <div className="bg-black text-white px-10 py-4 flex items-center justify-between w-full container mx-auto">
          <div className="relative flex items-center gap-4 ">
            <div className="absolute w-48 h-48 rounded-full overflow-hidden border-2 border-white">
              <Image
                src="/img4.png"
                alt="Profile"
                width={192}
                height={192}
                className="object-cover absolute inset-0 w-full h-full"
              />
            </div>
            <div className="ml-[210px]">
              <h1 className="text-xl font-medium ">Komorebi Studio</h1>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Heart size={16} className="fill-current text-red-500" />
                <span>Favourited</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-sm text-gray-300">Follow Artist on Social</p>
            <div className="flex gap-3">
              <Link href="#" className="hover:text-gray-300 transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="hover:text-gray-300 transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="hover:text-gray-300 transition-colors">
                <Youtube size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Artist Profile Section */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-4">Artist Profile</h2>
        <p className="text-gray-700 leading-relaxed">
          Inspired by the rich heritage of Japan, I blend timeless motifs with
          modern flair to create vibrant, storytelling art. Each piece, from
          majestic dragons to delicate cherry blossoms, captures the essence of
          traditional themes through a contemporary lens. Join me in exploring a
          collection where each artwork is not just seen, but felt.
        </p>
      </div>

      <ProductGrid />
    </div>
  );
};

export default Shop;
