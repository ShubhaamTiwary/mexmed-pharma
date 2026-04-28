import { site } from "@/data/site";

/**
 * Resolve the absolute site URL for SEO (canonical, sitemap, OG, JSON-LD).
 * Prefers the runtime env so deploys to preview URLs still emit canonical hrefs;
 * falls back to the published production domain so production builds never
 * leak `localhost`.
 */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL;
  if (fromEnv && fromEnv.length > 0) {
    return fromEnv.replace(/\/$/, "");
  }
  return site.publicUrl.replace(/\/$/, "");
}

export function absoluteUrl(path = "/"): string {
  const base = getSiteUrl();
  if (!path || path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
