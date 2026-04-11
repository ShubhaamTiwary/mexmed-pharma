import Link from "next/link";

import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import { company } from "@/data/company";
import { site } from "@/data/site";
import {
  ctaRowCentered,
  sectionBandNavy,
  sectionPadding,
  sectionPaddingFooterAdjacent,
} from "@/lib/section-styles";
import { cn } from "@/lib/utils";

export function ContactCtaSection() {
  const copy = company.contactCta;

  return (
    <section
      className={cn(
        sectionPadding,
        sectionBandNavy,
        sectionPaddingFooterAdjacent,
      )}
      aria-labelledby="contact-cta-heading"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="contact-cta-heading"
            className="text-balance text-[1.625rem] font-medium tracking-[-0.02em] text-navy-foreground sm:text-[1.875rem] lg:text-[2.125rem]"
          >
            {copy.title}
          </h2>
          <p className="mt-5 text-balance text-[0.9375rem] leading-[1.65] text-navy-muted sm:text-lg">
            {copy.description}
          </p>
          <div className={ctaRowCentered}>
            <Link
              href={copy.primaryCta.href}
              className={cn(
                buttonVariants({ variant: "onInverse", size: "lg" }),
                "w-full min-w-[180px] sm:w-auto",
              )}
            >
              {copy.primaryCta.label}
            </Link>
            <Link
              href={copy.secondaryCta.href}
              className={cn(
                buttonVariants({ variant: "outlineOnInverse", size: "lg" }),
                "w-full sm:w-auto",
              )}
            >
              {copy.secondaryCta.label}
            </Link>
          </div>
          <div className="mt-12 border-t border-white/15 pt-10">
            <p className="text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-navy-muted">
              Direct lines
            </p>
            <div className="mt-4 flex flex-col gap-2 text-sm sm:flex-row sm:items-center sm:justify-center sm:gap-12">
              <a
                href={site.contact.phoneHref}
                className="font-medium text-navy-foreground transition-colors hover:text-white"
              >
                {site.contact.phoneDisplay}
              </a>
              <a
                href={site.contact.emailHref}
                className="font-medium text-white/95 underline-offset-4 transition-colors hover:text-white hover:underline"
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
