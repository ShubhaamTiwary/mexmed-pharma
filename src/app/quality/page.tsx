import type { Metadata } from "next";

import { PageSection } from "@/components/layout/page-section";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Quality",
  description:
    "Quality assurance and regulatory commitment at Mexmed Pharma.",
};

export default function QualityPage() {
  return (
    <PageSection>
      <SectionHeading
        eyebrow="Assurance"
        title="Quality"
        description="Certifications, GMP practices, and quality policies will be summarized on this page."
      />
    </PageSection>
  );
}
