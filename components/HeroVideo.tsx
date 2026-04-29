"use client";

import { motion } from "framer-motion";

export default function HeroVideo() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/Advanture.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 "  />

      {/* TAG / BADGE */}
      <div className="absolute top-2 left-6 z-20">
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            inline-block
            bg-[#0D6269]
            text-white
            px-6
            py-2
            rounded-full
            text-sm
            font-semibold
            shadow-lg
            tracking-wide
          "
        >
          🌍 Adventure Begins Here
        </motion.span>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Explore the World with <br />
            <span className="text-[#4ED6C5]">Dream Sky Airways</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-200">
            Flights • Tour Packages • Adventure Trips • Seamless Booking
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <button className="bg-[#0D6269] text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition">
              Book Your Trip
            </button>

            <button className="border border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-black transition">
              Explore Packages
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
