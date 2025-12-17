"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useCart } from "@/components/cart-provider"
import Link from "next/link"
import { useState } from "react"

export default function Checkout() {
  const { items, total } = useCart()
  const [step, setStep] = useState<"shipping" | "payment" | "review" | "confirmation">("shipping")
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    address: "",
    city: "",
    postal: "",
    country: "US",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const shippingCost = total >= 50 ? 0 : 5
  const orderTotal = total + shippingCost

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Step Indicator */}
        <div className="flex items-center justify-center mb-12">
          {["shipping", "payment", "review", "confirmation"].map((s, idx, arr) => (
            <div key={s} className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                  ["shipping", "payment", "review", "confirmation"].indexOf(step) >= idx
                    ? "bg-primary text-white"
                    : "bg-border text-muted"
                }`}
              >
                {idx + 1}
              </div>
              {idx < arr.length - 1 && (
                <div
                  className={`h-1 w-12 mx-2 ${
                    ["shipping", "payment", "review", "confirmation"].indexOf(step) > idx ? "bg-primary" : "bg-border"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-2">
            {step === "shipping" && (
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-8">Shipping Address</h1>

                <form className="space-y-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                  <input
                    type="text"
                    name="name"
                    placeholder="Full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                  <input
                    type="text"
                    name="address"
                    placeholder="Street address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                    <input
                      type="text"
                      name="postal"
                      placeholder="Postal code"
                      value={formData.postal}
                      onChange={handleInputChange}
                      className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="US">United States</option>
                    <option value="EU">European Union</option>
                    <option value="UK">United Kingdom</option>
                  </select>

                  <div className="flex gap-4 mt-8">
                    <button
                      onClick={() => setStep("payment")}
                      className="flex-1 bg-primary text-white py-3 rounded-lg font-bold hover:bg-primary-dark transition"
                    >
                      Continue to Payment
                    </button>
                  </div>
                </form>
              </div>
            )}

            {step === "payment" && (
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-8">Payment Method</h1>

                <div className="space-y-4">
                  <label className="flex items-center p-4 border-2 border-primary rounded-lg cursor-pointer bg-primary-light/20">
                    <input type="radio" name="payment" defaultChecked className="w-5 h-5" />
                    <span className="ml-4 font-medium text-foreground">Credit Card</span>
                  </label>
                  <label className="flex items-center p-4 border border-border rounded-lg cursor-pointer hover:border-primary transition">
                    <input type="radio" name="payment" className="w-5 h-5" />
                    <span className="ml-4 font-medium text-foreground">PayPal</span>
                  </label>
                </div>

                <div className="mt-8 space-y-4">
                  <input
                    type="text"
                    placeholder="Card number"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input
                      type="text"
                      placeholder="CVC"
                      className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="flex gap-4 mt-8">
                  <button
                    onClick={() => setStep("shipping")}
                    className="flex-1 border-2 border-primary text-primary py-3 rounded-lg font-bold hover:bg-primary-light transition"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setStep("review")}
                    className="flex-1 bg-primary text-white py-3 rounded-lg font-bold hover:bg-primary-dark transition"
                  >
                    Review Order
                  </button>
                </div>
              </div>
            )}

            {step === "review" && (
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-8">Review Order</h1>

                <div className="bg-primary-light/30 rounded-xl p-6 mb-8">
                  <h2 className="font-bold text-foreground mb-4">Shipping to:</h2>
                  <p className="text-muted">{formData.name}</p>
                  <p className="text-muted">{formData.address}</p>
                  <p className="text-muted">
                    {formData.city}, {formData.postal}
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="font-bold text-foreground mb-4">Order Items:</h2>
                  <div className="space-y-3">
                    {items.map((item) => (
                      <div key={item.id} className="flex justify-between text-muted">
                        <span>
                          {item.name} × {item.quantity}
                        </span>
                        <span>€{(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => setStep("payment")}
                    className="flex-1 border-2 border-primary text-primary py-3 rounded-lg font-bold hover:bg-primary-light transition"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setStep("confirmation")}
                    className="flex-1 bg-primary text-white py-3 rounded-lg font-bold hover:bg-primary-dark transition"
                  >
                    Place Order
                  </button>
                </div>
              </div>
            )}

            {step === "confirmation" && (
              <div className="text-center py-12">
                <div className="text-6xl mb-6">✓</div>
                <h1 className="text-3xl font-bold text-foreground mb-2">Order Confirmed!</h1>
                <p className="text-lg text-muted mb-8">
                  Thank you for your order. You'll receive a confirmation email shortly.
                </p>
                <Link
                  href="/"
                  className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-primary-dark transition"
                >
                  Return Home
                </Link>
              </div>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-primary-light/50 rounded-xl p-6 border border-border sticky top-24">
              <h2 className="font-bold text-foreground mb-6">Order Summary</h2>

              <div className="space-y-3 mb-6 pb-6 border-b border-border">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-muted">
                      {item.name} × {item.quantity}
                    </span>
                    <span className="font-medium text-foreground">€{(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-muted">
                  <span>Subtotal</span>
                  <span>€{total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-muted">
                  <span>Shipping</span>
                  <span>{shippingCost === 0 ? "✓ Free" : `€${shippingCost.toFixed(2)}`}</span>
                </div>
              </div>

              <div className="border-t border-border pt-4">
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span className="text-primary">€{orderTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
