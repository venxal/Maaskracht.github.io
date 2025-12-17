import { Check } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-black text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Prijzen & Lidmaatschap</h1>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl max-w-2xl mx-auto">
            Flexibele lidmaatschappen voor iedereen. Kies het pakket dat bij jou past.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <Tabs defaultValue="monthly" className="w-full">
            <div className="text-center mb-8">
              <TabsList className="inline-flex">
                <TabsTrigger value="monthly">Maandelijks</TabsTrigger>
                <TabsTrigger value="weekly">Wekelijks</TabsTrigger>
                <TabsTrigger value="yearly">Jaarlijks</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="monthly" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Mannen Training */}
                <Card className="flex flex-col border-red-600 shadow-lg relative">
                  <div className="absolute top-0 left-0 right-0 bg-red-600 text-white text-center py-1 text-sm font-medium">
                    Meest gekozen
                  </div>
                  <CardHeader className="pt-8">
                    <CardTitle className="text-2xl">Mannen (+V) Training</CardTitle>
                    <CardDescription>Voor mannen en gevorderde vrouwen</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="text-4xl font-bold mb-2">
                      €50<span className="text-lg font-normal text-gray-500">/maand</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-6">Onbeperkt trainen</p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                        <span>Onbeperkt trainen</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                        <span>Maandelijks opzegbaar</span>
                      </li>
                      <li className="flex items-start">
                      
                        <span>Maandag 19:30u</span>
                      </li>
                      <li className="flex items-start">
                        
                        <span>Dinsdag 19:30u</span>
                      </li>
                      <li className="flex items-start">
                       
                        <span>Donderdag 19:30u</span>
                      </li>
                      <li className="flex items-start">
                       
                        <span>Vrijdag 09:30u</span>
                      </li>
                      
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full bg-red-600 hover:bg-red-700">
                      <Link href="/signup">Aanmelden</Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Vrouwen Training */}
                <Card className="flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-2xl">Vrouwen Training</CardTitle>
                    <CardDescription>Speciaal voor vrouwen</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="text-4xl font-bold mb-2">
                      €50<span className="text-lg font-normal text-gray-500">/maand</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-6">Onbeperkt trainen</p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                        <span>Onbeperkt trainen</span>
                      </li>
                    
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                        <span>Vrouwvriendelijke omgeving</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                        <span>Aangepaste training</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                        <span>Maandelijks opzegbaar</span>
                      </li>
                        <li className="flex items-start">
                        
                        <span>Maandag 20:30u</span>
                      </li>
                      <li className="flex items-start">
                     
                        <span>Woensdag 20:30u</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full bg-red-600 hover:bg-red-700">
                      <Link href="/signup">Aanmelden</Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Zak Training */}
                <Card className="flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-2xl">Zak Training</CardTitle>
                    <CardDescription>Flexibele training per sessie</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="text-4xl font-bold mb-2">
                      €8<span className="text-lg font-normal text-gray-500">/sessie</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-6">Betaal per keer</p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                        <span>Flexibel bijwonen</span>
                      </li>
                    
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                        <span>Focus op zaktraining</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                        <span>Geen abonnement</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                        <span>Ideaal om te proberen</span>
                      </li>
                        <li className="flex items-start">
                        
                        <span>Woensdag 18:30u</span>
                      </li>
                      <li className="flex items-start">
                        
                        <span>Zaterdag 09:30u</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full bg-red-600 hover:bg-red-700">
                      <Link href="/signup">Aanmelden</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="weekly" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Mannen Training Weekly */}
                <Card className="flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-2xl">Mannen (+V) Training</CardTitle>
                    <CardDescription>1x per week trainen</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="text-4xl font-bold mb-2">
                      €30<span className="text-lg font-normal text-gray-500">/week</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-6">1x per week</p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                        <span>1x per week trainen</span>
                      </li>
                    
                      
                      <li className="flex items-start">
                      
                        <span>Maandag 19:30u</span>
                      </li>
                      <li className="flex items-start">
                        
                        <span>Dinsdag 19:30u</span>
                      </li>
                      <li className="flex items-start">
                       
                        <span>Donderdag 19:30u</span>
                      </li>
                      <li className="flex items-start">
                       
                        <span>Vrijdag 09:30u</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full bg-red-600 hover:bg-red-700">
                      <Link href="/signup">Aanmelden</Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Vrouwen Training Weekly */}
                <Card className="flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-2xl">Vrouwen Training</CardTitle>
                    <CardDescription>1x per week trainen</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="text-4xl font-bold mb-2">
                      €30<span className="text-lg font-normal text-gray-500">/week</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-6">1x per week</p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                        <span>1x per week trainen</span>
                      </li>
                      
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                        <span>Vrouwvriendelijke omgeving</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                        <span>Aangepaste training</span>
                      </li>
                       <li className="flex items-start">
                        
                        <span>Maandag 20:30u</span>
                      </li>
                      <li className="flex items-start">
                     
                        <span>Woensdag 20:30u</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full bg-red-600 hover:bg-red-700">
                      <Link href="/signup">Aanmelden</Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Zak Training Weekly */}
                <Card className="flex flex-col border-red-600 shadow-lg relative">
                  <div className="absolute top-0 left-0 right-0 bg-red-600 text-white text-center py-1 text-sm font-medium">
                    Flexibel
                  </div>
                  <CardHeader className="pt-8">
                    <CardTitle className="text-2xl">Zak Training</CardTitle>
                    <CardDescription>Per sessie betalen</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="text-4xl font-bold mb-2">
                      €8<span className="text-lg font-normal text-gray-500">/sessie</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-6">Betaal per keer</p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                        <span>Flexibel bijwonen</span>
                      </li>
                    
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                        <span>Focus op zaktraining</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                        <span>Geen abonnement</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                        <span>Ideaal om te proberen</span>
                      </li>
                        <li className="flex items-start">
                        
                        <span>Woensdag 18:30u</span>
                      </li>
                      <li className="flex items-start">
                        
                        <span>Zaterdag 09:30u</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full bg-red-600 hover:bg-red-700">
                      <Link href="/signup">Aanmelden</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="yearly" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Mannen Training Yearly */}
                <Card className="flex flex-col border-red-600 shadow-lg relative">
                  <div className="absolute top-0 left-0 right-0 bg-red-600 text-white text-center py-1 text-sm font-medium">
                    Beste deal
                  </div>
                  <CardHeader className="pt-8">
                    <CardTitle className="text-2xl">Mannen (+V) Training</CardTitle>
                    <CardDescription>Onbeperkt trainen met korting</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="text-4xl font-bold mb-2">
                      €500<span className="text-lg font-normal text-gray-500">/jaar</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-6">Bespaar €100 t.o.v. maandelijks</p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                        <span>Training met korting.</span>
                      </li>
                      <li className="flex items-start">
                      
                        <span>Maandag 19:30u</span>
                      </li>
                      <li className="flex items-start">
                        
                        <span>Dinsdag 19:30u</span>
                      </li>
                      <li className="flex items-start">
                       
                        <span>Donderdag 19:30u</span>
                      </li>
                      <li className="flex items-start">
                       
                        <span>Vrijdag 09:30u</span>
                      </li>
                      
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full bg-red-600 hover:bg-red-700">
                      <Link href="/signup">Aanmelden</Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Vrouwen Training Yearly */}
                <Card className="flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-2xl">Vrouwen Training</CardTitle>
                    <CardDescription>Onbeperkt trainen met korting</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="text-4xl font-bold mb-2">
                      €500<span className="text-lg font-normal text-gray-500">/jaar</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-6">Bespaar €100 t.o.v. maandelijks</p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                        <span>Training met korting.</span>
                      </li>
                      
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                        <span>Vrouwvriendelijke omgeving</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                        <span>Aangepaste training</span>
                      </li>
                       <li className="flex items-start">
                        
                        <span>Maandag 20:30u</span>
                      </li>
                      <li className="flex items-start">
                     
                        <span>Woensdag 20:30u</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full bg-red-600 hover:bg-red-700">
                      <Link href="/signup">Aanmelden</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              {/* Note about Zak Training */}
              <div className="text-center bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Zak Training</h3>
                <p className="text-gray-600">
                  Zak Training is alleen beschikbaar per sessie (€8). Woensdag 18:30u en Zaterdag 09:30u.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Additional Options */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-gray-100">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Extra Opties</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Aanvullende diensten en producten om je bokservaring te verbeteren.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Personal training</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-2">
                  €50<span className="text-sm font-normal text-gray-500">/sessie</span>
                </div>
                <p className="text-sm text-gray-600">Een-op-een training met een van onze ervaren trainers.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>CUSTOM1</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-2">
                  €___<span className="text-sm font-normal text-gray-500">/paar</span>
                </div>
                <p className="text-sm text-gray-600">______________.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>CUSTOM2</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-2">€____</div>
                <p className="text-sm text-gray-600">___________________________________.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>CUSTOM3</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-2">
                  €_____<span className="text-sm font-normal text-gray-500">/item</span>
                </div>
                <p className="text-sm text-gray-600">_________________________.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Veelgestelde Vragen</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          </div>

          <div className="space-y-6">
            <div className="border-b pb-4">
              <h3 className="text-xl font-bold mb-2">Kan ik een proefles nemen?</h3>
              <p className="text-gray-700">
                Ja, je kunt een proefles boeken voor €10 via onze website of door contact met ons op te nemen.
              </p>
            </div>

            <div className="border-b pb-4">
              <h3 className="text-xl font-bold mb-2">Wat is het verschil tussen Mannen en Vrouwen training?</h3>
              <p className="text-gray-700">
                Mannen training is ook toegankelijk voor gevorderde vrouwen (+V). Vrouwen training biedt een
                vrouwvriendelijke omgeving met aangepaste training specifiek voor vrouwen.
              </p>
            </div>

            <div className="border-b pb-4">
              <h3 className="text-xl font-bold mb-2">Wat is Zak Training?</h3>
              <p className="text-gray-700">
                Zak Training is een flexibele optie waarbij je per sessie betaalt (€8). Perfect om boksen uit te
                proberen zonder abonnement. Beschikbaar op woensdag 18:30u en zaterdag 09:30u.
              </p>
            </div>

            <div className="border-b pb-4">
              <h3 className="text-xl font-bold mb-2">Kan ik switchen tussen 1x per week en onbeperkt?</h3>
              <p className="text-gray-700">
                Ja, je kunt je lidmaatschap aanpassen. Neem contact met ons op om je betalingsperiode te wijzigen.
              </p>
            </div>

            <div className="border-b pb-4">
              <h3 className="text-xl font-bold mb-2">Zijn er kortingen?</h3>
              <p className="text-gray-700">
                Ja, onze jaarabonnementen bieden een korting van €100 euro ten opzichte van maandelijkse betalingen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-black text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Klaar om te beginnen?</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Meld je vandaag nog aan en begin met boksen bij Maaskracht Rotterdam.
          </p>
          <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
            <Link href="/signup">Meld je nu aan</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}


