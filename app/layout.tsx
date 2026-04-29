import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import AOSProvider from "../components/AOSProvider";
import Navbar from "@/components/Navbar";
import SubscribeSection from "@/components/SubscribeSection";
import Footer from "@/components/Footer";
import DisclaimerModal from "@/components/DisclaimerModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dream Sky Airways | Leading Tour and Travel Company in India",
  description:
    "Plan your perfect journey with Dream Sky Airways, a leading tour and travel company in India, offering affordable flights, tours, buses and cabs for smooth trips.",
  keywords: [
    "flight booking",
    "online flight booking India",
    "tour and travel company",
    "travel agency India",
    "holiday packages",
    "bus booking",
    "cab services",
    "Dream Sky Airways",
  ],
  alternates: {
    canonical: "https://www.dreamskyairways.com/",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "6wA_xd1DZyKUJf5mASIojsfTJkRYese0X5DEYYE0Wlg",
  },
  openGraph: {
    title:
      "Dream Sky Airways | Leading Tour and Travel Company in India",
    description:
      "Plan your perfect journey with Dream Sky Airways, a leading tour and travel company in India, offering affordable flights, tours, buses and cabs for smooth trips.",
    url: "https://www.dreamskyairways.com",
    siteName: "Dream Sky Airways",
    images: [
      {
        url: "https://www.dreamskyairways.com/ogImage.webp",
        width: 1200,
        height: 630,
        alt: "Dream Sky Airways Travel Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Dream Sky Airways | Leading Tour and Travel Company in India",
    description:
      "Plan your perfect journey with Dream Sky Airways, a leading tour and travel company in India, offering affordable flights, tours, buses and cabs for smooth trips.",
    images: ["https://www.dreamskyairways.com/ogImage.webp"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Organization Schema */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "TravelAgency"],
              name: "Dream Sky Airways",
              url: "https://www.dreamskyairways.com",
              logo: "https://www.dreamskyairways.com/logo.png",
              description:
                "Plan your perfect journey with Dream Sky Airways, a leading tour and travel company in India, offering affordable flights, tours, buses and cabs for smooth trips.",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+911204580951",
                contactType: "customer service",
                areaServed: "IN",
                availableLanguage: ["English", "Hindi"],
              },
              sameAs: [
                "https://www.facebook.com/profile.php?id=61586109601880",
                "https://www.instagram.com/dreamskyairways/",
                "https://www.linkedin.com/company/dream-sky-airways/",
              ],
            }),
          }}
        />

        <Navbar />
        <AOSProvider />
        <DisclaimerModal />
        {children}
        <SubscribeSection />
        <Footer />

  
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MXZW1GQPGL"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MXZW1GQPGL');
          `}
        </Script>
      </body>
    </html>
  );
}
