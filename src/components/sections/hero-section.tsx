import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { company } from "@/data/company";
import {
  ctaRow,
  sectionBandNavy,
  sectionPaddingHero,
} from "@/lib/section-styles";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const { hero } = company;

  return (
    <section
      className={cn(sectionPaddingHero, sectionBandNavy)}
      aria-labelledby="hero-heading"
    >
      <Container>
        <div className="grid items-start gap-14 lg:grid-cols-12 lg:gap-14 xl:gap-[4.5rem]">
          <div className="lg:col-span-7">
            <Badge variant="onInverse" className="inline-flex">
              {hero.eyebrow}
            </Badge>
            <h1
              id="hero-heading"
              className="mt-6 max-w-[17ch] text-balance text-[2.25rem] font-medium leading-[1.07] tracking-[-0.038em] text-navy-foreground sm:mt-7 sm:text-[2.625rem] lg:max-w-[19ch] lg:text-[2.875rem] xl:text-[3rem] xl:leading-[1.05]"
            >
              {hero.title}
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-[1.0625rem] leading-[1.62] text-navy-muted sm:mt-7 sm:max-w-2xl sm:text-[1.125rem] sm:leading-[1.58]">
              {hero.description}
            </p>

            <div className={ctaRow}>
              <Link
                href={hero.primaryCta.href}
                className={cn(
                  buttonVariants({ variant: "onInverse", size: "lg" }),
                  "w-full min-w-[200px] sm:w-auto",
                )}
              >
                {hero.primaryCta.label}
              </Link>
              <Link
                href={hero.secondaryCta.href}
                className={cn(
                  buttonVariants({ variant: "outlineOnInverse", size: "lg" }),
                  "w-full sm:w-auto",
                )}
              >
                {hero.secondaryCta.label}
              </Link>
            </div>
          </div>

          <aside
            className="border-t border-white/12 pt-10 lg:col-span-5 lg:border-l lg:border-t-0 lg:pl-11 lg:pt-1 xl:pl-12"
            aria-label="Trust and quality highlights"
          >
            <div className="border border-white/18 bg-white/[0.04] px-5 py-5 sm:px-6 sm:py-6">
              <p className="text-[0.625rem] font-semibold uppercase tracking-[0.24em] text-navy-muted">
                Built for assurance
              </p>
              <ul className="mt-6 space-y-0 divide-y divide-white/10" role="list">
                {hero.trustPoints.map((line) => (
                  <li
                    key={line}
                    className="flex gap-4 py-4 text-[0.9375rem] leading-[1.55] text-navy-foreground first:pt-0 last:pb-0"
                  >
                    <span
                      className="mt-[0.4rem] h-px w-6 shrink-0 bg-white/55"
                      aria-hidden
                    />
                    <span className="min-w-0">{line}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 border-t border-white/12 pt-7">
              <p className="text-[0.8125rem] leading-[1.65] text-navy-muted">
                Quality and compliance pages expand on certifications, release
                criteria, and governance.
              </p>
              <Link
                href="/quality"
                className="mt-3 inline-block text-[0.8125rem] font-medium text-white underline-offset-[4px] transition-colors hover:text-white/92 hover:underline"
              >
                View quality overview
              </Link>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
