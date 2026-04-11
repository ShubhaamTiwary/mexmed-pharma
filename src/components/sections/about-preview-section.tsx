import Link from "next/link";

import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { company } from "@/data/company";
import {
  ctaRowFlex,
  sectionBandBase,
  sectionPadding,
  sectionSplitGrid,
} from "@/lib/section-styles";
import { cn } from "@/lib/utils";

export function AboutPreviewSection() {
  const { aboutPreview } = company;

  return (
    <section
      className={cn(sectionPadding, sectionBandBase)}
      aria-labelledby="about-preview-heading"
    >
      <Container>
        <div className={sectionSplitGrid}>
          <SectionHeading
            id="about-preview-heading"
            heading="h2"
            eyebrow={aboutPreview.eyebrow}
            title={aboutPreview.title}
            className="lg:max-w-xl"
          />
          <div className="flex flex-col gap-5 sm:gap-6">
            <p className="text-pretty text-lg font-medium leading-relaxed text-foreground sm:text-[1.0625rem]">
              {aboutPreview.lead}
            </p>
            <p className="text-pretty text-[0.9375rem] leading-relaxed text-muted-foreground sm:text-base">
              {aboutPreview.body}
            </p>
            <div className={cn("pt-1", ctaRowFlex)}>
              <Link
                href={aboutPreview.cta.href}
                className={cn(
                  buttonVariants({ variant: "outline", size: "md" }),
                  "w-full sm:w-auto",
                )}
              >
                {aboutPreview.cta.label}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
