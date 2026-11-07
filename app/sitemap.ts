import type { MetadataRoute } from "next";
import { getAllProjectSlugs } from "@/lib/projects";

const siteUrl = "https://mlavinc-portfolio.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = getAllProjectSlugs().map((slug) => ({
    url: `${siteUrl}/projects/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projects,
  ];
}
