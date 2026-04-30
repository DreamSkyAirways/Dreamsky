"use client";

import { useState } from "react";
import Image from "next/image";

import FlightForm from "@/components/forms/FlightForm";
import CabForm from "@/components/forms/CabForm";
import BusForm from "@/components/forms/BusForm";
import PackageForm from "@/components/forms/PackageForm";

const tabs = [
  { id: "flight", label: "Flights", icon: "/icon/airplane.png" },
  { id: "cab", label: "Cabs", icon: "/icon/car.png" },
  { id: "bus", label: "Buses", icon: "/icon/bus.png" },
  { id: "package", label: "Our Packages", icon: "/icon/Packages.png" },
];

export default function BookingTabs() {
  const [active, setActive] = useState("flight");

  return (
    <div className="w-full max-w-5xl mx-auto mt-0 px-2 sm:px-4 mb-2">
      <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-5 md:gap-8 px-3 sm:px-6 py-3 sm:py-4 bg-[#0b1220]/75 backdrop-blur-xl rounded-t-2xl border border-white/10 overflow-x-auto">
        {tabs.map((tab) => {
          const isActive = active === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`relative flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 sm:py-3 rounded-lg transition-all duration-300 whitespace-nowrap
                ${
                  isActive
                    ? "bg-[#0D6269]/20 text-white shadow-sm"
                    : "text-white hover:text-gray-200 hover:bg-white/10"
                }`}
            >
              <Image
                src={tab.icon}
                alt={tab.label}
                width={24}
                height={24}
                className={`transition-all ${isActive ? "brightness-80 invert" : "opacity-70"}`}
              />

              <span className="font-medium text-xs sm:text-sm md:text-base">
                {tab.label}
              </span>

              {isActive && (
                <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-8 sm:w-12 h-0.5 bg-[#0D6269] rounded-full" />
              )}
            </button>
          );
        })}
      </div>

      <div className="bg-[#0b1220]/65 backdrop-blur-2xl border border-white/10 rounded-b-2xl px-3 sm:px-6 lg:px-8 py-4 sm:py-7 md:py-8 shadow-2xl">
        <div className="w-full">
          {active === "flight" && <FlightForm />}
          {active === "cab" && <CabForm />}
          {active === "bus" && <BusForm />}
          {active === "package" && <PackageForm />}
        </div>
      </div>
    </div>
  );
}