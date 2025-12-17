"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { useState, useMemo } from "react"
import { ChevronDown, Star, Zap } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Smart Freshness Starter Kit",
    category: "Starter Kit",
    price: 12.99,
    image: "📦",
    description: "Container + 10 mixed strips",
    inStock: true,
    badge: "Popular",
  },
  {
    id: 2,
    name: "Smart Container",
    category: "Container",
    price: 9.99,
    image: "🥡",
    description: "Reusable food-safe storage",
    inStock: true,
  },
  {
    id: 3,
    name: "Meat & Fish Strips (20)",
    category: "Refill",
    price: 4.99,
    image: "🥩",
    description: "Protein freshness detection",
    inStock: true,
  },
  {
    id: 4,
    name: "Dairy Strips (20)",
    category: "Refill",
    price: 4.99,
    image: "🥛",
    description: "Milk and dairy detection",
    inStock: true,
  },
  {
    id: 5,
    name: "Fruit & Produce Strips",
    category: "Refill",
    price: 4.99,
    image: "🍎",
    description: "Coming soon",
    inStock: false,
  },
  {
    id: 6,
    name: "Containers Bundle (3-Pack)",
    category: "Bundle",
    price: 26.97,
    image: "📦",
    description: "Mix & match discount",
    inStock: true,
    badge: "Save 10%",
  },
]

const addOns = [
  {
    id: "addon-1",
    name: "Eco-Friendly Packing Materials",
    price: 3.99,
    image: "♻️",
    description: "Compostable packaging for your orders",
  },
  {
    id: "addon-2",
    name: "Smart Meal Planning Guide",
    price: 0,
    image: "📖",
    description: "Free digital guide to reduce waste",
    free: true,
  },
  {
    id: "addon-3",
    name: "Premium Drawer Organizer",
    price: 24.99,
    image: "🎯",
    description: "Keep your fridge perfectly organized",
  },
]

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, setSortBy] = useState("newest")

  const filteredAndSortedProducts = useMemo(() => {
    const result = selectedCategory === "All" ? [...products] : products.filter((p) => p.category === selectedCategory)

    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        result.sort((a, b) => b.price - a.price)
        break
      case "popular":
        break
      case "newest":
      default:
        break
    }

    return result
  }, [selectedCategory, sortBy])

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="bg-gradient-to-r from-primary to-secondary text-white py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-2xl font-bold mb-1">Save 25% with Subscriptions</h2>
            <p className="text-white/90">Never run out of fresh strips again</p>
          </div>
          <Link
            href="/subscriptions"
            className="bg-white text-primary px-6 py-2 rounded-lg font-bold hover:bg-gray-100 transition whitespace-nowrap"
          >
            View Plans
          </Link>
        </div>
      </div>

      {/* Shop Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">Shop</h1>
        <p className="text-lg text-muted">
          Smart freshness strips and reusable containers that work together as one system.
        </p>
      </section>

      {/* Filters and Sort */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3">
            {["All", "Starter Kit", "Container", "Refill", "Bundle"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full font-medium transition ${
                  selectedCategory === cat
                    ? "bg-primary text-white"
                    : "bg-primary-light text-foreground hover:bg-primary-light/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="relative w-full md:w-auto">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full md:w-48 appearance-none bg-white border border-border rounded-lg px-4 py-2 pr-10 text-foreground font-medium cursor-pointer hover:border-primary transition"
            >
              <option value="newest">Newest First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="popular">Most Popular</option>
            </select>
            <ChevronDown className="absolute right-3 top-3 pointer-events-none w-5 h-5 text-muted" />
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAndSortedProducts.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="group bg-white border border-border rounded-xl overflow-hidden hover:shadow-xl transition relative"
            >
              {product.badge && (
                <div className="absolute top-3 right-3 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                  {product.badge}
                </div>
              )}

              {/* Product Image */}
              <div
                className={`aspect-square flex items-center justify-center text-6xl ${
                  product.inStock ? "bg-gradient-to-br from-primary-light to-secondary-light" : "bg-gray-100"
                }`}
              >
                {product.image}
              </div>

              {/* Product Info */}
              <div className="p-6">
                <p className="text-xs font-bold text-primary uppercase mb-2">{product.category}</p>
                <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition">{product.name}</h3>
                <p className="text-sm text-muted mb-4">{product.description}</p>

                <div className="flex justify-between items-center">
                  <p className="text-lg font-bold text-primary">€{product.price.toFixed(2)}</p>
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      // Handle add to cart
                    }}
                    className={`px-4 py-2 rounded-lg font-medium transition ${
                      product.inStock
                        ? "bg-primary text-white hover:bg-primary-dark"
                        : "bg-gray-200 text-gray-500 cursor-not-allowed"
                    }`}
                    disabled={!product.inStock}
                  >
                    {product.inStock ? "Add" : "Coming Soon"}
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-primary-light/20 rounded-2xl mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-4 flex items-center gap-2">
          <Zap className="w-8 h-8 text-primary" />
          Enhance Your Impact
        </h2>
        <p className="text-lg text-muted mb-12 max-w-2xl">
          Upgrade your IndiContainers experience with these complementary products designed for maximum impact.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {addOns.map((addon) => (
            <div
              key={addon.id}
              className="bg-white border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all group"
            >
              <div className="aspect-square flex items-center justify-center text-6xl bg-gradient-to-br from-secondary-light to-accent/10 group-hover:scale-110 transition-transform duration-300">
                {addon.image}
              </div>
              <div className="p-6">
                <h3 className="font-bold text-foreground mb-2">{addon.name}</h3>
                <p className="text-sm text-muted mb-4">{addon.description}</p>
                <div className="flex justify-between items-center">
                  <p className="text-lg font-bold text-primary">{addon.free ? "FREE" : `€${addon.price.toFixed(2)}`}</p>
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                    }}
                    className="px-4 py-2 rounded-lg bg-secondary text-white font-medium hover:bg-secondary/90 transition"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-r from-primary-light to-secondary-light rounded-2xl mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Bundle & Save More</h2>
            <p className="text-lg text-muted mb-6">
              Get our complete system bundle with everything you need to eliminate food waste:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <Star className="w-5 h-5 text-accent fill-accent" />
                <span className="text-foreground">3x Smart Containers</span>
              </li>
              <li className="flex items-center gap-3">
                <Star className="w-5 h-5 text-accent fill-accent" />
                <span className="text-foreground">60 Mixed Freshness Strips</span>
              </li>
              <li className="flex items-center gap-3">
                <Star className="w-5 h-5 text-accent fill-accent" />
                <span className="text-foreground">Eco-Friendly Packing Materials</span>
              </li>
              <li className="flex items-center gap-3">
                <Star className="w-5 h-5 text-accent fill-accent" />
                <span className="text-foreground">Smart Meal Planning Guide</span>
              </li>
              <li className="flex items-center gap-3">
                <Star className="w-5 h-5 text-accent fill-accent" />
                <span className="text-foreground">Premium Drawer Organizer</span>
              </li>
              <li className="flex items-center gap-3">
                <Star className="w-5 h-5 text-accent fill-accent" />
                <span className="text-foreground">Free shipping + 25% off subscriptions</span>
              </li>
            </ul>
            <div className="flex gap-4">
              <button className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-primary-dark transition">
                Save 30% - €89.99
              </button>
              <Link
                href="/subscriptions"
                className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-bold hover:bg-primary-light transition"
              >
                Or Subscribe
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-xl p-12 flex items-center justify-center">
            <span className="text-8xl">📦✨</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
