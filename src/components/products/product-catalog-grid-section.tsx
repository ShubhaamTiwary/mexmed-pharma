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
  return (
    <div className={cn(className)}>
      <ProductGrid products={products} cardTitleAs="h3" density="catalog" />
    </div>
  );
}
