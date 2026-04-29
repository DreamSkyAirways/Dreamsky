 
import { blogs } from "../../app/data/blogs";
import BlogCard from "@/components/blogs/BlogCard";
// import TravelBlogs from "@/components/blogs/TravelBlogs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Travel Guide, Air Travel Tips & Blogs | Dream Sky Airways",
  description:
    "Get latest travel tips, cheap flight booking guides, destination blogs, and air travel advice by Dream Sky Airways. Plan domestic and international trips easily.",
     keywords: [
    "cheap flight booking tips",
    "travel tips for beginners",
    "best travel blogs india",
    "domestic flight guide",
    "international travel tips",
    "budget travel india",
    "air travel guide",
    "cheap flights india"
  ],
  alternates:{
    canonical:"https://www.dreamskyairways.com/blogs",
  },
  robots:{
    index:true,
    follow:true,
    nocache:false,
    googleBot:{
      index:true,
      follow:true,
      noimageindex:false,
      "max-video-preview":-1,
      "max-image-preview":"large",
      "max-snippet":-1,
    },
  },
  openGraph:{
    title:"Travel Guide, Air Travel Tips & Blogs | Dream Sky Airways",
    description:"Get latest travel tips, cheap flight booking guides, destination blogs, and air travel advice by Dream Sky Airways. Plan domestic and international trips easily.",
    url:"https://www.dreamskyairways.com/blogs",
    siteName:"Dream Sky Airways",
    type:"website",
    images:[
      {
        url:"https://www.dreamskyairways.com/ogImage.webp",
        width:1200,
        height:630,
        alt:"blog tips dream sky airways"
      },
    ],
  },
  twitter:{
    card:"summary_large_image",
    title:"Travel Guide, Air Travel Tips & Blogs | Dream Sky Airways",
    description:"Get latest travel tips, cheap flight booking guides, destination blogs, and air travel advice by Dream Sky Airways. Plan domestic and international trips easily.",
  },

};
const blogSchema ={
  "@context":"https://schema.org",
   "@type":"Blog",
   name:"Dream Sky Airways Travel Blog",
   description:"Official travel blog of Dream Sky Airways with flight tips, destination guides, and travel planning advice.",
   url:"https://www.dreamskyairways.com/blogs",
   publisher:{
    "@type":"Organization",
    name:"Dream Sky Airways",
    url:"https://www.dreamskyairways.com",
    logo:{
      "type":"ImageObject",
      url:"https://www.dreamskyairways.com/logo.png",
    },
  },
};
export default function BlogsPage() {
  return (
    <>
    <script 
    id="blog-schema"
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(blogSchema)
    }}
    />
    
    <section className="max-w-7xl mx-auto px-6 py-20">
   <h1 className="text-4xl font-bold mb-10 text-center">
  Travel Blogs & Flight Guides
</h1>


      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
        {blogs.map((blog) => (
          <BlogCard key={blog.slug} blog={blog} />
        ))}
      </div>
             {/* <TravelBlogs showViewAll={false} /> */}

      
    </section>
    </>
      
  );
};
