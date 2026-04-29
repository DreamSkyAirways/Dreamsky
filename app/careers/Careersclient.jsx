"use client";

import Link from "next/link";
import { jobs } from "@/app/data/jobs";
import { motion } from "framer-motion";
import RollingDate from "@/components/RollingDate";
import JobsHero from "@/components/careers/JobsHero"; // ✅ IMPORT

export default function JobsPage() {
  return (
    <>
      <JobsHero />  
      <main
        id="open-positions"
        className="p-10 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {jobs.map((job) => (
          <Link key={job.slug} href={`/careers/${job.slug}`}>
            <motion.article
              whileHover={{
                scale: 1.07,
                rotateX: 4,
                rotateY: -4,
              }}
              transition={{
                type: "spring",
                stiffness: 220,
                damping: 14,
              }}
              className="
                relative cursor-pointer rounded-2xl p-6
                bg-white
                border border-[#083A3F]/30
                backdrop-blur-xl
                shadow-[0_25px_60px_-15px_rgba(8,58,63,0.55)]
                hover:shadow-[0_35px_90px_-10px_rgba(8,58,63,0.85)]
                hover:bg-white/90
              "
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl bg-[#083A3F]/10 blur-2xl opacity-0 hover:opacity-100 transition"></div>

              <div className="relative z-10 space-y-3">
                <h2 className="text-xl font-bold text-[#083A3F]">
                  {job.title}
                </h2>

                {/* <p className="text-sm text-gray-600">
                   {job.location}
                </p> */}

                <p className="text-sm font-semibold text-[#083A3F]">
                   {job.salaryRange}
                </p>

                <p className="text-sm text-gray-700">
                   {job.experience}
                </p>

                <div className="flex justify-between items-center pt-3 text-sm">
                  <span className="text-red-600 font-semibold">
                     {job.seatsLeft} seats left
                  </span>
                  <span className="text-gray-500">
                     Apply by <RollingDate baseDate={job.lastDate} />
                  </span>
                </div>

                <button
                  className="
                    mt-4 w-full py-3 rounded-xl
                    bg-[#083A3F]
                    text-white font-semibold
                    hover:bg-[#062E32]
                    transition
                  "
                >
                  Apply Now
                </button>
              </div>
            </motion.article>
          </Link>
        ))}
      </main>
    </>
  );
}