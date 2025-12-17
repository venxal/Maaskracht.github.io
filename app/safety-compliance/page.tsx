"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle, Shield, AlertCircle, FileText } from "lucide-react"

export default function SafetyCompliance() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-primary-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Safety, Compliance & Peace of Mind</h1>
          <p className="text-lg text-muted max-w-2xl">
            IndiContainers freshness strips are designed to be safe, reliable, and compliant with the strictest food
            safety regulations in Europe.
          </p>
        </div>
      </section>

      {/* Non-Contact Design */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Non-Food-Contact Design</h2>
            <p className="text-muted mb-4 leading-relaxed">
              The indicator strip is sealed behind a breathable, protective film. It does not touch your food directly.
              Instead, it detects gases in the air inside your container (the headspace). This design means:
            </p>
            <ul className="space-y-3">
              {[
                "Zero risk of contamination – the strip cannot transfer any substances to your food",
                "Safer than direct-contact sensors – some competing products require strips to touch the food",
                "More reliable results – gas detection is more accurate than direct chemical contact",
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-primary-light rounded-2xl p-12 flex items-center justify-center aspect-square">
            <div className="text-center">
              <Shield className="w-24 h-24 text-primary mx-auto mb-4" />
              <p className="font-bold text-foreground">100% Food Safe</p>
            </div>
          </div>
        </div>
      </section>

      {/* What Goes Into Strips */}
      <section className="bg-foreground text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">What Goes Into the Strip</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Cellulose Paper",
                description: "A natural, food-safe base (the same material used in coffee filters)",
              },
              {
                title: "Food-Grade Dyes",
                description: "pH-sensitive indicator compounds that are approved for indirect food contact",
              },
              {
                title: "Protective Barrier Film",
                description: "A breathable, liquid-resistant layer that seals the dyes away",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white/10 rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-300 mt-8 max-w-2xl mx-auto">
            None of these materials are toxic or harmful if accidentally contacted. However, the strip is not meant to
            be eaten.
          </p>
        </div>
      </section>

      {/* EU Compliance */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">EU Regulation Compliance</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "EC Regulation No. 1935/2004",
              description:
                "The foundational EU rule on materials and articles that come into contact with food. Our strips meet all requirements.",
            },
            {
              title: "EC Regulation No. 450/2009",
              description:
                "The specific EU framework for active and intelligent packaging materials. Our design aligns with all guidelines.",
            },
            {
              title: "Dutch NVWA Guidelines",
              description:
                "Standards from the Netherlands' food safety authority. Our manufacturing follows these strict guidelines.",
            },
            {
              title: "Migration Testing",
              description:
                "We've proven that no harmful substances transfer from the strip to food under normal use conditions.",
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-primary-light/20 rounded-xl p-8 border border-primary/20">
              <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                {item.title}
              </h3>
              <p className="text-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Important Warnings */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Important Safety Warnings</h2>

        <div className="space-y-4">
          {[
            { title: "Do Not Eat", description: "The strip is not edible and should never be ingested." },
            {
              title: "Keep Out of Reach of Children",
              description: "Strips are small and could pose a choking hazard. Store securely.",
            },
            {
              title: "Keep Away from Pets",
              description: "Do not allow pets to chew on or ingest strips.",
            },
            {
              title: "Do Not Place on Food",
              description: "Insert into the container lid slot – do not place directly on food.",
            },
            {
              title: "Do Not Use in Freezer",
              description: "Strips are designed for refrigerated storage only.",
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 flex gap-4">
              <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                <p className="text-muted">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Line */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">We Prioritize Your Safety</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            IndiContainers strips are designed by food scientists with safety as a core priority. When used as directed,
            they are safe and reliable. Your family's safety matters to us.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
