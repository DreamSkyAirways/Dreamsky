"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
  const [isRealMobile, setIsRealMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);

    const checkMobileDevice = () => {
      const mobileUA = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
        navigator.userAgent
      );
      setIsRealMobile(mobileUA);
    };

    checkMobileDevice();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-2 left-0 w-full z-[999] flex justify-center px-2 sm:px-4">
      <div
        className={`w-full max-w-[1400px] rounded-[40px] transition-all duration-500 ${
          scrolled
            ? "bg-black/55 backdrop-blur-md shadow-2xl"
            : "bg-black/35 backdrop-blur-sm"
        }`}
      >
        <nav className="flex items-center justify-between px-4 sm:px-6 py-2">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.04 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <Image
              src="/logo.png"
              alt="Dream Sky Airways Logo"
              width={38}
              height={38}
              priority
              draggable={false}
              className="object-contain"
            />
          </motion.div>

          {/* only show desktop nav on actual desktop/laptop */}
          {!isRealMobile && (
            <ul className="hidden md:flex items-center gap-5 text-white font-medium text-sm">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="relative px-2 py-1 after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}

          {/* mobile and desktop-mode-on-mobile both show hamburger */}
          {(isRealMobile || typeof window !== "undefined") && (
            <button
              className="text-2xl text-white md:hidden block"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>
          )}
        </nav>

        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-4 px-6 pb-6 text-white font-medium">
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