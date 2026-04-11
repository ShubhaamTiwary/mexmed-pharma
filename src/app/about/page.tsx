import type { Metadata } from "next";

import { PageSection } from "@/components/layout/page-section";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Mexmed Pharma—our mission, history, and commitment to healthcare.",
};

export default function AboutPage() {
  return (
    <PageSection>
      <SectionHeading
        eyebrow="Company"
        title="About Mexmed Pharma"
        description="Mission, leadership, and company story will be published here."
      />
    </PageSection>
  );
}
