import type { Metadata } from "next";

import { TrackSectionView } from "@/components/analytics/track-section-view";
import {
  AboutPreviewSection,
  ContactCtaSection,
  FeaturedProductsSection,
  HeroSection,
  HomeMissionVisionSection,
  WhyChooseUsSection,
} from "@/components/sections";
import { JsonLd } from "@/components/seo/json-ld";
import { alternatesForPath, primaryOpenGraphImages, primaryTwitterImage } from "@/lib/seo";
import { localBusinessJsonLd } from "@/lib/structured-data";

const homeDescription =
  "India-based pharmaceutical & nutraceutical formulations — tablets, capsules, drops & syrups. Mexmed Pharma, Serampore & Forbesganj. Call +91 88862 19335.";

export const metadata: Metadata = {
  title: {
    absolute: "Mexmed Pharma — Pharmaceutical & Nutraceutical Formulations from India",
  },
  description: homeDescription,
  alternates: alternatesForPath("/"),
  openGraph: {
    url: "/",
    title: "Mexmed Pharma — Pharmaceutical & Nutraceutical Formulations from India",
    description: homeDescription,
    images: primaryOpenGraphImages(),
  },
  twitter: {
    title: "Mexmed Pharma — Pharmaceutical & Nutraceutical Formulations from India",
    description: homeDescription,
    images: [primaryTwitterImage()],
  },
};

export default function HomePage() {
  return (
    <>
      <TrackSectionView sectionId="hero" pageLabel="Home">
        <HeroSection />
      </TrackSectionView>
      <TrackSectionView sectionId="mission_vision" pageLabel="Home">
        <HomeMissionVisionSection />
      </TrackSectionView>
      <TrackSectionView sectionId="about_preview" pageLabel="Home">
        <AboutPreviewSection />
      </TrackSectionView>
      <TrackSectionView sectionId="why_choose_us" pageLabel="Home">
        <WhyChooseUsSection />
      </TrackSectionView>
      <TrackSectionView sectionId="featured_products" pageLabel="Home">
        <FeaturedProductsSection />
      </TrackSectionView>
      <TrackSectionView sectionId="contact_cta" pageLabel="Home">
        <ContactCtaSection />
      </TrackSectionView>
      <JsonLd id="ld-localbusiness" data={localBusinessJsonLd()} />
    </>
  );
}
