import Link from "next/link";

import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import { productsCatalogEnquiry } from "@/data/products";
import { site } from "@/data/site";
import { sectionPadding } from "@/lib/section-styles";
import { surfaceCard } from "@/lib/surface";
import { cn } from "@/lib/utils";

export function CatalogEnquirySection() {
  const copy = productsCatalogEnquiry;

  return (
    <section
      className={cn(
        sectionPadding,
        "border-t border-border/70 bg-muted/35",
      )}
      aria-labelledby="catalog-enquiry-heading"
    >
      <Container>
        <div
          className={cn(
            surfaceCard,
            "flex flex-col gap-8 p-8 sm:flex-row sm:items-center sm:justify-between sm:gap-10 sm:p-10 lg:p-12",
          )}
        >
          <div className="max-w-xl">
            <h2
              id="catalog-enquiry-heading"
              className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl"
            >
              {copy.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {copy.description}
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href={copy.primaryCta.href}
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "w-full min-w-[180px] sm:w-auto",
              )}
            >
              {copy.primaryCta.label}
            </Link>
            <a
              href={site.contact.phoneHref}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full border-border/90 bg-background text-center sm:w-auto",
              )}
            >
              {copy.secondaryLabel}{" "}
              <span className="font-semibold text-foreground">
                {site.contact.phoneDisplay}
              </span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
