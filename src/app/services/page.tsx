import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { servicesPage } from "@/data/pages";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Mexmed Pharma service areas across pharmaceutical and nutraceutical product support.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-border/45 bg-card py-20 sm:py-24 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow={servicesPage.eyebrow}
            title={servicesPage.title}
            description={servicesPage.description}
            align="center"
            className="mx-auto max-w-4xl"
          />
        </Container>
      </section>

      <section className="border-b border-border/45 bg-background py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            {servicesPage.pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="rounded-[20px] border border-border/45 bg-card p-7 shadow-[0_14px_48px_rgba(10,18,32,0.06)] sm:p-8 lg:p-9"
              >
                <p className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Service pillar
                </p>
                <h2 className="mt-4 text-[1.5rem] font-semibold tracking-[-0.025em] text-foreground">
                  {pillar.title}
                </h2>
                <p className="mt-4 text-[0.9375rem] leading-[1.74] text-muted-foreground">
                  {pillar.description}
                </p>
                <ul className="mt-6 space-y-4" role="list">
                  {pillar.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden />
                      <span className="text-[0.9375rem] leading-[1.72] text-foreground">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <article className="mt-8 rounded-[20px] border border-border/45 bg-surface-subtle/65 p-7 shadow-[0_14px_48px_rgba(10,18,32,0.04)] sm:p-8">
            <h2 className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Supporting capabilities
            </h2>
            <ul className="mt-5 flex flex-wrap gap-3" role="list">
              {servicesPage.capabilities.map((capability) => (
                <li
                  key={capability}
                  className="rounded-full border border-border/55 bg-card px-4 py-2 text-sm font-medium text-foreground"
                >
                  {capability}
                </li>
              ))}
            </ul>
          </article>
        </Container>
      </section>
    </>
  );
}
