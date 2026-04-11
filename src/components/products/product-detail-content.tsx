import Link from "next/link";

import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import type { Product } from "@/types/product";
import { sectionBandBase, sectionPadding } from "@/lib/section-styles";
import { surfaceCard, surfaceEditorial } from "@/lib/surface";
import { cn } from "@/lib/utils";

const labelDt =
  "text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground";

type ProductDetailContentProps = {
  product: Product;
};

export function ProductDetailContent({ product }: ProductDetailContentProps) {
  return (
    <section
      className={cn(sectionPadding, sectionBandBase)}
      aria-labelledby="product-overview-heading"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_min(100%,20rem)] lg:items-start lg:gap-14 xl:gap-16">
          <div className="min-w-0 space-y-11 sm:space-y-12">
            <div>
              <h2
                id="product-overview-heading"
                className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground"
              >
                Overview
              </h2>
              <p className="mt-4 max-w-prose text-pretty text-[1.0625rem] leading-[1.75] text-foreground/90 sm:text-[1.125rem] sm:leading-[1.72]">
                {product.summary}
              </p>
            </div>

            {product.composition ? (
              <div>
                <h3 className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Composition
                </h3>
                <div
                  className={cn(
                    surfaceEditorial,
                    "mt-4 border-l-[3px] border-primary/28 pl-6 pr-5 py-6 sm:pl-7 sm:pr-7 sm:py-7",
                  )}
                >
                  <p className="text-[0.9375rem] leading-[1.7] text-foreground sm:text-base sm:leading-[1.68]">
                    {product.composition}
                  </p>
                  <div className="mt-6 border-t border-border/55 pt-5">
                    <p className="text-[0.75rem] leading-[1.65] text-muted-foreground">
                      Information is provided for business reference. Clinical and
                      promotional use must follow current approved product literature
                      and applicable regulations.
                    </p>
                  </div>
                </div>
              </div>
            ) : null}
          </div>

          <div className="lg:min-w-0">
            <div
              className={cn(
                surfaceCard,
                "sticky top-24 overflow-hidden p-0 shadow-[0_2px_12px_rgba(15,23,42,0.05)] sm:p-0 lg:top-[6.5rem]",
              )}
            >
              <div className="border-b border-border/55 bg-gradient-to-br from-primary/[0.055] to-transparent px-6 py-5 sm:px-7 sm:py-5">
                <h3 className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-primary">
                  At a glance
                </h3>
                <p className="mt-2 text-[0.75rem] leading-snug text-muted-foreground">
                  Identifiers for sourcing, QA, and file references.
                </p>
              </div>
              <dl className="px-0">
                <div className="border-b border-border/45 px-6 py-4 sm:px-7">
                  <dt className={labelDt}>Category</dt>
                  <dd className="mt-2 text-[0.9375rem] font-medium leading-snug text-foreground">
                    {product.category}
                  </dd>
                </div>
                {product.dosageForm ? (
                  <div className="border-b border-border/45 px-6 py-4 sm:px-7">
                    <dt className={labelDt}>Dosage form</dt>
                    <dd className="mt-2 text-[0.9375rem] font-medium leading-snug text-foreground">
                      {product.dosageForm}
                    </dd>
                  </div>
                ) : null}
                <div className="px-6 py-4 sm:px-7">
                  <dt className={labelDt}>Product code</dt>
                  <dd className="mt-2 inline-block rounded-sm border border-border/70 bg-muted/45 px-2.5 py-1 font-mono text-[0.8125rem] text-foreground tabular-nums">
                    {product.id}
                  </dd>
                </div>
              </dl>
              <div className="border-t border-border/55 bg-muted/25 px-6 py-4 sm:px-7 sm:py-5">
                <Link
                  href="/products"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "sm" }),
                    "h-10 w-full border-border/80 text-[0.8125rem] font-medium",
                  )}
                >
                  Back to catalog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
