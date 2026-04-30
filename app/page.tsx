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
};

export default function Home() {
  return (
    <>
      {/* HERO + BOOKING */}
      <div className="relative w-full desktop-safe-mobile">
        <Hero
          titleLine1="Explore The World"
          titleLine2="With"
          titleLine3="Dream Sky Airways"
          video="/videos/hero4.mp4"
        />

        <div className="absolute left-1/2 -translate-x-1/2 top-[36%] sm:top-[46%] md:top-[53%] z-40 w-full px-2 sm:px-4 desktop-safe-mobile">
          <BookingTabs />
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-5 pt-2 sm:pt-4 overflow-hidden desktop-safe-mobile">

        {/* Packages */}
        <div className="text-center mb-4 sm:mb-6">
          <p className="text-[#0D6269] font-semibold uppercase tracking-[3px] text-xs sm:text-sm">
            Discover Destinations
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mt-1">
            Handpicked Travel Packages For Every Journey
          </h2>
          <p className="text-gray-600 mt-2 max-w-3xl mx-auto text-sm sm:text-base">
            Explore curated packages designed for unforgettable memories.
          </p>
        </div>
        <PackageSection />

        {/* Offers */}
        <div className="text-center mt-8 sm:mt-10 mb-4 sm:mb-6">
          <p className="text-[#0D6269] font-semibold uppercase tracking-[3px] text-xs sm:text-sm">
            Best Savings
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mt-1">
            Exclusive Flight & Holiday Offers
          </h2>
        </div>
        <SpecialOffers />

        {/* Testimonials */}
        <div className="text-center mt-8 sm:mt-10 mb-4 sm:mb-6">
          <p className="text-[#0D6269] font-semibold uppercase tracking-[3px] text-xs sm:text-sm">
            Trusted By Travelers
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mt-1">
            Experiences Shared By Our Happy Clients
          </h2>
        </div>
        <TestimonialsPage />

        {/* Blogs */}
        <div className="text-center mt-8 sm:mt-10 mb-4 sm:mb-6">
          <p className="text-[#0D6269] font-semibold uppercase tracking-[3px] text-xs sm:text-sm">
            Travel Inspiration
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mt-1">
            Latest Travel Guides & Smart Tips
          </h2>
        </div>
        <TravelBlogs />

        {/* Airlines */}
        <div className="text-center mt-8 sm:mt-10 mb-4 sm:mb-6">
          <p className="text-[#0D6269] font-semibold uppercase tracking-[3px] text-xs sm:text-sm">
            Airline Network
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mt-1">
            We Connect You With Leading Airlines
          </h2>
        </div>
        <AirlineSlider />

        <div className="mt-8 sm:mt-10">
          <AboutSection />
        </div>

        <div className="mt-8 sm:mt-10">
          <VisionValues />
        </div>

        <div className="mt-8 sm:mt-10">
          <ContactSection />
        </div>
      </div>
    </>
  );
}