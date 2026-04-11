import Link from "next/link";

import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import { productsCatalogEnquiry } from "@/data/products";
import { site } from "@/data/site";
import { sectionPadding } from "@/lib/section-styles";
import { cn } from "@/lib/utils";

export function CatalogEnquirySection() {
  const copy = productsCatalogEnquiry;

  return (
    <section
      className={cn(
        sectionPadding,
        "border-t border-border/50 bg-card",
      )}
      aria-labelledby="catalog-enquiry-heading"
    >
      <Container>
        <div className="relative overflow-hidden rounded-[12px] border border-border/40 bg-muted/35 shadow-[0_12px_48px_rgba(10,18,32,0.07),inset_0_1px_0_0_rgba(255,255,255,0.85)]">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-[3px] bg-primary/80"
            aria-hidden
          />
          <div className="grid gap-10 px-6 py-10 sm:px-10 sm:py-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-14 lg:px-14 lg:py-14 xl:gap-20">
            <div className="min-w-0 pl-1 lg:pl-2">
              <p className="text-[0.625rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Mexmed Pharma
              </p>
              <h2
                id="catalog-enquiry-heading"
                className="mt-4 text-balance text-[1.5rem] font-semibold leading-[1.15] tracking-[-0.025em] text-foreground sm:text-[1.75rem] lg:text-[1.875rem]"
              >
                {copy.title}
              </h2>
              <p className="mt-4 max-w-xl text-pretty text-sm leading-[1.65] text-muted-foreground sm:text-[0.9375rem] sm:leading-relaxed">
                {copy.description}
              </p>
              <p className="mt-6 text-[0.8125rem] leading-relaxed text-muted-foreground">
                <span className="font-medium text-foreground">
                  Trusted channels.
                </span>{" "}
                Use the phone number and email we publish—clear routes for
                commercial and quality follow-up.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap lg:max-w-md lg:flex-col lg:items-stretch xl:max-w-sm">
              <Link
                href={copy.primaryCta.href}
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "w-full justify-center shadow-[0_1px_0_0_rgba(255,255,255,0.08)_inset] sm:min-w-[200px] lg:w-full",
                )}
              >
                {copy.primaryCta.label}
              </Link>
              <a
                href={site.contact.phoneHref}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "w-full justify-center border-border/80 bg-background/80 text-center sm:min-w-[200px] lg:w-full",
                )}
              >
                <span className="text-muted-foreground">
                  {copy.secondaryLabel}
                </span>{" "}
                <span className="font-semibold text-foreground">
                  {site.contact.phoneDisplay}
                </span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
