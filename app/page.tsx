import BookingTabs from "@/components/BookingTabs";
import ContactSection from "@/components/ContactSection";
import SpecialOffers from "@/components/Offers/SpecialOffers";
import AboutSection from "@/components/about/AboutSection";
import VisionValues from "@/components/about/VisionValues";
import Hero from "../components/Hero";
import TestimonialsPage from "./testimonials/page";

import AirlineSlider from "@/components/AirlineSlider";
import PackageSection from "@/components/PackageSection";
import TravelBlogs from "@/components/blogs/TravelBlogs";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dream Sky Airways | Aviation & Travel Company in India",
  description:
    "Explore aviation-based holiday packages and flight services with Dream Sky Airways. Enjoy easy booking and reliable travel assistance for smooth journeys.",

  keywords: [
    "best travel website India",
    "air ticket reservation online",
    "domestic international flights",
    "customized tour plans",
    "travel deals India",
    "trip planning services",
    "vacation booking platform",
    "online travel portal India",
    "affordable travel solutions",
    "corporate travel management",
    "family holiday planning",
    "honeymoon travel packages",
    "group tour booking",
    "trusted travel partner India",
    "24x7 travel support",
  ],

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

  openGraph: {
    title: "Dream Sky Airways | Aviation & Travel Company in India",
    description:
      "Explore aviation-based holiday packages and flight services with Dream Sky Airways. Enjoy easy booking and reliable travel assistance for smooth journeys.",
    url: "https://www.dreamskyairways.com/",
    siteName: "Dream Sky Airways",
    images: [
      {
        url: "https://www.dreamskyairways.com/ogIimage.webp",
        width: 1200,
        height: 630,
        alt: "Dream Sky Airways Travel Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      {/* Website Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Dream Sky Airways",
            "url": "https://www.dreamskyairways.com"
          }`,
        }}
      />

      {/* Homepage Breadcrumb */}
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
              }
            ]
          }`,
        }}
      />

      {/* HERO + BOOKING SECTION */}
      <div className="relative w-full desktop-safe-mobile">
        <Hero
          titleLine1="Explore The World"
          titleLine2="With"
          titleLine3="Dream Sky Airways"
          video="/videos/hero4.mp4"
        />

        <div className="absolute left-1/2 -translate-x-1/2 top-[39%] sm:top-[50%] md:top-[57%] z-40 w-full px-2 sm:px-4 desktop-safe-mobile">
          <BookingTabs />
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="w-full max-w-1400px mx-auto px-4 sm:px-5 pt-20 sm:pt-24 overflow-hidden desktop-safe-mobile">

        {/* Packages */}
        <div className="text-center mb-8 sm:mb-10">
          <p className="text-[#0D6269] font-semibold uppercase tracking-[3px] text-sm">
            Discover Destinations
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            Handpicked Travel Packages For Every Journey
          </h2>
          <p className="text-gray-600 mt-3 max-w-3xl mx-auto">
            From romantic escapes to family vacations and international adventures,
            explore curated packages designed for unforgettable memories.
          </p>
        </div>
        <PackageSection />

        {/* Offers */}
        <div className="text-center mt-16 mb-8 sm:mb-10">
          <p className="text-[#0D6269] font-semibold uppercase tracking-[3px] text-sm">
            Best Savings
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            Exclusive Flight & Holiday Offers
          </h2>
        </div>
        <SpecialOffers />

        {/* Testimonials */}
        <div className="text-center mt-16 mb-8 sm:mb-10">
          <p className="text-[#0D6269] font-semibold uppercase tracking-[3px] text-sm">
            Trusted By Travelers
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            Experiences Shared By Our Happy Clients
          </h2>
        </div>
        <TestimonialsPage />

        {/* Blogs */}
        <div className="text-center mt-16 mb-8 sm:mb-10">
          <p className="text-[#0D6269] font-semibold uppercase tracking-[3px] text-sm">
            Travel Inspiration
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            Latest Travel Guides & Smart Tips
          </h2>
        </div>
        <TravelBlogs />

        {/* Airlines */}
        <div className="text-center mt-16 mb-8 sm:mb-10">
          <p className="text-[#0D6269] font-semibold uppercase tracking-[3px] text-sm">
            Airline Network
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            We Connect You With Leading Airlines
          </h2>
        </div>
        <AirlineSlider />

        <AboutSection />
        <VisionValues />
        <ContactSection />
      </div>
    </>
  );
}