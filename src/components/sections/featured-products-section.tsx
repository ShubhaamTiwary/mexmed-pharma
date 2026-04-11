import Link from "next/link";

import { Container } from "@/components/layout/container";
import { ProductGrid } from "@/components/products/product-grid";
import { SectionHeading } from "@/components/ui/section-heading";
import { buttonVariants } from "@/components/ui/button";
import {
  featuredProductsSection,
  getFeaturedProducts,
  products,
} from "@/data/products";
import {
  sectionContentGap,
  sectionCtaGap,
  sectionPadding,
} from "@/lib/section-styles";
import { cn } from "@/lib/utils";

export function FeaturedProductsSection() {
  const items = getFeaturedProducts(6);
  const copy = featuredProductsSection;
  const catalogCategories = [...new Set(products.map((p) => p.category))].sort(
    (a, b) => a.localeCompare(b),
  );

  return (
    <section
      className={cn(
        sectionPadding,
        "border-b border-border/45 bg-card",
      )}
      aria-labelledby="featured-products-heading"
    >
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between sm:gap-10">
          <SectionHeading
            id="featured-products-heading"
            heading="h2"
            eyebrow={copy.eyebrow}
            title={copy.title}
            description={copy.description}
            className="max-w-2xl text-left"
          />
          <Link
            href="/products"
            className="shrink-0 self-start text-[0.8125rem] font-semibold text-primary underline-offset-4 hover:underline sm:self-auto"
          >
            Full catalog
          </Link>
        </div>

        <div
          className={cn(
            sectionContentGap,
            "rounded-sm border border-border/55 bg-background/90 p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.7)] sm:p-8",
          )}
        >
          <div className="flex flex-col gap-4 border-b border-border/45 pb-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:pb-7">
            <p className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Therapeutic areas
            </p>
            <nav aria-label="Therapeutic categories">
              <ul className="flex flex-wrap gap-2 sm:justify-end">
                {catalogCategories.map((category) => (
                  <li key={category}>
                    <Link
                      href="/products"
                      className="inline-flex rounded-sm border border-border/70 bg-card px-2.5 py-1 text-[0.6875rem] font-medium text-foreground/90 transition-colors hover:border-primary/30 hover:bg-muted/50"
                    >
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="mt-8 sm:mt-9">
            <ProductGrid
              products={items}
              cardTitleAs="h3"
              visual="featured"
            />
          </div>
        </div>

        <div className={cn(sectionCtaGap, "flex justify-center")}>
          <Link
            href={copy.cta.href}
            className={cn(buttonVariants({ variant: "default", size: "lg" }))}
          >
            {copy.cta.label}
          </Link>
        </div>
      </Container>
    </section>
  );
}
