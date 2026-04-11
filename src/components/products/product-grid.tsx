import type { ReactNode } from "react";

import type { Product } from "@/types/product";
import { productCatalogGridGap, productGridGap } from "@/lib/section-styles";
import { cn } from "@/lib/utils";

import { ProductCard } from "./product-card";

type ProductGridProps = {
  products: Product[];
  className?: string;
  cardTitleAs?: "h2" | "h3";
  /** Catalog listing: wider gaps + clinical card styling. */
  density?: "default" | "catalog";
  /** Homepage / editorial: image-led cards. */
  visual?: "none" | "featured";
  /** Override default card rendering (e.g. skeletons). */
  renderCard?: (product: Product) => ReactNode;
};

function resolveCardVariant(
  density: "default" | "catalog",
  visual: "none" | "featured",
): "default" | "catalog" | "featured" {
  if (visual === "featured") return "featured";
  if (density === "catalog") return "catalog";
  return "default";
}

export function ProductGrid({
  products,
  className,
  cardTitleAs = "h2",
  density = "default",
  visual = "none",
  renderCard,
}: ProductGridProps) {
  const gap =
    density === "catalog" || visual === "featured"
      ? productCatalogGridGap
      : productGridGap;
  const cardVariant = resolveCardVariant(density, visual);

  return (
    <ul
      className={cn("grid sm:grid-cols-2 lg:grid-cols-3", gap, className)}
      role="list"
    >
      {products.map((product) => (
        <li key={product.id}>
          {renderCard ? (
            renderCard(product)
          ) : (
            <ProductCard
              product={product}
              titleAs={cardTitleAs}
              variant={cardVariant}
            />
          )}
        </li>
      ))}
    </ul>
  );
}
