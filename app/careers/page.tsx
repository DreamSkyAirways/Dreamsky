import type { Metadata } from "next";
import JobsPage from "./Careersclient";
// Seo done 
export const metadata: Metadata = {
  title: "Build Your Career with Dream Sky Airways-Job Openings",
  description:
    "Build your career with Dream Sky Airways. Explore latest job openings, apply online, and grow with India’s leading aviation company today.",

  keywords: [
    "Dream Sky Airways Careers",
    "Airline Jobs in India",
    "Travel Industry Jobs",
    "Airport Jobs",
    "Aviation Careers",
    "Cabin Crew Jobs",
    "Customer Support Jobs",
    "Sales Jobs",
  ],

  alternates: {
    canonical: "https://www.dreamskyairways.com/careers",
  },

  openGraph: {
    title: "Build Your Career with Dream Sky Airways-Job Openings",
    description:
      "Build your career with Dream Sky Airways. Explore latest job openings, apply online, and grow with India’s leading aviation company today.",
    url: "https://www.dreamskyairways.com/careers",
    siteName: "Dream Sky Airways",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Build Your Career with Dream Sky Airways -Job Openings",
    description: "Build your career with Dream Sky Airways. Explore latest job openings, apply online, and grow with India’s leading aviation company today",
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
export default function Careersclient(){
  return (
      <>
      {/* Careers Page Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Careers at Dream Sky Airways",
            "url": "https://www.dreamskyairways.com/careers",
            "description": "Explore career opportunities at Dream Sky Airways. Apply for aviation, travel, and customer support jobs and build your professional future with us.",
            "inLanguage": "en-IN",
            "isPartOf": {
              "@type": "WebSite",
              "name": "Dream Sky Airways",
              "url": "https://www.dreamskyairways.com"
            }
          }`,
        }}
      />

      {/* Careers Breadcrumb Schema */}
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
          "name": "Careers",
          "item": "https://www.dreamskyairways.com/careers"
        }
      ]
    }`,
  }}
/>

   <JobsPage  />
   </>
  );
}
