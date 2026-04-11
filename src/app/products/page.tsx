import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { CatalogEnquirySection } from "@/components/products/catalog-enquiry-section";
import { ProductCatalogGridSection } from "@/components/products/product-catalog-grid-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { products, productsListingPage } from "@/data/products";
import {
  sectionBandIntro,
  sectionListingIntroGap,
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
      <section className={cn(sectionPadding, sectionBandIntro)}>
        <Container>
          <SectionHeading
            id="products-list-heading"
            heading="h1"
            eyebrow={productsListingPage.eyebrow}
            title={productsListingPage.title}
            description={productsListingPage.description}
            density="comfortable"
            className="max-w-3xl border-l-[3px] border-primary/22 pl-4 sm:pl-5"
          />
          <div className={sectionListingIntroGap}>
            <ProductCatalogGridSection products={products} />
          </div>
        </Container>
      </section>
      <CatalogEnquirySection />
    </>
  );
}
