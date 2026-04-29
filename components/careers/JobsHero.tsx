"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function JobsHero() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative h-[85vh] w-full overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/videos/flight.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center justify-center text-center px-6 text-black">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Build Your Career with{" "}
              <span className="text-[#4ED6C5]">Dream Sky Airways</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-200">
              Join our growing team and explore exciting career opportunities
              in aviation, travel management, sales, marketing, customer service,
              and operations. Become part of a professional environment where
              innovation, dedication, and passion are valued every day.
            </p>

            <div className="mt-10 flex justify-center gap-4">
              <Link
                href="#open-positions"
                className="px-8 py-4 rounded-xl font-semibold bg-[#083A3F] text-white hover:bg-[#062E32] transition"
              >
                View Open Positions
              </Link>

              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl font-semibold border border-white text-white hover:bg-white hover:text-black transition"
              >
                Contact HR
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DESCRIPTION SECTION */}
      <section className="w-full mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Careers at Dream Sky Airways
          </h2>
  <p className="text-gray-600 text-lg leading-relaxed w-full mx-auto">
  At Dream Sky Airways, we believe that our people are the backbone of our
  long-term success. Our organization is founded on trust,
  professionalism, and a strong commitment to delivering reliable and
  high-quality travel experiences. To learn more about our vision,
  values, and company journey, you can visit our{" "}
  <Link
    href="/about"
    className="text-blue-600 font-medium hover:underline"
  ><strong>
    About Us
  </strong></Link>{" "}
  page.

  <br />
  <br />

  We offer diverse career opportunities across aviation operations,
  travel consultancy, customer support, sales, marketing, and backend
  management. Our teams work collaboratively to maintain operational
  efficiency, service excellence, and customer satisfaction. Every role
  contributes to strengthening our brand and ensuring smooth travel
  solutions for our clients.

  <br />
  <br />

  We also focus on sharing valuable knowledge through our official blog
  platform. Our blogs cover topics such as travel tips, airline updates,
  visa guidance, destination highlights, industry trends, and career
  insights. These articles help readers stay informed and make confident
  decisions in both travel planning and professional growth.

  <br />
  <br />

  If you want to expand your understanding of the aviation and travel
  industry, improve your skills, or stay updated with company news, we
  encourage you to explore our{" "}
  <Link
    href="/blogs"
    className="text-blue-600 font-medium hover:underline"
  ><strong>
    Blog
  </strong></Link>{" "}
  section. Our blog reflects our dedication to transparency, continuous
  learning, and long-term development.

  <br />
  <br />

  Whether you are a fresher starting your career or an experienced
  professional seeking new opportunities, Dream Sky Airways provides a
  supportive environment focused on learning, growth, and long-term
  success. Join us and take the next step toward a rewarding career.
</p>



        </motion.div>
      </section>
    </>
  );
}
