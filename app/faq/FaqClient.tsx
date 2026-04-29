
"use client";
import Link from "next/link";
import { useState } from "react";

// export const metadata = {
//   title: "FAQ | Flight, Bus, Hotel, Visa, Insurance & Travel Booking Questions",
//   description:
//     "Find quick answers to common questions about flight booking, bus tickets, hotel reservations, cab services, tour packages, visa guidance, visa processing, travel insurance, payments, refunds, cancellations and legal terms.",
// };

type Category = 
  | "flights"
  | "bus"
  | "hotels"
  | "cabs"
  | "tours"
  | "visa-guidance"
  | "visa-processing"
  | "insurance"
  | "booking-payment"
  | "legal";

const categories: { id: Category; label: string }[] = [
  { id: "flights", label: "Flight Booking" },
  { id: "bus", label: "Bus Booking" },
  { id: "hotels", label: "Hotel Booking" },
  { id: "cabs", label: "Cab / Taxi" },
  { id: "tours", label: "Tour Packages" },
  { id: "visa-guidance", label: "Visa Guidance" },
  { id: "visa-processing", label: "Visa Processing" },
  { id: "insurance", label: "Travel Insurance" },
  { id: "booking-payment", label: "Booking & Payment" },
  { id: "legal", label: "Terms & Legal" },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("flights");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-[#0c4a50] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-5 py-2 rounded-full mb-6 text-sm font-medium">
            <span>Help</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
            <span>Support</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
            <span>Answers</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Frequently Asked Questions
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto">
            Quick answers to your questions about flight, bus, hotel, cab bookings, tour packages, visa services, travel insurance, payments,<Link href="/privacy-policy" className="text-blue-600 font-medium hover:underline"><strong>refunds and our policies.</strong></Link>
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-12 lg:py-20">
        {/* Category Tabs / Cards */}
        <div className="mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`
                  px-5 py-4 rounded-xl text-center font-medium transition-all duration-200
                  border-2 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#0E5B63]/40
                  ${
                    activeCategory === cat.id
                      ? "bg-[#0E5B63] text-white border-[#0E5B63]"
                      : "bg-white text-gray-700 border-gray-200 hover:border-[#0E5B63]/60 hover:bg-[#0E5B63]/5"
                  }
                `}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Active Category FAQs */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6 md:p-10">
            <h2 className="text-3xl font-bold text-[#0E5B63] mb-10 pb-4 border-b border-gray-200">
              {categories.find(c => c.id === activeCategory)?.label} FAQs
            </h2>

            <div className="space-y-5">
              {activeCategory === "flights" && (
                <>
                  <details className="group bg-gray-50 rounded-xl border border-gray-200">
                    <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-medium text-gray-800 group-hover:text-[#0E5B63] transition-colors">
                      <span>Can I change or cancel my flight booking?</span>
                      <span className="ml-4 text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="px-6 pb-6 pt-2 text-gray-700">
                      Flight change/cancellation policies depend on the airline and fare type selected at booking. Most promotional fares are non-refundable. You can request changes via our platform or directly with the airline. Our service fee is non-refundable in all cases.
                    </div>
                  </details>

                  <details className="group bg-gray-50 rounded-xl border border-gray-200">
                    <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-medium text-gray-800 group-hover:text-[#0E5B63] transition-colors">
                      <span>What happens if my flight is delayed or cancelled by the airline?</span>
                      <span className="ml-4 text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="px-6 pb-6 pt-2 text-gray-700">
                      Airline cancellations and significant delays are handled directly by the airline as per DGCA/EC regulations. We assist by providing updated status and rebooking options when available. Compensation (if applicable) is provided by the airline.
                    </div>
                  </details>

                  <details className="group bg-gray-50 rounded-xl border border-gray-200">
                    <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-medium text-gray-800 group-hover:text-[#0E5B63] transition-colors">
                      <span>Do you charge any convenience fee for flight bookings?</span>
                      <span className="ml-4 text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="px-6 pb-6 pt-2 text-gray-700">
                      Yes, a transparent convenience fee is added at checkout (shown before payment). This covers payment gateway charges, technology maintenance and customer support.
                    </div>
                  </details>

                  <details className="group bg-gray-50 rounded-xl border border-gray-200">
                    <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-medium text-gray-800 group-hover:text-[#0E5B63] transition-colors">
                      <span>Why is my PNR not showing confirmed status immediately?</span>
                      <span className="ml-4 text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="px-6 pb-6 pt-2 text-gray-700">
                      Some low-cost carriers confirm within 30–120 minutes. You will receive confirmation via email/SMS once the airline issues the ticket. If status remains pending 4 hours, contact support.
                    </div>
                  </details>

                  <details className="group bg-gray-50 rounded-xl border border-gray-200">
                    <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-medium text-gray-800 group-hover:text-[#0E5B63] transition-colors">
                      <span>Can I add baggage or select seats after booking?</span>
                      <span className="ml-4 text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="px-6 pb-6 pt-2 text-gray-700">
                      Yes – most airlines allow adding baggage and seat selection post-booking via their website/app using your PNR and last name. Some services may be available through us for an additional fee.
                    </div>
                  </details>
                </>
              )}

              {activeCategory === "bus" && (
                <>
                  <details className="group bg-gray-50 rounded-xl border border-gray-200">
                    <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-medium text-gray-800 group-hover:text-[#0E5B63] transition-colors">
                      <span>Can I change my boarding point after booking?</span>
                      <span className="ml-4 text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="px-6 pb-6 pt-2 text-gray-700">
                      Boarding point changes are usually not allowed after confirmation. Contact support immediately – some operators may allow it subject to availability and fees.
                    </div>
                  </details>

                  <details className="group bg-gray-50 rounded-xl border border-gray-200">
                    <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-medium text-gray-800 group-hover:text-[#0E5B63] transition-colors">
                      <span>What if the bus is delayed or doesn't arrive on time?</span>
                      <span className="ml-4 text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="px-6 pb-6 pt-2 text-gray-700">
                      Delays are common due to traffic/breakdowns. Contact the operator directly using details in your ticket. We provide assistance in tracking and alternative options when possible.
                    </div>
                  </details>

                  <details className="group bg-gray-50 rounded-xl border border-gray-200">
                    <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-medium text-gray-800 group-hover:text-[#0E5B63] transition-colors">
                      <span>Is my luggage insured during bus travel?</span>
                      <span className="ml-4 text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="px-6 pb-6 pt-2 text-gray-700">
                      Most operators offer limited liability for checked luggage. We recommend purchasing travel insurance for valuable items. Luggage is carried at owner's risk.
                    </div>
                  </details>

                  <details className="group bg-gray-50 rounded-xl border border-gray-200">
                    <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-medium text-gray-800 group-hover:text-[#0E5B63] transition-colors">
                      <span>Can I cancel my bus ticket and get a refund?</span>
                      <span className="ml-4 text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="px-6 pb-6 pt-2 text-gray-700">
                      Yes – cancellation charges vary by operator and time remaining (typically 0–50% deduction). Full refund possible only if cancelled before operator's cut-off time.
                    </div>
                  </details>

                  <details className="group bg-gray-50 rounded-xl border border-gray-200">
                    <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-medium text-gray-800 group-hover:text-[#0E5B63] transition-colors">
                      <span>Do I need to carry a printout of the bus ticket?</span>
                      <span className="ml-4 text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="px-6 pb-6 pt-2 text-gray-700">
                      Most operators accept e-tickets shown on mobile. Some state transport corporations may require a printed copy – check your ticket details.
                    </div>
                  </details>
                </>
              )}

              {activeCategory === "hotels" && (
                <>
                  <details className="group bg-gray-50 rounded-xl border border-gray-200">
                    <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-medium text-gray-800 group-hover:text-[#0E5B63] transition-colors">
                      <span>What is the check-in / check-out time policy?</span>
                      <span className="ml-4 text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="px-6 pb-6 pt-2 text-gray-700">
                      Standard check-in is 14:00–15:00 and check-out 11:00–12:00. Early check-in / late check-out is subject to availability and may incur extra charges.
                    </div>
                  </details>

                  <details className="group bg-gray-50 rounded-xl border border-gray-200">
                    <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-medium text-gray-800 group-hover:text-[#0E5B63] transition-colors">
                      <span>Can I cancel or modify my hotel booking?</span>
                      <span className="ml-4 text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="px-6 pb-6 pt-2 text-gray-700">
                      Cancellation/modification policies vary by hotel and rate type (shown at booking). Free cancellation is available on many flexible rates until 24–48 hours before arrival.
                    </div>
                  </details>

                  <details className="group bg-gray-50 rounded-xl border border-gray-200">
                    <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-medium text-gray-800 group-hover:text-[#0E5B63] transition-colors">
                      <span>Are meals included in the hotel booking?</span>
                      <span className="ml-4 text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="px-6 pb-6 pt-2 text-gray-700">
                      Meal inclusion depends on the selected rate (Room Only, Breakfast, Half Board, etc.). Details are clearly mentioned during booking.
                    </div>
                  </details>

                  <details className="group bg-gray-50 rounded-xl border border-gray-200">
                    <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-medium text-gray-800 group-hover:text-[#0E5B63] transition-colors">
                      <span>What if the hotel downgrades my room or is overbooked?</span>
                      <span className="ml-4 text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="px-6 pb-6 pt-2 text-gray-700">
                      In rare overbooking cases, hotels must provide comparable or better accommodation at no extra cost. Contact us immediately if this occurs.
                    </div>
                  </details>

                  <details className="group bg-gray-50 rounded-xl border border-gray-200">
                    <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-medium text-gray-800 group-hover:text-[#0E5B63] transition-colors">
                      <span>Do hotels accept local IDs for check-in?</span>
                      <span className="ml-4 text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="px-6 pb-6 pt-2 text-gray-700">
                      Most hotels in India require valid government-issued photo ID (Aadhaar, Passport, Voter ID, Driving License). Foreign nationals must present passport + visa.
                    </div>
                  </details>
                </>
              )}

              {activeCategory === "cabs" && (
                <>
                  <details className="group bg-gray-50 rounded-xl border border-gray-200">
                    <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-medium text-gray-800 group-hover:text-[#0E5B63] transition-colors">
                      <span>Can I change pickup time or location after booking?</span>
                      <span className="ml-4 text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="px-6 pb-6 pt-2 text-gray-700">
                      Minor changes can be requested via support up to 2 hours before pickup (subject to availability). Major changes may require re-booking.
                    </div>
                  </details>

                  <details className="group bg-gray-50 rounded-xl border border-gray-200">
                    <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-medium text-gray-800 group-hover:text-[#0E5B63] transition-colors">
                      <span>What happens if my driver is late?</span>
                      <span className="ml-4 text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="px-6 pb-6 pt-2 text-gray-700">
                      We track rides in real-time. If delayed beyond 10–15 minutes, contact driver/support. Waiting time is usually free for airport pickups (30–60 min).
                    </div>
                  </details>

                  <details className="group bg-gray-50 rounded-xl border border-gray-200">
                    <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-medium text-gray-800 group-hover:text-[#0E5B63] transition-colors">
                      <span>Are tolls, parking, and interstate taxes included?</span>
                      <span className="ml-4 text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="px-6 pb-6 pt-2 text-gray-700">
                      Base fare usually excludes tolls, parking, and state entry taxes. These are payable directly to the driver and shown transparently.
                    </div>
                  </details>

                  <details className="group bg-gray-50 rounded-xl border border-gray-200">
                    <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-medium text-gray-800 group-hover:text-[#0E5B63] transition-colors">
                      <span>Can I book a cab for multiple days or outstation round trip?</span>
                      <span className="ml-4 text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="px-6 pb-6 pt-2 text-gray-700">
                      Yes – we offer outstation packages with per km/day pricing. Night halt charges and driver allowance may apply for multi-day trips.
                    </div>
                  </details>

                  <details className="group bg-gray-50 rounded-xl border border-gray-200">
                    <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-medium text-gray-800 group-hover:text-[#0E5B63] transition-colors">
                      <span>What if I need to cancel my cab booking?</span>
                      <span className="ml-4 text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="px-6 pb-6 pt-2 text-gray-700">
                      Free cancellation up to 1 hour before pickup for local rides (policy varies for outstation). After that, nominal charges may apply.
                    </div>
                  </details>
                </>
              )}

              {activeCategory === "tours" && (
                <>
                  <details className="group bg-gray-50 rounded-xl border border-gray-200">
                    <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-medium text-gray-800 group-hover:text-[#0E5B63] transition-colors">
                      <span>Can I customize a tour package?</span>
                      <span className="ml-4 text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="px-6 pb-6 pt-2 text-gray-700">
                      Yes – we offer customisation for most packages. Contact our travel experts with your preferences (dates, hotels, activities, budget).
                    </div>
                  </details>

                  <details className="group bg-gray-50 rounded-xl border border-gray-200">
                    <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-medium text-gray-800 group-hover:text-[#0E5B63] transition-colors">
                      <span>What is included and excluded in tour packages?</span>
                      <span className="ml-4 text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="px-6 pb-6 pt-2 text-gray-700">
                      Inclusions typically cover accommodation, transfers, sightseeing, some meals. Exclusions usually include airfare, visa, insurance, personal expenses, optional activities.
                    </div>
                  </details>

                  <details className="group bg-gray-50 rounded-xl border border-gray-200">
                    <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-medium text-gray-800 group-hover:text-[#0E5B63] transition-colors">
                      <span>What happens if the minimum group size is not met?</span>
                      <span className="ml-4 text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="px-6 pb-6 pt-2 text-gray-700">
                      If minimum pax not reached, we inform you 15–30 days in advance. Options include full refund or upgrade to private departure at extra cost.
                    </div>
                  </details>

                  <details className="group bg-gray-50 rounded-xl border border-gray-200">
                    <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-medium text-gray-800 group-hover:text-[#0E5B63] transition-colors">
                      <span>Are adventure activities safe?</span>
                      <span className="ml-4 text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="px-6 pb-6 pt-2 text-gray-700">
                      We partner with certified operators using standard safety protocols. Adventure activities carry inherent risks – travel insurance is strongly recommended.
                    </div>
                  </details>

                  <details className="group bg-gray-50 rounded-xl border border-gray-200">
                    <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-medium text-gray-800 group-hover:text-[#0E5B63] transition-colors">
                      <span>Can I get a refund if I cancel my tour?</span>
                      <span className="ml-4 text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="px-6 pb-6 pt-2 text-gray-700">
                      Cancellation charges increase closer to departure (typically 0–100%). Airfare/visa/insurance components follow respective provider policies.
                    </div>
                  </details>
                </>
              )}

              {activeCategory === "visa-guidance" && (
                <>
                  <details className="group bg-gray-50 rounded-xl border border-gray-200">
                    <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-medium text-gray-800 group-hover:text-[#0E5B63] transition-colors">
                      <span>Do you guarantee visa approval?</span>
                      <span className="ml-4 text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="px-6 pb-6 pt-2 text-gray-700">
                      No – visa decisions are made solely by embassies/consulates. We provide professional guidance and document assistance to improve chances.
                    </div>
                  </details>

                  <details className="group bg-gray-50 rounded-xl border border-gray-200">
                    <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-medium text-gray-800 group-hover:text-[#0E5B63] transition-colors">
                      <span>How long does it take to get visa guidance?</span>
                      <span className="ml-4 text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="px-6 pb-6 pt-2 text-gray-700">
                      Initial checklist and document review usually within 24–48 hours. Full guidance package delivery depends on your response time for documents.
                    </div>
                  </details>

                  <details className="group bg-gray-50 rounded-xl border border-gray-200">
                    <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-medium text-gray-800 group-hover:text-[#0E5B63] transition-colors">
                      <span>What documents are usually required for tourist visas?</span>
                      <span className="ml-4 text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="px-6 pb-6 pt-2 text-gray-700">
                      Common requirements: passport, photos, bank statements (6 months), ITR/salary slips, leave letter, travel itinerary, hotel/flight bookings, invitation letter (if applicable).
                    </div>
                  </details>

                  <details className="group bg-gray-50 rounded-xl border border-gray-200">
                    <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-medium text-gray-800 group-hover:text-[#0E5B63] transition-colors">
                      <span>Can you help if my previous visa was rejected?</span>
                      <span className="ml-4 text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="px-6 pb-6 pt-2 text-gray-700">
                      Yes – we specialize in re-applications. Provide rejection letter/reasons – we suggest improvements and prepare stronger applications.
                    </div>
                  </details>

                  <details className="group bg-gray-50 rounded-xl border border-gray-200">
                    <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-medium text-gray-800 group-hover:text-[#0E5B63] transition-colors">
                      <span>Do I need to visit your office for visa guidance?</span>
                      <span className="ml-4 text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="px-6 pb-6 pt-2 text-gray-700">
                      No – most services are online. Document upload, video consultation and delivery are digital. Courier service available for hard copies if needed.
                    </div>
                  </details>
                </>
              )}

              {activeCategory === "visa-processing" && (
                <>
                  <details className="group bg-gray-50 rounded-xl border border-gray-200">
                    <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-medium text-gray-800 group-hover:text-[#0E5B63] transition-colors">
                      <span>What is the difference between guidance and full processing?</span>
                      <span className="ml-4 text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="px-6 pb-6 pt-2 text-gray-700">
                      Guidance = checklist + advice + document review. Full processing = we prepare forms, book appointments, submit application (where allowed), track status.
                    </div>
                  </details>

                  <details className="group bg-gray-50 rounded-xl border border-gray-200">
                    <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-medium text-gray-800 group-hover:text-[#0E5B63] transition-colors">
                      <span>Who pays the embassy visa fee?</span>
                      <span className="ml-4 text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="px-6 pb-6 pt-2 text-gray-700">
                      Visa/embassy fees are paid directly by you during online application or at VFS/Global Visa Centre. Our service fee is separate.
                    </div>
                  </details>

                  <details className="group bg-gray-50 rounded-xl border border-gray-200">
                    <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-medium text-gray-800 group-hover:text-[#0E5B63] transition-colors">
                      <span>What if my visa is rejected after processing?</span>
                      <span className="ml-4 text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="px-6 pb-6 pt-2 text-gray-700">
                      Embassy fees are non-refundable. Our service fee is usually non-refundable post-submission. We offer discounted re-application support.
                    </div>
                  </details>

                  <details className="group bg-gray-50 rounded-xl border border-gray-200">
                    <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-medium text-gray-800 group-hover:text-[#0E5B63] transition-colors">
                      <span>How do I track my visa application status?</span>
                      <span className="ml-4 text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="px-6 pb-6 pt-2 text-gray-700">
                      We provide tracking link/reference number. You can also check directly on embassy/VFS website using application ID.
                    </div>
                  </details>

                  <details className="group bg-gray-50 rounded-xl border border-gray-200">
                    <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-medium text-gray-800 group-hover:text-[#0E5B63] transition-colors">
                      <span>Do you handle Schengen, UK, USA, Canada visa applications?</span>
                      <span className="ml-4 text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="px-6 pb-6 pt-2 text-gray-700">
                      Yes – we assist with most popular destinations including Schengen, UK, USA, Canada, Australia, UAE, Singapore, Thailand and many more.
                    </div>
                  </details>
                </>
              )}

              {activeCategory === "insurance" && (
                <>
                  <details className="group bg-gray-50 rounded-xl border border-gray-200">
                    <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-medium text-gray-800 group-hover:text-[#0E5B63] transition-colors">
                      <span>Is travel insurance mandatory?</span>
                      <span className="ml-4 text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="px-6 pb-6 pt-2 text-gray-700">
                      Mandatory for Schengen, Australia, some Middle East countries. Highly recommended for all international travel to cover medical emergencies, trip cancellation, baggage loss.
                    </div>
                  </details>

                  <details className="group bg-gray-50 rounded-xl border border-gray-200">
                    <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-medium text-gray-800 group-hover:text-[#0E5B63] transition-colors">
                      <span>What is covered under travel insurance?</span>
                      <span className="ml-4 text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="px-6 pb-6 pt-2 text-gray-700">
                      Typical coverage: medical expenses, hospitalization, trip cancellation/interruption, lost baggage, passport loss, flight delay, personal liability (varies by plan).
                    </div>
                  </details>

                  <details className="group bg-gray-50 rounded-xl border border-gray-200">
                    <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-medium text-gray-800 group-hover:text-[#0E5B63] transition-colors">
                      <span>Are pre-existing diseases covered?</span>
                      <span className="ml-4 text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="px-6 pb-6 pt-2 text-gray-700">
                      Most standard plans exclude pre-existing conditions unless specifically declared and accepted with additional premium (limited coverage).
                    </div>
                  </details>

                  <details className="group bg-gray-50 rounded-xl border border-gray-200">
                    <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-medium text-gray-800 group-hover:text-[#0E5B63] transition-colors">
                      <span>How do I make a claim if something happens?</span>
                      <span className="ml-4 text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="px-6 pb-6 pt-2 text-gray-700">
                      Contact insurer helpline immediately. Submit documents (medical reports, bills, FIR for theft, etc.) within claim filing period (usually 30 days).
                    </div>
                  </details>

                  <details className="group bg-gray-50 rounded-xl border border-gray-200">
                    <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-medium text-gray-800 group-hover:text-[#0E5B63] transition-colors">
                      <span>Can I cancel travel insurance and get refund?</span>
                      <span className="ml-4 text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="px-6 pb-6 pt-2 text-gray-700">
                      Cancellation possible before policy start date or within free-look period (usually 15 days) with full refund, subject to insurer terms.
                    </div>
                  </details>
                </>
              )}

              {activeCategory === "booking-payment" && (
                <>
                  <details className="group bg-gray-50 rounded-xl border border-gray-200">
                    <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-medium text-gray-800 group-hover:text-[#0E5B63] transition-colors">
                      <span>What payment methods do you accept?</span>
                      <span className="ml-4 text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="px-6 pb-6 pt-2 text-gray-700">
                      Credit/Debit cards (Visa, Mastercard, RuPay), UPI, Net Banking, Wallets (Paytm, PhonePe, Google Pay), EMI options on select cards.
                    </div>
                  </details>

                  <details className="group bg-gray-50 rounded-xl border border-gray-200">
                    <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-medium text-gray-800 group-hover:text-[#0E5B63] transition-colors">
                      <span>Is my payment secure?</span>
                      <span className="ml-4 text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="px-6 pb-6 pt-2 text-gray-700">
                      Yes – we use PCI-DSS compliant payment gateways with 256-bit SSL encryption. Card details never stored on our servers.
                    </div>
                  </details>

                  <details className="group bg-gray-50 rounded-xl border border-gray-200">
                    <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-medium text-gray-800 group-hover:text-[#0E5B63] transition-colors">
                      <span>What should I do if my payment fails?</span>
                      <span className="ml-4 text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="px-6 pb-6 pt-2 text-gray-700">
                      Check card limits, OTP, internet connection. Try different payment method. If amount deducted but booking not confirmed – amount auto-refunded within 5–7 days.
                    </div>
                  </details>

                  <details className="group bg-gray-50 rounded-xl border border-gray-200">
                    <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-medium text-gray-800 group-hover:text-[#0E5B63] transition-colors">
                      <span>When will I receive booking confirmation?</span>
                      <span className="ml-4 text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="px-6 pb-6 pt-2 text-gray-700">
                      Instant for most services. Flight/bus/hotel confirmations via email/SMS/WhatsApp within minutes. Visa processing status updates periodically.
                    </div>
                  </details>

                  <details className="group bg-gray-50 rounded-xl border border-gray-200">
                    <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-medium text-gray-800 group-hover:text-[#0E5B63] transition-colors">
                      <span>Do you offer EMI / installment payment?</span>
                      <span className="ml-4 text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="px-6 pb-6 pt-2 text-gray-700">
                      Yes – 3 to 24 months EMI available on major credit cards (select bookings above ₹10,000–15,000). No-cost EMI on select partners.
                    </div>
                  </details>
                </>
              )}

              {activeCategory === "legal" && (
                <>
                  <details className="group bg-gray-50 rounded-xl border border-gray-200">
                    <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-medium text-gray-800 group-hover:text-[#0E5B63] transition-colors">
                      <span>Which law governs the booking contract?</span>
                      <span className="ml-4 text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="px-6 pb-6 pt-2 text-gray-700">
                      All bookings are governed by Indian law. Disputes subject to exclusive jurisdiction of competent courts in Delhi.
                    </div>
                  </details>

                  <details className="group bg-gray-50 rounded-xl border border-gray-200">
                    <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-medium text-gray-800 group-hover:text-[#0E5B63] transition-colors">
                      <span>Am I bound by third-party terms (airline, hotel, etc.)?</span>
                      <span className="ml-4 text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="px-6 pb-6 pt-2 text-gray-700">
                      Yes – in addition to our Terms, airline carriage conditions, hotel policies, visa rules, insurance wordings also apply.
                    </div>
                  </details>

                  <details className="group bg-gray-50 rounded-xl border border-gray-200">
                    <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-medium text-gray-800 group-hover:text-[#0E5B63] transition-colors">
                      <span>Who is responsible if a service provider fails?</span>
                      <span className="ml-4 text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="px-6 pb-6 pt-2 text-gray-700">
                      Primary responsibility lies with the service provider (airline, hotel, operator, insurer). We act as facilitator and assist in resolution.
                    </div>
                  </details>

                  <details className="group bg-gray-50 rounded-xl border border-gray-200">
                    <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-medium text-gray-800 group-hover:text-[#0E5B63] transition-colors">
                      <span>Can terms change after I book?</span>
                      <span className="ml-4 text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="px-6 pb-6 pt-2 text-gray-700">
                      Core booking terms remain fixed. However, government regulations, taxes, fuel surcharges or visa rules may change and apply.
                    </div>
                  </details>

                  <details className="group bg-gray-50 rounded-xl border border-gray-200">
                    <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-medium text-gray-800 group-hover:text-[#0E5B63] transition-colors">
                      <span>What is your liability for visa rejection or travel issues?</span>
                      <span className="ml-4 text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="px-6 pb-6 pt-2 text-gray-700">
                      Liability limited to service fee paid. We are not responsible for embassy decisions, airline cancellations, natural disasters, or events beyond control.
                    </div>
                  </details>
                </>
              )}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-20 py-16 bg-[#0E5B63]/5 rounded-3xl text-center px-6 border border-[#0E5B63]/10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0E5B63] mb-6">
            Still have questions?
          </h2>
          <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
            Our support team is ready to help with any specific query about your booking, visa application, insurance or travel plan.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center px-10 py-5 bg-[#0E5B63] text-white font-semibold text-lg rounded-xl hover:bg-[#0c4a50] transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Contact Support →
          </Link>
        </section>
      </main>
    </div>
  );
}