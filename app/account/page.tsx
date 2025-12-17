"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { User, ShoppingBag, MapPin, Settings, LogOut } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function Account() {
  const [activeTab, setActiveTab] = useState("profile")

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-foreground mb-12">My Account</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="md:col-span-1">
            <nav className="space-y-2">
              {[
                { id: "profile", label: "Profile", icon: User },
                { id: "orders", label: "Order History", icon: ShoppingBag },
                { id: "addresses", label: "Addresses", icon: MapPin },
                { id: "settings", label: "Settings", icon: Settings },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition ${
                      activeTab === item.id ? "bg-primary text-white" : "text-muted hover:bg-primary-light"
                    }`}
                  >
                    <Icon size={20} />
                    {item.label}
                  </button>
                )
              })}
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-warning hover:bg-warning/10 transition mt-8">
                <LogOut size={20} />
                Sign Out
              </button>
            </nav>
          </div>

          {/* Content Area */}
          <div className="md:col-span-3">
            {activeTab === "profile" && (
              <div className="bg-white border border-border rounded-xl p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Profile Information</h2>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                      <input
                        type="text"
                        placeholder="John"
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                      <input
                        type="text"
                        placeholder="Doe"
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                    <input
                      type="tel"
                      placeholder="+44 123 456 7890"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <button className="bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary-dark transition">
                    Save Changes
                  </button>
                </form>
              </div>
            )}

            {activeTab === "orders" && (
              <div className="bg-white border border-border rounded-xl p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Order History</h2>

                <div className="text-center py-12">
                  <ShoppingBag className="w-12 h-12 text-muted mx-auto mb-4" />
                  <p className="text-muted">You haven't placed any orders yet.</p>
                  <Link href="/shop" className="inline-block mt-4 text-primary font-medium hover:underline">
                    Start shopping
                  </Link>
                </div>
              </div>
            )}

            {activeTab === "addresses" && (
              <div className="bg-white border border-border rounded-xl p-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-foreground">Saved Addresses</h2>
                  <button className="bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-dark transition">
                    Add Address
                  </button>
                </div>

                <div className="text-center py-12">
                  <MapPin className="w-12 h-12 text-muted mx-auto mb-4" />
                  <p className="text-muted">No saved addresses yet.</p>
                </div>
              </div>
            )}

            {activeTab === "settings" && (
              <div className="bg-white border border-border rounded-xl p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Preferences</h2>

                <div className="space-y-4">
                  <label className="flex items-center p-4 border border-border rounded-lg cursor-pointer hover:bg-primary-light transition">
                    <input type="checkbox" defaultChecked className="w-5 h-5 rounded" />
                    <span className="ml-4 font-medium text-foreground">Receive promotional emails</span>
                  </label>
                  <label className="flex items-center p-4 border border-border rounded-lg cursor-pointer hover:bg-primary-light transition">
                    <input type="checkbox" defaultChecked className="w-5 h-5 rounded" />
                    <span className="ml-4 font-medium text-foreground">Receive product recommendations</span>
                  </label>
                  <label className="flex items-center p-4 border border-border rounded-lg cursor-pointer hover:bg-primary-light transition">
                    <input type="checkbox" className="w-5 h-5 rounded" />
                    <span className="ml-4 font-medium text-foreground">Receive sustainability tips</span>
                  </label>
                </div>

                <button className="mt-8 bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary-dark transition">
                  Save Preferences
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
