import type { Metadata } from "next";
import Image from "next/image";

import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { alternatesForPath } from "@/lib/seo";
import { aboutPage } from "@/data/pages";
import { site } from "@/data/site";
import { editorialImages } from "@/lib/product-visuals";
import { cn } from "@/lib/utils";

const aboutDescription =
  "Learn about Mexmed Pharma — our mission-led operating approach, and the quality, safety, and compliance principles behind our pharmaceutical and nutraceutical catalog.";

export const metadata: Metadata = {
  title: "About",
  description: aboutDescription,
  alternates: alternatesForPath("/about"),
  openGraph: {
    url: "/about",
    title: "About | Mexmed Pharma",
    description: aboutDescription,
  },
  twitter: {
    title: "About | Mexmed Pharma",
    description: aboutDescription,
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border/45 bg-card py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,28rem)] lg:items-center lg:gap-16">
            <div className="min-w-0">
              <SectionHeading
                eyebrow={aboutPage.eyebrow}
                title={aboutPage.title}
                description={aboutPage.description}
              />
              <p className="mt-7 max-w-3xl text-pretty text-[1.0625rem] leading-[1.72] text-foreground sm:text-[1.125rem]">
                {aboutPage.lead}
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {aboutPage.stats.map((stat) => (
                  <article
                    key={stat.label}
                    className="rounded-[14px] border border-border/55 bg-background/88 px-5 py-5 shadow-[0_12px_40px_rgba(10,18,32,0.05),inset_0_1px_0_0_rgba(255,255,255,0.92)]"
                  >
                    <p className="text-2xl font-semibold tracking-tight text-foreground">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      {stat.label}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[24px] border border-border/55 bg-muted/35 p-3 shadow-[0_18px_56px_rgba(10,18,32,0.08)]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[20px]">
                <Image
                  src={editorialImages.aboutFacility}
                  alt="Healthcare and pharmaceutical work environment"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 32rem"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-border/45 bg-background py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <article className="rounded-[18px] border border-border/45 bg-card p-7 shadow-[0_12px_40px_rgba(10,18,32,0.05)] sm:p-8">
              <p className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Company narrative
              </p>
              <div className="mt-4 space-y-5 text-[0.9375rem] leading-[1.76] text-muted-foreground sm:text-base">
                {aboutPage.story.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>

            <article className="rounded-[18px] border border-border/45 bg-card p-7 shadow-[0_12px_40px_rgba(10,18,32,0.05)] sm:p-8">
              <p className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Operating footprint
              </p>
              <div className="mt-5 space-y-6">
                {site.contact.locations.map((location) => (
                  <div key={location.label}>
                    <p className="text-sm font-semibold text-foreground">
                      {location.label}
                    </p>
                    <ul className="mt-2 space-y-1 text-[0.9375rem] leading-relaxed text-muted-foreground" role="list">
                      {location.lines.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </Container>
      </section>

      <section className="border-b border-border/45 bg-surface-subtle/70 py-16 sm:py-20 lg:py-24">
        <Container>
          <SectionHeading
            heading="h2"
            eyebrow="Core commitments"
            title="Mission, vision, quality, and safety translated into practice"
            description="The legacy site repeated these themes across multiple pages. Here they are consolidated into one clearer view."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {aboutPage.commitments.map((item) => (
              <article
                key={item.title}
                className="rounded-[16px] border border-border/45 bg-card p-6 shadow-[0_12px_36px_rgba(10,18,32,0.05)]"
              >
                <h3 className="text-base font-semibold tracking-[-0.018em] text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-[1.72] text-muted-foreground">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-border/45 bg-background py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="rounded-[18px] border border-border/45 bg-card p-7 shadow-[0_12px_40px_rgba(10,18,32,0.05)] sm:p-8">
              <h2 className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                We offer
              </h2>
              <ul className="mt-5 space-y-4" role="list">
                {aboutPage.offerSeek.offer.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden />
                    <span className="text-[0.9375rem] leading-[1.72] text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-[18px] border border-border/45 bg-card p-7 shadow-[0_12px_40px_rgba(10,18,32,0.05)] sm:p-8">
              <h2 className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                We seek
              </h2>
              <ul className="mt-5 space-y-4" role="list">
                {aboutPage.offerSeek.seek.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-foreground/70" aria-hidden />
                    <span className="text-[0.9375rem] leading-[1.72] text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <article className="mt-8 rounded-[18px] border border-border/45 bg-card p-7 shadow-[0_12px_40px_rgba(10,18,32,0.05)] sm:p-8">
            <h2 className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Certification-ready website structure
            </h2>
            <ul className="mt-5 grid gap-4 lg:grid-cols-3" role="list">
              {aboutPage.certifications.map((item) => (
                <li
                  key={item}
                  className={cn(
                    "rounded-[14px] border border-border/40 bg-background/80 px-5 py-5 text-sm leading-[1.7] text-muted-foreground",
                  )}
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </Container>
      </section>
    </>
  );
}
