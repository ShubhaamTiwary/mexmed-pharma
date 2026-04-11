import type { Metadata } from "next";

import { PageSection } from "@/components/layout/page-section";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Career",
  description:
    "Careers at Mexmed Pharma—open roles and how to apply. Listings coming soon.",
};

export default function CareerPage() {
  return (
    <PageSection>
      <SectionHeading
        eyebrow="Join us"
        title="Career"
        description="Job openings and culture information will be posted here."
      />
    </PageSection>
  );
}
