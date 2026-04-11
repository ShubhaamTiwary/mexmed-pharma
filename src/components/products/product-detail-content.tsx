import Link from "next/link";

import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import type { Product } from "@/types/product";
import { sectionPadding } from "@/lib/section-styles";
import { surfaceCard } from "@/lib/surface";
import { cn } from "@/lib/utils";

type ProductDetailContentProps = {
  product: Product;
};

export function ProductDetailContent({ product }: ProductDetailContentProps) {
  return (
    <section
      className={cn(
        sectionPadding,
        "border-b border-border/70 bg-background",
      )}
      aria-labelledby="product-overview-heading"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-12 lg:items-start">
          <div className="space-y-8 lg:col-span-2">
            <div>
              <h2
                id="product-overview-heading"
                className="text-lg font-semibold tracking-tight text-foreground"
              >
                Description
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {product.summary}
              </p>
            </div>

            {product.composition ? (
              <div className={cn(surfaceCard, "p-6 sm:p-7")}>
                <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-foreground">
                  Composition
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground sm:text-base">
                  {product.composition}
                </p>
                <p className="mt-4 border-t border-border/70 pt-4 text-xs leading-relaxed text-muted-foreground">
                  Information is provided for business reference. Prescribing and
                  promotional use must follow current approved product literature
                  and local regulations.
                </p>
              </div>
            ) : null}
          </div>

          <div className="lg:col-span-1">
            <div className={cn(surfaceCard, "sticky top-24 p-6 sm:p-7")}>
              <h3 className="text-sm font-semibold text-foreground">
                At a glance
              </h3>
              <dl className="mt-4 space-y-4 text-sm">
                <div>
                  <dt className="text-muted-foreground">Category</dt>
                  <dd className="mt-1 font-medium text-foreground">
                    {product.category}
                  </dd>
                </div>
                {product.dosageForm ? (
                  <div>
                    <dt className="text-muted-foreground">Dosage form</dt>
                    <dd className="mt-1 font-medium text-foreground">
                      {product.dosageForm}
                    </dd>
                  </div>
                ) : null}
                <div>
                  <dt className="text-muted-foreground">Reference code</dt>
                  <dd className="mt-1 font-mono text-xs text-foreground">
                    {product.id}
                  </dd>
                </div>
              </dl>
              <Link
                href="/products"
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "mt-6 w-full border-border/90",
                )}
              >
                Back to catalog
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
