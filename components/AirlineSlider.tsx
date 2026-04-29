"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const airlines = [
  "Logo.png",
  "Air_India.webp",
  "Akasa_Air.webp",
  "Alliance_Air.webp",
  "Cathay_Pacific.webp",
  "Etihad_Airways_logo.webp",
  "Indigo.webp",
  "Qatar_Airways.webp",
  "Singapore_Airlines.webp",
  "SpiceJet.webp",
  "Vistara.webp",
 

];

export default function AirlineSlider() {
  return (
    <section className="w-full bg-[#0D6269] py-14">
      <div className="mx-auto flex max-w-7xl items-center gap-10 px-6">
        
        {/* LEFT TEXT */}
        <div className="min-w-[220px] text-white">
          <h2 className="text-3xl font-bold leading-tight">
            Top Airlines
            <br />
            <span className="text-white/90">Companies</span>
          </h2>
        </div>

        {/* RIGHT SLIDER */}
        <div className="relative flex-1 overflow-hidden">
          {/* fade */}
          <div className="absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-[#0D6269] to-transparent" />
          <div className="absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[#0D6269] to-transparent" />

          <motion.div
            className="flex w-max gap-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 22,
              ease: "linear",
            }}
          >
            {[...airlines, ...airlines].map((logo, i) => (
              <div
                key={i}
                className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-white shadow-md"
              >
                <Image
                  src={`/airlines/${logo}`}
                  alt={logo}
                  width={70}
                  height={70}
                  className="object-contain"
                  priority
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
