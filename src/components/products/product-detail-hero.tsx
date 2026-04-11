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
        "border-b border-border/60 bg-surface-subtle/70",
        className,
      )}
    >
      <Container className={sectionPaddingProductHero}>
        <nav
          className="text-[0.8125rem] text-muted-foreground"
          aria-label="Breadcrumb"
        >
          <ol className="flex flex-wrap items-center gap-2" role="list">
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

        <div className="mt-10 max-w-4xl border-t border-border/50 pt-10 sm:mt-12 sm:pt-11">
          <p className="text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            {product.category}
          </p>
          <h1 className="mt-4 max-w-4xl text-balance text-3xl font-medium tracking-[-0.03em] text-foreground sm:text-4xl lg:mt-5 lg:text-[2.625rem] lg:leading-[1.1] xl:text-[2.875rem]">
            {product.name}
          </h1>
          {product.dosageForm ? (
            <dl className="mt-5 flex flex-wrap gap-x-3 gap-y-1 text-sm sm:text-[0.9375rem]">
              <dt className="text-muted-foreground">Dosage form</dt>
              <dd className="font-medium text-foreground">{product.dosageForm}</dd>
            </dl>
          ) : null}
        </div>
      </Container>
    </header>
  );
}
