import Link from "next/link";

import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { featuredProductsSection, getFeaturedProducts } from "@/data/products";
import { sectionContentGap, sectionCtaGap, sectionPadding } from "@/lib/section-styles";
import { surfaceCard } from "@/lib/surface";
import { cn } from "@/lib/utils";

export function FeaturedProductsSection() {
  const items = getFeaturedProducts(6);
  const copy = featuredProductsSection;

  return (
    <section
      className={cn(sectionPadding, "border-b border-border/70 bg-background")}
      aria-labelledby="featured-products-heading"
    >
      <Container>
        <SectionHeading
          id="featured-products-heading"
          heading="h2"
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
          align="center"
          className="mx-auto max-w-3xl"
        />
        <div
          className={cn(
            sectionContentGap,
            "grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-6",
          )}
        >
          {items.map((product) => (
            <article
              key={product.id}
              className={cn(
                surfaceCard,
                "flex min-h-[220px] flex-col p-6 sm:min-h-0 sm:p-7",
              )}
            >
              <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-primary">
                {product.category}
              </p>
              <h3 className="mt-3 text-base font-semibold leading-snug tracking-tight text-foreground sm:text-lg">
                {product.name}
              </h3>
              <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                {product.summary}
              </p>
              <Link
                href={product.href}
                className={cn(
                  buttonVariants({ variant: "ghost", size: "sm" }),
                  "mt-5 -ml-2 self-start px-2 text-primary hover:bg-primary/5 hover:text-primary",
                )}
              >
                View details
              </Link>
            </article>
          ))}
        </div>
        <div className={cn(sectionCtaGap, "flex justify-center")}>
          <Link
            href={copy.cta.href}
            className={cn(buttonVariants({ variant: "default", size: "lg" }))}
          >
            {copy.cta.label}
          </Link>
        </div>
      </Container>
    </section>
  );
}
