import Link from "next/link";

import { Container } from "@/components/layout/container";
import { ProductGrid } from "@/components/products/product-grid";
import { SectionHeading } from "@/components/ui/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { featuredProductsSection, getFeaturedProducts } from "@/data/products";
import { sectionContentGap, sectionCtaGap, sectionPadding } from "@/lib/section-styles";
import { cn } from "@/lib/utils";

export function FeaturedProductsSection() {
  const items = getFeaturedProducts(6);
  const copy = featuredProductsSection;

  return (
    <section
      className={cn(sectionPadding, "border-b border-border/70 bg-background")}
      aria-labelledby="featured-products-heading"
    >
      <Container>
        <SectionHeading
          id="featured-products-heading"
          heading="h2"
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
          align="center"
          className="mx-auto max-w-3xl"
        />
        <div className={sectionContentGap}>
          <ProductGrid products={items} cardTitleAs="h3" />
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
