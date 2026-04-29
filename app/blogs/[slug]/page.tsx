import { blogs } from "../../data/blogs";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import TravelBlogs from "@/components/blogs/TravelBlogs";
import type { Metadata } from "next";
import { desc } from "framer-motion/client";

type MetaProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: MetaProps
): Promise<Metadata> {

  const { slug } = await params;
    const blog =blogs.find((s)=> s.slug === slug)
    
    if(!blog) {
      return {
        title:"Blog Not found | Dream Sky Airways",
        description:"Blog Not found | Dream Sky Airways",
      }
    };
    return {
      title:`${blog.title}`,
      description: `${blog.title} – Read this travel guide by Dream Sky Airways. Get expert tips, best deals, and complete tour planning support.`,
    alternates:{
      canonical:'https://www.dreamskyairways.com/blogs/${blog.slug}',
    }
    };

  };

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogDetailsPage ({ params }: PageProps) {
  const { slug } = await params;

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
    
  }
 const combinedSchema = [
  {
    "@context":"https://schema.org",
    "@type":"BlogPosting",
    name:blog.title,
    description:`${blog.title} – Travel guide by Dream Sky Airways`,
    url:`https://www.dreamskyairways.com/blogs/${blog.slug}`,
    Publisher :{
     "@type":"Organization",
     name:"Dream Sky Airways",
     url:"https://www.dreamskyairways.com",
     logo:{
      "@type":"ImageObject",
      url:"https://www.dreamskyairways.com/logo.png",
         },
    },  
  },
   {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement : [
      {
        "@type":"ListItem",
         position:1,
         name:"home",
         item:"https://www.dreamskyairways.com",
      },
      {
        "type":"ListItem",
        position:2,
        name:"blogs",
        item:"https://www.dreamskyairways.com/blogs",
      },
      {
        "@type":"ListItem",
        position:3,
        name:"blog.title",
        item:`https://www.dreamskyairways.com/blogs/${blog.slug}`
      },
    ],
  },
];

  return (
   <>
    <script 
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html:JSON.stringify(combinedSchema)
    }}
    />
  
      <div className="relative w-full h-[300px] md:h-[500px] overflow-hidden">
        {/* <Image
          src={blog.image}
          alt={blog.title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        /> */}
      </div>  

      {/* 🔥 CONTENT SECTION */}
      <section className="max-w-5xl mx-auto py-16 px-4">
        
        {/* BLOG TITLE */}
        <h1 className="text-4xl md:text-5xl font-semibold mb-8 leading-tight">
         {blog.title} Dream Sky Airways
        </h1>

        {/* BLOG CONTENT */}
        <article
          className="
            prose prose-lg max-w-none

            prose-h1:text-4xl
            prose-h1:font-extrabold
            prose-h1:mb-8

            prose-h2:text-2xl
            prose-h2:font-bold
            prose-h2:text-sky-600
            prose-h2:mt-12
            prose-h2:mb-4

            prose-p:text-gray-700
            prose-p:leading-8
            prose-p:mb-6

            prose-ul:my-6
            prose-li:mb-3

            prose-strong:text-gray-900

            prose-table:border
            prose-th:bg-gray-100
            prose-th:p-3
            prose-td:p-3

            prose-a:text-sky-600
            prose-a:font-semibold
            prose-a:no-underline
            hover:prose-a:underline
          "
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      <TravelBlogs showViewAll={false}/>

        {/* 🔥 CTA BOX */}
        <div className="mt-20 p-8 rounded-md bg-[var(--card)] shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-4 text-[var(--primary)]">
            Travel Enquiry – Dream Sky Airways
          </h2>

          <p className="text-[var(--muted)] mb-8">
            For tour packages, flight bookings, and customized travel plans,
            connect with our travel experts today.
          </p>

          <div className="text-base md:text-lg font-medium leading-relaxed mb-8">
            📍 <strong>Address:</strong> A-Block, Noida Sector-63, U.P <br /><br />

            📞 <strong>Helpline:</strong> <br />
            <a href="tel:+911204580951" className="text-[var(--primary)] hover:underline">
              +91-1204580951
            </a>
            <br />
            <a href="tel:+918750610304" className="text-[var(--primary)] hover:underline">
              +91-8750610304
            </a>
            <br /><br />

            📧 <strong>Email:</strong>{" "}
            <a
              href="mailto:tripenquiry@dreamskyairways.com"
              className="text-[var(--primary)] hover:underline"
            >
              tripenquiry@dreamskyairways.com
            </a>
          </div>

          {/* BOOK BUTTON */}
          <Link
            href="/trip-booking"
            className="
              inline-block
              px-8 py-4
              rounded-md
              text-white
              font-semibold
              bg-[#0D6269]
              hover:scale-105
              transition-transform duration-300
              shadow-lg
            "
          >
            Book Your Trip
          </Link>
        </div>
       
      </section>
      </>
  );
};