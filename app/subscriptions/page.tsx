"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { CheckCircle, Zap } from "lucide-react"

const subscriptionPlans = [
  {
    name: "Starter",
    price: 9.99,
    interval: "month",
    description: "Perfect for individuals or couples",
    features: [
      "1 SmartContainer per month",
      "25 mixed freshness strips",
      "Free shipping",
      "Email support",
      "Sustainability insights",
    ],
    bestFor: "Couples & Singles",
    cta: "Start Subscription",
  },
  {
    name: "Family",
    price: 24.99,
    interval: "month",
    description: "Most popular for families of 4",
    features: [
      "3 SmartContainers per month",
      "75 mixed freshness strips",
      "Priority free shipping",
      "Priority email support",
      "Advanced impact tracking",
      "15% off add-ons",
      "Quarterly bonuses",
    ],
    bestFor: "Families",
    featured: true,
    cta: "Start Subscription",
  },
  {
    name: "Pro",
    price: 44.99,
    interval: "month",
    description: "For large families & small businesses",
    features: [
      "6 SmartContainers per month",
      "200 mixed freshness strips",
      "Same-day shipping",
      "24/7 phone & email support",
      "Advanced impact analytics",
      "25% off add-ons",
      "Early access to new products",
      "Dedicated account manager",
    ],
    bestFor: "Large Families & B2B",
    cta: "Start Subscription",
  },
]

export default function Subscriptions() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-4">Never Run Out Again</h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Subscribe to get fresh strips and containers delivered monthly. Cancel anytime.
          </p>
        </div>

        {/* Subscription Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {subscriptionPlans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-2xl border-2 overflow-hidden transition-all hover:shadow-xl ${
                plan.featured
                  ? "border-primary bg-gradient-to-br from-primary-light to-white transform md:scale-105 md:z-10"
                  : "border-border hover:border-primary"
              }`}
            >
              {plan.featured && (
                <div className="bg-primary text-white py-2 text-center font-bold text-sm">MOST POPULAR</div>
              )}
              <div className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h2>
                <p className="text-sm text-muted mb-6">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-primary">€{plan.price}</span>
                  <span className="text-muted">/{plan.interval}</span>
                </div>

                <button
                  className={`w-full py-3 rounded-lg font-bold transition mb-8 ${
                    plan.featured
                      ? "bg-primary text-white hover:bg-primary-dark"
                      : "border-2 border-primary text-primary hover:bg-primary-light"
                  }`}
                >
                  {plan.cta}
                </button>

                <div className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted">{feature}</span>
                    </div>
                  ))}
                </div>

                <p className="text-xs text-muted mt-6 pt-6 border-t text-center">Best for {plan.bestFor}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Why Subscribe Section */}
        <div className="bg-primary-light/30 rounded-2xl p-12 mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Why Subscribers Love Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Zap className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-foreground mb-2">Never Waste Worry</h3>
              <p className="text-sm text-muted">Fresh supplies delivered on your schedule.</p>
            </div>
            <div className="text-center">
              <CheckCircle className="w-10 h-10 text-secondary mx-auto mb-4" />
              <h3 className="font-bold text-foreground mb-2">Save 25%</h3>
              <p className="text-sm text-muted">Subscriptions cost 25% less than monthly purchases.</p>
            </div>
            <div className="text-center">
              <Zap className="w-10 h-10 text-accent mx-auto mb-4" />
              <h3 className="font-bold text-foreground mb-2">Flexible & Hassle-Free</h3>
              <p className="text-sm text-muted">Skip, pause, or cancel anytime with one click.</p>
            </div>
            <div className="text-center">
              <CheckCircle className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-foreground mb-2">Priority Support</h3>
              <p className="text-sm text-muted">Get faster responses and exclusive perks.</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Subscription FAQs</h2>
          <div className="space-y-4">
            {[
              {
                q: "Can I cancel my subscription anytime?",
                a: "Yes! You can cancel, pause, or modify your subscription anytime from your account dashboard with no penalties.",
              },
              {
                q: "When will I receive my first shipment?",
                a: "Your first shipment ships within 3-5 business days. Recurring shipments arrive on your chosen date each month.",
              },
              {
                q: "What if I want to change my plan?",
                a: "You can upgrade, downgrade, or switch plans anytime. Changes take effect on your next billing cycle.",
              },
              {
                q: "Do you offer discounts for longer commitments?",
                a: "Yes! Subscribe to 6 months upfront and save 10%. Subscribe to 12 months and save 20%.",
              },
            ].map((item, idx) => (
              <details key={idx} className="border border-border rounded-lg p-4 cursor-pointer group">
                <summary className="font-bold text-foreground flex justify-between items-center">
                  {item.q}
                  <span className="text-primary group-open:rotate-180 transition">▼</span>
                </summary>
                <p className="text-muted mt-4">{item.a}</p>
              </details>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 bg-gradient-to-r from-primary to-secondary text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Subscribe?</h2>
          <p className="text-lg mb-8">Start your journey to zero food waste today.</p>
          <Link
            href="#"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
          >
            View Plans
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
