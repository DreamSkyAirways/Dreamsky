"use client";
import { motion } from "framer-motion";

const services = [
  {
    title: "Domestic & International Tour Planning",
    description:
      "Dream Sky Airways specializes in customized domestic and international tour planning. From family vacations to honeymoon packages and corporate trips, we design journeys that match your budget, preferences, and travel goals.",
  },
  {
    title: "Flight Ticket Booking",
    description:
      "Book affordable flight tickets for both domestic and international destinations through our platform. We ensure the best routes, competitive pricing, and hassle-free booking for a smooth travel experience.",
  },
  {
    title: "Complete Travel & Tour Services",
    description:
      "We offer end-to-end travel solutions including hotels, sightseeing, transportation, and guided tours—so you can enjoy a seamless and stress-free journey from start to finish.",
  },
  {
    title: "Aviation Career Guidance & Job Placement",
    description:
      "Alongside travel services, we provide free aviation career guidance and job placement support for aspiring pilots, cabin crew, ground staff, and other aviation professionals.",
  },
  {
    title: "Hotel & Accommodation Management",
    description:
      "Our hotel and accommodation services ensure comfortable stays at trusted partner hotels, offering quality service, safety, and value for money at every destination.",
  },
  {
    title: "Digital Services & Brand Support",
    description:
      "Dream Sky Airways also delivers professional digital solutions including website development, SEO, and content creation to support travel businesses and startups in growing their online presence.",
  },
];

export default function WhatWeDo() {
  return (
    <section className="py-20 bg-[var(--card)]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-[var(--primary)] mb-4">
          What We Do
        </h2>

        <p className="text-center text-[var(--muted)] max-w-3xl mx-auto mb-12">
          Dream Sky Airways is a reliable travel and aviation services
          company offering complete tour planning, ticket booking, and career
          support—designed to make every journey smooth, affordable, and
          memorable.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.04 }}
              className="p-6 rounded-2xl shadow-lg bg-[var(--background)]"
            >
              <h3 className="text-xl font-semibold text-[var(--primary)] mb-3">
                {service.title}
              </h3>
              <p className="text-[var(--muted)] leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
