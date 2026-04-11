import type { Metadata } from "next";

import { PageSection } from "@/components/layout/page-section";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Clients",
  description:
    "Partners and clients who trust Mexmed Pharma. Case studies and logos to follow.",
};

export default function ClientsPage() {
  return (
    <PageSection>
      <SectionHeading
        eyebrow="Partnerships"
        title="Clients"
        description="Partner highlights and testimonials will be added when available."
      />
    </PageSection>
  );
}
