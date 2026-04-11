import type { Metadata } from "next";

import {
  AboutPreviewSection,
  ContactCtaSection,
  FeaturedProductsSection,
  HeroSection,
  QualityPreviewSection,
  ServicesPreviewSection,
  WhyChooseUsSection,
} from "@/components/sections";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: company.seo.homeTitle,
  description: company.seo.homeDescription,
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreviewSection />
      <WhyChooseUsSection />
      <FeaturedProductsSection />
      <ServicesPreviewSection />
      <QualityPreviewSection />
      <ContactCtaSection />
    </>
  );
}
