import Link from "next/link";

import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { servicesPreview } from "@/data/services";
import { sectionContentGap, sectionCtaGap, sectionPadding } from "@/lib/section-styles";
import { surfaceCard } from "@/lib/surface";
import { cn } from "@/lib/utils";

export function ServicesPreviewSection() {
  return (
    <section
      className={cn(sectionPadding, "border-b border-border/70 bg-muted/50")}
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
            "grid gap-5 lg:grid-cols-3 lg:gap-6",
          )}
          role="list"
        >
          {servicesPreview.featured.map((service) => (
            <li key={service.id}>
              <article
                className={cn(
                  surfaceCard,
                  "flex h-full min-h-full flex-col p-6 sm:p-7",
                )}
              >
                <h3 className="text-base font-semibold leading-snug tracking-tight text-foreground sm:text-lg">
                  {service.name}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.summary}
                </p>
                <Link
                  href={service.href}
                  className={cn(
                    buttonVariants({ variant: "link", size: "sm" }),
                    "mt-5 h-auto justify-start p-0 text-primary",
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
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "border-border/90 bg-background/80",
            )}
          >
            {servicesPreview.cta.label}
          </Link>
        </div>
      </Container>
    </section>
  );
}
