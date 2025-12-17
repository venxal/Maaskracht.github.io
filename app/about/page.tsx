"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">About IndiContainers</h1>
        <p className="text-lg text-muted max-w-2xl">
          We're on a mission to reduce food waste, save families money, and make food safety simple and intuitive.
        </p>
      </section>

      {/* Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Our Story</h2>
            <p className="text-muted leading-relaxed">
              IndiContainers was founded by a team of food scientists and engineers frustrated by the amount of
              perfectly good food being thrown away. We noticed that most households throw away 20-30% of their
              purchases due to confusion about freshness dates.
            </p>
            <p className="text-muted leading-relaxed">
              After years of research and testing, we developed our color-changing freshness strips – a simple, reliable
              way to know exactly when food is still safe to eat, when to use it soon, and when it's time to discard it.
            </p>
            <p className="text-muted leading-relaxed">
              Today, thousands of families across Europe are using IndiContainers to eat safer, waste less, and save
              money every single day.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary-light to-secondary-light rounded-2xl aspect-square flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🌱</div>
              <p className="text-foreground font-bold text-lg">Growing Since 2015</p>
              <p className="text-sm text-muted">Trusted by thousands</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-primary-light/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Mission & Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-border">
              <CheckCircle className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Sustainability</h3>
              <p className="text-muted">
                We believe reducing food waste is one of the most impactful ways individuals can help the environment.
                Every meal saved is progress.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-border">
              <CheckCircle className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Transparency</h3>
              <p className="text-muted">
                We're honest about how our product works. No hidden features, no apps, no subscriptions – just clear
                color changes you can trust.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-border">
              <CheckCircle className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Safety</h3>
              <p className="text-muted">
                Your family's safety is paramount. All our products meet strict EU food safety standards and are
                independently tested.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Impact</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center bg-primary-light/20 rounded-xl p-8">
            <p className="text-4xl font-bold text-primary mb-2">250K+</p>
            <p className="text-foreground font-medium">Meals Saved</p>
            <p className="text-sm text-muted">From the trash</p>
          </div>

          <div className="text-center bg-primary-light/20 rounded-xl p-8">
            <p className="text-4xl font-bold text-primary mb-2">50K+</p>
            <p className="text-foreground font-medium">Families Helped</p>
            <p className="text-sm text-muted">Across Europe</p>
          </div>

          <div className="text-center bg-primary-light/20 rounded-xl p-8">
            <p className="text-4xl font-bold text-primary mb-2">2.5M€</p>
            <p className="text-foreground font-medium">Money Saved</p>
            <p className="text-sm text-muted">By our community</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-foreground text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Leadership Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-primary mx-auto mb-4 flex items-center justify-center text-2xl">
                👨‍🔬
              </div>
              <h3 className="text-xl font-bold mb-1">Dr. Marco Rossi</h3>
              <p className="text-sm text-gray-400 mb-3">Founder & Food Science Lead</p>
              <p className="text-gray-300 text-sm">
                Ph.D. in Food Chemistry with 15+ years in food preservation technology.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-primary mx-auto mb-4 flex items-center justify-center text-2xl">
                👩‍💼
              </div>
              <h3 className="text-xl font-bold mb-1">Elena Hoffman</h3>
              <p className="text-sm text-gray-400 mb-3">Co-Founder & CEO</p>
              <p className="text-gray-300 text-sm">
                Serial entrepreneur with a passion for sustainable consumer products.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-primary mx-auto mb-4 flex items-center justify-center text-2xl">
                👨‍💻
              </div>
              <h3 className="text-xl font-bold mb-1">Alex Chen</h3>
              <p className="text-sm text-gray-400 mb-3">CTO & Product Lead</p>
              <p className="text-gray-300 text-sm">
                Design and engineering expert focused on elegant, user-friendly solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join the Movement</h2>
          <p className="text-lg mb-8 text-white/90">
            Be part of a community that's reducing waste and making a real difference.
          </p>
          <Link
            href="/shop"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
          >
            Get Started Today
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
