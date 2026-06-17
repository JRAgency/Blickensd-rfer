import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const routes = [
    "",
    "/leistungen",
    ...site.services.map((s) => `/leistungen/${s.slug}`),
    "/maschinenpark",
    "/unternehmen",
    "/kontakt",
    "/impressum",
    "/datenschutz",
  ];

  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date("2025-01-01"),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
