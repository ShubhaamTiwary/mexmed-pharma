import Link from "next/link";

import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import { company } from "@/data/company";
import { site } from "@/data/site";
import { sectionPadding } from "@/lib/section-styles";
import { surfaceCard } from "@/lib/surface";
import { cn } from "@/lib/utils";

export function ContactCtaSection() {
  const copy = company.contactCta;

  return (
    <section
      className={cn(sectionPadding, "bg-muted/45 pb-12 sm:pb-14 lg:pb-16")}
      aria-labelledby="contact-cta-heading"
    >
      <Container>
        <div
          className={cn(
            surfaceCard,
            "border-border/80 px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14",
          )}
        >
          <div className="mx-auto max-w-2xl text-center">
            <h2
              id="contact-cta-heading"
              className="text-balance text-[1.5rem] font-semibold tracking-[-0.02em] text-foreground sm:text-[1.75rem] lg:text-[2rem]"
            >
              {copy.title}
            </h2>
            <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted-foreground sm:text-lg sm:leading-relaxed">
              {copy.description}
            </p>
            <div className="mt-9 flex flex-col items-stretch gap-3 sm:mt-10 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
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
                  "w-full border-border/90 bg-background sm:w-auto",
                )}
              >
                {copy.secondaryCta.label}
              </Link>
            </div>
            <div className="mt-10 border-t border-border/70 pt-8">
              <p className="text-xs font-medium uppercase tracking-[0.1em] text-muted-foreground">
                Direct lines
              </p>
              <div className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-center sm:gap-10">
                <a
                  href={site.contact.phoneHref}
                  className="font-medium text-foreground transition-colors hover:text-primary"
                >
                  {site.contact.phoneDisplay}
                </a>
                <a
                  href={site.contact.emailHref}
                  className="font-medium text-primary underline-offset-4 transition-colors hover:underline"
                >
                  {site.contact.emailDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
