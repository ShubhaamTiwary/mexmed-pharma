import Link from "next/link";

import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import type { Product } from "@/types/product";
import { sectionBandBase, sectionPadding } from "@/lib/section-styles";
import { cn } from "@/lib/utils";

const labelClass =
  "text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground";

type ProductDetailContentProps = {
  product: Product;
};

export function ProductDetailContent({ product }: ProductDetailContentProps) {
  const hasComposition = Boolean(product.composition?.length);

  return (
    <section
      className={cn(sectionPadding, sectionBandBase)}
      aria-labelledby={
        hasComposition ? "product-composition-heading" : "product-detail-extra-heading"
      }
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_min(100%,21.5rem)] lg:items-start lg:gap-14 xl:gap-16">
          <div className="min-w-0 space-y-10 sm:space-y-11">
            {hasComposition ? (
              <div>
                <h2
                  id="product-composition-heading"
                  className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground"
                >
                  Composition
                </h2>
                <div className="mt-4 overflow-hidden rounded-lg border border-border/45 bg-card shadow-[0_1px_2px_rgba(10,18,32,0.04)]">
                  <div className="px-6 py-7 sm:px-8 sm:py-8">
                    <ul className="space-y-3" role="list">
                      {product.composition?.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-[0.9375rem] leading-[1.72] text-foreground sm:text-base sm:leading-[1.7]"
                        >
                          <span
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                            aria-hidden
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-t border-border/40 bg-muted/25 px-6 py-4 sm:px-7">
                    <p className="text-[0.6875rem] leading-[1.65] text-muted-foreground">
                      For business reference only. Clinical and promotional use
                      must follow approved product literature and applicable
                      regulations.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <h2
                  id="product-detail-extra-heading"
                  className="sr-only"
                >
                  Catalogue note
                </h2>
                <p className="max-w-prose text-[0.9375rem] leading-[1.68] text-muted-foreground">
                  Composition detail for this entry is not published on the web
                  catalogue. Availability, packs, and specifications can be
                  confirmed through enquiry.
                </p>
              </div>
            )}
          </div>

          <aside className="lg:min-w-0">
            <div
              className={cn(
                "sticky top-24 overflow-hidden rounded-lg border border-border/45 bg-card",
                "shadow-[0_10px_40px_rgba(10,18,32,0.05)] lg:top-[6.5rem]",
              )}
            >
              <div className="border-b border-border/40 bg-muted/35 px-6 py-5 sm:px-7">
                <h3 className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-foreground">
                  At a glance
                </h3>
                <p className="mt-2 text-[0.75rem] leading-snug text-muted-foreground">
                  File and procurement identifiers
                </p>
              </div>

              <dl className="divide-y divide-border/40">
                <div className="px-6 py-5 sm:px-7">
                  <dt className={labelClass}>Category</dt>
                  <dd className="mt-2 text-[0.9375rem] font-medium leading-snug text-foreground">
                    {product.category}
                  </dd>
                </div>
                {product.dosageForm ? (
                  <div className="px-6 py-5 sm:px-7">
                    <dt className={labelClass}>Dosage form</dt>
                    <dd className="mt-2">
                      <span className="inline-flex rounded-full border border-border/50 bg-muted/45 px-2.5 py-1 text-[0.8125rem] font-medium text-foreground">
                        {product.dosageForm}
                      </span>
                    </dd>
                  </div>
                ) : null}
                <div className="px-6 py-5 sm:px-7">
                  <dt className={labelClass}>Product code</dt>
                  <dd className="mt-2 font-mono text-[0.8125rem] font-medium tabular-nums text-foreground">
                    {product.id}
                  </dd>
                </div>
                {product.packaging ? (
                  <div className="px-6 py-5 sm:px-7">
                    <dt className={labelClass}>Packaging</dt>
                    <dd className="mt-2 text-[0.9375rem] font-medium leading-snug text-foreground">
                      {product.packaging}
                    </dd>
                  </div>
                ) : null}
              </dl>

              <div className="border-t border-border/40 bg-muted/25 px-6 py-4 sm:px-7 sm:py-5">
                <Link
                  href="/products"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "sm" }),
                    "h-10 w-full border-border/75 text-[0.8125rem] font-medium",
                  )}
                >
                  Back to catalog
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
