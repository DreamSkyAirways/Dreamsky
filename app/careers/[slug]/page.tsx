import { jobs } from "@/app/data/jobs";
import { notFound } from "next/navigation";
import Link from "next/link";
import RollingDate from "@/components/RollingDate";
import type { Metadata } from "next";

 type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {

  const { slug } = await params; 

  const job = jobs.find((j) => j.slug === slug);

  if (!job) {
    return {
      title: "Job Not Found | Dream Sky Airways Careers",
      description:
        "Explore exciting career opportunities at Dream Sky Airways. Find the right job and apply today.",
    };
  };

  return {
    title: `${job.title} | Dream Sky Airways Careers`,

    description: `Apply for the ${job.title} position at Dream Sky Airways in ${job.location}. Salary: ${job.salaryRange}, Experience: ${job.experience}. Join our professional aviation team.`,

    keywords: [
      job.title,
      "Dream Sky Airways Careers",
      "Aviation Jobs",
      "Travel Industry Jobs",
      "Airline Jobs in India",
      "Customer Support Jobs",
      "Sales Jobs",
      "Airport Jobs",
      "Tourism Careers",
    ],

    alternates: {
      canonical: `https://www.dreamskyairways.com/careers/${slug}`,
    },

    openGraph: {
      title: `${job.title} | Dream Sky Airways Jobs`,
      description: `Join Dream Sky Airways as a ${job.title}. Apply now and build your career.`,
      url: `https://www.dreamskyairways.com/careers/${slug}`,
      siteName: "Dream Sky Airways",
      type: "website",
      images: [
        {
          url: "https://www.dreamskyairways.com/ogImage.webp",
          width: 1200,
          height: 630,
          alt: "Dream Sky Airways Careers",
        },
      ],
      
    },
    robots: {
  index: true,
  follow: true,
  nocache: false,
  googleBot: {
    index: true,
    follow: true,
    noimageindex: false,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
},


    twitter: {
      card: "summary_large_image",
      title: `${job.title} | Dream Sky Airways`,
      description: `Apply for ${job.title} at Dream Sky Airways.`,
      images: ["https://www.dreamskyairways.com/og-career.jpg"],
    },
  };
}

export default async function JobDetailPage({ params }: Props) {
  const { slug } = await params;

  const job = jobs.find((j) => j.slug === slug);
  if (!job) return notFound();
 
const CombinedSchema = [
  {
    "context":"https://schema.org",
     "@type":"CareersInHospitaliy",
    name:job.title,
    description:`${job.title} - Dream Sky Airways`,
    url:`https://www.dreamskyairways.com/careers/${job.slug}`,
    publisher:{
    "@type":"Organization",
    name:"Dream Sky Airways",
    url:"https://www.dreamskyairways.com",
    logo:{
      "@type":"ImageObject",
       name:"Logo",
       url:"https://www.dreamskyairways.com/logo.png",
    },
    },   
  },
  
  {
    "@context":"https://schema.org",
    "@type":"BreadCrumbList",
    itemListElement:[
      {
        "@type":"ListItem",
         name:"home",
         position:1,
         item:"https://www.dreamskyairways.com",

      },
      {
      "@type":"ListItem",
      name:"careers",
      position:2,
      item:"https://www.dreamskyairways.com/careers",
      },
      {
      "@type":"ListItem",
      name:"job.title",
      position:3,
      item:`https://www.dreamskyairways.com/careers/${job.slug}`
      },
    ],

  },
];

  return (
    <>
    <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html:JSON.stringify(CombinedSchema)
    }}
    />
    <main className="max-w-5xl mx-auto p-10 mt-10">
      {/* JOB HEADER */}
      <section className="mb-8">
        <h1 className="text-4xl font-bold text-[#083A3F]">
          {job.title}
        </h1>
        <p className="text-gray-600 mt-2">
          📍 {job.location}
        </p>
      </section>

      {/* JOB INFO GRID */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="border rounded-xl p-6 shadow">
          <p className="text-sm text-gray-500">Salary Range</p>
          <p className="text-lg font-semibold text-[#083A3F]">
            {job.salaryRange}
          </p>
        </div>

        <div className="border rounded-xl p-6 shadow">
          <p className="text-sm text-gray-500">Experience</p>
          <p className="text-lg font-semibold">
            {job.experience}
          </p>
        </div>

        <div className="border rounded-xl p-6 shadow">
          <p className="text-sm text-gray-500">Seats Left</p>
          <p className="text-lg font-semibold text-red-600">
            {job.seatsLeft} seats only
          </p>
        </div>

        <div className="border rounded-xl p-6 shadow">
          <p className="text-sm text-gray-500">Last Date to Apply</p>
          <p className="text-lg font-semibold">
            <RollingDate baseDate={job.lastDate} />
          </p>
        </div>
      </section>

      {/* DESCRIPTION */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-[#083A3F]">
          Job Description
        </h2>
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {job.description}
        </p>
      </section>

      <section className="sticky bottom-4 bg-white p-6 border rounded-xl shadow-xl">
        <Link
          href={`/careerform?job=${job.slug}`}
          className="
            block text-center w-full py-4 rounded-xl
            bg-[#083A3F] text-white font-semibold
            hover:bg-[#062E32] transition
          "        >
          Apply Now 
        </Link>
      </section>
    </main>
    </>
  );
}