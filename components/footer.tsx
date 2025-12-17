"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"
import { Mail } from "lucide-react"

export function Footer() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail("")
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <footer className="bg-foreground text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center text-xs font-bold">
                IC
              </div>
              <span className="font-bold">IndiContainers</span>
            </div>
            <p className="text-sm text-gray-400">
              Smart freshness strips that help you save food, money, and peace of mind.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition"
              >
                Instagram
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition"
              >
                Facebook
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-bold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/shop" className="hover:text-primary transition">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-primary transition">
                  Starter Kits
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-primary transition">
                  Smart Containers
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-primary transition">
                  Refill Strips
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold mb-4">Support & Info</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/how-it-works" className="hover:text-primary transition">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-primary transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="hover:text-primary transition">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/for-businesses" className="hover:text-primary transition">
                  For Businesses
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Newsletter */}
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-400 mb-6">
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Shipping Policy
                </Link>
              </li>
            </ul>

            <div className="mt-8 pt-8 border-t border-gray-700">
              <h3 className="font-bold mb-3 text-sm">Stay Updated</h3>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2 mb-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 rounded-lg text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary-dark px-3 py-2 rounded-lg transition"
                  aria-label="Subscribe to newsletter"
                >
                  <Mail size={16} />
                </button>
              </form>
              {subscribed && <p className="text-xs text-primary mb-2">Thanks for signing up!</p>}
              <p className="text-xs text-gray-400">
                We'll share ideas on keeping food fresh and reducing waste. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <p className="text-sm text-gray-400 text-center">
            © 2025 IndiContainers. All rights reserved. Made with care in Europe.
          </p>
        </div>
      </div>
    </footer>
  )
}
