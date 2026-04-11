import type { ReactNode } from "react";

import type { Product } from "@/types/product";
import { cn } from "@/lib/utils";

import { ProductCard } from "./product-card";

type ProductGridProps = {
  products: Product[];
  className?: string;
  cardTitleAs?: "h2" | "h3";
  /** Override default card rendering (e.g. skeletons). */
  renderCard?: (product: Product) => ReactNode;
};

export function ProductGrid({
  products,
  className,
  cardTitleAs = "h2",
  renderCard,
}: ProductGridProps) {
  return (
    <ul
      className={cn(
        "grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-6",
        className,
      )}
      role="list"
    >
      {products.map((product) => (
        <li key={product.id}>
          {renderCard ? (
            renderCard(product)
          ) : (
            <ProductCard product={product} titleAs={cardTitleAs} />
          )}
        </li>
      ))}
    </ul>
  );
}
