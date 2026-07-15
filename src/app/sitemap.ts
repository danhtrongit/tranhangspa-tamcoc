import type { MetadataRoute } from "next";
import { site } from "@/data/site";

const routes = ["", "/services"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${site.domain}/en${route}`,
    lastModified: new Date("2026-07-14"),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
    alternates: {
      languages: {
        en: `${site.domain}/en${route}`,
        vi: `${site.domain}/vi${route}`,
      },
    },
  }));
}
