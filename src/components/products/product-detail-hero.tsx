import Link from "next/link";

import { Container } from "@/components/layout/container";
import type { Product } from "@/types/product";
import { sectionPaddingProductHero } from "@/lib/section-styles";
import { cn } from "@/lib/utils";

type ProductDetailHeroProps = {
  product: Product;
  className?: string;
};

export function ProductDetailHero({ product, className }: ProductDetailHeroProps) {
  return (
    <header
      className={cn(
        "border-b border-border/40 bg-muted/30 dark:bg-muted/90",
        className,
      )}
    >
      <Container className={sectionPaddingProductHero}>
        <nav
          className="text-sm text-muted-foreground"
          aria-label="Breadcrumb"
        >
          <ol className="flex flex-wrap items-center gap-1.5" role="list">
            <li>
              <Link
                href="/"
                className="transition-colors duration-200 hover:text-foreground"
              >
                Home
              </Link>
            </li>
            <li aria-hidden className="text-border">
              /
            </li>
            <li>
              <Link
                href="/products"
                className="transition-colors duration-200 hover:text-foreground"
              >
                Products
              </Link>
            </li>
            <li aria-hidden className="text-border">
              /
            </li>
            <li className="font-medium text-foreground">{product.name}</li>
          </ol>
        </nav>

        <div className="mt-10 max-w-4xl border-t border-border/40 pt-10 sm:mt-12 sm:pt-12">
          <p className="text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-primary">
            {product.category}
          </p>
          <h1 className="mt-4 max-w-4xl text-balance text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl lg:mt-5 lg:text-[2.75rem] lg:leading-[1.1] xl:text-[3rem]">
            {product.name}
          </h1>
          {product.dosageForm ? (
            <p className="mt-4 text-sm font-medium text-muted-foreground sm:text-base">
              Dosage form:{" "}
              <span className="text-foreground">{product.dosageForm}</span>
            </p>
          ) : null}
        </div>
      </Container>
    </header>
  );
}
