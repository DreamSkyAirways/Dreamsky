"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function PackageCard({ pkg }: any) {
  const [current, setCurrent] = useState(0);

  
  useEffect(() => {
    if (!pkg.images || pkg.images.length === 0) return;

    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === pkg.images.length - 1 ? 0 : prev + 1
      );
    }, 2500); // 2.5 sec per slide

    return () => clearInterval(interval);
  }, [pkg.images]);

  return (
    <Link href={`/packages/${pkg.slug}`}>



      <div className="cursor-pointer rounded-xl overflow-hidden bg-white shadow hover:shadow-lg transition">

        
        <div className="relative h-48 w-full overflow-hidden">
          {pkg.images?.map((img: string, index: number) => (
            <Image
              key={index}
              src={img}
              alt={`${pkg.title} image ${index + 1}`}
              fill
              className={`
                object-cover transition-opacity duration-700
                ${index === current ? "opacity-100" : "opacity-0"}
              `}
            />
          ))}
        </div>

        {/* 📄 CARD CONTENT */}
        <div className="p-4">
          <h3 className="text-lg font-bold">{pkg.title}</h3>
          <p className="text-sm text-gray-600">{pkg.days}</p>
          <p className="mt-2 font-semibold text-[#0D6269]">
            {pkg.price}
          </p>
        </div>
      </div>
    </Link>
  );
}
