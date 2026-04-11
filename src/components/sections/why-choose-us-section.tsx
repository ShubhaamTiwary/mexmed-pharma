import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { company } from "@/data/company";
import {
  cardPadding,
  sectionBandMuted,
  sectionContentGap,
  sectionPadding,
} from "@/lib/section-styles";
import { surfaceCard } from "@/lib/surface";
import { cn } from "@/lib/utils";

export function WhyChooseUsSection() {
  const { whyChooseUs } = company;

  return (
    <section
      className={cn(sectionPadding, sectionBandMuted)}
      aria-labelledby="why-choose-heading"
    >
      <Container>
        <SectionHeading
          id="why-choose-heading"
          heading="h2"
          eyebrow={whyChooseUs.eyebrow}
          title={whyChooseUs.title}
          description={whyChooseUs.description}
          align="center"
          className="mx-auto max-w-3xl"
        />
        <ul
          className={cn(
            sectionContentGap,
            "grid gap-6 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-7",
          )}
          role="list"
        >
          {whyChooseUs.pillars.map((pillar, index) => (
            <li key={pillar.title}>
              <article
                className={cn(
                  surfaceCard,
                  cardPadding,
                  "flex h-full flex-col",
                )}
              >
                <span
                  className="text-[0.625rem] font-semibold tabular-nums text-primary/70"
                  aria-hidden
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-base font-semibold leading-snug tracking-tight text-foreground">
                  {pillar.title}
                </h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
