"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Leaf, Droplets, Wind, BarChart3, Target, Award } from "lucide-react"

export default function Sustainability() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-light to-secondary-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Eating Better. Wasting Less. Living Smarter.</h1>
          <p className="text-lg text-muted max-w-2xl">
            Every meal you save is a win for your wallet and the planet. That's what IndiContainers is all about.
          </p>
        </div>
      </section>

      {/* Problem Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Food Waste is a Global Crisis</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: BarChart3, stat: "1/3", desc: "Of all food produced globally is wasted" },
            { icon: Wind, stat: "170 kg", desc: "Wasted per person annually in the EU" },
            { icon: Droplets, stat: "1.3B", desc: "Tonnes of food waste every year" },
          ].map((item, idx) => (
            <div key={idx} className="bg-primary-light/20 rounded-2xl p-8 text-center">
              <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <p className="text-4xl font-bold text-foreground mb-2">{item.stat}</p>
              <p className="text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How IndiContainers Helps */}
      <section className="bg-foreground text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">How IndiContainers Helps</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Leaf className="w-8 h-8 text-primary" />
                You Save Food You Would Have Thrown Away
              </h3>
              <p className="text-gray-300 mb-4">
                Research shows that most household food waste happens because people aren't sure if something is still
                safe to eat. They throw it out to be safe. IndiContainers gives you confidence – you know exactly when
                food is good and when it's truly past its time.
              </p>
              <p className="font-bold text-lg">Studies show 20-30% waste reduction</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Wind className="w-8 h-8 text-primary" />
                You Save Money
              </h3>
              <p className="text-gray-300 mb-4">
                If the average household throws away €150-200 of food per year due to waste, and IndiContainers helps
                you save even 25% of that, you're looking at €40-50 savings per year.
              </p>
              <p className="font-bold text-lg">That's significant for a family</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Droplets className="w-8 h-8 text-primary" />
                You Extend Shelf Life Confidence
              </h3>
              <p className="text-gray-300 mb-4">
                With IndiContainers, you're not making conservative decisions based on printed dates. You're making
                informed decisions based on real freshness. That means you can confidently use food right up to the
                point it's actually safe to eat.
              </p>
              <p className="font-bold text-lg">Maximizing food use, not waste</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Target className="w-8 h-8 text-primary" />
                You Fight Climate Change
              </h3>
              <p className="text-gray-300 mb-4">
                Food waste in landfills produces methane – a powerful greenhouse gas. By reducing food waste in your
                home, you're directly fighting climate change. It's one of the fastest ways to reduce your household
                carbon footprint.
              </p>
              <p className="font-bold text-lg">Real environmental impact</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitments */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Sustainability Commitments</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Reusable Containers",
              description:
                "Our food-safe storage containers are built to last 3-5+ years with normal care. They replace single-use plastic takeaway containers and disposable storage bags. One reusable IndiContainer can replace hundreds of disposable options.",
            },
            {
              title: "Recyclable Strips",
              description:
                "Freshness strips are made primarily from cellulose paper with a thin plastic barrier. They're designed to be recyclable or compostable where local facilities support it. At end of life, they're not a burden.",
            },
            {
              title: "Minimal Material Use",
              description:
                "Each strip is tiny (12 × 25 mm) – using minimal resources to create maximum impact. We've optimized every dimension to reduce waste while maintaining functionality and reliability.",
            },
            {
              title: "Responsible Manufacturing",
              description:
                "Our strips are manufactured to minimize waste and energy use. We're committed to working with suppliers who share our environmental values and sustainable practices.",
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-primary-light/10 border border-primary/20 rounded-xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Aligned with UN Goals */}
      <section className="bg-primary-light/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Aligned with UN Sustainable Development Goals
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: "12",
                title: "Responsible Consumption",
                desc: "Reduce food waste significantly",
              },
              {
                number: "13",
                title: "Climate Action",
                desc: "Lower your household carbon footprint",
              },
              {
                number: "15",
                title: "Life on Land",
                desc: "Reduce resource consumption for food production",
              },
            ].map((goal, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 border border-border text-center">
                <p className="text-5xl font-bold text-primary mb-4">SDG {goal.number}</p>
                <h3 className="text-lg font-bold text-foreground mb-2">{goal.title}</h3>
                <p className="text-muted">{goal.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Calculator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-white text-center">
          <Award className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Your Impact Matters</h2>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            If you save just 1 pack of meat per week, that's 52 packs per year. Multiply that across your household,
            your street, your city – the impact is massive.
          </p>
          <Link
            href="/shop"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
          >
            Start Your Journey Today
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
