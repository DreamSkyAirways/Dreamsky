"use client";

import { motion } from "framer-motion";
import BookingTabs from "./BookingTabs";

interface HeroProps {
  titleLine1: string;
  titleLine2: string;
  titleLine3: string;
  video: string;
}

export default function Hero({
  titleLine1,
  titleLine2,
  titleLine3,
  video,
}: HeroProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden mb-65 lg:mb-28">
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      >
        <source src={video} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 z-10" />

      
      <div className="relative z-20 flex h-full flex-col items-center justify-center text-center px-4 pb-40">
        <h1 className="font-extrabold leading-tight mb-6">
          {/* Line 1 */}
          <motion.span
            className="block text-5xl md:text-6xl text-white"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {titleLine1}
          </motion.span>

          {/* Line 2 */}
          <motion.span
            className="block text-4xl md:text-5xl text-blue-400 mt-2 "
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            {titleLine2}
          </motion.span>

          {/* Line 3 */}
          <motion.span
            className="block text-5xl md:text-6xl mt-2 bg-gradient-to-r from-[#8bc34a] via-[#4caf50] to-[#0D6265] bg-clip-text text-transparent"

            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
          >
            {titleLine3}
          </motion.span>
        </h1>
      </div>   
    </section>
  );
}
