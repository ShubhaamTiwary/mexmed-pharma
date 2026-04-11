import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Product } from "@/types/product";
import { sectionContentGap } from "@/lib/section-styles";
import { cn } from "@/lib/utils";

import { ProductGrid } from "./product-grid";

type RelatedProductsProps = {
  products: Product[];
  className?: string;
};

export function RelatedProducts({ products, className }: RelatedProductsProps) {
  if (products.length === 0) return null;

  return (
    <section
      className={cn(
        "border-t border-border/70 bg-background py-14 sm:py-16 lg:py-20",
        className,
      )}
      aria-labelledby="related-products-heading"
    >
      <Container>
        <SectionHeading
          id="related-products-heading"
          heading="h2"
          eyebrow="Catalog"
          title="Related products"
          description="Other formulations in a similar therapeutic area, or continue exploring the full range."
          className="max-w-2xl"
        />
        <div className={sectionContentGap}>
          <ProductGrid products={products} cardTitleAs="h3" />
        </div>
      </Container>
    </section>
  );
}
