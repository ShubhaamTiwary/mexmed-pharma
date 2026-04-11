import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { company } from "@/data/company";
import {
  ctaRow,
  sectionBandIntro,
  sectionPaddingHero,
} from "@/lib/section-styles";
import { surfaceTrustPanel } from "@/lib/surface";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const { hero } = company;

  return (
    <section
      className={cn(sectionPaddingHero, sectionBandIntro)}
      aria-labelledby="hero-heading"
    >
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-14">
          <div className="lg:col-span-7 xl:col-span-7">
            <Badge variant="default" className="inline-flex">
              {hero.eyebrow}
            </Badge>
            <h1
              id="hero-heading"
              className="mt-6 max-w-[18ch] text-balance text-[2.125rem] font-semibold tracking-[-0.035em] text-foreground sm:mt-7 sm:text-[2.5rem] sm:leading-[1.1] lg:max-w-[20ch] lg:text-[2.75rem] xl:text-[2.875rem] xl:leading-[1.06]"
            >
              {hero.title}
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-base leading-[1.65] text-muted-foreground sm:mt-7 sm:text-lg sm:leading-[1.65] lg:max-w-2xl">
              {hero.description}
            </p>

            <div className={ctaRow}>
              <Link
                href={hero.primaryCta.href}
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "w-full min-w-[200px] sm:w-auto",
                )}
              >
                {hero.primaryCta.label}
              </Link>
              <Link
                href={hero.secondaryCta.href}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "w-full sm:w-auto",
                )}
              >
                {hero.secondaryCta.label}
              </Link>
            </div>
          </div>

          <aside
            className={cn(
              surfaceTrustPanel,
              "lg:col-span-5 xl:col-span-5",
              "p-7 sm:p-8 lg:sticky lg:top-[6.5rem]",
            )}
            aria-label="Trust and quality highlights"
          >
            <p className="text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-primary">
              Built for assurance
            </p>
            <ul className="mt-6 space-y-5" role="list">
              {hero.trustPoints.map((line) => (
                <li
                  key={line}
                  className="flex gap-3.5 text-[0.9375rem] leading-snug text-foreground"
                >
                  <span
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/90"
                    aria-hidden
                  />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 border-t border-border/50 pt-6">
              <p className="text-xs leading-relaxed text-muted-foreground">
                Quality and compliance pages expand on certifications, release
                criteria, and governance.
              </p>
              <Link
                href="/quality"
                className="mt-3 inline-block text-sm font-semibold text-primary underline-offset-4 transition-colors hover:text-primary/90 hover:underline"
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
