import { MetadataRoute } from "next";
import { jobs } from "../app/data/jobs";
import { packages } from "../app/data/packages";
import { blogs } from "../app/data/blogs";



export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl ="https://www.dreamskyairways.com";

  const StaticPages= [
    "/",
    "/about",
    "/contact",
    "/disclaimer",
    "/insurance",
    "/faq",
    "/privacy-policy",
    "/terms",
  ];

const StaticUrls=StaticPages.map((page)=>({
  url:`${baseUrl}${page}`,
  lastModified:new Date(),
  changeFrequency:"monthly" as const,
  priority:page === "/" ? 1 : 0.9,
}));

const jobsUrl=jobs.map((job) => ({
  url:`${baseUrl}/careers/${job.slug}`,
  lastModified: new Date(),
  changeFrequency:"weekly" as const,
  priority:0.9,

}));

const packagesUrl=packages.map((packages) => ({
  url:`${baseUrl}/packages/${packages.slug}`,
  lastModified: new Date(),
  changeFrequency:"weekly" as const,
  priority:0.9,
}));

const blogsUrl=blogs.map((blogs) =>({
  url:`${baseUrl}/blogs/${blogs.slug}`,
  lastModified:new Date(),
  changeFrequency:"weekly" as const,
  priority:0.9,

}));

return [
  
    ...StaticUrls,
{
  url:`${baseUrl}/careers`,
  lastModified:new Date(),
  changeFrequency:"weekly",
  priority:0.9,
  },
  {
  url:`${baseUrl}/packages`,
  lastModified:new Date(),
  changeFrequency:"weekly",
  priority:0.9,
  },
{
  url: `${baseUrl}/blogs`,
  lastModified:new Date(),
  changeFrequency:"weekly",
  priority:0.9,
},
...jobsUrl,
...packagesUrl,
...blogsUrl,
];
};
