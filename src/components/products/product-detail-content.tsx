import Link from "next/link";

import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import type { Product } from "@/types/product";
import {
  cardPaddingLg,
  sectionBandBase,
  sectionPadding,
} from "@/lib/section-styles";
import { surfaceCard } from "@/lib/surface";
import { cn } from "@/lib/utils";

const labelDt =
  "text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-muted-foreground";

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
        <div className="grid gap-14 lg:grid-cols-3 lg:gap-16 lg:items-start">
          <div className="space-y-14 lg:col-span-2">
            <div>
              <h2
                id="product-overview-heading"
                className="text-lg font-medium tracking-tight text-foreground sm:text-xl"
              >
                Overview
              </h2>
              <p className="mt-5 max-w-prose text-pretty text-base leading-[1.75] text-muted-foreground sm:text-[1.0625rem]">
                {product.summary}
              </p>
            </div>

            {product.composition ? (
              <div>
                <h3 className="text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  Composition
                </h3>
                <div className={cn(surfaceCard, cardPaddingLg, "mt-4")}>
                  <p className="text-sm leading-relaxed text-foreground sm:text-base sm:leading-relaxed">
                    {product.composition}
                  </p>
                  <p className="mt-6 border-t border-border/60 pt-6 text-xs leading-relaxed text-muted-foreground">
                    Information is provided for business reference. Clinical and
                    promotional use must follow current approved product literature
                    and applicable regulations.
                  </p>
                </div>
              </div>
            ) : null}
          </div>

          <div className="lg:col-span-1">
            <div
              className={cn(
                surfaceCard,
                "sticky top-24 overflow-hidden p-0 sm:p-0 lg:top-[6.5rem]",
              )}
            >
              <div className="border-b border-border/60 bg-muted/50 px-6 py-5 sm:px-7 sm:py-6">
                <h3 className="text-sm font-medium tracking-tight text-foreground">
                  At a glance
                </h3>
              </div>
              <dl className="divide-y divide-border/50 px-6 py-0 sm:px-7">
                <div className="py-4">
                  <dt className={labelDt}>Category</dt>
                  <dd className="mt-2 text-sm font-medium text-foreground">
                    {product.category}
                  </dd>
                </div>
                {product.dosageForm ? (
                  <div className="py-4">
                    <dt className={labelDt}>Dosage form</dt>
                    <dd className="mt-2 text-sm font-medium text-foreground">
                      {product.dosageForm}
                    </dd>
                  </div>
                ) : null}
                <div className="py-4">
                  <dt className={labelDt}>Product code</dt>
                  <dd className="mt-2 font-mono text-[0.8125rem] text-foreground">
                    {product.id}
                  </dd>
                </div>
              </dl>
              <div className="border-t border-border/60 px-6 py-5 sm:px-7">
                <Link
                  href="/products"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "sm" }),
                    "w-full",
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
