import Link from "next/link";

import { Container } from "@/components/layout/container";
import type { Product } from "@/types/product";
import { cn } from "@/lib/utils";

type ProductDetailHeroProps = {
  product: Product;
  className?: string;
};

export function ProductDetailHero({ product, className }: ProductDetailHeroProps) {
  return (
    <header
      className={cn(
        "border-b border-border/80 bg-muted/40",
        className,
      )}
    >
      <Container className="py-10 sm:py-12 lg:py-14">
        <nav
          className="text-sm text-muted-foreground"
          aria-label="Breadcrumb"
        >
          <ol className="flex flex-wrap items-center gap-1.5" role="list">
            <li>
              <Link href="/" className="transition-colors hover:text-foreground">
                Home
              </Link>
            </li>
            <li aria-hidden className="text-border">
              /
            </li>
            <li>
              <Link
                href="/products"
                className="transition-colors hover:text-foreground"
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

        <p className="mt-8 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-primary">
          {product.category}
        </p>
        <h1 className="mt-3 max-w-3xl text-balance text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
          {product.name}
        </h1>
        {product.dosageForm ? (
          <p className="mt-3 text-sm font-medium text-muted-foreground">
            Dosage form: {product.dosageForm}
          </p>
        ) : null}
      </Container>
    </header>
  );
}
