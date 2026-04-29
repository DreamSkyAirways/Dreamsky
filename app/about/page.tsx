import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import AboutSection from "@/components/about/AboutSection";
import WhatWeDo from "@/components/about/WhatWeDo";
import VisionValues from "@/components/about/VisionValues";
/// SEO Done 
export const metadata: Metadata = {
 title: "Our Journey & Mission – Dream Sky Airways India",

description:
  "Discover the story of Dream Sky Airways, our mission, values and aviation experience. Learn how we support careers and travel services",

  keywords: [
  "company profile dream sky",
  "aviation business india",
  "airline industry services",
  "travel management company india",
  "aviation career support",
  "air hostess career guidance",
  "pilot training consultancy",
  "ground staff career services",
  "aviation placement assistance",
  "travel consulting firm india",
  "established travel company 2018",
  "aviation education services",
  "career counselling aviation",
],
  alternates: {
    canonical: "https://www.dreamskyairways.com/about",
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
export default function AboutPage() {
  return (
      <>
      {/* About Page Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Us - Dream Sky Airways",
            "url": "https://www.dreamskyairways.com/about",
            "description": "Learn more about Dream Sky Airways, our mission, values, and commitment to providing trusted travel, visa, and insurance services in India."
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
          "name": "About Us",
          "item": "https://www.dreamskyairways.com/about"
        }
      ]
    }`,
  }}
/>

    
    <main>
      <AboutHero />
      <AboutSection />
      <WhatWeDo />
      <VisionValues />
      
    </main>
    </>
  );
}
