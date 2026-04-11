import Link from "next/link";

import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { company } from "@/data/company";
import { sectionPadding } from "@/lib/section-styles";
import { surfaceTrustPanel } from "@/lib/surface";
import { cn } from "@/lib/utils";

export function QualityPreviewSection() {
  const { qualityPreview } = company;

  return (
    <section
      className={cn(sectionPadding, "border-b border-border/70 bg-background")}
      aria-labelledby="quality-preview-heading"
    >
      <Container>
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-2 lg:items-center lg:gap-14 xl:gap-16">
          <SectionHeading
            id="quality-preview-heading"
            heading="h2"
            eyebrow={qualityPreview.eyebrow}
            title={qualityPreview.title}
            description={qualityPreview.description}
            className="lg:max-w-xl"
          />
          <div
            className={cn(
              surfaceTrustPanel,
              "border-l-4 border-l-primary p-6 sm:p-8",
            )}
          >
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-primary">
              Assurance focus
            </p>
            <ul className="mt-5 space-y-4" role="list">
              {qualityPreview.points.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 text-[0.9375rem] leading-relaxed text-foreground sm:text-base"
                >
                  <span
                    className="mt-2 size-2 shrink-0 rounded-sm border border-primary/40 bg-primary/15"
                    aria-hidden
                  />
                  <span className="text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
            <Link
              href={qualityPreview.cta.href}
              className={cn(
                buttonVariants({ variant: "default", size: "md" }),
                "mt-8 w-full sm:w-auto",
              )}
            >
              {qualityPreview.cta.label}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
