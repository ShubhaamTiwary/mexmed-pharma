import type { MetadataRoute } from "next";

import { products } from "@/data/products";
import { getSiteUrl } from "@/lib/seo";

/**
 * Static-page priorities are tuned for a marketing/catalog site:
 * homepage and products listing get top priority; product detail pages
 * are crawl-worthy but secondary; supporting pages (about, contact, etc.)
 * sit in the middle.
 */
const staticRoutes: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "/", changeFrequency: "weekly", priority: 1.0 },
  { path: "/products", changeFrequency: "weekly", priority: 0.9 },
  { path: "/about", changeFrequency: "monthly", priority: 0.7 },
  { path: "/services", changeFrequency: "monthly", priority: 0.7 },
  { path: "/quality", changeFrequency: "monthly", priority: 0.6 },
  { path: "/clients", changeFrequency: "monthly", priority: 0.5 },
  { path: "/presence", changeFrequency: "monthly", priority: 0.5 },
  { path: "/career", changeFrequency: "monthly", priority: 0.5 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  const lastModified = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route.path === "/" ? "" : route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const productEntries: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${baseUrl}${product.href}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...productEntries];
}
