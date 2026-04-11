import Link from "next/link";

import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import { company } from "@/data/company";
import { site } from "@/data/site";
import {
  ctaRowCentered,
  sectionPadding,
  sectionPaddingFooterAdjacent,
} from "@/lib/section-styles";
import { surfacePanel } from "@/lib/surface";
import { cn } from "@/lib/utils";

export function ContactCtaSection() {
  const copy = company.contactCta;

  return (
    <section
      className={cn(
        sectionPadding,
        sectionPaddingFooterAdjacent,
        "border-t border-border/45 bg-muted/30",
      )}
      aria-labelledby="contact-cta-heading"
    >
      <Container>
        <div
          className={cn(
            surfacePanel,
            "mx-auto max-w-3xl px-8 py-10 text-center sm:px-12 sm:py-12 lg:px-14 lg:py-14",
          )}
        >
          <p className="text-[0.625rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Partner with Mexmed
          </p>
          <h2
            id="contact-cta-heading"
            className="mt-4 text-balance text-[1.75rem] font-semibold tracking-[-0.03em] text-foreground sm:mt-5 sm:text-[2rem] lg:text-[2.125rem]"
          >
            {copy.title}
          </h2>
          <p className="mt-5 text-balance text-[0.9375rem] leading-[1.68] text-muted-foreground sm:text-lg sm:leading-relaxed">
            {copy.description}
          </p>
          <div className={ctaRowCentered}>
            <Link
              href={copy.primaryCta.href}
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "w-full min-w-[180px] sm:w-auto",
              )}
            >
              {copy.primaryCta.label}
            </Link>
            <Link
              href={copy.secondaryCta.href}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full sm:w-auto",
              )}
            >
              {copy.secondaryCta.label}
            </Link>
          </div>
          <div className="mt-12 border-t border-border/50 pt-10">
            <p className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Direct lines
            </p>
            <div className="mt-4 flex flex-col gap-2 text-sm sm:flex-row sm:items-center sm:justify-center sm:gap-12">
              <a
                href={site.contact.phoneHref}
                className="font-semibold text-foreground transition-colors hover:text-primary"
              >
                {site.contact.phoneDisplay}
              </a>
              <a
                href={site.contact.emailHref}
                className="font-medium text-primary underline-offset-4 transition-colors hover:text-primary/90 hover:underline"
              >
                {site.contact.emailDisplay}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
