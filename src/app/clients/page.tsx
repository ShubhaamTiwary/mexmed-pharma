import type { Metadata } from "next";
import Image from "next/image";

import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { alternatesForPath } from "@/lib/seo";
import { clientsPage } from "@/data/pages";
import { editorialImages } from "@/lib/product-visuals";

const clientsDescription =
  "Partner groups and market-facing audiences Mexmed Pharma is positioned to support — distributors, healthcare-market partners, and prescription-linked channels.";

export const metadata: Metadata = {
  title: "Clients",
  description: clientsDescription,
  alternates: alternatesForPath("/clients"),
  openGraph: {
    url: "/clients",
    title: "Clients | Mexmed Pharma",
    description: clientsDescription,
  },
  twitter: {
    title: "Clients | Mexmed Pharma",
    description: clientsDescription,
  },
};

export default function ClientsPage() {
  return (
    <>
      <section className="border-b border-border/45 bg-card py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,28rem)] lg:items-center lg:gap-16">
            <div className="min-w-0">
              <SectionHeading
                eyebrow={clientsPage.eyebrow}
                title={clientsPage.title}
                description={clientsPage.description}
              />
            </div>
            <div className="relative overflow-hidden rounded-[24px] border border-border/55 bg-muted/35 p-3 shadow-[0_18px_56px_rgba(10,18,32,0.08)]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[20px]">
                <Image
                  src={editorialImages.partnerBriefing}
                  alt="Partner and client meeting environment"
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
            {clientsPage.segments.map((segment) => (
              <article
                key={segment.title}
                className="rounded-[18px] border border-border/45 bg-card p-6 shadow-[0_12px_36px_rgba(10,18,32,0.05)]"
              >
                <h2 className="text-base font-semibold tracking-[-0.018em] text-foreground">
                  {segment.title}
                </h2>
                <p className="mt-3 text-sm leading-[1.72] text-muted-foreground">
                  {segment.description}
                </p>
              </article>
            ))}
          </div>

          <article className="mt-8 rounded-[18px] border border-border/45 bg-surface-subtle/65 p-7 shadow-[0_12px_40px_rgba(10,18,32,0.04)] sm:p-8">
            <h2 className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Public-client note
            </h2>
            <p className="mt-4 max-w-3xl text-[0.9375rem] leading-[1.72] text-foreground">
              {clientsPage.note}
            </p>
          </article>
        </Container>
      </section>
    </>
  );
}
