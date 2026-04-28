import type { Metadata } from "next";

import {
  AboutPreviewSection,
  ContactCtaSection,
  FeaturedProductsSection,
  HeroSection,
  WhyChooseUsSection,
} from "@/components/sections";
import { JsonLd } from "@/components/seo/json-ld";
import { localBusinessJsonLd } from "@/lib/structured-data";

const homeDescription =
  "Mexmed Pharma — India-based pharmaceutical and nutraceutical formulations. Audited catalog of tablets, capsules, drops, and syrups. Serampore head office, Forbesganj branch. Enquiries: +91 88862 19335 · info@mexmedpharma.com.";

export const metadata: Metadata = {
  title: {
    absolute: "Mexmed Pharma — Pharmaceutical & Nutraceutical Formulations from India",
  },
  description: homeDescription,
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: "Mexmed Pharma — Pharmaceutical & Nutraceutical Formulations from India",
    description: homeDescription,
  },
  twitter: {
    title: "Mexmed Pharma — Pharmaceutical & Nutraceutical Formulations from India",
    description: homeDescription,
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreviewSection />
      <FeaturedProductsSection />
      <WhyChooseUsSection />
      <ContactCtaSection />
      <JsonLd id="ld-localbusiness" data={localBusinessJsonLd()} />
    </>
  );
}
