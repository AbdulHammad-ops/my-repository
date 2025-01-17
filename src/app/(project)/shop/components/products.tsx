'use client'

import Image from 'next/image'
import Link from 'next/link'

interface Product {
  id: number
  name: string
  artist: string
  price: number
  image: string
}

const products: Product[] = [
  { id: 1, name: "Product Name", artist: "Komorebi Studio", price: 0, image: "/shop/product1.png" },
  { id: 2, name: "Product Name", artist: "Komorebi Studio", price: 0, image: "/shop/product2.png" },
  { id: 3, name: "Product Name", artist: "Komorebi Studio", price: 0, image: "/shop/product3.png" },
  { id: 4, name: "Product Name", artist: "Komorebi Studio", price: 0, image: "/shop/product4.png" },
  { id: 5, name: "Product Name", artist: "Komorebi Studio", price: 0, image: "/shop/product5.png" },
  { id: 6, name: "Product Name", artist: "Komorebi Studio", price: 0, image: "/shop/product6.png" },
  { id: 7, name: "Product Name", artist: "Komorebi Studio", price: 0, image: "/shop/product7.png" },
  { id: 8, name: "Product Name", artist: "Komorebi Studio", price: 0, image: "/shop/product8.png" },
  { id: 9, name: "Product Name", artist: "Komorebi Studio", price: 0, image: "/shop/product9.png" },
  { id: 10, name: "Product Name", artist: "Komorebi Studio", price: 0, image: "/shop/product10.png" },
]

export default function ProductGrid() {
  return (
    <div className="bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <p className="text-gray-400 mb-2">Don&apos;t Miss This Week&apos;s Hottest Hits!</p>
          <h1 className="text-3xl font-bold">Komorebi Studio&apos;s designs</h1>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col">
              <div className="aspect-square bg-white rounded-lg overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 space-y-1">
                <h3 className="font-medium">{product.name}</h3>
                <p className="text-sm text-gray-400">by {product.artist}</p>
                <p className="text-sm">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

