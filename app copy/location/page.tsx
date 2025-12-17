import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react"

export default function LocationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-black text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Bezoek Ons</h1>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl max-w-2xl mx-auto">
            Kom langs bij Maaskracht Rotterdam en ervaar zelf wat we te bieden hebben.
          </p>
        </div>
      </section>

      {/* Map & Info Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
  <iframe
    className="absolute inset-0 w-full h-full border-0"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4923.463490143373!2d4.450950300000001!3d51.9023594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c4348cefa405e3%3A0x1fb3784d2604fcc1!2sSchiehaven%2015%20C%2C%203024%20EC%20Rotterdam!5e0!3m2!1snl!2snl!4v1748704580280!5m2!1snl!2snl"
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>


            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Locatie & Contact</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-red-600 mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-lg">Adres</h3>
                      <p className="text-gray-600">
                        Schiehaven 15 C 
                        <br />
                        3024 EC Rotterdam
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-red-600 mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-lg">Telefoon</h3>
                      <p className="text-gray-600">
                        <a href="tel:+31612345678" className="hover:underline">
                          ________________
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-red-600 mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-lg">E-mail</h3>
                      <p className="text-gray-600">
                        <a href="mailto:maaskrachtrotterdam@gmail.com" className="hover:underline">
                          maaskrachtrotterdam@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Openingstijden</h3>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-red-600 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Maandag - Vrijdag</p>
                      <p className="text-gray-600">18:00 - 21:00</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-red-600 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Zaterdag</p>
                      <p className="text-gray-600">10:00 - 12:00</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-red-600 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Zondag</p>
                      <p className="text-gray-600">Gesloten</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Bereikbaarheid</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium">Met het openbaar vervoer</p>
                    <p className="text-gray-600">
                      Tram 7, 8 en 25 stoppen op 5 minuten loopafstand. Metro station Blaak is op 10 minuten
                      loopafstand.
                    </p>
                  </div>

                  <div>
                    <p className="font-medium">Met de auto</p>
                    <p className="text-gray-600">
                      Parkeergarage Markthal is op 5 minuten loopafstand. Betaald parkeren is mogelijk in de omliggende
                      straten.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-gray-100">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Onze Faciliteiten</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Maaskracht Rotterdam beschikt over moderne faciliteiten om je de beste bokservaring te bieden.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=400&width=600" alt="Boksring" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Professionele Boksring</h3>
                <p className="text-gray-600">
                  Onze professionele boksring is perfect voor sparring en techniektraining.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=400&width=600" alt="Bokszakken" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Bokszakken & Equipment</h3>
                <p className="text-gray-600">
                  Verschillende soorten bokszakken en professionele apparatuur voor alle niveaus.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=400&width=600" alt="Kleedkamers" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Moderne Kleedkamers</h3>
                <p className="text-gray-600">Schone en ruime kleedkamers met douches en lockers voor je spullen.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-black text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Kom langs voor een proefles</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Wil je Maaskracht Rotterdam zelf ervaren? Boek een gratis proefles en ontdek wat boksen voor jou kan
            betekenen.
          </p>
          <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
            <Link href="/signup">
              Boek een proefles <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
