"use client";

import { useRouter } from "next/navigation";

export default function NoPackageFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <h2 className="text-3xl font-bold text-gray-800">
        Package not available 😔
      </h2>

      <p className="mt-4 max-w-xl text-gray-600">
        Aap jis destination ka package dhoond rahe ho, wo abhi available nahi
        hai. Aap apni details share karo, humari team us package par kaam karegi
        aur jald se jald aapse contact karegi.
      </p>

      <div className="mt-8 flex gap-4">
        <button
          onClick={() => router.push("/contact")}
          className="rounded-lg bg-[#0D6269] px-6 py-3 font-semibold text-white hover:opacity-90"
        >
          Share Your Details
        </button>

        <button
          onClick={() => router.back()}
          className="rounded-lg border border-gray-300 px-6 py-3 font-medium"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
