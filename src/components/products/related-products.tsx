import { Container } from "@/components/layout/container";
import type { Product } from "@/types/product";
import {
  sectionContentGap,
  sectionPadding,
} from "@/lib/section-styles";
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
        sectionPadding,
        "border-t border-border/45 bg-muted/30",
        className,
      )}
      aria-labelledby="related-products-heading"
    >
      <Container>
        <div className="rounded-lg border border-border/45 bg-card p-6 shadow-[0_10px_40px_rgba(10,18,32,0.04)] sm:p-8 lg:p-10">
          <div className="border-b border-border/40 pb-6 sm:pb-7">
            <p className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Catalog
            </p>
            <h2
              id="related-products-heading"
              className="mt-2 text-balance text-xl font-semibold tracking-[-0.025em] text-foreground sm:text-2xl"
            >
              Related products
            </h2>
            <p className="mt-3 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem]">
              Other formulations in a similar therapeutic area, or continue
              exploring the full range.
            </p>
          </div>
          <div className={cn(sectionContentGap, "mt-8 sm:mt-9 lg:mt-10")}>
            <ProductGrid
              products={products}
              cardTitleAs="h3"
              visual="featured"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
