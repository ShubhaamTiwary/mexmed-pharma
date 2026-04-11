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
        "border-b border-border/50 bg-muted/35",
        className,
      )}
    >
      <Container className={sectionPaddingProductHero}>
        <nav
          className="text-[0.75rem] leading-relaxed tracking-[0.02em] text-muted-foreground"
          aria-label="Breadcrumb"
        >
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1" role="list">
            <li>
              <Link
                href="/"
                className="transition-colors duration-200 hover:text-foreground"
              >
                Home
              </Link>
            </li>
            <li aria-hidden className="text-border/80">
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
            <li aria-hidden className="text-border/80">
              /
            </li>
            <li className="max-w-[min(100%,36rem)] font-medium text-foreground">
              {product.name}
            </li>
          </ol>
        </nav>

        <div
          className={cn(
            "mt-8 rounded-lg border border-border/50 bg-card",
            "p-7 shadow-[0_12px_48px_rgba(10,18,32,0.05),inset_0_1px_0_0_rgba(255,255,255,0.92)]",
            "sm:p-9 lg:mt-10 lg:p-10 xl:p-11",
          )}
        >
          <div className="flex flex-wrap items-center gap-2 gap-y-2">
            <span className="text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-primary">
              {product.category}
            </span>
            {product.dosageForm ? (
              <span className="inline-flex rounded-full border border-border/55 bg-muted/50 px-2.5 py-1 text-[0.6875rem] font-medium text-muted-foreground">
                {product.dosageForm}
              </span>
            ) : null}
          </div>

          <h1
            className={cn(
              "mt-5 max-w-[40rem] text-balance text-[1.875rem] font-semibold leading-[1.1] tracking-[-0.035em] text-foreground",
              "sm:text-[2.125rem] sm:leading-[1.08] lg:mt-6 lg:text-[2.375rem] xl:text-[2.5rem]",
            )}
          >
            {product.name}
          </h1>

          <p className="mt-6 max-w-[42rem] text-pretty text-[1.0625rem] leading-[1.68] text-muted-foreground sm:text-[1.125rem] sm:leading-[1.66]">
            {product.summary}
          </p>
        </div>
      </Container>
    </header>
  );
}
