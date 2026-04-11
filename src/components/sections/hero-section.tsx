import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { company } from "@/data/company";
import { sectionPaddingHero } from "@/lib/section-styles";
import { surfaceTrustPanel } from "@/lib/surface";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const { hero } = company;

  return (
    <section
      className={cn(
        sectionPaddingHero,
        "border-b border-border/80 bg-card",
      )}
      aria-labelledby="hero-heading"
    >
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          <div className="lg:col-span-7 xl:col-span-7">
            <Badge variant="default" className="inline-flex">
              {hero.eyebrow}
            </Badge>
            <h1
              id="hero-heading"
              className="mt-5 max-w-[22ch] text-balance text-[2rem] font-semibold tracking-[-0.03em] text-foreground sm:text-[2.375rem] sm:leading-[1.12] lg:mt-6 lg:max-w-none lg:text-[2.625rem] xl:text-[2.75rem] xl:leading-[1.08]"
            >
              {hero.title}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg sm:leading-relaxed lg:max-w-2xl">
              {hero.description}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
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
                  "w-full border-border/90 bg-background/80 sm:w-auto",
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
              "p-6 sm:p-7 lg:sticky lg:top-28",
            )}
            aria-label="Trust and quality highlights"
          >
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-primary">
              Built for assurance
            </p>
            <ul className="mt-5 space-y-4" role="list">
              {hero.trustPoints.map((line) => (
                <li
                  key={line}
                  className="flex gap-3 text-sm leading-snug text-foreground"
                >
                  <span
                    className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary"
                    aria-hidden
                  />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-primary/10 pt-5">
              <p className="text-xs leading-relaxed text-muted-foreground">
                Quality and compliance pages expand on certifications, release
                criteria, and governance.
              </p>
              <Link
                href="/quality"
                className="mt-3 inline-block text-sm font-semibold text-primary underline-offset-4 hover:underline"
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
