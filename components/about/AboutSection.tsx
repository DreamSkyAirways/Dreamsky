"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section
      className="py-24 px-6 max-w-7xl mx-auto"
      aria-labelledby="about-dream-sky-airways"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* 🔹 SEO Heading */}
        <h1
          id="about-dream-sky-airways"
          className="text-3xl md:text-4xl font-semibold text-[var(--primary)] mb-8"
        >
          Our Journey & Mission in India
        </h1>

        {/* 🔹 Paragraph 1 */}
        <p className="text-[var(--muted)] leading-relaxed mb-6">
  <strong>Dream Sky Airways </strong>
  is a trusted aviation and travel services company recognized by MCA, MSME, and
  NCT, established in 2018 with a clear vision to make travel and aviation careers
  more accessible across India. We specialize in domestic and international tour
  planning, flight ticket booking, and complete travel solutions designed to
  deliver comfort, affordability, and reliability.
</p>


        {/* 🔹 Paragraph 2 */}
        <p className="text-[var(--muted)] leading-relaxed mb-6">
          Our travel services are crafted to enhance every stage of your journey.
          From planning and booking to on-ground support, we ensure a seamless
          and stress-free travel experience. Through our platform, travelers can
          easily book tickets, customize travel itineraries, and enjoy
          thoughtfully curated tour packages tailored to individual preferences
          and budgets.
        </p>

        {/* 🔹 Paragraph 3 */}
        <p className="text-[var(--muted)] leading-relaxed mb-6">
          In addition to travel and tourism, <Link href="/" 
          className="text-blue-600 font-medium hover:underline"
          ><strong>Dream Sky Airways</strong> </Link>is deeply committed
          to empowering individuals seeking careers in the aviation industry. We
          provide free <Link href="/careers" className="text-blue-600 font-medium hover:underline">
          <strong>career guidance</strong></Link> and job placement assistance for aspiring
          pilots, cabin crew members, ground staff, and other aviation
          professionals, leveraging our strong industry network and years of
          operational experience.
        </p>

        {/* 🔹 Paragraph 4 */}
        <p className="text-[var(--muted)] leading-relaxed">
          Driven by integrity, transparency, and customer satisfaction, our goal
          is to build long-term relationships and create meaningful travel
          experiences. Whether you are planning your next trip or aiming to
          build a future in aviation, Dream Sky Airways stands as a
          reliable partner committed to your success and growth.
        </p>
      </motion.div>
    </section>
  );
}
