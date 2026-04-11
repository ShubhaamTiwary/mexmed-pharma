import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { company } from "@/data/company";
import { ctaRow, sectionPaddingHero } from "@/lib/section-styles";
import { cn } from "@/lib/utils";

const heroStats = [
  { label: "Experience", value: "7+ years" },
  { label: "India presence", value: "2 locations" },
  { label: "Engagement", value: "Enquiry-led" },
] as const;

export function HeroSection() {
  const { hero } = company;

  return (
    <section
      className={cn(
        sectionPaddingHero,
        "relative overflow-hidden border-b border-white/10 bg-hero-ink text-navy-foreground",
      )}
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18] hero-premium-grid"
        aria-hidden
      />

      <Container className="relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          <div className="flex flex-col lg:col-span-6 xl:col-span-6">
            <Badge variant="heroInk" className="w-fit tracking-[0.12em]">
              {hero.eyebrow}
            </Badge>

            <h1
              id="hero-heading"
              className="mt-7 max-w-[20ch] text-balance text-[2.25rem] font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:mt-8 sm:max-w-[24ch] sm:text-[2.75rem] lg:text-[3rem] xl:text-[3.125rem]"
            >
              {hero.title}
            </h1>

            <p className="mt-7 max-w-[32rem] text-pretty text-[1.0625rem] leading-[1.62] text-navy-muted sm:mt-8 sm:text-[1.125rem] sm:leading-[1.58]">
              {hero.description}
            </p>

            <div className={cn(ctaRow, "mt-9 sm:mt-10")}>
              <Link
                href={hero.primaryCta.href}
                className={cn(
                  buttonVariants({ variant: "onInverse", size: "lg" }),
                  "w-full min-w-[200px] justify-center sm:w-auto",
                )}
              >
                {hero.primaryCta.label}
              </Link>
              <Link
                href={hero.secondaryCta.href}
                className={cn(
                  buttonVariants({ variant: "outlineOnInverse", size: "lg" }),
                  "w-full justify-center border-white/25 bg-transparent text-white/95 hover:bg-white/[0.06] sm:w-auto",
                )}
              >
                {hero.secondaryCta.label}
              </Link>
            </div>
          </div>

          <div className="relative lg:col-span-6 xl:col-span-6">
            <div
              className={cn(
                "relative aspect-[4/3] w-full overflow-hidden rounded-[14px] border border-white/12",
                "shadow-[0_24px_80px_rgba(0,0,0,0.35)]",
              )}
            >
              <Image
                src="/images/brand/hero-mexmed.png"
                alt="Mexmed Pharma — formulations and healthcare focus"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-hero-ink/50 via-transparent to-transparent"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10"
                aria-hidden
              />
            </div>
            <aside
              className="mt-8 rounded-[12px] border border-white/12 bg-white/[0.04] p-5 backdrop-blur-[2px] sm:p-6 lg:mt-0 lg:absolute lg:bottom-5 lg:left-5 lg:right-auto lg:mt-0 lg:max-w-md"
              aria-label="Assurance highlights"
            >
              <p className="text-[0.625rem] font-semibold uppercase tracking-[0.22em] text-navy-muted">
                At a glance
              </p>
              <ul className="mt-4 space-y-3" role="list">
                {hero.trustPoints.slice(0, 2).map((line) => (
                  <li
                    key={line}
                    className="flex gap-2.5 text-[0.875rem] leading-snug text-white/90"
                  >
                    <span
                      className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-white/75"
                      aria-hidden
                    />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-4 inline-block text-[0.8125rem] font-semibold text-white underline-offset-4 hover:underline"
              >
                Contact us →
              </Link>
            </aside>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-9 sm:mt-16 lg:mt-20 lg:pt-11">
          <dl className="grid gap-8 sm:grid-cols-3 sm:gap-6 lg:gap-10">
            {heroStats.map((item) => (
              <div
                key={item.label}
                className="rounded-[10px] border border-white/12 bg-white/[0.04] px-5 py-4 sm:px-6 sm:py-5"
              >
                <dt className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-navy-muted">
                  {item.label}
                </dt>
                <dd className="mt-2 text-lg font-semibold tracking-tight text-white sm:text-xl">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
