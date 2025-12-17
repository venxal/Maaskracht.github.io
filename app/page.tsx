"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { CheckCircle, Leaf, Lock, Zap, ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              See Your Food's Freshness at a Glance
            </h1>
            <p className="text-lg text-muted mb-8 leading-relaxed">
              Smart freshness strips that change color as food spoils – so you can save money, eat safer, and stop
              wasting food.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/shop"
                className="bg-primary text-white px-8 py-4 rounded-lg font-medium hover:bg-primary-dark hover:shadow-lg transition flex items-center justify-center gap-2"
              >
                Shop Starter Kits
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/how-it-works"
                className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-medium hover:bg-primary-light hover:shadow-lg transition text-center"
              >
                How It Works
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div
            className={`bg-gradient-to-br from-primary-light via-secondary-light to-primary-light/50 rounded-2xl p-12 aspect-square flex items-center justify-center transition-all duration-1000 ${isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
          >
            <div className="text-center">
              <div className="w-24 h-32 bg-white rounded-lg shadow-2xl mx-auto mb-6 flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                <span className="text-5xl">🥗</span>
              </div>
              <p className="text-foreground font-bold text-lg">Smart Container</p>
              <p className="text-sm text-muted">with Freshness Strip</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-primary-light/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Why This Matters</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Date Label Confusion",
                description:
                  '"Use by," "best before," "sell by" – they all mean something different. Most of us can\'t remember which is which, so we throw away food that\'s still perfectly good.',
              },
              {
                title: "The Sniff Test Isn't Enough",
                description:
                  "Some harmful bacteria don't produce off-smells. You could be eating food that's unsafe without knowing it, or throwing away food that's actually fine.",
              },
              {
                title: "The Result: Guessing",
                description:
                  "Is that chicken still good? Should I throw out the milk? These decisions happen dozens of times a week – and most of us get it wrong.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <h3 className="text-xl font-bold text-foreground mb-4">{item.title}</h3>
                <p className="text-muted leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-foreground text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Why You'll Love IndiContainers</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: CheckCircle, title: "Save Money", desc: "Stop throwing away food you could have eaten." },
              { icon: Lock, title: "Eat Safer", desc: "Know that your food is safe before you eat it." },
              { icon: Leaf, title: "Reduce Waste", desc: "Help the planet while helping your wallet." },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 group cursor-pointer">
                <div className="flex-shrink-0">
                  <item.icon className="w-8 h-8 text-primary group-hover:scale-125 transition-transform duration-300" />
                </div>
                <div>
                  <h3 className="font-bold mb-2 text-lg">{item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {[
              { icon: Zap, title: "No Apps or Gadgets", desc: "Just a simple color change. No batteries, no tech." },
              {
                icon: CheckCircle,
                title: "EU Food Safety Standards",
                desc: "Designed with the strictest food regulations in mind.",
              },
              {
                icon: Leaf,
                title: "Reusable & Eco-Friendly",
                desc: "Your containers last for years. Strips are recyclable.",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 group cursor-pointer">
                <div className="flex-shrink-0">
                  <item.icon className="w-8 h-8 text-primary group-hover:scale-125 transition-transform duration-300" />
                </div>
                <div>
                  <h3 className="font-bold mb-2 text-lg">{item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-foreground mb-4 text-center">Our Products</h2>
        <p className="text-center text-muted mb-12 max-w-2xl mx-auto">
          Simple, affordable solutions for keeping your food fresh and your family safe.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Product Card 1 */}
          <div className="bg-white border border-border rounded-xl overflow-hidden hover:shadow-xl hover:border-primary transition-all duration-300 group">
            <div className="bg-gradient-to-br from-primary-light to-secondary-light aspect-square flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <span className="text-6xl">📦</span>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-foreground mb-2">Starter Kit</h3>
              <p className="text-sm text-muted mb-4">Container + 10 mixed strips</p>
              <p className="text-lg font-bold text-primary mb-4">€12,99</p>
              <button className="w-full bg-primary text-white py-2 rounded-lg font-medium hover:bg-primary-dark transition">
                Add to Cart
              </button>
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="bg-white border border-border rounded-xl overflow-hidden hover:shadow-xl hover:border-primary transition-all duration-300 group">
            <div className="bg-gradient-to-br from-secondary-light to-primary-light aspect-square flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <span className="text-6xl">🥡</span>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-foreground mb-2">Smart Container</h3>
              <p className="text-sm text-muted mb-4">Reusable storage box</p>
              <p className="text-lg font-bold text-primary mb-4">€9,99</p>
              <button className="w-full bg-primary text-white py-2 rounded-lg font-medium hover:bg-primary-dark transition">
                Add to Cart
              </button>
            </div>
          </div>

          {/* Product Card 3 */}
          <div className="bg-white border border-border rounded-xl overflow-hidden hover:shadow-xl hover:border-primary transition-all duration-300 group">
            <div className="bg-gradient-to-br from-accent/20 to-primary-light aspect-square flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <span className="text-6xl">🥩</span>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-foreground mb-2">Meat & Fish Strips</h3>
              <p className="text-sm text-muted mb-4">20 indicator strips</p>
              <p className="text-lg font-bold text-primary mb-4">€4,99</p>
              <button className="w-full bg-primary text-white py-2 rounded-lg font-medium hover:bg-primary-dark transition">
                Add to Cart
              </button>
            </div>
          </div>

          {/* Product Card 4 */}
          <div className="bg-white border border-border rounded-xl overflow-hidden hover:shadow-xl hover:border-primary transition-all duration-300 group">
            <div className="bg-gradient-to-br from-primary-light to-accent/20 aspect-square flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <span className="text-6xl">🥛</span>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-foreground mb-2">Dairy Strips</h3>
              <p className="text-sm text-muted mb-4">20 indicator strips</p>
              <p className="text-lg font-bold text-primary mb-4">€4,99</p>
              <button className="w-full bg-primary text-white py-2 rounded-lg font-medium hover:bg-primary-dark transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 bg-foreground text-white px-8 py-3 rounded-lg font-medium hover:bg-foreground/90 hover:shadow-lg transition"
          >
            View All Products
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Save Food, Money & Peace of Mind?</h2>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Join thousands of eco-conscious families who are eating safer and wasting less.
          </p>
          <Link
            href="/shop"
            className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-gray-100 hover:shadow-lg transition"
          >
            Get Your Starter Kit Today
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
