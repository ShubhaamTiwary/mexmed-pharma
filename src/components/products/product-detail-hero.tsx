import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import type { Product } from "@/types/product";
import { sectionPaddingProductHero } from "@/lib/section-styles";
import { cn } from "@/lib/utils";

type ProductDetailHeroProps = {
  product: Product;
  className?: string;
};

export function ProductDetailHero({
  product,
  className,
}: ProductDetailHeroProps) {
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
            "relative mt-8 overflow-hidden rounded-[20px] border border-border/50 bg-card",
            "p-7 shadow-[0_18px_64px_rgba(10,18,32,0.06),inset_0_1px_0_0_rgba(255,255,255,0.92)]",
            "sm:p-9 lg:mt-10 lg:p-10 xl:p-12",
          )}
        >
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(11,39,68,0.08),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.55),rgba(255,255,255,0))]"
            aria-hidden
          />

          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(22rem,31rem)] lg:items-center lg:gap-14 xl:gap-16">
            <figure className="order-first lg:order-last">
              <div className="rounded-[20px] border border-border/45 bg-muted/22 p-2.5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.88)] sm:p-3 lg:p-3.5">
                <div className="relative min-h-[20rem] overflow-hidden rounded-[16px] border border-border/25 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(246,249,253,0.95))] sm:min-h-[24rem] lg:min-h-[31rem]">
                  <div
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(11,39,68,0.07),transparent_60%)]"
                    aria-hidden
                  />
                  <Image
                    src={product.image.src}
                    alt={product.image.alt}
                    fill
                    className="object-contain p-3 sm:p-4 lg:p-5"
                    sizes="(max-width: 1024px) 100vw, 32rem"
                    priority
                  />
                </div>
              </div>
            </figure>

            <div className="min-w-0">
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
                  "mt-5 max-w-[36rem] text-balance text-[2rem] font-semibold leading-[1.04] tracking-[-0.045em] text-foreground",
                  "sm:text-[2.4rem] sm:leading-[1.02] lg:mt-6 lg:text-[3rem] xl:text-[3.25rem]",
                )}
              >
                {product.name}
              </h1>

              <p className="mt-5 max-w-[44rem] text-pretty text-[1rem] leading-[1.72] text-foreground/88 sm:text-[1.1rem] sm:leading-[1.72]">
                {product.detailIntro ?? product.summary}
              </p>

              <p className="mt-4 max-w-[40rem] text-pretty text-sm leading-[1.75] text-muted-foreground sm:text-[0.9375rem]">
                {product.summary}
              </p>

              <div className="mt-7 flex flex-wrap gap-2.5 sm:gap-3">
                {product.packaging ? (
                  <span className="inline-flex items-center rounded-full border border-border/60 bg-background/92 px-3.5 py-2 text-[0.75rem] font-medium text-foreground shadow-[inset_0_1px_0_0_rgba(255,255,255,0.88)]">
                    Pack: {product.packaging}
                  </span>
                ) : null}
                <span className="inline-flex items-center rounded-full border border-border/60 bg-background/92 px-3.5 py-2 text-[0.75rem] font-medium text-foreground shadow-[inset_0_1px_0_0_rgba(255,255,255,0.88)]">
                  Ref. {product.id}
                </span>
              </div>

              {product.labelNotes?.[0] ? (
                <p className="mt-6 max-w-[40rem] text-[0.8125rem] leading-[1.7] text-muted-foreground">
                  Primary pack line: {product.labelNotes[0]}
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
