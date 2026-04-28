import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { alternatesForPath } from "@/lib/seo";
import { careerPage } from "@/data/pages";

const careerDescription =
  "Careers at Mexmed Pharma — areas where you can contribute across sales, distribution, and product communication, and how to start a conversation with us.";

export const metadata: Metadata = {
  title: "Career",
  description: careerDescription,
  alternates: alternatesForPath("/career"),
  openGraph: {
    url: "/career",
    title: "Career | Mexmed Pharma",
    description: careerDescription,
  },
  twitter: {
    title: "Career | Mexmed Pharma",
    description: careerDescription,
  },
};

export default function CareerPage() {
  return (
    <>
      <section className="border-b border-border/45 bg-card py-20 sm:py-24 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow={careerPage.eyebrow}
            title={careerPage.title}
            description={careerPage.description}
            align="center"
            className="mx-auto max-w-4xl"
          />
          <p className="mx-auto mt-8 max-w-3xl text-center text-[1rem] leading-[1.76] text-foreground/88 sm:text-[1.0625rem]">
            {careerPage.intro}
          </p>
        </Container>
      </section>

      <section className="border-b border-border/45 bg-background py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
            <article className="rounded-[18px] border border-border/45 bg-card p-7 shadow-[0_12px_40px_rgba(10,18,32,0.05)] sm:p-8">
              <h2 className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Areas where you can contribute
              </h2>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2" role="list">
                {careerPage.areas.map((area) => (
                  <li
                    key={area}
                    className="rounded-[14px] border border-border/45 bg-background/85 px-5 py-5 text-sm font-medium leading-[1.7] text-foreground"
                  >
                    {area}
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-[18px] border border-border/45 bg-card p-7 shadow-[0_12px_40px_rgba(10,18,32,0.05)] sm:p-8">
              <h2 className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                How to apply
              </h2>
              <ol className="mt-6 space-y-5">
                {careerPage.process.map((step, index) => (
                  <li key={step} className="flex items-start gap-4">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border/55 bg-muted/35 text-sm font-semibold text-primary">
                      {index + 1}
                    </span>
                    <span className="pt-1 text-[0.9375rem] leading-[1.72] text-foreground">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </article>
          </div>
        </Container>
      </section>
    </>
  );
}
