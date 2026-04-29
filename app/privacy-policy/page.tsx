// app/policy/page.tsx
import Link from "next/link";
import type { Metadata } from "next";
// SEo done

export const metadata: Metadata = {
  title: "Privacy Policy & Pricing Policy | Dream Sky Airways",

  description:
    "Read Dream Sky Airways’ Privacy Policy & Pricing Policy to understand how we protect your data, ensure transparency, and maintain fair pricing practices.",

  keywords: [
    "Dream Sky Airways Privacy Policy",
    "Data Protection Policy",
    "User Privacy",
    "Personal Data Security",
    "Travel Website Privacy",
    "Customer Data Protection",
    "Aviation Company Privacy Policy",
    "Secure Travel Services",
  ],

  alternates: {
    canonical: "https://www.dreamskyairways.com/privacy-policy",
  },

  openGraph: {
    title: "Privacy Policy & Pricing Policy | Dream Sky Airways",
    description:
      "Read Dream Sky Airways’ Privacy Policy & Pricing Policy to understand how we protect your data, ensure transparency, and maintain fair pricing practices.",
    url: "https://www.dreamskyairways.com/privacy-policy",
    siteName: "Dream Sky Airways",
    images: [
      {
        url: "https://www.dreamskyairways.com/ogImage.webp",
        width: 1200,
        height: 630,
        alt: "Dream Sky Airways Privacy Policy",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy & Pricing Policy | Dream Sky Airways",
    description:
      "Read Dream Sky Airways’ Privacy Policy & Pricing Policy to understand how we protect your data, ensure transparency, and maintain fair pricing practices.",
    images: ["https://www.dreamskyairways.com/ogImage.webp"],
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

export default function PolicyPage() {
  return (
    <>
    {/* Privacy Policy Page Schema */}
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: `{
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Privacy Policy - Dream Sky Airways",
      "url": "https://www.dreamskyairways.com/privacy-policy",
      "description": "Read the Privacy Policy of Dream Sky Airways to understand how we collect, use, store, and protect your personal data and information.",
      "inLanguage": "en-IN",
      "isPartOf": {
        "@type": "WebSite",
        "name": "Dream Sky Airways",
        "url": "https://www.dreamskyairways.com"
      }
    }`,
  }}
/>
{/* Privacy Policy Breadcrumb Schema */}
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
          "name": "Privacy Policy",
          "item": "https://www.dreamskyairways.com/privacy-policy"
        }
      ]
    }`,
  }}
/>


    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#0E5B63] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-5 py-2 rounded-full mb-6 text-sm font-medium">
              <span>Transparency</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
              <span>Trust</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
              <span>Security</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Privacy & Pricing Policy
            </h1>

            <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
              We are committed to protecting your personal information and
              maintaining complete transparency in all pricing related to visa
              processing, travel insurance, and travel planning services.
            </p>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 lg:py-24">
        <div className="prose prose-lg max-w-none prose-headings:text-[#0E5B63] prose-a:text-[#0E5B63] hover:prose-a:underline">
          {/* Introduction */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 border-l-4 border-[#0E5B63] pl-5">
              Introduction
            </h2>
            <p>
              Welcome to the Privacy Policy & Pricing Policy of Dream Sky Airways.
              As a trusted provider of visa assistance, domestic and international travel planning,
              and travel insurance services, <Link href="/" className="text-blue-600 font-medium hover:underline"><strong>Dream Sky Airways</strong></Link> understands the sensitive nature of 
              the personal information you share with us during the visa application, insurance purchase, and travel booking process.
            </p>
            <p className="mt-6">
              This document explains how we collect, use, protect, and (when
              necessary) share your personal data, and details our commitment to
              fair, transparent, and upfront pricing with no hidden charges.
            </p>
          </section>

          {/* Privacy Policy Overview */}
          <section className="mb-20 bg-white/60 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h2 className="text-3xl font-bold mb-8 text-[#0E5B63]">
              Privacy Policy Overview
            </h2>
            <p>
              We collect only the information necessary to provide high-quality
              {" "}<Link href="/visa" className="text-blue-600 font-medium hover:underline"><strong>visa</strong></Link>, travel insurance, and travel-related services. We never sell
              your personal information to third parties for marketing purposes.
            </p>
            <p className="mt-5">
              Our privacy practices comply with applicable data protection laws
              including GDPR (for EU residents), CCPA/CPRA (California), DPDP Act
              (India), and other relevant regional regulations.
            </p>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-[#0E5B63]">
              Information We Collect
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-7 rounded-xl border border-gray-200">
                <h3 className="text-xl font-semibold mb-4 text-[#0E5B63]">
                  Information You Provide
                </h3>
                <ul className="space-y-2.5 text-gray-700">
                  <li>• Full name and aliases</li>
                  <li>• Date of birth and place of birth</li>
                  <li>• Passport details (number, expiry, issuance)</li>
                  <li>• Contact information (phone, email)</li>
                  <li>• Travel itinerary & purpose of travel</li>
                  <li>• Employment & education details</li>
                  <li>• Financial information (only when required by consulate)</li>
                </ul>
              </div>

              <div className="bg-white p-7 rounded-xl border border-gray-200">
                <h3 className="text-xl font-semibold mb-4 text-[#0E5B63]">
                  Automatically Collected
                </h3>
                <ul className="space-y-2.5 text-gray-700">
                  <li>• IP address & approximate location</li>
                  <li>• Browser type & operating system</li>
                  <li>• Device information</li>
                  <li>• Pages visited & time spent</li>
                  <li>• Referral source</li>
                  <li>• Cookies & similar tracking technologies</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-[#0E5B63]">
              How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 space-y-4 text-gray-700">
              <li>Process visa, permit, and consular application submissions</li>
              <li>Provide accurate travel insurance quotes and coverage</li>
              <li>Communicate important updates regarding your application</li>
              <li>Prevent fraud and verify identity when required</li>
              <li>Improve our website, services, and customer experience</li>
              <li>Comply with legal obligations and respond to lawful requests</li>
              <li>Send service-related communications (never promotional without consent)</li>
            </ul>
          </section>

          <section className="mb-20 bg-gradient-to-br from-[#0E5B63]/5 to-transparent p-8 md:p-10 rounded-2xl border border-[#0E5B63]/10">
            <h2 className="text-3xl font-bold mb-8 text-[#0E5B63]">
              Data Protection & Security
            </h2>
            <p>
              We implement industry-standard technical and organizational
              measures to protect your data:
            </p>
            <div className="mt-6 grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <h4 className="font-semibold mb-3">Encryption</h4>
                <p className="text-gray-600 text-sm">
                  TLS 1.3 for data in transit & AES-256 for data at rest
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <h4 className="font-semibold mb-3">Access Control</h4>
                <p className="text-gray-600 text-sm">
                  Role-based access, least privilege principle, audit logging
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <h4 className="font-semibold mb-3">Regular Audits</h4>
                <p className="text-gray-600 text-sm">
                  Security assessments, penetration testing, staff training
                </p>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-[#0E5B63]">
              Third-Party Sharing Policy
            </h2>
            <p>We share your information only in these limited cases:</p>
            <ul className="mt-5 space-y-4 list-disc pl-6">
              <li>
                With government authorities, embassies, consulates when required
                for visa processing
              </li>
              <li>
                With insurance providers to obtain accurate quotes and coverage
              </li>
              <li>
                With payment processors (encrypted card data never stored on our servers)
              </li>
              <li>
                With cloud & email service providers under strict DPA agreements
              </li>
              <li>In case of merger, acquisition, or legal requirement</li>
            </ul>
            <p className="mt-6 font-medium">
              We never sell or rent your personal information.
            </p>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-[#0E5B63]">
              Cookies & Tracking Policy
            </h2>
            <p>
              We use essential cookies for site functionality and limited
              analytics cookies to improve user experience. We do not use
              behavioral advertising cookies.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <span className="inline-flex px-4 py-2 bg-[#0E5B63]/10 text-[#0E5B63] rounded-full text-sm font-medium">
                Strictly Necessary
              </span>
              <span className="inline-flex px-4 py-2 bg-[#0E5B63]/10 text-[#0E5B63] rounded-full text-sm font-medium">
                Functional
              </span>
              <span className="inline-flex px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm font-medium">
                Analytics (consent required)
              </span>
              <span className="inline-flex px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm font-medium">
                Marketing (not used)
              </span>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-[#0E5B63]">
              User Rights & Control
            </h2>
            <p className="mb-6">
              Depending on your location, you may have the following rights:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#0E5B63] mr-3 text-xl">•</span>
                  Right to access your data
                </li>
                <li className="flex items-start">
                  <span className="text-[#0E5B63] mr-3 text-xl">•</span>
                  Right to rectification
                </li>
                <li className="flex items-start">
                  <span className="text-[#0E5B63] mr-3 text-xl">•</span>
                  Right to erasure (“right to be forgotten”)
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#0E5B63] mr-3 text-xl">•</span>
                  Right to restrict processing
                </li>
                <li className="flex items-start">
                  <span className="text-[#0E5B63] mr-3 text-xl">•</span>
                  Right to data portability
                </li>
                <li className="flex items-start">
                  <span className="text-[#0E5B63] mr-3 text-xl">•</span>
                  Right to object / withdraw consent
                </li>
              </ul>
            </div>
            <p className="mt-8">
              To exercise any of these rights, please contact us using the
              details below.
            </p>
          </section>

          {/* ─────────────────────────────────────── */}
          {/*               PRICING POLICY              */}
          {/* ─────────────────────────────────────── */}

          <section className="mb-20 pt-16 border-t-2 border-gray-200">
            <h2 className="text-4xl font-bold mb-10 text-[#0E5B63] text-center">
              Pricing Policy
            </h2>
          </section>

          <section className="mb-20 bg-white/60 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h2 className="text-3xl font-bold mb-8 text-[#0E5B63]">
              Pricing Policy Overview
            </h2>
            <p className="text-lg">
              We believe in complete pricing transparency. Every fee we charge is
              clearly displayed before you proceed with any service.
            </p>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-[#0E5B63]">
              Service Pricing Transparency
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-7 rounded-xl border border-gray-200">
                <h3 className="text-xl font-semibold mb-4 text-[#0E5B63]">
                  What is included in our service fees
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#0E5B63] mr-3 mt-1.5">✓</span>
                    Professional document checklist preparation
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0E5B63] mr-3 mt-1.5">✓</span>
                    Application form filling guidance / review
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0E5B63] mr-3 mt-1.5">✓</span>
                    Appointment booking assistance (where applicable)
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0E5B63] mr-3 mt-1.5">✓</span>
                    Cover letter / SOP / invitation letter drafting support
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0E5B63] mr-3 mt-1.5">✓</span>
                    Travel insurance comparison & recommendation
                  </li>
                </ul>
              </div>

              <div className="bg-white p-7 rounded-xl border border-gray-200">
                <h3 className="text-xl font-semibold mb-4 text-[#0E5B63]">
                  Government / Consulate Fees (not included)
                </h3>
                <p className="text-gray-700">
                  Visa application fees, biometric fees, premium processing
                  fees, embassy fees, and any other government-mandated charges
                  are payable directly to the respective authorities and are not
                  included in our service charges.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-[#0E5B63]">
              Refunds & Cancellation Policy
            </h2>
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <ul className="space-y-5 text-gray-700">
                <li>
                  <strong>Full refund</strong> — if we have not started working
                  on your case (within 24 hours of payment)
                </li>
                <li>
                  <strong>80–90% refund</strong> — after document checklist &
                  initial consultation completed
                </li>
                <li>
                  <strong>50–70% refund</strong> — after form filling / SOP
                  drafting started
                </li>
                <li>
                  <strong>No refund</strong> — after final submission package
                  delivered or visa application submitted
                </li>
                <li>
                  Insurance premium refunds subject to insurance provider policy
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-[#0E5B63]">
              Hidden Charges Disclaimer
            </h2>
            <div className="bg-[#0E5B63]/5 p-8 rounded-2xl border border-[#0E5B63]/20">
              <p className="text-lg font-medium text-[#0E5B63] mb-6">
                We <strong>do not</strong> have any hidden charges.
              </p>
              <p>
                Any additional services requested after package confirmation
                (express processing, additional SOP revisions beyond fair use,
                hard-copy courier, translation services, etc.) will be clearly
                quoted and require your explicit approval before any additional
                charges are applied.
              </p>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-[#0E5B63]">
              Policy Updates
            </h2>
            <p>
              We may update this Privacy & Pricing Policy from time to time to
              reflect changes in our practices, technology, or legal
              requirements. The updated policy will be posted on this page with
              a revised “Last updated” date.
            </p>
            <p className="mt-5">
              Significant changes will be communicated via email to our active
              customers.
            </p>
          </section>

          

          {/* CTA */}
          <section className="mt-24 py-16 bg-[#0E5B63]/5 rounded-3xl text-center px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E5B63] mb-6">
              Have questions about our policies?
            </h2>
            <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
              Our team is happy to clarify any aspect of our privacy practices
              or pricing structure.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center px-10 py-5 bg-[#0E5B63] text-white font-semibold text-lg rounded-xl hover:bg-[#0c4a50] transition-colors shadow-md hover:shadow-lg"
            >
              Contact Us →
            </Link>
          </section>
        </div>
      </main>
    </div>
    </>
  );
}