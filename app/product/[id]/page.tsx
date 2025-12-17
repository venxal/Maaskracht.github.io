"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Star, Truck, Shield, RotateCcw } from "lucide-react"
import { useState } from "react"

const productDatabase: Record<string, any> = {
  "1": {
    name: "Smart Freshness Starter Kit",
    price: 12.99,
    rating: 4.8,
    reviews: 127,
    image: "📦",
    category: "Starter Kit",
    stock: 45,
    description:
      "Everything you need to keep your fridge organized and your food fresh. Perfect entry point into the IndiContainers ecosystem.",
    includes: [
      "1 × Smart Food-Safe Container",
      "1 × Custom Lid with Indicator Strip Slot",
      "5 × Meat & Fish Freshness Strips",
      "5 × Dairy Freshness Strips",
      "1 × Quick-Start Guide",
    ],
    benefits: [
      "All-in-one system – no need to buy pieces separately",
      "Includes mixed strips for a variety of foods",
      "Start seeing results immediately",
      "Save money by reducing food waste from day one",
      "Great gift for eco-conscious friends and family",
    ],
    specifications: {
      capacity: "~1.5 liters",
      dimensions: "12 × 25 cm",
      material: "BPA-free, food-grade plastic",
      certification: "EU food contact compliant",
    },
  },
  "2": {
    name: "Smart Container",
    price: 9.99,
    rating: 4.7,
    reviews: 89,
    image: "🥡",
    category: "Container",
    stock: 78,
    description: "Durable, reusable food-safe storage container designed to work with IndiContainers freshness strips.",
    includes: ["1 × BPA-free Food-Safe Container", "1 × Custom Lid with Indicator Strip Slot", "1 × Quick Start Guide"],
    benefits: [
      "Replaces single-use plastic containers",
      "Compatible with all freshness strips",
      "Transparent sides for easy visibility",
      "Stackable design to save fridge space",
      "Durable and built to last years",
    ],
    specifications: {
      capacity: "~1.5 liters",
      dimensions: "12 × 25 cm",
      material: "BPA-free, food-grade polypropylene",
      certification: "EU food contact compliant",
    },
  },
  "3": {
    name: "Meat & Fish Strips (20)",
    price: 4.99,
    rating: 4.9,
    reviews: 156,
    image: "🥩",
    category: "Refill",
    stock: 120,
    description: "Precision-engineered freshness indicators designed specifically for proteins, meat, and fish.",
    includes: ["20 × Meat & Fish Freshness Strips", "1 × Measurement Guide", "1 × Storage Instructions"],
    benefits: [
      "Detects spoilage in proteins 2–3 days before smell detection",
      "Works for all meat types, poultry, and seafood",
      "Lasts 10–14 days in refrigerated storage",
      "Non-toxic, food-safe indicator compounds",
      "EU and FSSC certified",
    ],
    specifications: {
      quantity: "20 strips per pack",
      effectiveness: "10-14 days in refrigeration",
      temperature: "Optimal at 2-4°C",
      indicator: "Color change from blue to pink/red",
    },
  },
  "4": {
    name: "Dairy Strips (20)",
    price: 4.99,
    rating: 4.8,
    reviews: 134,
    image: "🥛",
    category: "Refill",
    stock: 95,
    description: "Specialized freshness strips formulated for milk, yogurt, cheese, and other dairy products.",
    includes: ["20 × Dairy Freshness Strips", "1 × Measurement Guide", "1 × Storage Instructions"],
    benefits: [
      "Designed for dairy-specific bacterial patterns",
      "Detects spoilage earlier than expiration dates",
      "Works for milk, yogurt, cheese, and butter",
      "Lasts 7–10 days in standard refrigeration",
      "Safe for all dairy containers",
    ],
    specifications: {
      quantity: "20 strips per pack",
      effectiveness: "7-10 days in refrigeration",
      temperature: "Optimal at 2-4°C",
      indicator: "Color change from light to dark blue",
    },
  },
  "5": {
    name: "Fruit & Produce Strips",
    price: 4.99,
    rating: 0,
    reviews: 0,
    image: "🍎",
    category: "Refill",
    stock: 0,
    description: "Coming soon! Monitor freshness for fruits, vegetables, and other produce items.",
    includes: ["Fruit & Produce Freshness Strips (Coming Q2 2025)"],
    benefits: [
      "Perfect for fruits, vegetables, and berries",
      "Detect ripeness and spoilage stages",
      "Reduce produce waste significantly",
      "Easy storage recommendations",
      "Supports sustainable eating",
    ],
    specifications: {
      quantity: "Coming soon",
      effectiveness: "To be announced",
      temperature: "To be announced",
      indicator: "To be announced",
    },
  },
  "6": {
    name: "Containers Bundle (3-Pack)",
    price: 26.97,
    rating: 4.9,
    reviews: 98,
    image: "📦",
    category: "Bundle",
    stock: 56,
    description: "Save 10% with our 3-pack bundle. Perfect for families or those who want complete kitchen coverage.",
    includes: [
      "3 × BPA-free Food-Safe Containers",
      "3 × Custom Lids with Indicator Strip Slots",
      "1 × Bundle Organization Guide",
    ],
    benefits: [
      "10% savings compared to individual purchases",
      "Cover your entire fridge organization",
      "One for meat, one for dairy, one for extras",
      "Great for meal prep and batch cooking",
      "Family-friendly kitchen system",
    ],
    specifications: {
      quantity: "3 containers per bundle",
      capacity: "~1.5 liters each",
      dimensions: "12 × 25 cm each",
      savings: "€0.30 total discount",
    },
  },
}

