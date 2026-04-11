import Link from "next/link";

import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { servicesPreview } from "@/data/services";
import {
  cardPadding,
  sectionBandMuted,
  sectionContentGap,
  sectionCtaGap,
  sectionPadding,
} from "@/lib/section-styles";
import { surfaceCard } from "@/lib/surface";
import { cn } from "@/lib/utils";

export function ServicesPreviewSection() {
  return (
    <section
      className={cn(sectionPadding, sectionBandMuted)}
      aria-labelledby="services-preview-heading"
    >
      <Container>
        <SectionHeading
          id="services-preview-heading"
          heading="h2"
          eyebrow={servicesPreview.eyebrow}
          title={servicesPreview.title}
          description={servicesPreview.description}
          align="center"
          className="mx-auto max-w-3xl"
        />
        <ul
          className={cn(
            sectionContentGap,
            "grid gap-6 lg:grid-cols-3 lg:gap-7",
          )}
          role="list"
        >
          {servicesPreview.featured.map((service) => (
            <li key={service.id}>
              <article
                className={cn(
                  surfaceCard,
                  cardPadding,
                  "flex h-full min-h-full flex-col",
                )}
              >
                <h3 className="text-base font-medium leading-snug tracking-tight text-foreground sm:text-lg">
                  {service.name}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.summary}
                </p>
                <Link
                  href={service.href}
                  className={cn(
                    buttonVariants({ variant: "link", size: "sm" }),
                    "mt-6 h-auto justify-start p-0 text-primary",
                  )}
                >
                  Learn more
                </Link>
              </article>
            </li>
          ))}
        </ul>
        <div className={cn(sectionCtaGap, "flex justify-center")}>
          <Link
            href={servicesPreview.cta.href}
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            {servicesPreview.cta.label}
          </Link>
        </div>
      </Container>
    </section>
  );
}
