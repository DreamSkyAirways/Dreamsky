import type { Metadata } from "next";
import Link from "next/link";

export const metadata : Metadata = {
  title : "Disclaimer | Dream Sky Airways – Legal Notice & Policy",
  description : "Read the official disclaimer of Dream Sky Airways regarding website content, accuracy, liabilities, and third-party links. Stay informed and protected.",
  keywords: [
    "Dream Sky Airways disclaimer",
     "legal notice",
     "website disclaimer",
     "liability policy",
     "terms of use",
    "aviation services disclaimer",
  ],
  alternates:{
    canonical:"https://www.dreamskyairways.com/disclaimer",
  },
  openGraph : {
    title :"Disclaimer | Dream Sky Airways – Legal Notice & Policy",
    description:"Read the official disclaimer of Dream Sky Airways regarding website content, accuracy, liabilities, and third-party links. Stay informed and protected.",
    url :"https://www.dreamskyairways.com/disclaimer",
    siteName :"Dream Sky Airways",
    images: [
      {
        url :"https://www.dreamskyairways.com/ogImage.webp",
        height:"1200",
        width :"630",
        alt :"Dream Sky airways disclaimer",
    }
  ], 
  },
  twitter :{
    card:"summary_large_image",
    title :"Disclaimer | Dream Sky Airways – Legal Notice & Policy",
    description:"Read the official disclaimer of Dream Sky Airways regarding website content, accuracy, liabilities, and third-party links. Stay informed and protected.",
  },
};
export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-gray-50 mt-10">
      {/* Hero Section */}
      <section className="bg-[#084248] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-[#0E5B63] text-white text-xs font-semibold px-4 py-1 rounded-full mb-4">
              Legal Notice • Transparency
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Disclaimer</h1>
            <p className="text-lg md:text-xl opacity-90">
              Dream Sky Airways acts as a facilitator for travel bookings, Visa Guidance, and insurance services. We partner with third-party providers to assist you, but ultimate responsibility for service delivery lies with them.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-[#E6F0F1]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Introduction */}
            <article className="prose prose-lg max-w-none">
              <p>
                Welcome to the Disclaimer page of Dream Sky Airways. This document outlines important information regarding our services, including flight booking, bus booking, hotel booking, cab/taxi services, tour and travel packages,<Link href="/visa" className="text-blue-600 font-medium hounderline"><strong> Visa Guidance</strong></Link>, visa processing, and travel insurance. By accessing or using our website and services, you acknowledge that you have read, understood, and agree to the terms set forth in this disclaimer. Dream Sky Airways is committed to transparency and professionalism in all our operations.
              </p>
            </article>

            {/* Third-Party Booking Disclaimer */}
            <article className="border border-[#0E5B63] p-6 rounded-lg bg-white">
              <h2 className="text-2xl font-semibold text-[#0E5B63] mb-4">Third-Party Booking Disclaimer</h2>
              <p>
                Dream Sky Airways operates as a travel assistance and facilitation platform. We do not directly provide transportation or accommodation services. All bookings for flights, buses, hotels, cabs, and tour packages are processed through authorized third-party service providers, such as airlines, bus operators, hotel chains, taxi aggregators, and tour organizers. Our role is strictly limited to facilitating the booking process, providing assistance with reservations, and generating tickets or confirmations on behalf of these providers. We act as an intermediary to simplify your travel planning experience.
              </p>
              <p>
                Once a booking is confirmed and a ticket or voucher is issued, any subsequent matters, including but not limited to changes, modifications, refunds, or cancellations, are governed by the policies and procedures of the respective third-party provider. Dream Sky Airways does not have control over these aspects and cannot intervene in operational decisions made by the providers.
              </p>
            </article>

            {/* No Ownership of Third-Party Services */}
            <article className="border border-[#0E5B63] p-6 rounded-lg bg-white">
              <h2 className="text-2xl font-semibold text-[#0E5B63] mb-4">No Ownership of Third-Party Services</h2>
              <p>
                Dream Sky Airways does not own, operate, or manage any airlines, bus fleets, hotels, cab services, or tour facilities. The actual delivery of services—such as flight operations, bus journeys, hotel stays, taxi rides, or package tours—is the sole responsibility of the third-party providers with whom we collaborate. We select these partners based on their reputation and compliance standards, but we cannot guarantee the quality, safety, or timeliness of their services.
              </p>
            </article>

            {/* Ticket & Booking Responsibility */}
            <article className="border border-[#0E5B63] p-6 rounded-lg bg-white">
              <h2 className="text-2xl font-semibold text-[#0E5B63] mb-4">Ticket & Booking Responsibility</h2>
              <p>
                Upon issuance of a ticket or booking confirmation, all responsibilities related to the service shift to the third-party provider. This includes handling delays, schedule changes, cancellations, or any disruptions due to operational issues. Dream Sky Airways is not liable for any inconveniences, losses, or damages arising from such events, as our involvement concludes with the facilitation of the booking.
              </p>
            </article>

            {/* Pricing & Availability Disclaimer */}
            <article className="border border-[#0E5B63] p-6 rounded-lg bg-white">
              <h2 className="text-2xl font-semibold text-[#0E5B63] mb-4">Pricing & Availability Disclaimer</h2>
              <p>
                Prices, fares, and availability displayed on our website are sourced from third-party providers and are subject to change without notice. <Link href="/" className="text-blue-600 font-medium hover:underline"><strong>Dream Sky Airways</strong></Link> does not control or guarantee the stability of these prices. Factors such as demand, seasonality, and provider policies can lead to fluctuations. We recommend confirming details at the time of booking to avoid discrepancies.
              </p>
            </article>

            {/* Visa Guidance & Visa Processing Disclaimer */}
            <article className="border border-[#0E5B63] p-6 rounded-lg bg-white">
              <h2 className="text-2xl font-semibold text-[#0E5B63] mb-4">Visa Guidance & Visa Processing Disclaimer</h2>
              <p>
                Our visa guidance and processing services are designed to assist users with documentation preparation, application submission, and procedural advice. However, the final decision on visa approval or rejection rests exclusively with the relevant embassies, consulates, or immigration authorities. Dream Sky Airways does not influence or guarantee the outcome of any visa application. We provide support based on general guidelines and cannot be held responsible for denials due to incomplete documentation, policy changes, or other factors beyond our control.
              </p>
              <p>
                Users are advised to apply well in advance and ensure all requirements are met, as visa processing times vary by country and can be affected by external circumstances.
              </p>
            </article>

            {/* Travel Insurance Disclaimer */}
            <article className="border border-[#0E5B63] p-6 rounded-lg bg-white">
              <h2 className="text-2xl font-semibold text-[#0E5B63] mb-4">Travel Insurance Disclaimer</h2>
              <p>
                Travel insurance policies offered through Dream Sky Airways are underwritten and issued by licensed third-party insurance companies. We facilitate the purchase process, but all terms, coverage limits, exclusions, claims processing, and settlements are governed by the insurer's policy documents. Users should carefully review the policy details before purchasing to understand what is covered, including medical emergencies, trip cancellations, or lost baggage. Dream Sky Airways is not liable for any disputes or denials related to insurance claims.
              </p>
            </article>

            {/* Travel Risks Disclaimer */}
            <article className="border border-[#0E5B63] p-6 rounded-lg bg-white">
              <h2 className="text-2xl font-semibold text-[#0E5B63] mb-4">Travel Risks Disclaimer</h2>
              <p>
                Travel inherently involves risks, and Dream Sky Airways assumes no responsibility for events such as flight delays, cancellations, natural disasters, strikes, pandemics, political unrest, or other force majeure occurrences. These are beyond our control and may impact your travel plans. We advise users to stay informed about destination-specific advisories and purchase appropriate insurance.
              </p>
            </article>

            {/* Limitation of Liability */}
            <article className="border border-[#0E5B63] p-6 rounded-lg bg-white">
              <h2 className="text-2xl font-semibold text-[#0E5B63] mb-4">Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, Dream Sky Airways' liability is limited to the service fees charged for facilitation. We shall not be liable for any indirect, consequential, incidental, or punitive damages, including loss of profits, data, or opportunities, arising from the use of our services or reliance on website information.
              </p>
            </article>

            {/* Information Accuracy Disclaimer */}
            <article className="border border-[#0E5B63] p-6 rounded-lg bg-white">
              <h2 className="text-2xl font-semibold text-[#0E5B63] mb-4">Information Accuracy Disclaimer</h2>
              <p>
                The content on our website, including travel tips, visa information, and service descriptions, is provided for general informational purposes only. While we strive for accuracy, we do not guarantee the completeness, timeliness, or real-time validity of the information. Users should independently verify details before making decisions.
              </p>
            </article>

            {/* User Responsibility */}
            <article className="border border-[#0E5B63] p-6 rounded-lg bg-white">
              <h2 className="text-2xl font-semibold text-[#0E5B63] mb-4">User Responsibility</h2>
              <p>
                It is the user's sole responsibility to verify booking details, ensure passport validity, comply with visa and entry requirements, and review insurance coverage. Dream Sky Airways recommends double-checking all information provided during the booking process to avoid errors.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Confirm ticket names, dates, and destinations match your travel documents.</li>
                <li>Check for any travel restrictions or health requirements at your destination.</li>
                <li>Read and understand third-party terms before confirming bookings.</li>
              </ul>
            </article>

            {/* External Links Disclaimer */}
            <article className="border border-[#0E5B63] p-6 rounded-lg bg-white">
              <h2 className="text-2xl font-semibold text-[#0E5B63] mb-4">External Links Disclaimer</h2>
              <p>
                Our website may contain links to external third-party sites for additional information or services. Dream Sky Airways does not endorse, control, or assume responsibility for the content, privacy policies, or practices of these sites. Accessing them is at your own risk.
              </p>
            </article>

            {/* Legal Compliance & Governing Law */}
            <article className="border border-[#0E5B63] p-6 rounded-lg bg-white">
              <h2 className="text-2xl font-semibold text-[#0E5B63] mb-4">Legal Compliance & Governing Law</h2>
              <p>
                This disclaimer is governed by the laws of India. Any disputes arising from or related to our services or this disclaimer shall be subject to the exclusive jurisdiction of the courts in India. Dream Sky Airways complies with applicable Indian laws and regulations in providing its services.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#084248] text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg mb-6">
            We encourage you to read this disclaimer carefully before using our services or making any bookings. If you have any questions or need further clarification, our support team is here to assist.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#0E5B63] text-white font-semibold px-8 py-3 rounded-md hover:bg-[#084248] transition-colors"
          >
            Contact Support
          </a>
        </div>
      </section>
    </main>
  );
}