import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || siteConfig.url;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
