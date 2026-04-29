"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { packages } from "@/app/data/packages";
import { motion, AnimatePresence } from "framer-motion";

export default function PackageForm() {
  const router = useRouter();

  const [destination, setDestination] = useState("");
  const [people, setPeople] = useState(1);
  const [open, setOpen] = useState(false);

  const filteredPackages = packages.filter(
    (pkg) =>
      pkg.location.toLowerCase().includes(destination.toLowerCase()) ||
      pkg.title.toLowerCase().includes(destination.toLowerCase())
  );

  const handleSelect = (pkg: any) => {
    setDestination(pkg.location);
    setOpen(false);
  };

  const handleSearch = () => {
    if (!destination) return;

    const selectedPackage = packages.find(
      (pkg) => pkg.location.toLowerCase() === destination.toLowerCase()
    );

    if (!selectedPackage) {
      alert("Package not found");
      return;
    }

    router.push(`/packages/${selectedPackage.slug}`);
  };

  return (
    <div className="relative z-30">
      <div className="grid md:grid-cols-3 gap-4">

        {/* Destination */}
        <div className="input-glass relative">
          <span>Destination</span>

          <input
            value={destination}
            onChange={(e) => {
              setDestination(e.target.value);
              setOpen(true);
            }}
            onFocus={() => setOpen(true)}
            placeholder="Select destination"
            className="glass-input cursor-text"
          />

          {/* Animated Dropdown */}
          <AnimatePresence>
            {open && filteredPackages.length > 0 && (
              <motion.ul
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 right-0 top-full mt-2 bg-white rounded-xl shadow-xl z-50 overflow-hidden"
              >
                {filteredPackages.map((pkg) => (
                  <li
                    key={pkg.id}
                    onClick={() => handleSelect(pkg)}
                    className="px-4 py-2 text-black text-sm cursor-pointer hover:bg-[#0D6269] hover:text-white transition"
                  >
                    {pkg.location}
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>

        {/* People Counter */}
        <div className="input-glass">
          <span>People</span>

          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setPeople(Math.max(1, people - 1))}
              className="counter-btn"
            >
              −
            </button>

            <span className="text-black font-semibold text-lg">
              {people}
            </span>

            <button
              type="button"
              onClick={() => setPeople(people + 1)}
              className="counter-btn"
            >
              +
            </button>
          </div>
        </div>

        {/* Submit */}
        <button onClick={handleSearch} className="search-btn">
          Explore Packages
        </button>
      </div>
    </div>
  );
}
