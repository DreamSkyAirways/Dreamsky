"use client";

import { useState } from "react";
import Image from "next/image";

import FlightForm from "./forms/FlightForm";
import CabForm from "./forms/CabForm";
import BusForm from "./forms/BusForm";
import PackageForm from "./forms/PackageForm";

const tabs = [
  { id: "flight", label: "Flights", icon: "/icon/airplane.png" },
  { id: "cab", label: "Cabs", icon: "/icon/car.png" },
  { id: "bus", label: "Buses", icon: "/icon/bus.png" },
  { id: "package", label: "Our Packages", icon: "/icon/Packages.png" },
];

export default function BookingTabs() {
  const [active, setActive] = useState("flight");

  return (
    <div className="w-full max-w-5xl mx-auto mt-8 sm:mt-10 px-4 sm:px-0 mb-10">
      {/* ===== TOP TABS ===== */}
      <div className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-6 md:gap-8 px-4 sm:px-6 py-3 sm:py-4 bg-[#0b1220]/40 backdrop-blur-xl rounded-t-2xl border border-white/10 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600/50">
        {tabs.map((tab) => {
          const isActive = active === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`relative flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg transition-all duration-300 whitespace-nowrap
                ${isActive 
                  ? "bg-[#0D6269]/20 text-[#0D6269] shadow-sm" 
                  : "text-gray-400 hover:text-gray-200 hover:bg-white/5"}`}
            >
              <Image
                src={tab.icon}
                alt={tab.label}
                width={30}
                height={30}
                className={`transition-all ${isActive ? "brightness-80 invert" : "opacity-70"}`}
              />

              <span className={`font-medium text-sm sm:text-base ${isActive ? "text-[#0D6269]" : ""}`}>
                {tab.label}
              </span>

              {/* Active indicator line */}
              {isActive && (
                <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-8 sm:w-12 h-0.5 bg-[#0D6269] rounded-full" />
              )}
            </button>
          );
        })}
      </div>

      
      <div className="bg-[#0b1220]/35 backdrop-blur-2xl border border-white/10 rounded-b-2xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10 shadow-2xl">
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