import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";
import { vehicles } from "@/lib/vehicles";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/inventory", "/services", "/process", "/about", "/contact"];

  return [
    ...pages.map((path) => ({
      url: path ? `${siteUrl}${path}` : siteUrl,
      changeFrequency: path === "" || path === "/inventory" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "" ? 1 : path === "/inventory" ? 0.9 : 0.7,
    })),
    ...vehicles.map((vehicle) => ({
      url: `${siteUrl}/inventory/${vehicle.slug}`,
      changeFrequency: "weekly" as const,
      priority: vehicle.featured ? 0.8 : 0.6,
    })),
  ];
}
