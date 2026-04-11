import type { Metadata } from "next";

import { PageSection } from "@/components/layout/page-section";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Mexmed Pharma products and therapeutic areas. Detailed listings coming soon.",
};

export default function ProductsPage() {
  return (
    <PageSection>
      <SectionHeading
        eyebrow="Portfolio"
        title="Products"
        description="Product categories and documentation will be added in a future content pass."
      />
    </PageSection>
  );
}
