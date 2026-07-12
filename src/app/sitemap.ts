import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteConfig.siteUrl) return [];
  const entry = (path: string, priority: number, changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]): MetadataRoute.Sitemap[number] => ({ url: `${siteConfig.siteUrl}${path}`, priority, changeFrequency });
  return [
    entry("/", 1, "monthly"),
    entry("/projects", 0.9, "monthly"),
    ...projects.filter((project) => project.caseStudyAvailable).map((project) => entry(`/projects/${project.slug}`, 0.8, "monthly")),
    entry("/experience", 0.8, "monthly"),
    entry("/about", 0.7, "monthly"),
    entry("/resume", 0.8, "monthly"),
    entry("/contact", 0.6, "yearly"),
  ];
}