export default function ProductDetail({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1)

  const product = productDatabase[params.id]

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Product not found</h1>
          <p className="text-muted mb-8">The product you're looking for doesn't exist.</p>
          <a
            href="/shop"
            className="bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary-dark transition inline-block"
          >
            Back to Shop
          </a>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="bg-gradient-to-br from-primary-light to-secondary-light rounded-2xl aspect-square flex items-center justify-center">
            <span className="text-9xl">{product.image}</span>
          </div>

          {/* Product Info */}
          <div>
            <p className="text-sm font-bold text-primary uppercase mb-2">{product.category}</p>
            <h1 className="text-4xl font-bold text-foreground mb-4">{product.name}</h1>

            {/* Rating */}
            {product.reviews > 0 && (
              <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-gray-300"}
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-muted">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            )}

            {/* Price */}
            <p className="text-4xl font-bold text-primary mb-6">€{product.price.toFixed(2)}</p>

            <p className="text-lg text-muted mb-6">{product.description}</p>

            {/* Stock Status */}
            <p className="text-sm font-medium text-primary mb-6">
              {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
            </p>

            {/* Quantity and Add to Cart */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center border border-border rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 text-foreground hover:bg-primary-light transition"
                >
                  −
                </button>
                <span className="px-4 py-2 font-medium text-foreground">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 text-foreground hover:bg-primary-light transition"
                >
                  +
                </button>
              </div>
              <button
                disabled={product.stock === 0}
                className="flex-1 bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary-dark transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 py-6 border-t border-b border-border">
              <div className="flex flex-col items-center gap-2">
                <Truck className="w-6 h-6 text-primary" />
                <span className="text-xs font-medium text-center text-foreground">Free shipping over €50</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Shield className="w-6 h-6 text-primary" />
                <span className="text-xs font-medium text-center text-foreground">EU food safe certified</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <RotateCcw className="w-6 h-6 text-primary" />
                <span className="text-xs font-medium text-center text-foreground">30-day returns</span>
              </div>
            </div>

            {/* What's Included */}
            <div className="mt-8">
              <h3 className="font-bold text-foreground mb-4">What's Included</h3>
              <ul className="space-y-3">
                {product.includes.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span className="text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Benefits and Specs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 pt-12 border-t border-border">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Benefits</h2>
            <ul className="space-y-3">
              {product.benefits.map((benefit: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg mt-0.5">•</span>
                  <span className="text-muted">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Specifications</h2>
            <dl className="space-y-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between">
                  <dt className="font-medium text-foreground capitalize">{key.replace(/([A-Z])/g, " $1").trim()}</dt>
                  <dd className="text-muted">{value as string}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16 pt-12 border-t border-border max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="group border border-border rounded-lg p-6 cursor-pointer">
              <summary className="font-bold text-foreground group-open:text-primary transition">
                How do I use the strips?
              </summary>
              <p className="text-muted mt-4">
                Simply insert a strip into the indicator slot on your container lid. Choose Meat/Fish strips for
                proteins or Dairy strips for milk-based products. The strip will monitor freshness for 10–14 days in
                refrigerated storage.
              </p>
            </details>

            <details className="group border border-border rounded-lg p-6 cursor-pointer">
              <summary className="font-bold text-foreground group-open:text-primary transition">
                Can I reuse the strips?
              </summary>
              <p className="text-muted mt-4">
                No. Once a strip has changed color, it cannot be reset or reused. Discard it and use a fresh strip for
                new food. Each pack includes 20 refill strips.
              </p>
            </details>

            <details className="group border border-border rounded-lg p-6 cursor-pointer">
              <summary className="font-bold text-foreground group-open:text-primary transition">
                Is this safe for children?
              </summary>
              <p className="text-muted mt-4">
                The strip is made from non-toxic, food-safe materials. However, it is not meant to be eaten and should
                be kept away from young children as a precaution.
              </p>
            </details>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
