"use client";

import { useEffect, useState } from "react";

export default function DisclaimerModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("disclaimerAccepted");

    if (!accepted) {
      setIsOpen(true);
      setTimeout(() => setIsAnimating(true), 80); // thoda smooth start
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden"; // extra safety
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, []);

  const handleAccept = () => {
    localStorage.setItem("disclaimerAccepted", "true");
    setIsAnimating(false);

    setTimeout(() => {
      setIsOpen(false);
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }, 350);
  };

  if (!isOpen) return null;

  return (
    <div
      className={`
        fixed inset-0 z-[9999] flex items-center justify-center px-4 sm:px-6
        transition-opacity duration-400
        ${isAnimating ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
      style={{ backgroundColor: "rgba(15, 23, 42, 0.75)" }} // dark slate + strong opacity
    >
      {/* Stronger blur backdrop */}
      <div className="absolute inset-0 backdrop-blur-xl" />

      {/* Modal with glassmorphism */}
      <div
        className={`
          relative w-full max-w-lg sm:max-w-xl
          bg-white/10 backdrop-blur-2xl
          border border-white/15
          rounded-2xl sm:rounded-3xl
          shadow-2xl shadow-black/40
          overflow-hidden
          transform transition-all duration-500 ease-out
          ${isAnimating ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 translate-y-4"}
        `}
      >
        {/* Top gradient accent */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-teal-600 via-teal-500 to-cyan-500" />

        <div className="p-6 sm:p-9">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 tracking-tight drop-shadow-sm">
            Important Notice
          </h2>

          <div className="space-y-5 text-gray-200 leading-relaxed text-[15px] sm:text-base">
            <p>
              Welcome to <strong className="text-teal-300">Dream Sky Airways</strong>.
            </p>

            <p>
              By continuing to use this website, you confirm that you have read, understood, and agree to be bound by:
            </p>

            <ul className="list-disc pl-6 space-y-2.5 text-gray-300 marker:text-teal-400">
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Booking, Cancellation & Refund Policies</li>
            </ul>

            <p className="pt-3 text-gray-300">
              This website provides travel-related information and booking facilitation services only. 
              All transactions are governed by the terms of the respective service providers.
            </p>
          </div>

          <div className="mt-10">
            <button
              onClick={handleAccept}
              className={`
                w-full bg-gradient-to-r from-teal-600 to-teal-700
                text-white py-4 rounded-xl font-semibold text-base
                shadow-lg shadow-teal-900/30
                hover:shadow-xl hover:shadow-teal-900/40
                hover:brightness-110 active:scale-[0.98]
                transition-all duration-300
                flex items-center justify-center gap-2.5
                border border-teal-500/30
              `}
            >
              I Understand and Agree
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          <p className="text-center text-xs text-gray-400 mt-7 opacity-80">
            Your choice will be remembered for future visits
          </p>
        </div>
      </div>
    </div>
  );
}