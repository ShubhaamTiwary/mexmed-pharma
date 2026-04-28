import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { alternatesForPath, primaryOpenGraphImages, primaryTwitterImage } from "@/lib/seo";
import { presencePage } from "@/data/pages";
import { site } from "@/data/site";

const presenceDescription =
  "Mexmed Pharma operating footprint — Serampore (West Bengal) head office and Forbesganj (Bihar) branch with partner-facing reach beyond.";

export const metadata: Metadata = {
  title: "Presence",
  description: presenceDescription,
  alternates: alternatesForPath("/presence"),
  openGraph: {
    url: "/presence",
    title: "Presence | Mexmed Pharma",
    description: presenceDescription,
    images: primaryOpenGraphImages(),
  },
  twitter: {
    title: "Presence | Mexmed Pharma",
    description: presenceDescription,
    images: [primaryTwitterImage()],
  },
};

export default function PresencePage() {
  return (
    <>
      <section className="border-b border-border/45 bg-card py-20 sm:py-24 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow={presencePage.eyebrow}
            title={presencePage.title}
            description={presencePage.description}
            align="center"
            className="mx-auto max-w-4xl"
          />
        </Container>
      </section>

      <section className="border-b border-border/45 bg-background py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <article className="rounded-[18px] border border-border/45 bg-card p-7 shadow-[0_12px_40px_rgba(10,18,32,0.05)] sm:p-8">
              <h2 className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Office locations
              </h2>
              <div className="mt-5 space-y-7">
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

            <div className="grid gap-6">
              {presencePage.coverage.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[18px] border border-border/45 bg-card p-6 shadow-[0_12px_36px_rgba(10,18,32,0.05)]"
                >
                  <h2 className="text-base font-semibold tracking-[-0.018em] text-foreground">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-[1.72] text-muted-foreground">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
