import type { Metadata } from "next";
import PackageSetup from "./packageSetup";


export const metadata: Metadata = {
  title: "Affordable Tour Packages | Dream Sky Airways Best Deals",
  description:
    "Explore affordable tour packages with Dream Sky Airways. Get best travel deals, customized trips, flight bookings, and hassle-free holiday planning.",
  alternates: {
    canonical: "https://www.dreamskyairways.com/packages",
  },
};

export default function Page() {
  return <PackageSetup showHero={true} slider={false} />;
}
