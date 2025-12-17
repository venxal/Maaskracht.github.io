import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, Clock, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import TrainingSection from "@/components/training-section"
import TestimonialSection from "@/components/testimonial-section"
import LocationSection from "@/components/location-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      {/* About Preview Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Over Maaskracht Rotterdam</h2>
              <p className="text-lg text-gray-700">
                Maaskracht Rotterdam is opgericht door Arjan Erkel, met als doel om mensen door middel van boksen
                mentaal en fysiek sterker te maken. Wij geloven dat iedereen kan boksen, ongeacht leeftijd of niveau.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-1 bg-red-600"></div>
                <p className="text-gray-600 font-medium">Opgericht door Arjan Erkel</p>
              </div>
              <Button asChild className="bg-red-600 hover:bg-red-700">
                <Link href="/about">
                  Lees meer over ons <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://maaskrachtrotterdam.com/wp-content/uploads/2024/01/00dc6747-fc87-4d01-90e2-9205990c26d8_1_105_c.jpeg"
                alt="Maaskracht Boxing"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <TrainingSection />

      {/* Quick Info Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-gray-100">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Trainingstijden</h3>
              <p className="text-gray-600">
                Maandag t/m vrijdag: 18:00 - 21:00
                <br />
                Zaterdag: 10:00 - 12:00
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Locatie</h3>
              <p className="text-gray-600">
                Maaskrachtstraat 10
                <br />
                3071 Rotterdam
              </p>
              <Link href="/location" className="text-red-600 hover:underline mt-2">
                Bekijk op kaart
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Proefles</h3>
              <p className="text-gray-600">Wil je een keer komen proberen? Boek een gratis proefles!</p>
              <Button asChild className="mt-4 bg-red-600 hover:bg-red-700">
                <Link href="/signup">Aanmelden</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <TestimonialSection />
      <LocationSection />

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-black text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Klaar om te beginnen?</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Word lid van Maaskracht Rotterdam en ontdek hoe boksen je fysiek en mentaal sterker maakt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
              <Link href="/pricing">Bekijk prijzen</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-black hover:bg-white hover:text-black"
            >
              <Link href="/signup">Meld je aan</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
