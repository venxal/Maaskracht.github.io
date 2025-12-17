"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useCart } from "@/components/cart-provider"
import Link from "next/link"
import { Trash2, ShoppingBag, Gift } from "lucide-react"

export default function Cart() {
  const { items, removeItem, updateQuantity, total } = useCart()

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-foreground mb-8">Your Cart</h1>

        {items.length === 0 ? (
          <div className="text-center py-16">
            <ShoppingBag className="w-16 h-16 text-primary mx-auto mb-6" />
            <p className="text-2xl text-muted mb-6">Your cart is empty</p>
            <p className="text-muted mb-8 max-w-md mx-auto">
              Start reducing food waste today with IndiContainers – your first step towards a sustainable lifestyle.
            </p>
            <Link
              href="/shop"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-primary-dark transition"
            >
              Shop Starter Kits
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-6 pb-6 border-b border-border">
                    <div className="w-24 h-24 bg-primary-light rounded-lg flex items-center justify-center text-3xl flex-shrink-0">
                      📦
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground mb-1">{item.name}</h3>
                      <p className="text-muted mb-4">€{item.price.toFixed(2)}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-border rounded-lg">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-3 py-1 text-foreground hover:bg-primary-light transition"
                          >
                            −
                          </button>
                          <span className="px-3 py-1 font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-3 py-1 text-foreground hover:bg-primary-light transition"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-warning hover:text-warning/80 transition"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-foreground">€{(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-primary-light/50 rounded-xl p-6 border border-border h-fit sticky top-24">
              <h2 className="font-bold text-foreground mb-6 text-lg">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-muted">
                  <span>Subtotal</span>
                  <span>€{total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-muted">
                  <span>Shipping</span>
                  <span>{total >= 50 ? "✓ Free" : "€5.00"}</span>
                </div>
                {total >= 50 && <p className="text-xs text-primary font-medium">✓ Free shipping included</p>}
              </div>

              <div className="border-t border-border pt-4 mb-6">
                <div className="flex justify-between font-bold text-foreground text-lg">
                  <span>Total</span>
                  <span>€{(total >= 50 ? total : total + 5).toFixed(2)}</span>
                </div>
              </div>

              <Link
                href="/checkout"
                className="block w-full bg-primary text-white py-3 rounded-lg font-bold text-center hover:bg-primary-dark transition mb-4"
              >
                Proceed to Checkout
              </Link>

              <Link
                href="/shop"
                className="block w-full border-2 border-primary text-primary py-3 rounded-lg font-bold text-center hover:bg-primary-light transition mb-6"
              >
                Continue Shopping
              </Link>

              <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-4 text-center">
                <Gift className="w-5 h-5 text-secondary mx-auto mb-2" />
                <p className="text-xs text-foreground font-medium">Every order helps reduce global food waste</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
