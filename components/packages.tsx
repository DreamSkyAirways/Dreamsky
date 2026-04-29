"use client";

import { packages } from "@/app/data/packages";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";


type Section = "stay" | "journey" | "included" | "notIncluded";

export default function Page() {
  const params = useParams();
  const slug = params.slug as string;

  const pkg = packages.find((p) => p.slug === slug);
  if (!pkg) return null;

  const images = pkg.images || [];
  const heroImage = images[0];
  const restImages = images.slice(1);

  const [activeSection, setActiveSection] =
    useState<Section>("stay");

  const [showHurry, setShowHurry] = useState(true);

  useEffect(() => {
    const i = setInterval(() => {
      setShowHurry((p) => !p);
    }, 1800);
    return () => clearInterval(i);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 mt-24">
      {/* ================= TOP ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT – IMAGES */}
        <div>
          <div className="relative w-full h-[420px] rounded-xl overflow-hidden shadow">
            <Image
              src={heroImage}
              alt={pkg.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="grid grid-cols-3 gap-4 mt-4">
            {restImages.map((img, i) => (
              <div
                key={i}
                className="relative h-28 rounded-lg overflow-hidden"
              >
                <Image src={img} alt="" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT – DETAILS */}
        <div>
          <h1 className="text-4xl font-bold">{pkg.title}</h1>

          <div className="mt-3 flex gap-6 text-lg">
            <span className="font-semibold">{pkg.days}</span>
            <span className="capitalize">{pkg.location}</span>
          </div>

          {/* PRICE (RIGHT SIDE) */}
          <div className="mt-6">
            <div className="text-4xl font-bold text-[#0D6269]">
              {pkg.price}
            </div>

            {showHurry && (
              <p className="mt-1 text-red-600 font-semibold animate-pulse">
                Hurry up! Limited seats left
              </p>
            )}
          </div>

          {/* SECTION BUTTONS (NO DESCRIPTION HERE) */}
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              ["stay", "Stay / Stops"],
              ["journey", "Journey"],
              ["included", "Included Services"],
              ["notIncluded", "Not Included"],
            ].map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveSection(key as Section)}
                className={`px-5 py-2 rounded-md font-semibold text-sm ${
                  activeSection === key
                    ? "bg-[#0D6269] text-white"
                    : "bg-gray-200"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* TAB CONTENT */}
          <div className="mt-6">
            {activeSection === "stay" && (
              <ul className="space-y-3">
                {pkg.stayStops?.map((item: string, i: number) => (
                  <li key={i} className="bg-blue-50 p-3 rounded-md">
                    • {item}
                  </li>
                ))}
              </ul>
            )}

            {activeSection === "journey" && (
              <ul className="space-y-3">
                {pkg.journeyDetails?.map((item: string, i: number) => (
                  <li key={i} className="bg-yellow-50 p-3 rounded-md">
                    • {item}
                  </li>
                ))}
              </ul>
            )}

            {activeSection === "included" && (
              <ul className="space-y-3">
                {pkg.includedServices?.map((item: string, i: number) => (
                  <li
                    key={i}
                    className="flex gap-2 bg-green-50 p-3 rounded-md"
                  >
                    <span className="text-green-600 font-bold">✔</span>
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {activeSection === "notIncluded" && (
              <ul className="space-y-3">
                {pkg.notIncludedServices?.map(
                  (item: string, i: number) => (
                    <li
                      key={i}
                      className="flex gap-2 bg-red-50 p-3 rounded-md"
                    >
                      <span className="text-red-600 font-bold">✖</span>
                      {item}
                    </li>
                  )
                )}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* ================= DESCRIPTION (ALWAYS OPEN) ================= */}
      <div className="mt-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">
          About This Experience
        </h2>

        <p className="text-gray-700 leading-8 whitespace-pre-line">
          {pkg.description}
        </p>

        <button className="mt-10 bg-[#0D6269] text-white px-12 py-4 rounded-lg text-lg font-semibold hover:scale-105 transition">
          Book This Package
        </button>
      </div>
    </section>
  );
}
