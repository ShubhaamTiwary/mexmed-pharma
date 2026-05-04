import type { MetadataRoute } from "next";

import { site } from "@/data/site";

/**
 * Web app manifest — supports install metadata and browser “Add to Home Screen”
 * (Lighthouse / PWA-adjacent hints; helps brand tile on mobile).
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: "Mexmed",
    description:
      "Pharmaceutical & nutraceutical formulations from India — current product catalog, quality focus, direct enquiry channels.",
    start_url: "/",
    display: "browser",
    background_color: "#edf0f5",
    theme_color: "#0b2744",
    orientation: "portrait-primary",
    categories: ["medical", "business", "health"],
    lang: "en-IN",
    icons: [
      {
        src: "/images/brand/mexmed-logo-refined.svg",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/images/brand/mexmed-logo-refined.svg",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
  };
}
