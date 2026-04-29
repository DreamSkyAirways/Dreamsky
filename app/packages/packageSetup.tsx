"use client";

import Link from "next/link";
import Image from "next/image";
import { packages } from "../data/packages";
import { useEffect, useState } from "react";
import HeroVideo from "@/components/HeroVideo";
import { motion } from "framer-motion";

interface Props {
  showHero?: boolean;
  slider?: boolean;
}

const packagesetup = ({ showHero = true, slider = false }: Props) => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    if (!slider) return;

    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % packages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slider]);

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-14 mt-0 overflow-hidden">
      {showHero && <HeroVideo />}

      <h2 className="text-3xl md:text-4xl font-bold my-10 text-center">
        {slider ? "Popular Packages" : "All Packages"}
      </h2>

      {!slider ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      ) : (
        <div className="overflow-hidden w-full">
          <motion.div
            className="flex gap-6"
            animate={{
              x: `-${slideIndex * 306}px`,
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
          >
            {[...packages, ...packages].map((pkg, index) => (
              <PackageCard key={index} pkg={pkg} />
            ))}
          </motion.div>
        </div>
      )}
    </section>
  );
};

function PackageCard({ pkg }: any) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!pkg.images || pkg.images.length === 0) return;

    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === pkg.images.length - 1 ? 0 : prev + 1
      );
    }, 2200);

    return () => clearInterval(interval);
  }, [pkg.images]);

  return (
    <Link
      href={`/packages/${pkg.slug}`}
      className="block rounded-2xl bg-white shadow-lg hover:shadow-2xl transition overflow-hidden min-w-[280px] md:min-w-[300px]"
    >
      <div className="relative h-52 w-full">
        {pkg.images.map((img: string, index: number) => (
          <Image
            key={index}
            src={img}
            alt={`${pkg.title} image ${index + 1}`}
            fill
            className={`object-cover transition-opacity duration-700 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold">{pkg.title}</h3>
        <p className="text-sm text-gray-600 mt-1">{pkg.days}</p>
        <p className="mt-2 font-semibold text-[#0D6269]">{pkg.price}</p>
      </div>
    </Link>
  );
}

export default packagesetup;
