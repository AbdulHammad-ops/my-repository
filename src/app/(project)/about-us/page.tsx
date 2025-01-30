import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutUs() {
  return (
    <div className="bg-gradient-to-b from-white via-neutral-50 to-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="mb-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 rounded-3xl" />
          <div className="relative backdrop-blur-sm bg-white/30 rounded-3xl p-12 shadow-xl">
            <h1 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              D.ai.Y
            </h1>
            <h2 className="text-2xl text-center mb-8 text-gray-700">Create with AI, Craft Your World</h2>
            <div className="max-w-4xl mx-auto space-y-4">
              <p className="text-lg text-gray-700 text-center leading-relaxed">
                D.ai.Y is an innovative design marketplace that features unique AI-generated art across a diverse range
                of products from apparel to home decor.
              </p>
              <p className="text-lg text-gray-700 text-center leading-relaxed">
                We push the boundaries of art with the power of AI, uniting digital artists from around the world to
                turn their imaginations into reality, providing our customers unique and exclusive designs to reflect
                their personal style and creativity.
              </p>
            </div>
          </div>
        </div>

        {/* Product Showcase Section */}
        <div className="mb-20 relative overflow-hidden rounded-3xl shadow-2xl">
          <Image
            src="/about us page-Product-types-banner.jpg"
            alt="Product Types Banner"
            width={1200}
            height={600}
            className="w-full h-auto"
          />
          <div className="absolute top-1/2 right-12 -translate-y-1/2 text-right">
          <h2
          className="text-6xl font-light italic text-white mb-4"
          style={{
            fontFamily: "'Dancing Script', cursive",
            textShadow: `
              0 0 3px rgba(255,255,255,0.4),
              0 0 6px rgba(255,255,255,0.3),
              0 0 8px rgba(255,255,255,0.2)
            `,
            letterSpacing: "0.02em",
          }}
        >
          Style Your World
        </h2>
            <p className="text-xl text-white mb-6 [text-shadow:_1px_1px_2px_rgb(0_0_0_/_40%)]">
              Personalize your gear, make it yours
            </p>
            <Link href="/editor">
              <Button className="bg-[#00BFB3] hover:bg-[#00a69b] text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                Customize your design
              </Button>
            </Link>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-gradient-to-br from-white to-neutral-50 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="mb-6">
              <span className="inline-block bg-teal-100 text-teal-800 text-sm font-semibold px-4 py-2 rounded-full mb-4">
                Our Mission
              </span>
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Empowering Creative Expression</h2>
            </div>
            <div className="space-y-4">
              <p className="text-lg text-gray-600 leading-relaxed">
                Empowering individuals to express their unique style by exploring new frontiers of art.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our mission is to empower artists and art lovers by providing a powerful platform where they can create,
                showcase, and enjoy art in a way that's never been possible before. We envision a world where anyone can
                express themselves through unique, personalized products, making art an integral part of everyday life.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white to-neutral-50 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="mb-6">
              <span className="inline-block bg-cyan-100 text-cyan-800 text-sm font-semibold px-4 py-2 rounded-full mb-4">
                Our Vision
              </span>
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Redefining Personalization</h2>
            </div>
            <div className="space-y-4">
              <p className="text-lg text-gray-600 leading-relaxed">Redefining Personalization Through Community</p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We envision a world where personal style and technology seamlessly integrate, making customized products
                accessible to everyone. Our goal is to foster a thriving community where artists and customers can
                connect, collaborate, and bring unique visions to life.
              </p>
            </div>
          </div>
        </div>

        {/* Artists Section */}
        <div className="relative backdrop-blur-sm bg-white/30 rounded-3xl p-12 shadow-xl">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Our Artists</h2>
            <p className="text-xl text-gray-700 mb-4">Showcasing Talent, Celebrating Diversity</p>
            <p className="text-lg text-gray-600 leading-relaxed">
              D.ai.Y is proud to host a diverse community of talented artists from around the world. These creatives are
              the heartbeat of our platform, bringing a rich variety of artistic visions to our extensive product range.
              Through D.ai.Y, artists have the opportunity to showcase their work on a global stage, reaching new
              audiences and inspiring customers to explore the new era of art.
            </p>
          </div>
          <Image
            src="/About-us-page-various-products-banner.png"
            alt="Various Products Banner"
            width={1200}
            height={600}
            className="w-4/5 h-auto rounded-2xl shadow-2xl mx-auto"
          />
        </div>
      </div>
    </div>
  )
}

