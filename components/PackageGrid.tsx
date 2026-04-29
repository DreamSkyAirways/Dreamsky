"use client";

import Link from "next/link";
import Image from "next/image";

interface Package {
  title: string;
  slug: string;
  location: string;
  price: string;
  days: string;
  image: string | null;
  description: string;
}

export default function PackageGrid({ packages }: { packages: Package[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {packages.map((pkg, index) => (
        <Link
          key={index}
          href={`/packages/${pkg.slug}`}
          className="block rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
        >
          {/* IMAGE */}
          <div className="relative h-48 w-full bg-gray-100">
            {pkg.image ? (
              <Image
                src={pkg.image}
                alt={pkg.title}
                fill
                sizes="100vw"
                className="object-cover"
              />
            ) : (
              <div className="flex items-center justify-center h-full text-gray-400 text-sm">
                No Image
              </div>
            )}
          </div>

          {/* CONTENT */}
          <div className="p-4">
            <h3 className="text-lg font-bold line-clamp-1">
              {pkg.title}
            </h3>

            <p className="text-sm text-gray-600">
              {pkg.days}
            </p>

            <p className="mt-2 font-semibold text-[#0D6269]">
              {pkg.price}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
