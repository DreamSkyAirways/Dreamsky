"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PackageSetup from "../packageSetup";

interface Package {
  id?: number;
  title: string;
  slug: string;
  location: string;
  price: string;
  days: string;
  images: string[];
  stayStops: string[];
  journeyDetails: string[];
  includedServices: string[];
  notIncludedServices: string[];
  description: string;
}

interface Props {
  pkg?: Package | null;
}

export default function PackageDetails({ pkg }: Props) {
  if (!pkg || !pkg.title || !Array.isArray(pkg.images) || pkg.images.length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-md"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-3">Package Not Available</h2>
          <p className="text-gray-600 mb-6">Sorry, we couldn't load this tour package right now.</p>
          <a
            href="/packages"
            className="inline-block bg-[#0B3E44] text-white px-6 py-3 rounded-xl hover:bg-[#082a2f] transition"
          >
            ← Back to All Packages
          </a>
        </motion.div>
      </div>
    );
  }

  const [mainImage, setMainImage] = useState(pkg.images[0] || "");
  const [activeTab, setActiveTab] = useState<"stay" | "journey" | "included" | "not-included">("stay");

  const tabs = [
    { id: "stay", label: "Stay / Stops" },
    { id: "journey", label: "Journey" },
    { id: "included", label: "Included Services" },
    { id: "not-included", label: "Not Included" },
  ] as const;

  const getActiveContent = () => {
    switch (activeTab) {
      case "stay":
        return pkg.stayStops ?? [];
      case "journey":
        return pkg.journeyDetails ?? [];
      case "included":
        return pkg.includedServices ?? [];
      case "not-included":
        return pkg.notIncludedServices ?? [];
      default:
        return [];
    }
  };

  const activeItems = getActiveContent();

  return (
    <div className="min-h-screen bg-gray-50/50 pb-20 md:pb-24 mt-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-8 lg:pt-14">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-5 gap-8 xl:gap-12"
        >
          <div className="lg:col-span-3 space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-2xl shadow-2xl shadow-[#0B3E44]/10 bg-gray-100"
            >
              <img
                src={mainImage}
                alt={pkg.title}
                className="w-full aspect-[4/3] lg:aspect-[5/4] object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>

            {pkg.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-4">
                {pkg.images.map((img, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ scale: 1.06 }}
                    onClick={() => setMainImage(img)}
                    className={`rounded-xl overflow-hidden border-2 ${
                      mainImage === img ? "border-[#0B3E44]" : "border-transparent"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${pkg.title}-${i + 1}`}
                      className="w-28 h-20 sm:w-32 sm:h-24 object-cover"
                    />
                  </motion.button>
                ))}
              </div>
            )}
          </div>

          <div className="lg:col-span-2 lg:sticky lg:top-10 space-y-8">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold">{pkg.title}</h1>
              <p className="mt-2 text-lg text-gray-600">
                {pkg.days} • {pkg.location}
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#0B3E44]/5 to-[#0B3E44]/10 p-6 rounded-2xl border border-[#0B3E44]/10 shadow-sm">
              <span className="text-4xl sm:text-5xl font-extrabold text-[#0B3E44]">
                {pkg.price}
              </span>

              <motion.p
                className="mt-2 text-sm font-medium text-red-600 uppercase"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Hurry! Limited seats left
              </motion.p>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium ${
                    activeTab === tab.id
                      ? "bg-[#0B3E44] text-white"
                      : "bg-white text-gray-700 border"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-4 min-h-[160px]"
              >
                {activeItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm"
                  >
                    <p>{item}</p>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        <section className="mt-16 lg:mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">About This Experience</h2>
          <p className="whitespace-pre-line text-gray-700 leading-relaxed">
            {pkg.description}
          </p>
        </section>

        <div className="mt-12 flex justify-center">
          <Link
            href={`/trip-booking?package=${encodeURIComponent(pkg.title)}&price=${encodeURIComponent(
              pkg.price.replace(/[^\d]/g, "")
            )}`}
          >
            <motion.button
              whileHover={{ scale: 1.04 }}
              className="bg-[#0B3E44] text-white text-lg font-semibold px-10 py-5 rounded-2xl shadow-xl"
            >
              Book Now <span>{pkg.price}</span>
            </motion.button>
          </Link>
        </div>

            <PackageSetup showHero={false} slider={true} />
        </div>
    </div>
  );
}