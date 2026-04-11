import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { pillarIcons } from "@/components/ui/pillar-icons";
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
      className={cn(
        sectionPadding,
        sectionBandMuted,
        "border-b border-border/45",
      )}
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
          {whyChooseUs.pillars.map((pillar, index) => {
            const Icon = pillarIcons[index];
            return (
              <li key={pillar.title}>
                <article
                  className={cn(
                    surfaceCard,
                    cardPadding,
                    "flex h-full flex-col pt-7 transition-[box-shadow,border-color] duration-200 hover:border-primary/20 hover:shadow-[0_16px_48px_rgba(10,18,32,0.09)]",
                  )}
                >
                  {Icon ? <Icon /> : null}
                  <span
                    className="mt-4 font-mono text-[0.6875rem] font-medium tabular-nums text-primary/80"
                    aria-hidden
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-base font-semibold leading-snug tracking-[-0.015em] text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-[1.65] text-muted-foreground">
                    {pillar.description}
                  </p>
                </article>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
