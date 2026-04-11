import type { Metadata } from "next";

import { PageSection } from "@/components/layout/page-section";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Mexmed Pharma for business inquiries, partnerships, and general questions.",
};

export default function ContactPage() {
  return (
    <PageSection>
      <SectionHeading
        eyebrow="Get in touch"
        title="Contact"
        description="Address, phone, email, and a contact form will be integrated in a later iteration."
      />
    </PageSection>
  );
}
