import type { Metadata } from "next";
import Image from "next/image";

import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { alternatesForPath } from "@/lib/seo";
import { qualityPage } from "@/data/pages";
import { editorialImages } from "@/lib/product-visuals";

const qualityDescription =
  "How Mexmed Pharma approaches quality, safety, traceability, and product communication across its pharmaceutical and nutraceutical catalog.";

export const metadata: Metadata = {
  title: "Quality",
  description: qualityDescription,
  alternates: alternatesForPath("/quality"),
  openGraph: {
    url: "/quality",
    title: "Quality | Mexmed Pharma",
    description: qualityDescription,
  },
  twitter: {
    title: "Quality | Mexmed Pharma",
    description: qualityDescription,
  },
};

export default function QualityPage() {
  return (
    <>
      <section className="border-b border-border/45 bg-card py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,28rem)] lg:items-center lg:gap-16">
            <div className="min-w-0">
              <SectionHeading
                eyebrow={qualityPage.eyebrow}
                title={qualityPage.title}
                description={qualityPage.description}
              />
            </div>
            <div className="relative overflow-hidden rounded-[24px] border border-border/55 bg-muted/35 p-3 shadow-[0_18px_56px_rgba(10,18,32,0.08)]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[20px]">
                <Image
                  src={editorialImages.qualityLab}
                  alt="Quality and research laboratory environment"
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
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {qualityPage.pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="rounded-[18px] border border-border/45 bg-card p-6 shadow-[0_12px_36px_rgba(10,18,32,0.05)]"
              >
                <h2 className="text-base font-semibold tracking-[-0.018em] text-foreground">
                  {pillar.title}
                </h2>
                <p className="mt-3 text-sm leading-[1.72] text-muted-foreground">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>

          <article className="mt-8 rounded-[18px] border border-border/45 bg-card p-7 shadow-[0_12px_40px_rgba(10,18,32,0.05)] sm:p-8">
            <h2 className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Quality workflow on the rebuilt website
            </h2>
            <ol className="mt-6 grid gap-4 lg:grid-cols-4">
              {qualityPage.workflow.map((step, index) => (
                <li
                  key={step}
                  className="rounded-[14px] border border-border/45 bg-background/85 px-5 py-5"
                >
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-primary">
                    Step {index + 1}
                  </p>
                  <p className="mt-3 text-sm leading-[1.7] text-foreground">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </article>
        </Container>
      </section>
    </>
  );
}
