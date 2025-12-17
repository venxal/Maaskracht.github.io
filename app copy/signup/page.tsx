"use client"

import { useState, useEffect } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { CalendarIcon, Check } from "lucide-react"
import { format } from "date-fns"
import { nl } from "date-fns/locale"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { toast } from "@/components/ui/use-toast"

// Update the schema to include new training types
const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "Voornaam moet minimaal 2 karakters bevatten.",
  }),
  lastName: z.string().min(2, {
    message: "Achternaam moet minimaal 2 karakters bevatten.",
  }),
  email: z.string().email({
    message: "Ongeldig e-mailadres.",
  }),
  phone: z.string().min(10, {
    message: "Telefoonnummer moet minimaal 10 cijfers bevatten.",
  }),
  birthDate: z.date({
    required_error: "Geboortedatum is verplicht.",
  }),
  experience: z.enum(["none", "beginner", "intermediate", "advanced"], {
    required_error: "Selecteer je ervaring.",
  }),
  membership: z.enum(["proefles", "mannen", "vrouwen", "zak-training"], {
    required_error: "Selecteer een training.",
  }),
  paymentPeriod: z.enum(["weekly", "monthly", "yearly", "once"], {
    required_error: "Selecteer een betalingsperiode.",
  }),
  message: z.string().optional(),
  termsAccepted: z.literal(true, {
    errorMap: () => ({ message: "Je moet akkoord gaan met de voorwaarden." }),
  }),
})

