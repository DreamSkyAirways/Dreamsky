import { insurances } from "@/app/data/insurence";
import type { Metadata } from "next";
import Link from "next/link"

export const metadata : Metadata={
  title: "Travel Insurance Safe Journey | Dream Sky Airways",
  description: "Get reliable travel insurance with Dream Sky Airways. Protect your trip with coverage for medical emergencies, delays, baggage loss, and cancellations.",
  keywords: [
    "travel insurance",
    "trip protection",
    "flight insurance",
    "journey protection",
    " travel safety",
    "Dream Sky Airways insurance",

  ],
  alternates:{
    canonical:"https://www.dreamskyairways.com/insurance",
  },
  openGraph:{
    title: "Travel Insurance Safe Journey | Dream Sky Airways",
    description:"Get reliable travel insurance with Dream Sky Airways. Protect your trip with coverage for medical emergencies, delays, baggage loss, and cancellations",
    url :"https://www.dreamskyairways.com/insurance",
    siteName:"Dream Sky Airways",
    locale:"en_In",
    type:"website",
    images:[
      { 
        url:"https://www.dreamskyairways.com/ogImage.webp",
          width: 1200,
          height: 630,
          alt: "Dream Sky Airways Careers",
      },          
    ],
},
 twitter:{
    card:"summary_large_image",
    title:"Travel Insurance Safe Journey | Dream Sky Airways",
    description:"Get reliable travel insurance with Dream Sky Airways. Protect your trip with coverage for medical emergencies, delays, baggage loss, and cancellations",
    images: ["https://www.dreamskyairways.com/ogImage.webp"],
  },
  robots:{
    index:true,
    follow:true,
    nocache:false,
    googleBot:{
      index:true,
      follow:true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview":"large",
      "max-snippet":-1,
    },
    
  },
};
export default function TravelInsurancePage() {
  return (
    <main className="w-ful mt-15">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full">
        {/* Hero Image */}
        <img
          src="/ins/ins.webp"
          alt="Travel Insurance Services"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 " />

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-4 max-w-3xl">
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-[#0E5B63] text-white text-sm tracking-wide">
              Secure • Safe • Stress-Free Travel
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Travel Insurance Services
            </h1>

            <p className="text-lg text-gray-100 mb-8">
              Smart travel insurance plans that protect you from medical
              emergencies, trip cancellations, delays, and unexpected travel
              risks anywhere in the world.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#insurance-types"
                className="px-6 py-3 rounded-lg bg-white text-[#0E5B63] font-semibold hover:bg-gray-100 transition"
              >
                Get Quote
              </a>
              <a
                href="/contact"
                className="px-6 py-3 rounded-lg border border-white text-white font-medium hover:bg-white hover:text-[#0E5B63] transition"
              >
                Contact Expert
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section below Hero */}
      <section className="py-14 px-4 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#0E5B63] mb-4">
          Why Travel Insurance is Important
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Travel insurance protects you financially against unexpected events such as medical emergencies, flight delays, baggage loss, trip cancellations, and visa issues.
           With <Link href="/" className="text-blue-600 font-medium hover:underline"><strong>Dream Sky Airways</strong></Link> travel insurance, you will get protection and support during your journey. Whether you are travelling for leisure, business, studies, or adventure,
           the right insurance ensures peace of mind and helps you travel safely and confidently worldwide.
        </p>
      </section>

      {/* Insurance Types */}
      <section
        id="insurance-types"
        className="py-16 px-4 max-w-7xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-[#0E5B63] mb-10 text-center">
          Types of Travel Insurance
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {insurances.map((insurance) => (
            <article
              key={insurance.id}
              id={insurance.slug}
              className="border rounded-2xl p-6 hover:shadow-xl transition bg-white flex flex-col hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-[#0E5B63] mb-2">
                {insurance.title}
              </h3>

              <p className="text-gray-600 mb-4">
                {insurance.description}
              </p>

              <ul className="mb-4 space-y-1">
                {insurance.highlights.map((item, index) => (
                  <li
                    key={index}
                    className="text-sm text-gray-700 flex items-start"
                  >
                    <span className="mr-2 text-[#0E5B63]">•</span>
                    {item}
                  </li>
                ))}
              </ul>

              <p className="text-sm text-gray-600 mb-2">
                <span className="font-medium text-gray-900">
                  Who should buy:
                </span>{" "}
                {insurance.whoShouldBuy}
              </p>

              <div className="mt-auto pt-4 flex items-center justify-between">
                <span className="text-sm font-semibold text-[#0E5B63] hover:underline cursor-pointer">
                  Enquire for Pricing
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-[#0E5B63]/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0E5B63] mb-8 text-center">
            Travel Insurance FAQs
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "Is travel insurance mandatory?",
                a: "Travel insurance is mandatory for certain countries like Schengen nations, while for others it is highly recommended for financial and medical safety.",
              },
              {
                q: "What does travel insurance cover?",
                a: "It typically covers medical emergencies, trip cancellation, baggage loss, flight delays, personal accidents, and more depending on the policy.",
              },
              {
                q: "Does travel insurance cover COVID?",
                a: "Many modern travel insurance plans include COVID-19 related medical treatment and trip cancellation coverage.",
              },
              {
                q: "Can I buy insurance after booking tickets?",
                a: "Yes, travel insurance can be purchased after booking tickets, but earlier purchase ensures better coverage.",
              },
              {
                q: "What happens if my visa is rejected?",
                a: "Some insurance plans offer visa rejection coverage for non-refundable expenses.",
              },
              {
                q: "How do I claim travel insurance?",
                a: "You need to inform the insurer, submit required documents, and follow the claim process mentioned in your policy.",
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="bg-white p-4 rounded-lg border hover:shadow-md transition"
              >
                <summary className="font-medium cursor-pointer text-[#0E5B63]">
                  {faq.q}
                </summary>
                <p className="mt-2 text-gray-600">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
