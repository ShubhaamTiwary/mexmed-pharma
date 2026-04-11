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
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-20">
          <div className="lg:col-span-7">
            <Badge variant="onInverse" className="inline-flex">
              {hero.eyebrow}
            </Badge>
            <h1
              id="hero-heading"
              className="mt-7 max-w-[16ch] text-balance text-[2.25rem] font-medium leading-[1.08] tracking-[-0.035em] text-navy-foreground sm:mt-8 sm:text-[2.625rem] lg:max-w-[18ch] lg:text-[2.875rem] xl:text-[3rem]"
            >
              {hero.title}
            </h1>
            <p className="mt-7 max-w-xl text-pretty text-lg leading-[1.6] text-navy-muted sm:mt-8 sm:max-w-2xl sm:text-[1.0625rem]">
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
            className="border-t border-white/15 pt-10 lg:col-span-5 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0 xl:pl-14"
            aria-label="Trust and quality highlights"
          >
            <p className="text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-navy-muted">
              Built for assurance
            </p>
            <ul className="mt-8 space-y-6" role="list">
              {hero.trustPoints.map((line) => (
                <li
                  key={line}
                  className="flex gap-4 text-[0.9375rem] leading-snug text-navy-foreground"
                >
                  <span
                    className="mt-1.5 h-1.5 w-4 shrink-0 bg-white/90"
                    aria-hidden
                  />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 border-t border-white/15 pt-8">
              <p className="text-sm leading-relaxed text-navy-muted">
                Quality and compliance pages expand on certifications, release
                criteria, and governance.
              </p>
              <Link
                href="/quality"
                className="mt-4 inline-block text-sm font-medium text-white underline-offset-[5px] transition-colors hover:text-white/90 hover:underline"
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
