import { visas } from "@/app/data/visas";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata ={
  title: "Best Visa Services in India | Fast & Reliable Visa Support",
  description:"Get the best visa services in India with fast and reliable support. Apply for tourist, student, and work visas with expert guidance.",
  keywords:[
    "visas at Dream Sky Airways",
    "best visa services in India",
    "best visa services",
    "visa services in India",
    "visa consultant in India",
    "visa assistance services",
    "apply visa online India",
    "international visa services",
    "travel visa services",
    "visa processing services",
  ],
  alternates:{
    canonical:"https://www.dreamskyairways.com/visa",
  },
  robots:{
    index:true,
    follow:true,
    nocache:false,
    googleBot:{
      index:true,
      follow:true,
      noimageindex:false,
      "max-video-preview":-1,
      "max-image-preview":"large",
      "max-snippet":-1,
    },
  },
  openGraph:{
  title:"Best Visa Services in India | Fast & Reliable Visa Support",
  description:"Get the best visa services in India with fast and reliable support. Apply for tourist, student, and work visas with expert guidance.",
  url:"https://www.dreamskyairways.com/visa",
  siteName:"Dream Sky Airways",
  type:"website",
  locale:"en_IN",
  images:[
    {
      url:"https://www.dreamskyairways.com/ogImage.webp",
      width:1200,
      height:630,
      alt:"Get your visas at Dream Sky airways",
    },
  ],
  },
  twitter:{
    title:"Best Visa Services in India | Fast & Reliable Visa Support",
    description:"Get the best visa services in India with fast and reliable support. Apply for tourist, student, and work visas with expert guidance.",
  },

};
const visaSchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",

  "@id": "https://www.dreamskyairways.com/visa#travelagency",

  "name": "Dream Sky Airways",
  "url": "https://www.dreamskyairways.com/visa",

  "description":
    "Get the best visa services in India with fast and reliable support at Dream Sky Airways.",

  "telephone": "+91 8750610304",

  "logo": {
    "@type": "ImageObject",
    "url": "https://www.dreamskyairways.com/logo.png"
  },

  "address": {
    "@type": "PostalAddress",
    "streetAddress": "A Block, Sector-63",
    "addressLocality": "Noida",
    "addressRegion": "Uttar Pradesh",
    "postalCode": "201301",
    "addressCountry": "IN"
  },

  "areaServed": {
    "@type": "Country",
    "name": "India"
  }
};

export default function VisaPage() {
  const faqs = [
    {
      question: "How long does visa processing take?",
      answer: "Processing time varies by visa type, ranging from 2-4 days for transit visas to 20-45 days for investor visas. Check specific visa details above."
    },
    {
      question: "What documents are required for visa application?",
      answer: "Required documents vary by visa type but generally include a valid passport, photographs, financial proof, and purpose-specific documents like invitation letters or admission letters."
    },
    {
      question: "Can I track my visa application status?",
      answer: "Yes, once you apply through our service, you'll receive a tracking number to monitor your application status in real-time."
    },
    {
      question: "What if my visa application is rejected?",
      answer: "We provide complete assistance and guidance. In case of rejection, we help you understand the reasons and reapply with improved documentation."
    },
    {
      question: "Do you provide visa consultation services?",
      answer: "Yes, our expert team provides free consultation to help you choose the right visa type and prepare your application correctly."
    },
    {
      question: "Are the prices mentioned final?",
      answer: "The prices mentioned are our service fees. Government fees and other charges may apply separately depending on the destination country."
    }
  ];

  return (  
    <>
    <script 
    type ="application/ld+json"
    dangerouslySetInnerHTML={{
      __html:JSON.stringify(visaSchema)
    }}
    />
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 mt-15">
      {/* Hero Banner - Full Width Image */}
      <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
        <Image
          src="/visa/visa2.webp"
          alt="Visa Services Banner"
          fill
          className="object-cover"
          priority
        />
      </section>

      {/* Visa Cards Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#0D6269] mb-4">
              Visa Services in India | Fast & Reliable Visa Support
            </h1>
            <h2 className="text-4xl font-bold text-[#0D6269] mb-4">
              All Visa Types
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              A visa is an official authorization granted by a country that permits foreign nationals to enter, remain within, or leave its territory for a specified period and purpose. Whether you're traveling for leisure, work, education, or business, we offer expert visa services with fast processing, complete documentation support, and professional guidance to make your international travel dreams a reality.
            </p>
          </div>

          {/* Visa Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visas.map((visa) => (
              <div
                key={visa.id}
                id={visa.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-[#0D6269]/20 transition-all duration-300 overflow-hidden border border-gray-100 hover:border-[#0D6269]/30 hover:-translate-y-2"
              >
                {/* Card Header */}
                <div className="bg-gradient-to-r from-[#0D6269] to-[#0a4d52] p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                  <h3 className="text-2xl font-bold text-white relative z-10">
                    {visa.title}
                  </h3>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <p className="text-gray-700 mb-6 line-clamp-3">
                    {visa.description}
                  </p>

                  {/* Quick Info */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg group-hover:bg-[#0D6269]/5 transition-colors">
                      <span className="text-2xl">⏳</span>
                      <div>
                        <p className="text-xs text-gray-500 font-medium">Duration</p>
                        <p className="text-sm font-semibold text-[#0D6269]">
                          {visa.duration}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg group-hover:bg-[#0D6269]/5 transition-colors">
                      <span className="text-2xl">⚡</span>
                      <div>
                        <p className="text-xs text-gray-500 font-medium">Processing Time</p>
                        <p className="text-sm font-semibold text-[#0D6269]">
                          {visa.processingTime}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg group-hover:bg-[#0D6269]/5 transition-colors">
                      <span className="text-2xl">💰</span>
                      <div>
                        <p className="text-xs text-gray-500 font-medium">Price</p>
                        <p className="text-sm font-semibold text-[#0D6269]">
                          Contact for Pricing
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Eligibility */}
                  {visa.eligibility && (
                    <div className="mb-6">
                      <h4 className="text-sm font-bold text-[#0D6269] mb-3 flex items-center gap-2">
                        <span className="w-1 h-4 bg-[#0D6269] rounded"></span>
                        Eligibility
                      </h4>
                      <ul className="space-y-2">
                        {visa.eligibility.slice(0, 3).map((item, idx) => (
                          <li
                            key={idx}
                            className="text-xs text-gray-600 flex items-start gap-2"
                          >
                            <span className="text-[#0D6269] mt-1">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* CTA Button */}
                  <a
                    href={`#${visa.id}`}
                    className="block w-full text-center bg-gradient-to-r from-[#0D6269] to-[#0a4d52] text-white font-semibold py-3 rounded-lg hover:from-[#0a4d52] hover:to-[#083b3f] transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#0D6269]/30"
                  >
                    View Details &rarr;
                  </a>
                </div>

                {/* Card Footer Accent */}
                <div className="h-1 bg-gradient-to-r from-[#0D6269] via-[#0a4d52] to-[#0D6269] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0D6269] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg">
              Got questions? We've got answers
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:border-[#0D6269]/30 transition-all duration-300"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-gray-800 pr-4">
                    {faq.question}
                  </h3>
                  <span className="text-[#0D6269] text-2xl group-open:rotate-180 transition-transform duration-300">
                    ↓
                  </span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center bg-gradient-to-r from-[#0D6269] to-[#0a4d52] rounded-3xl p-12 shadow-2xl shadow-[#0D6269]/30">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need Help Choosing?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Our visa experts are ready to assist you in finding the perfect visa type for your needs
            </p>
            <button className="bg-white text-[#0D6269] font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              Contact Our Experts
            </button>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
