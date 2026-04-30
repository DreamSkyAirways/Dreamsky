"use client";

import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { packages } from "../data/packages";
import { offers } from "../data/offers";

// ─── Helpers ────────────────────────────────────────────────────────────────

/**
 * Extracts the numeric discount % from an offer tag.
 * e.g. "GOA30" → 30, "DOM25" → 25, "SUPERHOLIDAY" → 20 (default)
 */
function extractDiscount(tag: string): number {
  const match = tag.match(/(\d+)/);
  return match ? parseInt(match[1], 10) : 20;
}

/** All unique offer tags from the offers data */
const allTags = Array.from(new Set(offers.map((o) => o.tag)));

// ─── Sub-components (preserved from original) ───────────────────────────────

const Field = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <div className="space-y-1.5">
    <label className="block text-xs font-semibold uppercase tracking-widest text-gray-400">
      {label}
    </label>
    {children}
  </div>
);

// ─── Page ────────────────────────────────────────────────────────────────────

export default function TripBookingPage() {
  // ── Existing state (preserved) ────────────────────────────────────────────
  const [customer, setCustomer] = useState({ name: "", phone: "", email: "" });

  const [selectedTrip, setSelectedTrip] = useState({
    name: packages[0].title,
    pricePerMember: Number(packages[0].price.replace(/[^\d]/g, "")),
  });

  const [adults,       setAdults      ] = useState(1);
  const [children,     setChildren    ] = useState(0);
  const [childAge,     setChildAge    ] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ── NEW: offer state ───────────────────────────────────────────────────────
  const [selectedTag,     setSelectedTag    ] = useState<string>("");   // tag in dropdown
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0);    // 0 = no offer applied
  const [appliedTag,      setAppliedTag     ] = useState<string>("");   // confirmed applied tag

  // ── Existing useEffect — extended to also handle `tag` param ─────────────
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const packageName  = params.get("package");
    const packagePrice = params.get("price");
    const offerTag     = params.get("tag");     // ← NEW: passed from SpecialOffers Book Now

    // Restore existing package-prefill logic
    if (packageName) {
      const found = packages.find((p) => p.title === packageName);
      if (found) {
        setSelectedTrip({
          name: found.title,
          pricePerMember: Number(packagePrice || found.price.replace(/[^\d]/g, "")),
        });
      }
    }

    // Auto-prefill the offer tag if it came via URL
    if (offerTag && allTags.includes(offerTag)) {
      setSelectedTag(offerTag);
    }
  }, []);

  // ── Price calculation (extended) ──────────────────────────────────────────
  const numericChildAge    = Number(childAge || 0);
  const chargeableChildren = numericChildAge > 5 ? children : 0;
  const totalTravellers    = adults + chargeableChildren;
  const originalTotal      = selectedTrip.pricePerMember * totalTravellers;
  const discountAmount     = appliedDiscount > 0
    ? Math.round((originalTotal * appliedDiscount) / 100)
    : 0;
  const finalTotal         = originalTotal - discountAmount;

  // ── Apply offer handler ───────────────────────────────────────────────────
  const handleApplyOffer = () => {
    if (!selectedTag) {
      Swal.fire({
        icon: "warning",
        title: "No Offer Selected",
        text: "Please select an offer code from the dropdown first.",
        confirmButtonColor: "#0D6269",
      });
      return;
    }

    const discount = extractDiscount(selectedTag);
    setAppliedDiscount(discount);
    setAppliedTag(selectedTag);

    Swal.fire({
      icon: "success",
      title: "🎉 Offer Applied!",
      html: `<b>${selectedTag}</b> applied successfully.<br/>You received <b>${discount}%</b> discount on your booking!`,
      confirmButtonColor: "#0D6269",
      confirmButtonText: "Great!",
    });
  };

  // ── Remove offer handler ──────────────────────────────────────────────────
  const handleRemoveOffer = () => {
    setAppliedDiscount(0);
    setAppliedTag("");
    setSelectedTag("");
  };

  // ── Existing form validation (preserved unchanged) ────────────────────────
  const validateForm = () => {
    if (!customer.name.trim()) {
      Swal.fire({ icon: "error", title: "Missing Name", text: "Please enter your full name." });
      return false;
    }
    if (customer.phone.length !== 10) {
      Swal.fire({ icon: "error", title: "Invalid Mobile Number", text: "Mobile number must be exactly 10 digits." });
      return false;
    }
    if (!customer.email.includes("@")) {
      Swal.fire({ icon: "error", title: "Invalid Email", text: "Please enter a valid email address." });
      return false;
    }
    return true;
  };

  // ── Existing submit handler (preserved unchanged) ─────────────────────────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    Swal.fire({
      title: "Submitting Your Booking...",
      text: "Please wait while we process your travel enquiry.",
      allowOutsideClick: false,
      allowEscapeKey: false,
      showConfirmButton: false,
      didOpen: () => { Swal.showLoading(); },
    });

    await new Promise((resolve) => setTimeout(resolve, 25000));
    Swal.close();

    Swal.fire({
      icon: "success",
      title: "Booking Enquiry Submitted",
      text: "Our Dream Sky Airways team will contact you shortly.",
      confirmButtonColor: "#0D6269",
    });

    setIsSubmitting(false);
  };

  // ── Shared input class (preserved unchanged) ──────────────────────────────
  const inputCls =
    "w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#0D6269]/40 focus:border-[#0D6269] transition placeholder:text-gray-400";

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <section className="min-h-screen bg-[#f5f7f7] flex items-start justify-center py-16 px-4">
      <div className="w-full max-w-2xl">

        {/* ── Page heading (preserved) ─────────────────────────────────── */}
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#0D6269] mb-2">
            Travel Booking
          </p>
          <h1 className="text-3xl font-bold text-gray-900 leading-tight">
            Reserve Your Journey
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Complete the form below and our team will confirm within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* ── NEW: Offer Applied card ─────────────────────────────────── */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">

            {/* Section header */}
            <div className="flex items-center gap-2">
              {/* <span className="text-base">🎟️</span> */}
              <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                Offer Applied
              </h2>
            </div>

            {/* Currently applied badge */}
            {appliedTag && (
              <div className="flex items-center justify-between bg-[#0D6269]/8 border border-[#0D6269]/20 rounded-xl px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="text-[#0D6269] text-lg">✔</span>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Applied offer code</p>
                    <p className="text-sm font-bold text-[#0D6269]">
                      {appliedTag} — {appliedDiscount}% OFF
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleRemoveOffer}
                  className="text-xs text-red-500 hover:text-red-700 font-semibold transition"
                >
                  Remove
                </button>
              </div>
            )}

            {/* Offer selector + apply button */}
            {!appliedTag && (
              <div className="flex flex-col sm:flex-row gap-3">
                <select
                  className={`${inputCls} flex-1`}
                  value={selectedTag}
                  onChange={(e) => setSelectedTag(e.target.value)}
                >
                  <option value="">— Select an offer code —</option>
                  {allTags.map((tag) => (
                    <option key={tag} value={tag}>
                      {tag} ({extractDiscount(tag)}% off)
                    </option>
                  ))}
                </select>

                <button
                  type="button"
                  onClick={handleApplyOffer}
                  className="
                    shrink-0
                    bg-[#0D6269] hover:bg-[#08948b]
                    text-white font-semibold
                    px-6 py-3 rounded-lg
                    transition text-sm
                    whitespace-nowrap
                  "
                >
                  Apply Offer
                </button>
              </div>
            )}

            {/* Helper note */}
            {!appliedTag && (
              <p className="text-xs text-gray-400">
                Select a promo code above and click Apply to get your instant discount.
              </p>
            )}
          </div>

          {/* ── Package selection (preserved) ─────────────────────────── */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400">
              Select Package
            </h2>
            <select
              className={inputCls}
              value={selectedTrip.name}
              onChange={(e) => {
                const found = packages.find((p) => p.title === e.target.value)!;
                setSelectedTrip({
                  name: found.title,
                  pricePerMember: Number(found.price.replace(/[^\d]/g, "")),
                });
              }}
            >
              {packages.map((trip) => (
                <option key={trip.id} value={trip.title}>
                  {trip.title} — {trip.price} ({trip.days})
                </option>
              ))}
            </select>
          </div>

          {/* ── Customer details (preserved) ──────────────────────────── */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400">
              Customer Details
            </h2>

            <Field label="Full Name">
              <input
                type="text"
                className={inputCls}
                placeholder="Enter Your Full Name"
                value={customer.name}
                onChange={(e) => {
                  const value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
                  setCustomer((prev) => ({ ...prev, name: value }));
                }}
              />
            </Field>

            <Field label="Mobile Number">
              <input
                type="tel"
                inputMode="numeric"
                maxLength={10}
                className={inputCls}
                placeholder="9876543210"
                value={customer.phone}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "");
                  if (value.length <= 10) {
                    setCustomer((prev) => ({ ...prev, phone: value }));
                  }
                }}
              />
            </Field>

            <Field label="Email Address">
              <input
                type="email"
                className={inputCls}
                placeholder="Enter Your Email Address"
                value={customer.email}
                onChange={(e) =>
                  setCustomer((prev) => ({ ...prev, email: e.target.value }))
                }
              />
            </Field>
          </div>

          {/* ── Traveller details (preserved) ─────────────────────────── */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400">
              Traveller Details
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field label="Adults">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setAdults((prev) => Math.max(1, prev - 1))}
                    className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg text-xl transition"
                  >−</button>
                  <div className={`${inputCls} text-center font-semibold pointer-events-none flex-1`}>
                    {adults}
                  </div>
                  <button
                    type="button"
                    onClick={() => setAdults((prev) => prev + 1)}
                    className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg text-xl transition"
                  >+</button>
                </div>
              </Field>

              <Field label="Children">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setChildren((prev) => Math.max(0, prev - 1))}
                    className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg text-xl transition"
                  >−</button>
                  <div className={`${inputCls} text-center font-semibold pointer-events-none flex-1`}>
                    {children}
                  </div>
                  <button
                    type="button"
                    onClick={() => setChildren((prev) => prev + 1)}
                    className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg text-xl transition"
                  >+</button>
                </div>
              </Field>

              <Field label="Child Age (if any)">
                <input
                  type="text"
                  inputMode="numeric"
                  maxLength={2}
                  className={inputCls}
                  placeholder="e.g. 5"
                  value={childAge}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");
                    setChildAge(value);
                  }}
                />
              </Field>

              <Field label="Price Per Person">
                <div className={`${inputCls} font-semibold text-gray-800 pointer-events-none`}>
                  ₹{selectedTrip.pricePerMember.toLocaleString("en-IN")}
                </div>
              </Field>
            </div>
          </div>

          {/* ── Total summary card (extended with discount breakdown) ──── */}
          <div className="bg-[#0D6269] rounded-2xl p-6 text-white">

            {/* Price breakdown rows */}
            <div className="space-y-2 mb-4">

              {/* Original amount — strikethrough when discount applied */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/70">Original Amount</span>
                <span
                  className={`text-base font-semibold ${
                    discountAmount > 0 ? "line-through text-white/40" : "text-white"
                  }`}
                >
                  ₹{originalTotal.toLocaleString("en-IN")}
                </span>
              </div>

              {/* Discount row — only visible when offer is applied */}
              {discountAmount > 0 && (
                <div className="flex items-center justify-between">
                  <span className="text-sm text-emerald-300 font-medium">
                    Discount Saved ({appliedDiscount}% via {appliedTag})
                  </span>
                  <span className="text-base font-semibold text-emerald-300">
                    − ₹{discountAmount.toLocaleString("en-IN")}
                  </span>
                </div>
              )}

              {/* Divider */}
              {discountAmount > 0 && (
                <div className="border-t border-white/20 pt-2 mt-1" />
              )}

              {/* Final payable */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/70">Total Payable</span>
                <span className="text-3xl font-bold">
                  ₹{finalTotal.toLocaleString("en-IN")}
                </span>
              </div>
            </div>

            {/* Traveller count note */}
            <p className="text-xs text-white/60">
              {totalTravellers} Traveller(s) × ₹{selectedTrip.pricePerMember.toLocaleString("en-IN")}
              {discountAmount > 0 && ` • ${appliedDiscount}% discount applied`}
            </p>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-white text-[#0D6269] font-semibold py-3.5 rounded-xl mt-6 hover:bg-white/95 transition disabled:opacity-60"
            >
              {isSubmitting ? "Processing..." : "Confirm Booking"}
            </button>

            <p className="text-center text-xs text-white/40 mt-4">
              Children above 5 years will be charged full amount • We'll contact you soon
            </p>
          </div>

        </form>
      </div>
    </section>
  );
}