import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
  {
    userAgent: "*",
    allow: "/",
    disallow: ["/admin", "/login", "/dashboard"],
  },
],

    sitemap: "https://www.dreamskyairways.com/sitemap.xml",
  };
}
