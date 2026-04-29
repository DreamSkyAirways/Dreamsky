"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function VisionValues() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 text-center">

        {/* 🔹 OUR VALUES */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-[var(--primary)] mb-6">
            Our Values
          </h3>

          {/* 🖼️ Image with Hover Animation */}
          <motion.div
            whileHover={{
              scale: 1.08,
              y: -8,
              boxShadow: "0 25px 50px rgba(0,0,0,0.25)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="rounded-2xl overflow-hidden mb-6 cursor-pointer"
          >
            <Image
              src="/Our_Value.webp"
              alt="Dream Sky Airways values integrity transparency and customer satisfaction in travel services"
              width={220}
              height={220}
              className="object-cover"
            />
          </motion.div>

          <p className="text-[var(--muted)] leading-relaxed max-w-md">
            At <strong>Dream Sky Airways</strong>, our values are built
            on integrity, transparency, and customer satisfaction. We deliver
            personalized travel planning and reliable tour services for
            memorable domestic and international journeys.
          </p>
        </motion.div>

        {/* 🔹 OUR VISION */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-[var(--primary)] mb-6">
            Our Vision
          </h3>

          {/* 🖼️ Image with Hover Animation */}
          <motion.div
            whileHover={{
              scale: 1.08,
              y: -8,
              boxShadow: "0 25px 50px rgba(0,0,0,0.25)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="rounded-2xl overflow-hidden mb-6 cursor-pointer"
          >
            <Image
              src="/Our_Vision.webp"
              alt="Dream Sky Airways vision for affordable domestic and international travel"
              width={220}
              height={220}
              className="object-cover"
            />
          </motion.div>

          <p className="text-[var(--muted)] leading-relaxed max-w-md">
            Our vision is to make domestic and international travel affordable,
            accessible, and seamless through expert planning, transparent
            pricing, and trusted travel support.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
