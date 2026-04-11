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
        "relative border-b border-border/60 bg-gradient-to-b from-card via-background to-surface-subtle/50",
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
            <li className="max-w-[min(100%,42rem)] font-medium text-foreground">
              {product.name}
            </li>
          </ol>
        </nav>

        <div className="mt-8 border-t border-border/55 pt-8 sm:mt-10 sm:pt-10 lg:mt-10 lg:pt-11">
          <div className="max-w-[min(100%,52rem)] border-l-[3px] border-primary/35 pl-5 sm:pl-7">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1.5">
              <p className="text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                {product.category}
              </p>
              {product.dosageForm ? (
                <>
                  <span
                    aria-hidden
                    className="hidden h-3 w-px bg-border/90 sm:inline sm:self-center"
                  />
                  <p className="text-[0.8125rem] font-medium text-foreground sm:text-[0.875rem]">
                    <span className="text-muted-foreground">Dosage form </span>
                    {product.dosageForm}
                  </p>
                </>
              ) : null}
            </div>
            <h1 className="mt-5 max-w-[22rem] text-balance text-[2rem] font-medium tracking-[-0.035em] text-foreground sm:max-w-2xl sm:text-[2.375rem] sm:leading-[1.08] lg:mt-6 lg:max-w-[min(100%,40rem)] lg:text-[2.5rem] xl:text-[2.75rem] xl:leading-[1.06]">
              {product.name}
            </h1>
          </div>
        </div>
      </Container>
    </header>
  );
}
