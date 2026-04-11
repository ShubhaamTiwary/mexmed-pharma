import type { Metadata } from "next";

import { PageSection } from "@/components/layout/page-section";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Services offered by Mexmed Pharma—manufacturing, distribution, and partnerships.",
};

export default function ServicesPage() {
  return (
    <PageSection>
      <SectionHeading
        eyebrow="Capabilities"
        title="Services"
        description="Service offerings and engagement models will be outlined here."
      />
    </PageSection>
  );
}
