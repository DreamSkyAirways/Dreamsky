"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image"; // LOGO TEMP COMMENTED
import { motion } from "framer-motion";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Packages", href: "/packages" },
  { label: "Visa", href: "/visa" },
  { label: "Insurance", href: "/insurance" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-2 left-0 w-full z-[999] flex justify-center px-6">
      <div
        className={`
          w-full max-w-7xl
          transition-all duration-500
          rounded-[60px]
          ${scrolled
            ? "bg-black/50 backdrop-blur-md shadow-2xl"
            : "bg-black/40 backdrop-blur-sm"}
          hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.45)]
        `}
      >
        <nav className="flex items-center justify-between px-8 py-2">

          {/* 🔥 BRAND AREA */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer select-none"
          >
            {/* LOGO (TEMP COMMENTED – DO NOT DELETE) */}
            
            <Image
              src="/logo.png"
              alt="Dream Sky Airways Logo"
              width={45}
              height={40}
              priority
              draggable={false}
              className="object-contain select-none"
            />
            


           
                 


          </motion.div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-4 text-white font-medium">
            {menuItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="
                    relative px-2 py-1
                    after:absolute after:left-1/2 after:-bottom-1
                    after:h-[2px] after:w-0 after:bg-white
                    after:transition-all after:duration-300
                    after:-translate-x-1/2
                    hover:after:w-full
                  "
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Button */}
          <button
            className="md:hidden text-2xl text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`
            md:hidden transition-all duration-300 overflow-hidden
            ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <ul className="flex flex-col gap-5 px-6 pb-6 text-white font-medium">
            {menuItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-1"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
