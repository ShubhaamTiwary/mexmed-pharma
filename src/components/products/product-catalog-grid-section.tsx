import { productsListingPage } from "@/data/products";
import type { Product } from "@/types/product";
import { cn } from "@/lib/utils";

import { ProductGrid } from "./product-grid";

type ProductCatalogGridSectionProps = {
  products: Product[];
  className?: string;
};

export function ProductCatalogGridSection({
  products,
  className,
}: ProductCatalogGridSectionProps) {
  const copy = productsListingPage;
  const count = products.length;

  return (
    <div className={cn("space-y-10 lg:space-y-12", className)}>
      <div className="flex flex-col gap-4 border-b border-border/40 pb-8 sm:flex-row sm:items-end sm:justify-between sm:gap-10">
        <div className="max-w-2xl">
          <p className="text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-primary">
            {copy.gridEyebrow}
          </p>
          <h2 className="mt-3 text-balance text-xl font-semibold tracking-[-0.02em] text-foreground sm:text-2xl">
            {copy.gridTitle}
          </h2>
          <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base sm:leading-relaxed">
            {copy.gridDescription}
          </p>
        </div>
        <p
          className="shrink-0 text-sm font-medium tabular-nums text-muted-foreground"
          aria-live="polite"
        >
          {count} {count === 1 ? "product" : "products"}
        </p>
      </div>
      <ProductGrid products={products} cardTitleAs="h3" />
    </div>
  );
}
