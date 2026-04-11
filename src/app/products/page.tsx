import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { CatalogEnquirySection } from "@/components/products/catalog-enquiry-section";
import { ProductCatalogGridSection } from "@/components/products/product-catalog-grid-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { products, productsListingPage } from "@/data/products";
import {
  sectionBandIntro,
  sectionContentGap,
  sectionPadding,
} from "@/lib/section-styles";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: productsListingPage.metaTitle,
  description: productsListingPage.metaDescription,
};

export default function ProductsListingPage() {
  return (
    <>
      <section
        className={cn(sectionPadding, sectionBandIntro)}
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
            <ProductCatalogGridSection products={products} />
          </div>
        </Container>
      </section>
      <CatalogEnquirySection />
    </>
  );
}
