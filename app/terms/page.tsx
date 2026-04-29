// app/terms/page.tsx
import Link from "next/link";

  export const metadata = {
    title: "Terms & Conditions | Travel, Visa & Insurance Policy",
    description:
      "Read our Terms & Conditions for travel, visa, and insurance services. Learn about policies, user responsibilities, payments, and service guidelines",
    keywords:[
      "terms and conditions", 
      "travel booking terms",
      "visa processing terms",
      "travel insurance terms",
      "flight booking conditions",
      "hotel reservation terms",
      "cab service rules",
      "tour package agreements",
      "visa guidance disclaimer",
      "refund policy travel services",
  ],
  alternates:{
    canonical: "https://www.dreamskyairways.com/terms",
  },
  openGraph: {
    title:"Terms & Conditions | Travel, Visa & Insurance Policy",
    description:"Read our Terms & Conditions for travel, visa, and insurance services. Learn about policies, user responsibilities, payments, and service guidelines.",
    url:"https://www.dreamskyairways.com/terms",
    siteName:"Dream Sky Airways",
    type:"website",
      images: [
      {
        url: "https://www.dreamskyairways.com/ogImage.webp",
        width: 1200,
        height: 630,
        alt: "Dream Sky Airways Privacy Policy",
      },
    ],
  },
  twitter:{
    card:"summary_large_image",
    title:"Terms & Conditions | Travel, Visa & Insurance Policy",
    description:"Read our Terms & Conditions for travel, visa, and insurance services. Learn about policies, user responsibilities, payments, and service guidelines.",
  },
  robots: {
  index: true,
  follow: true,
  nocache: false,
  googleBot: {
    index: true,
    follow: true,
    noimageindex: false,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
},
  };
  

export default function TermsPage() {
  return (
    <>
    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: `{
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Terms & Conditions - Dream Sky Airways",
      "url": "https://www.dreamskyairways.com/terms",
      "description": "Read the Terms and Conditions of Dream Sky Airways for travel, visa, and insurance services, including policies, user responsibilities, and legal guidelines.",
      "inLanguage": "en-IN",
      "isPartOf": {
        "@type": "WebSite",
        "name": "Dream Sky Airways",
        "url": "https://www.dreamskyairways.com"
      }
    }`,
  }}
/>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: `{
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.dreamskyairways.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Terms & Conditions",
          "item": "https://www.dreamskyairways.com/terms"
        }
      ]
    }`,
  }}
