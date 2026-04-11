import type { Metadata } from "next";

import { CatalogEnquirySection } from "@/components/products/catalog-enquiry-section";
import { ProductGrid } from "@/components/products/product-grid";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { products, productsListingPage } from "@/data/products";
import { sectionContentGap, sectionPadding } from "@/lib/section-styles";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: productsListingPage.metaTitle,
  description: productsListingPage.metaDescription,
};

export default function ProductsListingPage() {
  return (
    <>
      <section
        className={cn(sectionPadding, "border-b border-border/70 bg-background")}
      >
        <Container>
          <SectionHeading
            id="products-list-heading"
            heading="h1"
            eyebrow={productsListingPage.eyebrow}
            title={productsListingPage.title}
            description={productsListingPage.description}
            className="max-w-3xl"
          />
          <div className={sectionContentGap}>
            <ProductGrid products={products} />
          </div>
        </Container>
      </section>
      <CatalogEnquirySection />
    </>
  );
}
