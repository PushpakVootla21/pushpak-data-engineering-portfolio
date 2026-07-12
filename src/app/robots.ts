import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const production = process.env.VERCEL_ENV === "production" && Boolean(siteConfig.siteUrl);
  return {
    rules: production ? { userAgent: "*", allow: "/", disallow: ["/api/", "/preview/"] } : { userAgent: "*", disallow: "/" },
    sitemap: production && siteConfig.siteUrl ? `${siteConfig.siteUrl}/sitemap.xml` : undefined,
  };
}
