"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TrendingDown, Users, Award, Zap, Mail, Phone } from "lucide-react"

export default function ForBusinesses() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Smart Freshness for Businesses</h1>
          <p className="text-lg text-white/90 max-w-2xl">
            Reduce waste, build trust, and improve operations with freshness indicators designed for food service.
          </p>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Your Challenge</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            "Inventory waste from conservative date-label practices",
            "Safety concerns ensuring food quality and safety",
            "Customer perception building trust in freshness",
            "Regulatory compliance with food safety standards",
            "Operational efficiency tracking opened items",
          ].map((item, idx) => (
            <div key={idx} className="flex gap-4">
              <TrendingDown className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-muted">{item}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-foreground font-bold mt-8 text-lg">
          IndiContainers solves these challenges with a simple, visible freshness signal.
        </p>
      </section>

      {/* Use Cases */}
      <section className="bg-primary-light/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Perfect For</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Meal-Prep Services", desc: "Include freshness strips on containers for customer confidence" },
              { title: "Cafés & Quick-Service", desc: "Monitor prepared foods with at-a-glance freshness visibility" },
              { title: "Catering & Food Production", desc: "Internal QA and staff accountability during service" },
              { title: "Student Canteens", desc: "Ensure leftovers used safely and reduce waste" },
              { title: "Specialty Food Brands", desc: "Premium positioning with real-time freshness assurance" },
              { title: "Institutional Food Service", desc: "Documentation of safety checks and reduced liability" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-8 border border-border hover:border-primary hover:shadow-lg transition"
              >
                <h3 className="font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Key Business Benefits</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: TrendingDown,
              title: "Reduce Operational Waste",
              desc: "Up to 20-30% reduction from discarding items based solely on printed dates. Real money saved, especially on high-value items.",
            },
            {
              icon: Award,
              title: "Improve Food Safety",
              desc: "Visible, objective freshness assessment. Reduces liability risk and provides documentation of safety checks.",
            },
            {
              icon: Users,
              title: "Enhance Customer Perception",
              desc: "Customers see visual proof that food is fresh. Builds trust and premium positioning.",
            },
            {
              icon: Zap,
              title: "Streamline Operations",
              desc: "Simple, no-training system. Any staff member can use it. Speeds up inventory decisions.",
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-foreground text-white rounded-xl p-8">
              <item.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-primary-light to-secondary-light rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Reduce Waste & Build Trust?</h2>
          <p className="text-muted mb-8 max-w-2xl mx-auto">
            Start with a pilot program or get a bulk quote. Our B2B team is ready to work with you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
            <a
              href="mailto:businesses@indicontainers.com"
              className="flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary-dark transition"
            >
              <Mail size={18} />
              Email Us
            </a>
            <a
              href="tel:+44xxx"
              className="flex items-center justify-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-lg font-bold hover:bg-primary-light transition"
            >
              <Phone size={18} />
              Call Us
            </a>
          </div>

          <p className="text-sm text-muted">
            Email: businesses@indicontainers.com | Response time: Within 1 business day
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
