import { MetadataRoute } from "next";
import { modules, resources } from "@/lib/course-data";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://web-app-blue-zeta.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Homepage
  const routes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];

  // Module lesson pages
  for (const mod of modules) {
    for (const lesson of mod.lessons) {
      routes.push({
        url: `${BASE_URL}/modules/${mod.slug}/${lesson.slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
  }

  // Resource pages
  for (const res of resources) {
    routes.push({
      url: `${BASE_URL}/resources/${res.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  return routes;
}
