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
        url: "https://www.dreamskyairways.com/ogIimage.webp", // future me replace kar sakte ho
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
      "url": "https://www.dreamskyairways.com",
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

      <Hero
        titleLine1="Explore The World"
        titleLine2="With"
        titleLine3="Dream Sky Airways"
        video="/videos/hero4.mp4"
      />

      <div>
        <div className="px-4 sm:px-6 md:px-10 lg:px-20">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-40 w-full max-w-6xl px-4 sm:px-6 lg:px-10 flex justify-center">
            <BookingTabs />
          </div>
          <PackageSection />
          <SpecialOffers />
          <TestimonialsPage />
        </div>

        <TravelBlogs />
        <AirlineSlider />
        <AboutSection />
        <VisionValues />
        <ContactSection />
        
        {/* <CareerForm/> */}

      </div>
    </>
  );
}