/>


    
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#0c4a50] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-5 py-2 rounded-full mb-6 text-sm font-medium">
              <span>Legal</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
              <span>Binding</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
              <span>Transparent</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Terms & Conditions
            </h1>

            <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
              These Terms and Conditions govern your use of our travel services, including flight bookings, bus bookings, hotel reservations, cab services, tour packages, visa guidance, visa processing, and travel insurance, ensuring a clear and legally binding agreement for all users.
            </p>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 lg:py-24">
        <div className="prose prose-lg max-w-none prose-headings:text-[#0E5B63] prose-a:text-[#0E5B63] hover:prose-a:underline">
          {/* Introduction & Acceptance of Terms */}
          <section className="mb-20 bg-white/60 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h2 className="text-3xl font-bold mb-8 border-l-4 border-[#0E5B63] pl-5">
              Introduction & Acceptance of Terms
            </h2>
            <p>
              These Terms and Conditions ("Terms") constitute a legally binding agreement between you ("User", "you", or "your") and <Link href="/" className="text-blue-600 font-medium hover:underline"><strong> Dream Sky Airways</strong></Link> ("Company", "we", "us", or "our"), a travel and visa services provider operating in India and serving Indian and international travelers. By accessing our website, mobile application, or utilizing any of our services including but not limited to flight booking, bus booking, hotel booking, cab/taxi services, tour and travel packages, visa guidance services, visa processing/provider services, and travel insurance services, you acknowledge that you have read, understood, and agree to be bound by these Terms.
            </p>
            <p className="mt-6">
              If you do not agree with any part of these Terms, you must immediately discontinue access to and use of our services. Continued use constitutes acceptance. These Terms apply to all visitors, users, and others who access or use our services. We reserve the right to refuse service to anyone for any reason at any time, subject to applicable laws.
            </p>
            <p className="mt-6">
              Our services are designed to facilitate seamless travel experiences, but they are subject to various external factors such as government regulations, embassy decisions, and third-party provider policies. By using our services, you agree that the Company acts as an intermediary and is not liable for outcomes beyond our control, as detailed in subsequent sections.
            </p>
          </section>

          {/* Definitions & Interpretation */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-[#0E5B63]">
              Definitions & Interpretation
            </h2>
            <p>
              For the purposes of these Terms, the following definitions apply unless the context otherwise requires:
            </p>
            <ul className="list-disc pl-6 space-y-4 text-gray-700 mt-6">
              <li><strong>"Services"</strong> means all travel-related offerings provided by the Company, including flight booking, bus booking, hotel booking, cab/taxi services, <Link href="/packages" className="text-blue-600 font-medium hover:underline"><strong>tour and travel packages</strong></Link>, visa guidance, visa processing, and travel insurance.</li>
              <li><strong>"User"</strong> refers to any individual or entity accessing or using the Services.</li>
              <li><strong>"Booking"</strong> means any reservation or purchase made through our platform for Services.</li>
              <li><strong>"Third-Party Providers"</strong> include airlines, bus operators, hotels, cab companies, tour operators, visa authorities, embassies, consulates, and insurance companies.</li>
              <li><strong>"Force Majeure"</strong> includes events beyond reasonable control such as natural disasters, wars, pandemics, strikes, or government actions.</li>
            </ul>
            <p className="mt-6">
              Headings are for convenience only and do not affect interpretation. Words importing the singular include the plural and vice versa. References to laws include amendments and replacements.
            </p>
          </section>

          {/* Scope of Services */}
          <section className="mb-20 bg-[#0E5B63]/5 p-8 rounded-2xl border border-[#0E5B63]/20">
            <h2 className="text-3xl font-bold mb-8 text-[#0E5B63]">
              Scope of Services
            </h2>
            <p>
              The Company provides intermediary services connecting Users with Third-Party Providers for travel arrangements. We do not own or operate any transportation, accommodation, or insurance entities. Our role is limited to facilitating bookings, providing guidance, and processing requests on your behalf.
            </p>
            <p className="mt-6">
              Services include real-time availability checks, price comparisons, and secure payment gateways. However, all final confirmations, fulfillments, and liabilities rest with the respective Third-Party Providers. The Company disclaims any responsibility for service quality, delays, cancellations, or disputes arising from Third-Party Providers.
            </p>
            <p className="mt-6">
              For visa services, we offer guidance on requirements and assist with application preparation, but decisions are solely at the discretion of embassies and consulates.<Link href="insurance" className="text-blue-600 font-medium hover:underline"><strong>Travel insurance</strong></Link> is underwritten by licensed insurers, and claims are subject to their terms.
            </p>
          </section>

          {/* User Eligibility & Responsibilities */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-[#0E5B63]">
              User Eligibility & Responsibilities
            </h2>
            <p>
              Users must be at least 18 years old or have legal capacity to enter into contracts under applicable laws. By using our Services, you represent that you meet these criteria.
            </p>
            <p className="mt-6">
              You are responsible for providing accurate, complete, and current information during bookings, including personal details, travel documents, and payment information. Any inaccuracies may result in booking failures, additional fees, or denial of services, for which the Company shall not be liable.
            </p>
            <p className="mt-6">
              Users must comply with all applicable laws, including immigration, customs, and health regulations. You agree to indemnify the Company against any losses arising from your non-compliance.
            </p>
            <p className="mt-6">
              Maintain the confidentiality of your account credentials. Notify us immediately of any unauthorized access. The Company is not responsible for losses due to unauthorized use.
            </p>
          </section>

          {/* Flight Booking Terms */}
          <section className="mb-20 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
            <h2 className="text-3xl font-bold mb-8 text-[#0E5B63]">
              Flight Booking Terms
            </h2>
            <p>
              Flight bookings are subject to airline policies, including baggage allowances, check-in requirements, and fare rules. Prices displayed are indicative and may change due to dynamic pricing by airlines.
            </p>
            <p className="mt-6">
              Confirmed bookings are non-transferable unless permitted by the airline. Name changes may incur fees. The Company acts as an agent and is not liable for flight delays, cancellations, overbookings, or baggage issues, which are governed by the airline's conditions of carriage.
            </p>
            <p className="mt-6">
              Users must verify travel documents (passports, visas) prior to booking. Refunds for no-show or denied boarding due to invalid documents are not applicable.
            </p>
            <p className="mt-6">
              In case of schedule changes by airlines, we will notify you, but alternative arrangements are at the airline's discretion. The Company disclaims liability for consequential losses such as missed connections or accommodation costs.
            </p>
          </section>

          {/* Bus Booking Terms */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-[#0E5B63]">
              Bus Booking Terms
            </h2>
            <p>
              Bus bookings are facilitated with various operators. Seat selection is subject to availability. Boarding points and timings are approximate and may vary due to traffic or operational issues.
            </p>
            <p className="mt-6">
              The Company is not responsible for bus breakdowns, delays, route changes, or amenities not matching descriptions, as these are controlled by the bus operator. Baggage is carried at your own risk; operators may have limited liability for loss or damage.
            </p>
            <p className="mt-6">
              Tickets are non-transferable. Ensure you carry valid ID proof as required by operators. Female travelers may have specific seating policies as per operator rules.
            </p>
            <p className="mt-6">
              In peak seasons, surcharges may apply. The Company reserves the right to cancel bookings if operators fail to confirm, with full refund as the sole remedy.
            </p>
          </section>

          {/* Hotel Booking Terms */}
          <section className="mb-20 bg-[#0E5B63]/5 p-8 rounded-2xl border border-[#0E5B63]/20">
            <h2 className="text-3xl font-bold mb-8 text-[#0E5B63]">
              Hotel Booking Terms
            </h2>
            <p>
              Hotel reservations are subject to property availability and policies. Room types, amenities, and images are indicative; actual provisions may vary.
            </p>
            <p className="mt-6">
              Check-in/check-out times, extra bed charges, and taxes are as per hotel rules. The Company is not liable for overbookings, poor service quality, or facility unavailability due to maintenance or other reasons.
            </p>
            <p className="mt-6">
              Users must comply with hotel rules on smoking, pets, and conduct. Damage to property will be charged directly by the hotel. Early check-in or late check-out is not guaranteed.
            </p>
            <p className="mt-6">
              In case of no-show, full charges apply. Refunds for curtailed stays are at hotel discretion. The Company disclaims liability for personal injuries or property loss at hotels.
            </p>
          </section>

          {/* Cab / Taxi Service Terms */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-[#0E5B63]">
              Cab / Taxi Service Terms
            </h2>
            <p>
              Cab bookings include airport transfers, outstation trips, and local rentals. Vehicle type is approximate; equivalents may be provided based on availability.
            </p>
            <p className="mt-6">
              Fares include base charges; tolls, parking, and night surcharges are extra and payable directly. The Company is not responsible for driver behavior, vehicle condition, or route delays, as services are provided by third-party operators.
            </p>
            <p className="mt-6">
              Users must provide accurate pick-up details. Waiting time limits apply. Baggage allowance is per vehicle capacity; excess may require upgrades.
            </p>
            <p className="mt-6">
              In case of breakdowns, alternative arrangements will be attempted, but no liability for missed flights or events. Prohibited items (alcohol, weapons) are not allowed.
            </p>
          </section>

          {/* Tour & Travel Package Terms */}
          <section className="mb-20 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
            <h2 className="text-3xl font-bold mb-8 text-[#0E5B63]">
              Tour & Travel Package Terms
            </h2>
            <p>
              Packages include specified inclusions like accommodation, meals, transfers, and sightseeing. Exclusions (visas, insurance, tips) are clearly stated.
            </p>
            <p className="mt-6">
              Itineraries are subject to change due to weather, local conditions, or operator decisions. The Company is not liable for unfulfilled activities or additional costs incurred.
            </p>
            <p className="mt-6">
              Group tours require minimum participants; cancellations due to low numbers entitle full refund. Custom packages are non-transferable.
            </p>
            <p className="mt-6">
              Users must adhere to tour guidelines, including health requirements. Adventure activities carry inherent risks; participation is at your own risk.
            </p>
            <p className="mt-6">
              Payments are staged; failure to pay balances may result in cancellation with retention of deposits.
            </p>
          </section>

          {/* Visa Guidance Disclaimer */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-[#0E5B63]">
              Visa Guidance Disclaimer
            </h2>
            <p>
              Visa guidance services provide information on requirements, documentation, and procedures based on publicly available data. This is not legal advice and does not guarantee approval.
            </p>
            <p className="mt-6">
              Requirements vary by nationality, purpose, and destination. Users must verify details with official sources. The Company disclaims liability for inaccuracies in guidance leading to rejections or delays.
            </p>
            <p className="mt-6">
              Guidance includes checklist preparation and form filling tips, but submission is your responsibility. Changes in immigration laws may render guidance obsolete without notice.
            </p>
            <p className="mt-6">
              No refunds for services if visa is rejected due to incomplete documents or other user errors.
            </p>
          </section>

          {/* Visa Processing & Provider Disclaimer */}
          <section className="mb-20 bg-[#0E5B63]/5 p-8 rounded-2xl border border-[#0E5B63]/20">
            <h2 className="text-3xl font-bold mb-8 text-[#0E5B63]">
              Visa Processing & Provider Disclaimer
            </h2>
            <p>
              Visa processing services involve application preparation, submission, and follow-up on your behalf. We partner with authorized providers, but decisions rest with embassies/consulates.
            </p>
            <p className="mt-6">
              Processing times are estimates; delays due to verification, holidays, or backlogs are common. The Company is not liable for such delays or associated costs (e.g., flight changes).
            </p>
            <p className="mt-6">
              Fees include service charges; government fees are separate and non-refundable. Incomplete applications may be rejected without refund of our fees.
            </p>
            <p className="mt-6">
              Biometrics and interviews are mandatory as per embassy rules. False information may lead to bans; you indemnify us against such misuse.
            </p>
            <p className="mt-6">
              In case of rejection, our liability is limited to re-application assistance at discounted rates, if applicable.
            </p>
          </section>

          {/* Travel Insurance Terms */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-[#0E5B63]">
              Travel Insurance Terms
            </h2>
            <p>
              Travel insurance is provided through licensed insurers. Policies cover specified risks like medical emergencies, trip cancellations, and baggage loss, subject to terms and exclusions.
            </p>
            <p className="mt-6">
              The Company facilitates purchase but does not underwrite policies. Claims must be filed directly with the insurer. We disclaim liability for claim denials or delays.
            </p>
            <p className="mt-6">
              Pre-existing conditions, adventure sports, or pandemics may be excluded. Users must disclose accurate health and travel details for valid coverage.
            </p>
            <p className="mt-6">
              Premiums are non-refundable post-issuance, except in free-look periods as per insurer policy. Ensure coverage aligns with your needs before purchase.
            </p>
          </section>

          {/* Pricing, Fees & Payment Terms */}
          <section className="mb-20 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
            <h2 className="text-3xl font-bold mb-8 text-[#0E5B63]">
              Pricing, Fees & Payment Terms
            </h2>
            <p>
              Prices are displayed in INR or applicable currency and include service fees where stated. Dynamic pricing may cause changes between viewing and booking.
            </p>
            <p className="mt-6">
              Additional fees (convenience, taxes, surcharges) are transparently shown. Payments are processed via secure gateways; card details are not stored.
            </p>
            <p className="mt-6">
              All payments are non-refundable except as per cancellation policy. Disputes must be raised within 7 days. We reserve the right to charge for amendments.
            </p>
            <p className="mt-6">
              Currency conversions are at prevailing rates; fluctuations are your risk. Failed payments may cancel bookings without liability.
            </p>
          </section>

          {/* Cancellation, Refund & Rescheduling Policy */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-[#0E5B63]">
              Cancellation, Refund & Rescheduling Policy
            </h2>
            <p>
              Cancellations are subject to provider policies and the applicable terms outlined in our <Link href="/privacy-policy" className="text-blue-600 font-medium hover:underline"><strong>refund policy.</strong></Link> Fees are deducted as per timelines: 
              for example, you may receive up to a 100% refund if cancelled 48 hours before flight departure, while refund eligibility and charges may vary for other services depending on the provider and timing.
            </p>
            <p className="mt-6">
              Refunds are processed within 7-14 business days to original payment method. No refunds for no-shows, partial usage, or force majeure events.
            </p>
            <p className="mt-6">
              Rescheduling incurs fees and is subject to availability. Visa services have limited refunds post-submission. Insurance cancellations follow insurer rules.
            </p>
            <p className="mt-6">
              The Company may cancel bookings for non-payment or violations, with refunds at discretion minus fees.
            </p>
          </section>

          {/* Visa Rejection, Delay & Embassy Decisions Disclaimer */}
          <section className="mb-20 bg-[#0E5B63]/5 p-8 rounded-2xl border border-[#0E5B63]/20">
            <h2 className="text-3xl font-bold mb-8 text-[#0E5B63]">
              Visa Rejection, Delay & Embassy Decisions Disclaimer
            </h2>
            <p>
              Visa outcomes are solely determined by embassies. Rejections may occur due to insufficient documents, criminal records, or discretionary reasons.
            </p>
            <p className="mt-6">
              The Company does not guarantee approvals and is not liable for rejections, delays, or consequential losses (e.g., non-refundable bookings).
            </p>
            <p className="mt-6">
              Users must appeal rejections independently. Our fees are non-refundable in such cases, except for proven errors on our part.
            </p>
            <p className="mt-6">
              Delays beyond estimated times do not entitle refunds. Keep buffers in travel plans.
            </p>
          </section>

          {/* Third-Party Service Provider Responsibility */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-[#0E5B63]">
              Third-Party Service Provider Responsibility
            </h2>
            <p>
              All Services are fulfilled by Third-Party Providers. Their terms apply in addition to ours. We select reputable providers but do not warrant their performance.
            </p>
            <p className="mt-6">
              Disputes with providers must be resolved directly. The Company may assist but bears no liability for their actions, omissions, or failures.
            </p>
            <p className="mt-6">
              Links to third-party sites are for convenience; we do not endorse them and disclaim responsibility for their content or privacy practices.
            </p>
          </section>

          {/* Force Majeure Clause */}
          <section className="mb-20 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
            <h2 className="text-3xl font-bold mb-8 text-[#0E5B63]">
              Force Majeure Clause
            </h2>
            <p>
              Neither party shall be liable for failures due to Force Majeure events, including but not limited to acts of God, wars, terrorism, pandemics, strikes, embargoes, or governmental orders.
            </p>
            <p className="mt-6">
              Affected party must notify promptly. Obligations resume upon cessation. Prolonged events may allow termination with prorated refunds.
            </p>
            <p className="mt-6">
              Travel disruptions due to such events entitle no compensation beyond provider refunds.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-[#0E5B63]">
              Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, the Company shall not be liable for indirect, consequential, incidental, or punitive damages, including loss of profits, data, or opportunities.
            </p>
            <p className="mt-6">
              Our total liability shall not exceed the amount paid for the specific Service. This applies to all claims arising from these Terms.
            </p>
            <p className="mt-6">
              No liability for errors in user-provided information, third-party actions, or events beyond control.
            </p>
          </section>

          {/* Indemnification */}
          <section className="mb-20 bg-[#0E5B63]/5 p-8 rounded-2xl border border-[#0E5B63]/20">
            <h2 className="text-3xl font-bold mb-8 text-[#0E5B63]">
              Indemnification
            </h2>
            <p>
              You agree to indemnify, defend, and hold harmless the Company, its officers, directors, employees, and agents from any claims, losses, liabilities, or expenses arising from your use of Services, violation of Terms, or infringement of rights.
            </p>
            <p className="mt-6">
              This includes third-party claims due to your content, false information, or non-compliance with laws.
            </p>
          </section>

          {/* Intellectual Property Rights */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-[#0E5B63]">
              Intellectual Property Rights
            </h2>
            <p>
              All content, trademarks, logos, and materials on our platform are owned by or licensed to the Company. You may not copy, modify, or distribute without written consent.
            </p>
            <p className="mt-6">
              User-generated content grants us a non-exclusive license for service provision. Infringing use may lead to termination.
            </p>
          </section>

          {/* User Conduct & Prohibited Activities */}
          <section className="mb-20 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
            <h2 className="text-3xl font-bold mb-8 text-[#0E5B63]">
              User Conduct & Prohibited Activities
            </h2>
            <p>
              Users must not engage in fraudulent bookings, misuse of information, hacking, or transmission of viruses.
            </p>
            <p className="mt-6">
              Prohibited: abusive language, discrimination, or commercial solicitation. Violations may result in access denial and legal action.
            </p>
          </section>

          {/* Data Usage Reference (Privacy Alignment) */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-[#0E5B63]">
              Data Usage Reference (Privacy Alignment)
            </h2>
            <p>
              Your data is handled as per our Privacy Policy, incorporated herein. We use data for service provision, improvements, and compliance.
            </p>
            <p className="mt-6">
              Consent to data sharing with Third-Party Providers as necessary. Refer to Privacy Policy for details on rights and security.
            </p>
          </section>

          {/* Modification of Terms */}
          <section className="mb-20 bg-[#0E5B63]/5 p-8 rounded-2xl border border-[#0E5B63]/20">
            <h2 className="text-3xl font-bold mb-8 text-[#0E5B63]">
              Modification of Terms
            </h2>
            <p>
              We may amend these Terms at any time. Changes will be posted with updated date. Continued use constitutes acceptance.
            </p>
            <p className="mt-6">
              Significant changes will be notified via email or site notice.
            </p>
          </section>

          {/* Governing Law & Jurisdiction (India) */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-[#0E5B63]">
              Governing Law & Jurisdiction (India)
            </h2>
            <p>
              These Terms are governed by Indian laws. Exclusive jurisdiction lies with courts in Delhi, India.
            </p>
            <p className="mt-6">
              International users agree to Indian jurisdiction for disputes.
            </p>
          </section>

          {/* Dispute Resolution & Arbitration */}
          <section className="mb-20 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
            <h2 className="text-3xl font-bold mb-8 text-[#0E5B63]">
              Dispute Resolution & Arbitration
            </h2>
            <p>
              Disputes shall be resolved amicably first. Failing that, arbitration under Indian Arbitration Act, 1996, in Delhi, by a sole arbitrator appointed by the Company.
            </p>
            <p className="mt-6">
              Arbitration award is final and binding. Costs borne by losing party.
            </p>
          </section>

          {/* Severability */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-[#0E5B63]">
              Severability
            </h2>
            <p>
              If any provision is invalid, remaining provisions remain enforceable. Invalid provision will be reformed to reflect original intent.
            </p>
          </section>

          {/* Termination of Access */}
          <section className="mb-20 bg-[#0E5B63]/5 p-8 rounded-2xl border border-[#0E5B63]/20">
            <h2 className="text-3xl font-bold mb-8 text-[#0E5B63]">
              Termination of Access
            </h2>
            <p>
              We may terminate access for violations without notice. Upon termination, obligations survive.
            </p>
            <p className="mt-6">
              No liability for termination effects.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-[#0E5B63]">
              Contact Information
            </h2>
            <p>
              For questions,  contact:<strong> support@dreamskyairways.com</strong>  or <strong>+91-1204580951</strong>
            </p>
          </section>

          {/* CTA Section */}
          <section className="mt-24 py-16 bg-[#0E5B63]/5 rounded-3xl text-center px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E5B63] mb-6">
              Understand Our Terms Fully
            </h2>
            <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
              We encourage you to read these Terms and Conditions carefully. If you need any clarification, our support team is here to help.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center px-10 py-5 bg-[#0E5B63] text-white font-semibold text-lg rounded-xl hover:bg-[#0c4a50] transition-colors shadow-md hover:shadow-lg"
            >
              Contact Support →
            </Link>
          </section>
        </div>
      </main>
    </div>
    </>
  );
}