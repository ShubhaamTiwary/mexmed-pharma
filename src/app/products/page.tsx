import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { CatalogEnquirySection } from "@/components/products/catalog-enquiry-section";
import { ProductCatalogGridSection } from "@/components/products/product-catalog-grid-section";
import { products, productsListingPage } from "@/data/products";
import { sectionPadding } from "@/lib/section-styles";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: productsListingPage.metaTitle,
  description: productsListingPage.metaDescription,
};

export default function ProductsListingPage() {
  const count = products.length;

  return (
    <>
      <section
        className={cn(
          sectionPadding,
          "border-b border-border/50 bg-card",
        )}
      >
        <Container>
          <header className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-14 xl:gap-20">
            <div className="max-w-3xl">
              <p className="text-[0.625rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                {productsListingPage.eyebrow}
              </p>
              <h1
                id="products-list-heading"
                className="mt-4 text-balance text-[2rem] font-semibold leading-[1.08] tracking-[-0.035em] text-foreground sm:text-[2.25rem] lg:text-[2.5rem] lg:leading-[1.06]"
              >
                {productsListingPage.title}
              </h1>
              <p className="mt-5 max-w-2xl text-pretty text-[0.9375rem] leading-[1.68] text-muted-foreground sm:text-base sm:leading-relaxed">
                {productsListingPage.description}
              </p>
            </div>

            <div className="shrink-0 lg:pb-1">
              <div
                className="inline-flex items-center gap-4 rounded-full border border-border/55 bg-background/90 px-5 py-3 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.9),0_8px_30px_rgba(10,18,32,0.05)] sm:px-6 sm:py-3.5"
                aria-live="polite"
              >
                <span className="text-[1.75rem] font-semibold tabular-nums leading-none tracking-tight text-foreground sm:text-[2rem]">
                  {count}
                </span>
                <span
                  className="h-10 w-px shrink-0 bg-border/70"
                  aria-hidden
                />
                <span className="max-w-[9rem] text-[0.6875rem] font-semibold uppercase leading-snug tracking-[0.14em] text-muted-foreground">
                  Listed formulations
                </span>
              </div>
            </div>
          </header>
        </Container>
      </section>

      <section
        className={cn(
          "border-b border-border/45 bg-background py-12 sm:py-16 lg:py-20 xl:py-24",
        )}
      >
        <Container>
          <ProductCatalogGridSection products={products} />
        </Container>
      </section>

      <CatalogEnquirySection />
    </>
  );
}
