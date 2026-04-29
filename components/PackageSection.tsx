import { packages } from "../app/data/packages";
import PackageGrid from "@/components/PackageGrid";
import Link from "next/link";

export default function PackageSection() {
  const popularPackages = packages.slice(0, 4).map((p) => ({
    title: p.title,
    slug: p.slug,
    location: p.location,
    price: p.price,
    days: p.days,
    image: p.images && p.images.length > 0 ? p.images[0] : null,
    description: p.description,
  }));

  return (
    <section className="max-w-7xl mx-auto px-6 py-14">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Popular Packages</h2>

        <Link
          href="/packages"
          className="text-[#0D6269] font-semibold hover:underline"
        >
          View All →
        </Link>
      </div>

      <PackageGrid packages={popularPackages} />
    </section>
  );
}
