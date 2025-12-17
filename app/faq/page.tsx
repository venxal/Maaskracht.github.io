"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    category: "Using IndiContainers & Strips",
    questions: [
      {
        q: "How do I know which strip to use for different foods?",
        a: "Use Meat & Fish Strips for beef, chicken, fish, seafood, and proteins. Use Dairy Strips for milk, yogurt, cheese, cream, and dairy-based sauces.",
      },
      {
        q: "Can I use the strips without an IndiContainer?",
        a: "Yes! The strips work with any food storage container. If your container doesn't have an indicator slot, you can attach the strip to the inside of the lid using the pre-applied adhesive.",
      },
      {
        q: 'What if the color seems "in between"?',
        a: "If you see any noticeable shift from the fresh color, the food is still safe but approaching the end of its life. Consume it within a day or two.",
      },
    ],
  },
  {
    category: "Storage & Shelf Life",
    questions: [
      {
        q: "How long do unopened strips last?",
        a: "Unopened strips (in their sealed foil pouch) last 12–18 months when stored in a cool, dry place (15–25 °C).",
      },
      {
        q: "Can I use these strips in the freezer?",
        a: "No. Strips are designed for refrigerated storage only. Do not insert a strip before freezing – it won't function properly in frozen conditions.",
      },
    ],
  },
  {
    category: "Safety & Kids",
    questions: [
      {
        q: "What should I do if a child swallows a strip?",
        a: "The strip is made from non-toxic, food-safe materials. Monitor for any unusual symptoms. If you're concerned, contact a healthcare provider.",
      },
      {
        q: "How do I keep strips away from young children?",
        a: "Store all strips in a secure location where children cannot access them unsupervised. Strips are small and could pose a choking hazard.",
      },
    ],
  },
  {
    category: "Ordering & Shipping",
    questions: [
      {
        q: "How long does delivery take?",
        a: "Within most regions: 3–5 business days. International: 7–14 business days (varies by location). Expedited shipping available.",
      },
      {
        q: "Do you offer free shipping?",
        a: "Yes! Free shipping on orders over €50. Smaller orders have a flat shipping fee of €5.",
      },
    ],
  },
]

export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-foreground mb-4 text-center">Frequently Asked Questions</h1>
        <p className="text-lg text-muted mb-12 text-center">
          Can't find the answer you're looking for? Contact our support team.
        </p>

        <div className="space-y-12">
          {faqs.map((section, sectionIdx) => (
            <div key={sectionIdx}>
              <h2 className="text-2xl font-bold text-foreground mb-6">{section.category}</h2>

              <div className="space-y-3">
                {section.questions.map((item, qIdx) => {
                  const globalIdx = sectionIdx * 10 + qIdx
                  return (
                    <details
                      key={globalIdx}
                      className="group border border-border rounded-lg p-6 cursor-pointer hover:border-primary transition"
                      open={expandedIndex === globalIdx}
                      onToggle={() => setExpandedIndex(expandedIndex === globalIdx ? null : globalIdx)}
                    >
                      <summary className="flex items-center justify-between font-bold text-foreground group-open:text-primary transition">
                        {item.q}
                        <ChevronDown size={20} className="group-open:rotate-180 transition" />
                      </summary>
                      <p className="text-muted mt-4">{item.a}</p>
                    </details>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-primary-light/30 rounded-xl p-8 text-center border border-border">
          <h3 className="text-2xl font-bold text-foreground mb-4">Still have questions?</h3>
          <p className="text-muted mb-6">Our support team is here to help. Get in touch with us.</p>
          <button className="bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary-dark transition">
            Contact Support
          </button>
        </div>
      </div>

      <Footer />
    </div>
  )
}
