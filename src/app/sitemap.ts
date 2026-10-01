import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { projects } from "@/config/projects";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteConfig.url) return [];
  return [
    { url: siteConfig.url, priority: 1 },
    ...projects.map((p) => ({
      url: `${siteConfig.url}${p.url}`,
      priority: 0.6,
    })),
    { url: `${siteConfig.url}/privacidade`, priority: 0.2 },
  ];
}
