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

  return (
    <div className={cn("space-y-8 sm:space-y-9 lg:space-y-10", className)}>
      <div className="rounded-sm border border-border/45 bg-muted/30 px-5 py-4 sm:px-6 sm:py-5">
        <p className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          {copy.gridEyebrow}
        </p>
        <p className="mt-2 max-w-3xl text-pretty text-sm leading-[1.65] text-foreground/90 sm:text-[0.9375rem] sm:leading-relaxed">
          <span className="font-medium text-foreground">{copy.gridTitle}.</span>{" "}
          {copy.gridDescription}
        </p>
      </div>

      <ProductGrid products={products} cardTitleAs="h3" density="catalog" />
    </div>
  );
}
