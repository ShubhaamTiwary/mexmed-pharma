import Link from "next/link";

import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import { categorySlug } from "@/data/products";
import type { Product } from "@/types/product";
import { sectionBandBase, sectionPadding } from "@/lib/section-styles";
import { cn } from "@/lib/utils";

const labelClass =
  "text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground";

type ProductDetailContentProps = {
  product: Product;
};

function listNumber(index: number) {
  return String(index + 1).padStart(2, "0");
}

export function ProductDetailContent({ product }: ProductDetailContentProps) {
  const hasComposition = Boolean(product.composition?.length);
  const hasHighlights = Boolean(product.highlights?.length);
  const hasLabelNotes = Boolean(product.labelNotes?.length);

  return (
    <section
      className={cn(sectionPadding, sectionBandBase)}
      aria-labelledby={
        hasComposition ? "product-composition-heading" : "product-detail-extra-heading"
      }
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,22rem)] lg:items-start lg:gap-14 xl:gap-16">
          <div className="min-w-0 space-y-8 sm:space-y-10">
            {hasComposition ? (
              <section>
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <h2
                      id="product-composition-heading"
                      className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground"
                    >
                      Composition
                    </h2>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem]">
                      Key formulation lines prepared from the current catalog
                      and verified against visible pack references.
                    </p>
                  </div>
                </div>

                <div className="mt-4 overflow-hidden rounded-[18px] border border-border/45 bg-card shadow-[0_1px_2px_rgba(10,18,32,0.04),0_18px_52px_rgba(10,18,32,0.04)]">
                  <ol className="divide-y divide-border/35" role="list">
                    {product.composition?.map((item, index) => (
                      <li
                        key={item}
                        className="grid gap-4 px-6 py-5 sm:grid-cols-[auto_minmax(0,1fr)] sm:px-8 sm:py-6"
                      >
                        <span className="inline-flex h-9 min-w-9 items-center justify-center rounded-full border border-border/50 bg-muted/35 px-3 text-[0.75rem] font-semibold tracking-[0.14em] text-primary">
                          {listNumber(index)}
                        </span>
                        <span className="text-[0.9375rem] leading-[1.72] text-foreground sm:text-base sm:leading-[1.7]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ol>

                  <div className="border-t border-border/40 bg-muted/25 px-6 py-4 sm:px-8">
                    <p className="text-[0.6875rem] leading-[1.65] text-muted-foreground">
                      For business reference only. Clinical and promotional use
                      must follow approved product literature and applicable
                      regulations.
                    </p>
                  </div>
                </div>
              </section>
            ) : (
              <section>
                <h2 id="product-detail-extra-heading" className="sr-only">
                  Catalogue note
                </h2>
                <p className="max-w-prose text-[0.9375rem] leading-[1.68] text-muted-foreground">
                  Composition detail for this entry is not published on the web
                  catalogue. Availability, packs, and specifications can be
                  confirmed through enquiry.
                </p>
              </section>
            )}

            {product.uses?.length ? (
              <section aria-labelledby="product-uses-heading">
                <h2
                  id="product-uses-heading"
                  className="text-lg font-semibold tracking-[-0.01em] text-foreground sm:text-xl"
                >
                  About {product.name}
                </h2>
                <ul className="mt-4 space-y-3" role="list">
                  {product.uses.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[0.9375rem] leading-[1.72] text-foreground"
                    >
                      <span
                        className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary"
                        aria-hidden
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {product.regulatoryClass ? (
                  <p className="mt-4 rounded-[12px] border border-border/45 bg-muted/25 px-4 py-3 text-[0.8125rem] leading-[1.7] text-muted-foreground">
                    {product.regulatoryClass === "supplement"
                      ? "This product is a dietary supplement and is not intended to diagnose, treat, cure, or prevent any disease. Consult a registered medical practitioner or dietician before use."
                      : product.regulatoryClass === "prescription"
                        ? "This is a prescription product. Use only as directed by a registered medical practitioner. The information shown here is for general reference and is not medical advice."
                        : "Read the pack label and use as directed. For persistent or severe symptoms, consult a healthcare professional. The information here is for general reference and is not medical advice."}
                  </p>
                ) : null}
              </section>
            ) : null}

            <div className="grid gap-6 xl:grid-cols-2">
              {hasHighlights ? (
                <section className="rounded-[18px] border border-border/45 bg-card p-6 shadow-[0_1px_2px_rgba(10,18,32,0.04),0_12px_36px_rgba(10,18,32,0.04)] sm:p-7">
                  <h2 className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Highlights
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Quick product-facing notes to help visitors understand how
                    this SKU sits within the Mexmed range.
                  </p>
                  <ul className="mt-5 space-y-4" role="list">
                    {product.highlights?.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span
                          className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary"
                          aria-hidden
                        />
                        <span className="text-[0.9375rem] leading-[1.72] text-foreground">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}

              {hasLabelNotes ? (
                <section className="rounded-[18px] border border-border/45 bg-card p-6 shadow-[0_1px_2px_rgba(10,18,32,0.04),0_12px_36px_rgba(10,18,32,0.04)] sm:p-7">
                  <h2 className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Pack and reference notes
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Visible carton, bottle, or strip cues that help buyers
                    identify the published product presentation.
                  </p>
                  <ul className="mt-5 space-y-4" role="list">
                    {product.labelNotes?.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span
                          className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary"
                          aria-hidden
                        />
                        <span className="text-[0.9375rem] leading-[1.72] text-foreground">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}
            </div>

            {product.directions || product.storage ? (
              <section
                aria-labelledby="product-directions-heading"
                className="rounded-[18px] border border-border/45 bg-card p-6 shadow-[0_1px_2px_rgba(10,18,32,0.04),0_12px_36px_rgba(10,18,32,0.04)] sm:p-7"
              >
                <h2
                  id="product-directions-heading"
                  className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground"
                >
                  Directions and storage
                </h2>
                <dl className="mt-4 space-y-4">
                  {product.directions ? (
                    <div>
                      <dt className="text-sm font-semibold text-foreground">
                        Directions for use
                      </dt>
                      <dd className="mt-1 text-[0.9375rem] leading-[1.7] text-muted-foreground">
                        {product.directions}
                      </dd>
                    </div>
                  ) : null}
                  {product.storage ? (
                    <div>
                      <dt className="text-sm font-semibold text-foreground">
                        Storage
                      </dt>
                      <dd className="mt-1 text-[0.9375rem] leading-[1.7] text-muted-foreground">
                        {product.storage}
                      </dd>
                    </div>
                  ) : null}
                </dl>
              </section>
            ) : null}

            {product.faqs?.length ? (
              <section aria-labelledby="product-faq-heading">
                <h2
                  id="product-faq-heading"
                  className="text-lg font-semibold tracking-[-0.01em] text-foreground sm:text-xl"
                >
                  Frequently asked questions
                </h2>
                <div className="mt-4 divide-y divide-border/40 overflow-hidden rounded-[18px] border border-border/45 bg-card">
                  {product.faqs.map((faq) => (
                    <details key={faq.question} className="group px-6 py-4 sm:px-7">
                      <summary className="cursor-pointer list-none text-[0.9375rem] font-semibold text-foreground [&::-webkit-details-marker]:hidden">
                        {faq.question}
                      </summary>
                      <p className="mt-2 text-[0.9375rem] leading-[1.72] text-muted-foreground">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>
            ) : null}
          </div>

          <aside className="lg:min-w-0">
            <div
              className={cn(
                "sticky top-24 overflow-hidden rounded-[18px] border border-border/45 bg-card",
                "shadow-[0_14px_48px_rgba(10,18,32,0.06)] lg:top-[6.5rem]",
              )}
            >
              <div className="border-b border-border/40 bg-muted/35 px-6 py-5 sm:px-7">
                <h3 className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-foreground">
                  Product snapshot
                </h3>
                <p className="mt-2 text-[0.75rem] leading-snug text-muted-foreground">
                  Quick identifiers for dosage form, pack reference, and
                  catalog-level review.
                </p>
              </div>

              <dl className="divide-y divide-border/40">
                <div className="px-6 py-5 sm:px-7">
                  <dt className={labelClass}>Category</dt>
                  <dd className="mt-2 text-[0.9375rem] font-medium leading-snug text-foreground">
                    <Link
                      href={`/products/category/${categorySlug(product.category)}`}
                      className="text-primary underline-offset-4 transition-colors hover:underline"
                    >
                      {product.category}
                    </Link>
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
