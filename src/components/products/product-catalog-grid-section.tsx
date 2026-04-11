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
    <div className={cn("space-y-9 sm:space-y-10 lg:space-y-11", className)}>
      <div className="flex flex-col gap-6 border-b border-border/45 pb-7 sm:flex-row sm:items-end sm:justify-between sm:gap-8 sm:pb-8">
        <div className="max-w-2xl">
          <p className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            {copy.gridEyebrow}
          </p>
          <h2 className="mt-2.5 text-balance text-xl font-medium tracking-[-0.025em] text-foreground sm:mt-3 sm:text-2xl sm:leading-[1.2]">
            {copy.gridTitle}
          </h2>
          <p className="mt-3 max-w-xl text-pretty text-sm leading-[1.62] text-muted-foreground sm:text-[0.9375rem] sm:leading-relaxed">
            {copy.gridDescription}
          </p>
        </div>
        <div className="flex shrink-0 sm:items-center sm:pb-0.5">
          <p
            className="rounded-sm border border-border/65 bg-card px-3 py-1.5 text-[0.75rem] font-semibold tabular-nums tracking-tight text-foreground/85 shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
            aria-live="polite"
          >
            {count} {count === 1 ? "product" : "products"}
          </p>
        </div>
      </div>
      <ProductGrid products={products} cardTitleAs="h3" />
    </div>
  );
}