export default function SignupPage() {
  const [step, setStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      experience: "none",
      membership: "mannen",
      paymentPeriod: "monthly",
    },
  })

  // Set payment period to "once" when proefles is selected, or "weekly" when zak-training is selected
  useEffect(() => {
    const membership = form.watch("membership")
    if (membership === "proefles") {
      form.setValue("paymentPeriod", "once")
    } else if (membership === "zak-training") {
      form.setValue("paymentPeriod", "weekly")
    } else if (form.watch("paymentPeriod") === "once") {
      form.setValue("paymentPeriod", "monthly")
    }
  }, [form, form.watch("membership")])

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    try {
      // Prepare form data for Formspree
      const formData = new FormData()

      // Add all form fields with descriptive names
      formData.append("firstName", values.firstName)
      formData.append("lastName", values.lastName)
      formData.append("email", values.email)
      formData.append("phone", values.phone)
      formData.append("birthDate", format(values.birthDate, "dd-MM-yyyy"))
      formData.append("experience", values.experience)
      formData.append("membership", values.membership)
      formData.append("paymentPeriod", values.paymentPeriod)
      formData.append("message", values.message || "")
      formData.append("termsAccepted", values.termsAccepted.toString())

      // Add a subject line for the email
      const isProefles = values.membership === "proefles"
      formData.append(
        "_subject",
        isProefles
          ? `Nieuwe proefles aanvraag: ${values.firstName} ${values.lastName}`
          : `Nieuwe aanmelding: ${values.firstName} ${values.lastName}`,
      )

      // Optional: Add a custom reply-to
      formData.append("_replyto", values.email)

      // Submit to Formspree - Replace 'yourFormID' with your actual Formspree form ID
      const response = await fetch("https://formspree.io/f/xkgbwkry", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setIsSubmitted(true)
        toast({
          title: isProefles ? "Proefles aangevraagd!" : "Aanmelding verzonden!",
          description: isProefles
            ? "We hebben je aanvraag voor een proefles ontvangen en zullen zo snel mogelijk contact met je opnemen."
            : "We hebben je aanmelding ontvangen en zullen zo snel mogelijk contact met je opnemen om je lidmaatschap te bevestigen.",
        })
      } else {
        throw new Error("Er is iets misgegaan bij het verzenden van je aanmelding.")
      }
    } catch (error) {
      toast({
        title: "Fout bij verzenden",
        description: "Er is iets misgegaan. Probeer het opnieuw of neem contact met ons op.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const nextStep = () => {
    if (step === 1) {
      form.trigger(["firstName", "lastName", "email", "phone", "birthDate"]).then((isValid) => {
        if (isValid) setStep(2)
      })
    }
  }

  const prevStep = () => {
    if (step === 2) setStep(1)
  }

  const getMembershipPrice = (membership: string, period: string) => {
    if (membership === "proefles") return 10

    const prices = {
      mannen: { weekly: 30, monthly: 50, yearly: 500, once: null },
      vrouwen: { weekly: 30, monthly: 50, yearly: 500, once: null },
      "zak-training": { weekly: 8, monthly: null, yearly: null, once: null },
    }

    return prices[membership as keyof typeof prices]?.[period as keyof typeof prices.mannen] || null
  }

  const getMembershipLabel = (membership: string) => {
    const labels = {
      proefles: "Proefles",
      mannen: "Mannen Training",
      vrouwen: "Vrouwen Training",
      "zak-training": "Zak Training",
    }
    return labels[membership as keyof typeof labels] || membership
  }

  const getPeriodLabel = (period: string) => {
    const labels = {
      weekly: "per week",
      monthly: "per maand",
      yearly: "per jaar",
      once: "eenmalig",
    }
    return labels[period as keyof typeof labels] || period
  }

  const isProefles = form.watch("membership") === "proefles"
  const isZakTraining = form.watch("membership") === "zak-training"

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-black text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Word lid van Maaskracht Rotterdam</h1>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl max-w-2xl mx-auto">
            Vul het onderstaande formulier in om je aan te melden voor een training of proefles.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-3xl">
          {!isSubmitted ? (
            <>
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div
                      className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center text-white font-bold",
                        step >= 1 ? "bg-red-600" : "bg-gray-300",
                      )}
                    >
                      1
                    </div>
                    <div className={cn("h-1 w-16 mx-2", step >= 2 ? "bg-red-600" : "bg-gray-300")}></div>
                    <div
                      className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center font-bold",
                        step >= 2 ? "bg-red-600 text-white" : "bg-gray-300 text-gray-600",
                      )}
                    >
                      2
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">Stap {step} van 2</div>
                </div>
                <h2 className="text-2xl font-bold mb-2">{step === 1 ? "Persoonlijke gegevens" : "Training details"}</h2>
                <p className="text-gray-600">
                  {step === 1
                    ? "Vul je persoonlijke gegevens in zodat we contact met je kunnen opnemen."
                    : "Kies je training en betalingsperiode."}
                </p>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  {step === 1 && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Voornaam</FormLabel>
                              <FormControl>
                                <Input placeholder="Voer je voornaam in" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Achternaam</FormLabel>
                              <FormControl>
                                <Input placeholder="Voer je achternaam in" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>E-mailadres</FormLabel>
                              <FormControl>
                                <Input placeholder="naam@voorbeeld.nl" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Telefoonnummer</FormLabel>
                              <FormControl>
                                <Input placeholder="06 12345678" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="birthDate"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel>Geboortedatum</FormLabel>
                            <Popover>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    variant={"outline"}
                                    className={cn(
                                      "w-full pl-3 text-left font-normal",
                                      !field.value && "text-muted-foreground",
                                    )}
                                  >
                                    {field.value ? (
                                      format(field.value, "PPP", { locale: nl })
                                    ) : (
                                      <span>Kies een datum</span>
                                    )}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                  mode="single"
                                  selected={field.value}
                                  onSelect={field.onChange}
                                  disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                                  initialFocus
                                />
                              </PopoverContent>
                            </Popover>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="experience"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Bokservaring</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Selecteer je ervaring" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="none">Geen ervaring</SelectItem>
                                <SelectItem value="beginner">Beginner (0-1 jaar)</SelectItem>
                                <SelectItem value="intermediate">Gemiddeld (1-3 jaar)</SelectItem>
                                <SelectItem value="advanced">Gevorderd (3+ jaar)</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormDescription>Selecteer je huidige niveau van bokservaring.</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-6">
                      <FormField
                        control={form.control}
                        name="membership"
                        render={({ field }) => (
                          <FormItem className="space-y-3">
                            <FormLabel>Training</FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex flex-col space-y-1"
                              >
                                {/* Proefles Option */}
                                <FormItem className="flex items-center space-x-3 space-y-0 border rounded-md p-4">
                                  <FormControl>
                                    <RadioGroupItem value="proefles" />
                                  </FormControl>
                                  <FormLabel className="font-normal cursor-pointer flex-1">
                                    <div className="font-bold">Proefles</div>
                                    <div className="text-sm text-gray-500">
                                      Eenmalige les om kennis te maken met boksen
                                    </div>
                                  </FormLabel>
                                  <div className="font-bold">€10</div>
                                </FormItem>

                                {/* Mannen Training */}
                                <FormItem
                                  className={cn(
                                    "flex items-start space-x-3 space-y-0 border rounded-md p-4",
                                    field.value === "mannen" && "border-red-600 bg-red-50",
                                  )}
                                >
                                  <FormControl>
                                    <RadioGroupItem value="mannen" className="mt-1" />
                                  </FormControl>
                                  <FormLabel className="font-normal cursor-pointer flex-1">
                                    <div className="font-bold">Mannen (+V) Training</div>
                                    <div className="text-sm text-gray-500 mb-2">
                                      Maandag 19:30u - Dinsdag 19:30u - Donderdag 19:30u - Vrijdag 09:30u
                                    </div>
                                  </FormLabel>
                                  <div className="font-bold">
                                    €{getMembershipPrice("mannen", form.watch("paymentPeriod"))}
                                    {form.watch("paymentPeriod") === "weekly"
                                      ? "/week"
                                      : form.watch("paymentPeriod") === "monthly"
                                        ? "/maand"
                                        : "/jaar"}
                                  </div>
                                </FormItem>

                                {/* Vrouwen Training */}
                                <FormItem
                                  className={cn(
                                    "flex items-start space-x-3 space-y-0 border rounded-md p-4",
                                    field.value === "vrouwen" && "border-red-600 bg-red-50",
                                  )}
                                >
                                  <FormControl>
                                    <RadioGroupItem value="vrouwen" className="mt-1" />
                                  </FormControl>
                                  <FormLabel className="font-normal cursor-pointer flex-1">
                                    <div className="font-bold">Vrouwen Training</div>
                                    <div className="text-sm text-gray-500 mb-2">Maandag 20:30u - Woensdag 20:30u</div>
                                  </FormLabel>
                                  <div className="font-bold">
                                    €{getMembershipPrice("vrouwen", form.watch("paymentPeriod"))}
                                    {form.watch("paymentPeriod") === "weekly"
                                      ? "/week"
                                      : form.watch("paymentPeriod") === "monthly"
                                        ? "/maand"
                                        : "/jaar"}
                                  </div>
                                </FormItem>

                                {/* Zak Training */}
                                <FormItem
                                  className={cn(
                                    "flex items-start space-x-3 space-y-0 border rounded-md p-4",
                                    field.value === "zak-training" && "border-red-600 bg-red-50",
                                  )}
                                >
                                  <FormControl>
                                    <RadioGroupItem value="zak-training" className="mt-1" />
                                  </FormControl>
                                  <FormLabel className="font-normal cursor-pointer flex-1">
                                    <div className="font-bold">Zak Training</div>
                                    <div className="text-sm text-gray-500 mb-2">Woensdag 18:30u - Zaterdag 09:30u</div>
                                  </FormLabel>
                                  <div className="font-bold">€8/sessie</div>
                                </FormItem>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {!isProefles && (
                        <FormField
                          control={form.control}
                          name="paymentPeriod"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Betalingsperiode</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isProefles}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Selecteer betalingsperiode" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {isZakTraining ? (
                                    <SelectItem value="weekly">Per sessie (€8)</SelectItem>
                                  ) : (
                                    <>
                                      <SelectItem value="weekly">Wekelijks - €30 (1x per week)</SelectItem>
                                      <SelectItem value="monthly">Maandelijks - €50 (onbeperkt)</SelectItem>
                                      <SelectItem value="yearly">Jaarlijks - €500 (onbeperkt + korting)</SelectItem>
                                    </>
                                  )}
                                </SelectContent>
                              </Select>
                              <FormDescription>
                                {isZakTraining
                                  ? "Zak training wordt per sessie betaald."
                                  : isProefles
                                    ? "Proefles is een eenmalige betaling."
                                    : "Wekelijks = 1x per week trainen. Maandelijks/Jaarlijks = onbeperkt trainen."}
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      )}

                      {/* Price Summary */}
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-bold mb-2">Samenvatting</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="font-medium">{getMembershipLabel(form.watch("membership"))}</span>
                            <span className="font-bold text-lg">
                              €{getMembershipPrice(form.watch("membership"), form.watch("paymentPeriod"))}
                              {isProefles
                                ? " (eenmalig)"
                                : isZakTraining
                                  ? "/sessie"
                                  : `/${getPeriodLabel(form.watch("paymentPeriod"))}`}
                            </span>
                          </div>
                          {!isProefles && !isZakTraining && (
                            <div className="text-sm text-gray-600">
                              {form.watch("paymentPeriod") === "weekly" ? "1x per week trainen" : "Onbeperkt trainen"}
                              {form.watch("paymentPeriod") === "yearly" && " (€100 korting t.o.v. maandelijks)"}
                            </div>
                          )}
                        </div>
                      </div>

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Bericht (optioneel)</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Laat ons weten als je nog vragen of opmerkingen hebt"
                                className="resize-none"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription>Heb je specifieke vragen of wensen? Laat het ons weten.</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="termsAccepted"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                            <FormControl>
                              <input
                                type="checkbox"
                                checked={field.value}
                                onChange={field.onChange}
                                className="h-4 w-4 mt-1"
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>Ik ga akkoord met de algemene voorwaarden en het privacybeleid</FormLabel>
                              <FormDescription>
                                Door je aan te melden ga je akkoord met onze voorwaarden en bevestig je dat je ons
                                privacybeleid hebt gelezen.
                              </FormDescription>
                              <FormMessage />
                            </div>
                          </FormItem>
                        )}
                      />
                    </div>
                  )}

                  <div className="flex justify-between pt-4">
                    {step === 2 ? (
                      <Button type="button" variant="outline" onClick={prevStep} disabled={isSubmitting}>
                        Vorige
                      </Button>
                    ) : (
                      <div></div>
                    )}

                    {step === 1 ? (
                      <Button type="button" onClick={nextStep} className="bg-red-600 hover:bg-red-700">
                        Volgende
                      </Button>
                    ) : (
                      <Button type="submit" className="bg-red-600 hover:bg-red-700" disabled={isSubmitting}>
                        {isSubmitting ? "Verzenden..." : isProefles ? "Proefles aanvragen" : "Aanmelden"}
                      </Button>
                    )}
                  </div>
                </form>
              </Form>
            </>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold mb-4">
                {form.getValues("membership") === "proefles"
                  ? "Bedankt voor je aanvraag!"
                  : "Bedankt voor je aanmelding!"}
              </h2>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                {form.getValues("membership") === "proefles"
                  ? "We hebben je aanvraag voor een proefles ontvangen en zullen zo snel mogelijk contact met je opnemen om een datum en tijd af te spreken."
                  : "We hebben je aanvraag ontvangen en zullen zo snel mogelijk contact met je opnemen om je training te bevestigen."}
              </p>
              <Button asChild className="bg-red-600 hover:bg-red-700">
                <a href="/">Terug naar home</a>
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

