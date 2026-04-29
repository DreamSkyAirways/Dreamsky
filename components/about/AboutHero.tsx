"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden flex items-center justify-center text-center px-6">
      
      
      <Image
        src="/Aboutus.webp"
        alt="Dream Sky Airways aviation and travel services team"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/50" />

    
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 max-w-4xl"
      >
        <h2 className="text-4xl md:text-6xl font-bold  text-white">
          Dream Sky Airways 
        </h2>

        <p className="mt-6 text-lg md:text-xl text-white/80">
          Recognized by MCA, MSME & NCT Certified | Established in 2018
        </p>

        <p className="mt-4 text-base md:text-lg text-white">
          Redefining travel experiences & aviation careers with trust,
          transparency, and excellence.
        </p>
      </motion.div>
    </section>
  );
}
