"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { TrendingDown, Leaf, DollarSign, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function Calculator() {
  const [familySize, setFamilySize] = useState(4)
  const [useIndicontainers, setUseIndicontainers] = useState(false)

  const estimatedWeeklyWaste = familySize * 1.2

  const wasteReductionRate = useIndicontainers ? 0.6 : 0.4
  const wastePreventedAnnually = estimatedWeeklyWaste * 52 * wasteReductionRate

  const co2Saved = wastePreventedAnnually * 2.5
  const waterSaved = wastePreventedAnnually * 500
  const monthlySavings = (wastePreventedAnnually / 12) * 4.5

  const wasteWithout = useIndicontainers ? (wastePreventedAnnually / 0.6) * 0.4 : wastePreventedAnnually
  const wasteWith = wastePreventedAnnually
  const wasteDifference = wasteWithout - wasteWith

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-5xl font-bold text-foreground mb-4">Calculate Your Impact</h1>
          <p className="text-xl text-muted">
            See how much food waste, water, and money you can save with IndiContainers.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="bg-gradient-to-br from-primary-light/50 to-secondary-light/50 rounded-2xl p-8 md:p-12 mb-12 border border-primary-light">
          <div className="space-y-8">
            {/* Family Size Slider */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <label className="text-lg font-bold text-foreground">Family Size</label>
                <span className="text-4xl font-bold text-primary">{familySize}</span>
              </div>
              <input
                type="range"
                min="1"
                max="8"
                value={familySize}
                onChange={(e) => setFamilySize(Number.parseInt(e.target.value))}
                className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-sm text-muted mt-2">
                <span>1 person</span>
                <span>8+ people</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-border">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-muted mb-1">Based on EU averages, your family wastes:</p>
                  <p className="text-3xl font-bold text-foreground">
                    {estimatedWeeklyWaste.toFixed(1)} kg <span className="text-lg text-muted">per week</span>
                  </p>
                  <p className="text-sm text-muted mt-2">({(estimatedWeeklyWaste * 52).toFixed(0)} kg per year)</p>
                </div>
                <AlertCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-lg font-bold text-foreground block">Your Solution:</label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setUseIndicontainers(false)}
                  className={`p-6 rounded-xl border-2 transition-all ${
                    !useIndicontainers ? "border-primary bg-primary/5" : "border-border hover:border-primary/30"
                  }`}
                >
                  <p className="font-bold text-foreground mb-2">Strips Only</p>
                  <p className="text-2xl font-bold text-primary mb-2">40%</p>
                  <p className="text-xs text-muted">waste reduction</p>
                </button>
                <button
                  onClick={() => setUseIndicontainers(true)}
                  className={`p-6 rounded-xl border-2 transition-all relative ${
                    useIndicontainers ? "border-secondary bg-secondary/5" : "border-border hover:border-secondary/30"
                  }`}
                >
                  <span className="absolute top-2 right-2 bg-accent text-white text-xs font-bold px-2 py-1 rounded">
                    Best Value
                  </span>
                  <p className="font-bold text-foreground mb-2">SmartContainers</p>
                  <p className="text-2xl font-bold text-secondary mb-2">60%</p>
                  <p className="text-xs text-muted">waste reduction</p>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Annual Waste Prevented */}
          <div className="bg-white border-2 border-primary rounded-2xl p-6 hover:shadow-lg transition">
            <div className="flex items-center gap-2 mb-3">
              <TrendingDown className="w-6 h-6 text-primary" />
              <h3 className="font-bold text-foreground text-sm">Waste Prevented</h3>
            </div>
            <p className="text-4xl font-bold text-primary mb-2">
              {wastePreventedAnnually.toFixed(1)}
              <span className="text-lg">kg</span>
            </p>
            <p className="text-xs text-muted">per year</p>
          </div>

          {/* CO2 Emissions Saved */}
          <div className="bg-white border-2 border-secondary rounded-2xl p-6 hover:shadow-lg transition">
            <div className="flex items-center gap-2 mb-3">
              <Leaf className="w-6 h-6 text-secondary" />
              <h3 className="font-bold text-foreground text-sm">CO₂ Saved</h3>
            </div>
            <p className="text-4xl font-bold text-secondary mb-2">
              {co2Saved.toFixed(0)}
              <span className="text-lg">kg</span>
            </p>
            <p className="text-xs text-muted">{(co2Saved * 5).toFixed(0)} km driven</p>
          </div>

          {/* Water Saved */}
          <div className="bg-white border-2 border-accent rounded-2xl p-6 hover:shadow-lg transition">
            <div className="flex items-center gap-2 mb-3">
              <Leaf className="w-6 h-6 text-accent" />
              <h3 className="font-bold text-foreground text-sm">Water Saved</h3>
            </div>
            <p className="text-4xl font-bold text-accent mb-2">
              {(waterSaved / 1000).toFixed(0)}
              <span className="text-lg">k L</span>
            </p>
            <p className="text-xs text-muted">liters annually</p>
          </div>

          {/* Money Saved */}
          <div className="bg-white border-2 border-primary-dark rounded-2xl p-6 hover:shadow-lg transition">
            <div className="flex items-center gap-2 mb-3">
              <DollarSign className="w-6 h-6 text-primary-dark" />
              <h3 className="font-bold text-foreground text-sm">Money Saved</h3>
            </div>
            <p className="text-4xl font-bold text-primary-dark mb-2">
              €{monthlySavings.toFixed(0)}
              <span className="text-lg">/mo</span>
            </p>
            <p className="text-xs text-muted">€{(monthlySavings * 12).toFixed(0)}/year</p>
          </div>
        </div>

        {useIndicontainers && (
          <div className="bg-gradient-to-r from-primary-light to-secondary-light rounded-2xl p-8 md:p-12 mb-12 border border-primary-light">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Why SmartContainers Win</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <p className="text-sm text-muted mb-2">Additional Waste Prevented</p>
                <p className="text-4xl font-bold text-primary">
                  {wasteDifference.toFixed(1)}
                  <span className="text-lg">kg</span>
                </p>
                <p className="text-xs text-muted mt-2">vs strips only</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted mb-2">Better Organization</p>
                <p className="text-3xl font-bold text-secondary">+20%</p>
                <p className="text-xs text-muted mt-2">visibility improvement</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted mb-2">Lasts Years</p>
                <p className="text-3xl font-bold text-accent">1000+</p>
                <p className="text-xs text-muted mt-2">uses per container</p>
              </div>
            </div>
          </div>
        )}

        {/* Why It Works Section */}
        <div className="bg-white border-2 border-border rounded-2xl p-8 md:p-12 mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">How We Achieve This</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                  1
                </span>
                Early Detection
              </h3>
              <p className="text-muted text-sm">Our strips detect spoilage 2-3 days before visible signs appear.</p>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                  2
                </span>
                Smart Organization
              </h3>
              <p className="text-muted text-sm">
                Containers keep food visible, making it easy to use items before expiry.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                  3
                </span>
                Habit Change
              </h3>
              <p className="text-muted text-sm">Visual freshness info helps you meal plan better and reduce waste.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary to-secondary text-white rounded-2xl p-12">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Saving?</h3>
          <p className="text-lg mb-8 text-white/90">
            Based on your family size, you could save {wastePreventedAnnually.toFixed(0)} kg of food waste annually.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/shop"
              className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg inline-block"
            >
              Shop Now
            </Link>
            <Link
              href="/sustainability"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition inline-block"
            >
              Learn More About Impact
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
