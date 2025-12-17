"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ShoppingCart, User } from "lucide-react"
import { useCart } from "./cart-provider"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isShopOpen, setIsShopOpen] = useState(false)
  const [isLearnOpen, setIsLearnOpen] = useState(false)
  const { items } = useCart()

  const cartCount = items.reduce((total, item) => total + item.quantity, 0)

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-primary text-white text-center py-2 text-sm font-medium">
        🚀 Pilot Series – Limited Stock | Free shipping above €50
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            <Link
  href="/"
  className="flex items-center gap-2 font-bold text-xl text-foreground hover:text-primary transition"
>
  <div className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center text-xs font-bold">
    IC
  </div>
  <span>IndiContainers</span>
</Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              <Link
                href="/how-it-works"
                className="text-sm font-medium text-muted hover:text-foreground px-3 py-2 rounded-lg hover:bg-primary-light/30 transition"
              >
                How It Works
              </Link>

              <div className="relative group">
                <button className="text-sm font-medium text-muted hover:text-foreground px-3 py-2 rounded-lg hover:bg-primary-light/30 transition flex items-center gap-1">
                  Shop
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-lg border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link
                    href="/shop"
                    className="block px-4 py-2 text-sm text-muted hover:text-foreground hover:bg-primary-light/30 first:rounded-t-lg"
                  >
                    All Products
                  </Link>
                  <Link
                    href="/shop"
                    className="block px-4 py-2 text-sm text-muted hover:text-foreground hover:bg-primary-light/30"
                  >
                    Starter Kits
                  </Link>
                  <Link
                    href="/shop"
                    className="block px-4 py-2 text-sm text-muted hover:text-foreground hover:bg-primary-light/30"
                  >
                    Smart Containers
                  </Link>
                  <Link
                    href="/shop"
                    className="block px-4 py-2 text-sm text-muted hover:text-foreground hover:bg-primary-light/30"
                  >
                    Meat & Fish Strips
                  </Link>
                  <Link
                    href="/shop"
                    className="block px-4 py-2 text-sm text-muted hover:text-foreground hover:bg-primary-light/30"
                  >
                    Dairy Strips
                  </Link>
                </div>
              </div>

              <Link
                href="/subscriptions"
                className="text-sm font-medium text-muted hover:text-foreground px-3 py-2 rounded-lg hover:bg-primary-light/30 transition"
              >
                Subscribe & Save
              </Link>

              <div className="relative group">
                <button className="text-sm font-medium text-muted hover:text-foreground px-3 py-2 rounded-lg hover:bg-primary-light/30 transition flex items-center gap-1">
                  Learn
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-lg border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link
                    href="/calculator"
                    className="block px-4 py-2 text-sm text-muted hover:text-foreground hover:bg-primary-light/30 first:rounded-t-lg"
                  >
                    Impact Calculator
                  </Link>
                  <Link
                    href="/sustainability"
                    className="block px-4 py-2 text-sm text-muted hover:text-foreground hover:bg-primary-light/30"
                  >
                    Sustainability
                  </Link>
                  <Link
                    href="/safety-compliance"
                    className="block px-4 py-2 text-sm text-muted hover:text-foreground hover:bg-primary-light/30"
                  >
                    Safety & Compliance
                  </Link>
                  <Link
                    href="/about"
                    className="block px-4 py-2 text-sm text-muted hover:text-foreground hover:bg-primary-light/30"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/faq"
                    className="block px-4 py-2 text-sm text-muted hover:text-foreground hover:bg-primary-light/30 last:rounded-b-lg"
                  >
                    FAQ
                  </Link>
                </div>
              </div>

              <Link
                href="/for-businesses"
                className="text-sm font-medium text-muted hover:text-foreground px-3 py-2 rounded-lg hover:bg-primary-light/30 transition"
              >
                For Businesses
              </Link>
            </nav>

            {/* Right side icons */}
            <div className="hidden md:flex items-center gap-6">
              <Link href="/cart" className="relative text-muted hover:text-foreground transition">
                <ShoppingCart size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-warning text-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </Link>
              <Link href="/login" className="text-muted hover:text-foreground transition">
                <User size={20} />
              </Link>
              <Link
                href="/shop"
                className="bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-dark transition"
              >
                Shop Now
              </Link>
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-3">
              <Link href="/how-it-works" className="block text-sm font-medium text-foreground hover:text-primary py-2">
                How It Works
              </Link>

              <div>
                <button
                  onClick={() => setIsShopOpen(!isShopOpen)}
                  className="block text-sm font-medium text-foreground hover:text-primary py-2 flex items-center gap-2"
                >
                  Shop
                  <svg
                    className={`w-4 h-4 transition-transform ${isShopOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </button>
                {isShopOpen && (
                  <div className="pl-4 space-y-2">
                    <Link href="/shop" className="block text-sm text-muted hover:text-primary py-1">
                      All Products
                    </Link>
                    <Link href="/shop" className="block text-sm text-muted hover:text-primary py-1">
                      Starter Kits
                    </Link>
                    <Link href="/shop" className="block text-sm text-muted hover:text-primary py-1">
                      Smart Containers
                    </Link>
                    <Link href="/shop" className="block text-sm text-muted hover:text-primary py-1">
                      Strips
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/subscriptions" className="block text-sm font-medium text-foreground hover:text-primary py-2">
                Subscribe & Save
              </Link>

              <div>
                <button
                  onClick={() => setIsLearnOpen(!isLearnOpen)}
                  className="block text-sm font-medium text-foreground hover:text-primary py-2 flex items-center gap-2"
                >
                  Learn
                  <svg
                    className={`w-4 h-4 transition-transform ${isLearnOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </button>
                {isLearnOpen && (
                  <div className="pl-4 space-y-2">
                    <Link href="/calculator" className="block text-sm text-muted hover:text-primary py-1">
                      Impact Calculator
                    </Link>
                    <Link href="/sustainability" className="block text-sm text-muted hover:text-primary py-1">
                      Sustainability
                    </Link>
                    <Link href="/safety-compliance" className="block text-sm text-muted hover:text-primary py-1">
                      Safety & Compliance
                    </Link>
                    <Link href="/about" className="block text-sm text-muted hover:text-primary py-1">
                      About Us
                    </Link>
                    <Link href="/faq" className="block text-sm text-muted hover:text-primary py-1">
                      FAQ
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/for-businesses"
                className="block text-sm font-medium text-foreground hover:text-primary py-2"
              >
                For Businesses
              </Link>
              <Link href="/cart" className="block text-sm font-medium text-foreground hover:text-primary py-2">
                Cart ({cartCount})
              </Link>
              <Link href="/login" className="block text-sm font-medium text-foreground hover:text-primary py-2">
                Login
              </Link>
              <Link
                href="/shop"
                className="block bg-primary text-white px-4 py-2 rounded-lg font-medium text-center hover:bg-primary-dark transition"
              >
                Shop Now
              </Link>
            </div>
          )}
        </div>
      </header>
    </>
  )
}
