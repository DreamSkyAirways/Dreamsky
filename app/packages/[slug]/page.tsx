import type { Metadata } from "next";
import { packages } from "@/app/data/packages";
import { notFound } from "next/navigation";
import PackageDetails from "./PackageDetails";
// import PackageDetails from "./packageDetails";


type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pkg = packages.find((p) => p.slug === slug);

  if (!pkg) {
    return {
      title: "Package Not Found | Dream Sky Airways",
      description: "Requested package not found.",
      alternates: {
        canonical: "https://www.dreamskyairways.com/packages",
      },
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${pkg.title} | Dream Sky Airways`,
    description: `Explore ${pkg.title} with Dream Sky Airways. Book affordable and customized travel packages with the best deals, visa assistance, and complete travel support.`,
    alternates: {
      canonical: `https://www.dreamskyairways.com/packages/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const pkg = packages.find((p) => p.slug === slug);

  if (!pkg) {
    notFound();
  }

  return <PackageDetails pkg={pkg} 
  
  />;
}