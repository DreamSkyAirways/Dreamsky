"use client";

interface LocationMapProps {
  address?: string;
  title?: string;
}

export default function LocationMap({
  address = "A-Block Sector 63 Noida Uttar Pradesh 201301",
  title = "Dream Sky Airways Location",
}: LocationMapProps) {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    address
  )}&output=embed`;

  return (
    <div className="mt-10 flex justify-center">
      <div className="w-full max-w-4xl mx-6 sm:mx-10 lg:mx-20 h-52 sm:h-64 rounded-2xl overflow-hidden shadow-md">
        <iframe
          src={mapSrc}
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          title={title}
        />
      </div>
    </div>
  );
}
