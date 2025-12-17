import Image from "next/image"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] bg-black">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://i.pinimg.com/736x/49/d6/22/49d62219a522dfb9a73571356752ec9a.jpg"
            alt="Maaskracht Rotterdam Team"
            fill
            className="object-cover opacity-60"
          />
        </div>
        <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Over Ons</h1>
          <div className="w-20 h-1 bg-red-600 mb-6"></div>
          <p className="text-xl text-white max-w-2xl">
            Leer meer over Maaskracht Rotterdam, onze missie en het team achter de boksclub.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl order-2 md:order-1">
              <Image src="https://cdn.prod.elseone.nl/uploads/2024/07/Ontwerp-zonder-titel-2024-07-24T091736.320-1200x711.png?1" alt="Arjan Erkel" fill className="object-cover" />
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Arjan Erkel</h2>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-1 bg-red-600"></div>
                <p className="text-gray-600 font-medium">Oprichter</p>
              </div>
              <p className="text-lg text-gray-700">
                Arjan Erkel is de oprichter van Maaskracht Rotterdam. Met zijn achtergrond in humanitair werk en zijn
                passie voor boksen, heeft hij deze club opgericht om mensen zowel fysiek als mentaal sterker te maken.
              </p>
              <p className="text-lg text-gray-700">
                Na zijn eigen ervaringen met tegenslag en herstel, gelooft Arjan sterk in de kracht van boksen als
                middel om weerbaarheid, discipline en zelfvertrouwen te ontwikkelen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-gray-100">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ons Verhaal</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Maaskracht Rotterdam is ontstaan vanuit een visie om boksen toegankelijk te maken voor iedereen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-4 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Het Begin</h3>
              <p className="text-gray-600">
                Maaskracht Rotterdam werd in 2018 opgericht door Arjan Erkel, met als doel om boksen toegankelijk te
                maken voor iedereen, ongeacht leeftijd of ervaring.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-4 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Onze Groei</h3>
              <p className="text-gray-600">
                Vanaf een kleine groep enthousiastelingen is Maaskracht uitgegroeid tot een hechte gemeenschap van
                boksers van alle niveaus, van beginners tot gevorderden.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-4 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Vandaag</h3>
              <p className="text-gray-600">
                Vandaag de dag staat Maaskracht Rotterdam bekend om zijn inclusieve aanpak, professionele trainingen en
                de positieve impact die we hebben op het leven van onze leden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-black text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Onze Missie</h2>
              <div className="w-20 h-1 bg-red-600 mb-6"></div>
              <p className="text-lg">
                Bij Maaskracht Rotterdam geloven we dat boksen meer is dan alleen een sport. Het is een manier om jezelf
                fysiek en mentaal te ontwikkelen, discipline te kweken en zelfvertrouwen op te bouwen.
              </p>
              <p className="text-lg">
                Onze missie is om een inclusieve omgeving te creëren waar iedereen, ongeacht achtergrond of ervaring,
                kan leren boksen en kan groeien als persoon.
              </p>
              <p className="text-lg">
                We streven ernaar om niet alleen technische vaardigheden bij te brengen, maar ook waarden zoals respect,
                doorzettingsvermogen en teamwork.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://i.pinimg.com/736x/2f/07/ec/2f07ec5b654d9136b2b1a79a2819796f.jpg"
                alt="Maaskracht Boxing Training"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ons Team</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Maak kennis met de trainers en het team achter Maaskracht Rotterdam.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-80">
                <Image src="/placeholder.svg?height=600&width=400" alt="Team Member" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Trainer Naam</h3>
                <p className="text-red-600 font-medium mb-3">Hoofdtrainer</p>
                <p className="text-gray-600">Korte beschrijving over de ervaring en expertise van deze trainer.</p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-80">
                <Image src="/placeholder.svg?height=600&width=400" alt="Team Member" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Trainer Naam</h3>
                <p className="text-red-600 font-medium mb-3">Bokstrainer</p>
                <p className="text-gray-600">Korte beschrijving over de ervaring en expertise van deze trainer.</p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-80">
                <Image src="/placeholder.svg?height=600&width=400" alt="Team Member" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Trainer Naam</h3>
                <p className="text-red-600 font-medium mb-3">Conditietrainer</p>
                <p className="text-gray-600">Korte beschrijving over de ervaring en expertise van deze trainer.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-gray-100">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Word onderdeel van Maaskracht Rotterdam</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Klaar om de handschoenen aan te trekken? Kom langs voor een proefles of meld je direct aan!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
              <Link href="/signup">
                Meld je aan <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Contact opnemen</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
