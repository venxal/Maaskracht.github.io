"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { useState } from "react"

export default function HowItWorks() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">How IndiContainers Works</h1>
        <p className="text-lg text-muted max-w-2xl">
          A simple, proven system to help you know when your food is fresh, when to use it soon, and when to throw it
          away.
        </p>
      </section>

      {/* Three Steps Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Step 1 */}
          <div
            className="text-center cursor-pointer transition-transform hover:scale-105"
            onClick={() => setExpandedStep(expandedStep === 1 ? null : 1)}
          >
            <div className="w-24 h-24 rounded-full bg-primary-light flex items-center justify-center mx-auto mb-8 text-3xl font-bold text-primary">
              1
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Insert the Strip</h2>
            <p className="text-muted leading-relaxed">
              Pop a freshness strip into the slot in your container lid. It takes just 5 seconds and the strip sits
              safely inside your container.
            </p>
          </div>

          {/* Step 2 */}
          <div
            className="text-center cursor-pointer transition-transform hover:scale-105"
            onClick={() => setExpandedStep(expandedStep === 2 ? null : 2)}
          >
            <div className="w-24 h-24 rounded-full bg-secondary-light flex items-center justify-center mx-auto mb-8 text-3xl font-bold text-secondary">
              2
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Store Your Food</h2>
            <p className="text-muted leading-relaxed">
              Place your food in the container and seal the lid. Store it in your refrigerator as you normally would.
              The strip works silently in the background.
            </p>
          </div>

          {/* Step 3 - With Circle Highlight */}
          <div
            className="text-center relative cursor-pointer transition-transform hover:scale-105"
            onClick={() => setExpandedStep(expandedStep === 3 ? null : 3)}
          >
            <div className="absolute inset-0 rounded-3xl border-4 border-primary/30 -m-4 animate-pulse"></div>
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-8 text-4xl font-bold text-accent">
                3
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Check the Color</h2>
              <p className="text-muted leading-relaxed">
                In a few days, simply check the strip's color. The change is clear and easy to read – no guessing, no
                confusion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Color Change Legend */}
      <section className="bg-gradient-to-br from-primary-light/30 via-white to-secondary-light/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Understanding the Color Change</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Fresh - Blue Circle */}
            <div className="bg-white rounded-2xl p-8 border border-border shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary-light border-4 border-primary shadow-lg flex items-center justify-center">
                  <span className="text-2xl">✓</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3 text-center">Fresh</h3>
              <p className="text-muted text-center text-base">Safe to eat</p>
            </div>

            {/* Do Not Eat - Red Circle */}
            <div className="bg-white rounded-2xl p-8 border border-border shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-500 to-red-600 border-4 border-red-600 shadow-lg flex items-center justify-center">
                  <span className="text-2xl text-white">✕</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3 text-center">Do Not Eat</h3>
              <p className="text-muted text-center text-base">Time to discard</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Why It Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">Science-Backed Precision</h3>
              <p className="text-muted">
                Our freshness strips use biologically-sensitive indicators that react to the specific ethylene and
                ammonia gases produced during food degradation. This is the same technology used by professional food
                manufacturers and restaurants.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">Works with All Foods</h3>
              <p className="text-muted">
                Different food types have specific indicator strips formulated for proteins, dairy, produce, and more.
                Each strip is calibrated to respond accurately to the spoilage markers of its category.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">EU Food Safety Standards</h3>
              <p className="text-muted">
                All IndiContainers products are manufactured to meet the strictest European food safety regulations and
                have been independently tested for food contact safety.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary-light to-secondary-light rounded-2xl aspect-square flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🔬</div>
              <p className="text-foreground font-bold text-lg">Proven Technology</p>
              <p className="text-sm text-muted">Since 2015</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Using IndiContainers?</h2>
          <p className="text-lg mb-8 text-white/90">
            Get your starter kit today and see the difference in your kitchen.
          </p>
          <Link
            href="/shop"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
          >
            Shop Now
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
