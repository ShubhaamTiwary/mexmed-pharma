import Image from "next/image";

import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  IconMission,
  IconVision,
} from "@/components/ui/pillar-icons";
import { company } from "@/data/company";
import { site } from "@/data/site";
import { editorialImages } from "@/lib/product-visuals";
import { sectionContentGap, sectionPadding } from "@/lib/section-styles";
import { cn } from "@/lib/utils";

const cardIcons = [IconMission, IconVision] as const;

const visualHighlights = [
  "Mission-led formulations",
  "Operating in Nepal and India",
  "Quality and safety anchored",
] as const;

export function HomeMissionVisionSection() {
  const block = company.homeMissionVision;

  return (
    <section
      className={cn(
        sectionPadding,
        "border-b border-border/45 bg-[linear-gradient(180deg,rgba(255,255,251,0.98),rgba(242,247,236,0.92))]",
      )}
      aria-labelledby="home-mission-heading"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)] lg:items-center lg:gap-14 xl:gap-16">
          <div className="min-w-0">
            <SectionHeading
              id="home-mission-heading"
              heading="h2"
              eyebrow={block.eyebrow}
              title={block.title}
              description={block.description}
              className="max-w-3xl"
            />

            <div className="mt-6 flex flex-wrap gap-3">
              {visualHighlights.map((item) => (
                <span
                  key={item}
                  className="inline-flex rounded-full border border-border/60 bg-card/90 px-4 py-2 text-[0.84rem] font-medium text-foreground shadow-[inset_0_1px_0_0_rgba(255,255,255,0.9)]"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:items-stretch lg:gap-6">
              {block.highlightCards.map((item, index) => {
                const emphasized = index === 2;
                return (
                  <article
                    key={item.title}
                    className={cn(
                      "flex flex-col rounded-[20px] border p-5 sm:p-6 lg:p-6",
                      "shadow-[0_12px_40px_rgba(10,18,32,0.07),inset_0_1px_0_0_rgba(255,255,255,0.92)]",
                      emphasized && "sm:col-span-2",
                      emphasized
                        ? "border-primary/80 bg-primary text-primary-foreground shadow-[0_20px_48px_rgba(11,39,68,0.2)]"
                        : "border-border/55 bg-card/95",
                    )}
                  >
                    {/* Fixed label band so “eyebrow” baselines line up across columns */}
                    <div
                      className={cn(
                        "flex min-h-[3.25rem] items-end border-b pb-3",
                        emphasized
                          ? "border-primary-foreground/20"
                          : "border-border/50",
                      )}
                    >
                      <p
                        className={cn(
                          "w-full text-[0.6875rem] font-semibold uppercase leading-snug tracking-[0.2em]",
                          emphasized
                            ? "text-primary-foreground/95"
                            : "text-muted-foreground",
                        )}
                      >
                        {item.title}
                      </p>
                    </div>

                    <div
                      className={cn(
                        "mt-4",
                        emphasized && "grid gap-4 sm:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] sm:items-start",
                      )}
                    >
                      <p
                        className={cn(
                          "text-balance text-[1rem] font-semibold leading-[1.42] tracking-[-0.02em] sm:text-[1.08rem]",
                          emphasized
                            ? "text-primary-foreground sm:text-[1.32rem] sm:leading-[1.3]"
                            : "text-foreground",
                        )}
                      >
                        {item.summary}
                      </p>

                      <p
                        className={cn(
                          "mt-3 text-pretty text-[0.9rem] leading-[1.62] sm:mt-4",
                          emphasized
                            ? "text-primary-foreground/88 sm:mt-0"
                            : "text-muted-foreground",
                        )}
                      >
                        {item.detail}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <div className="relative row-span-2 overflow-hidden rounded-[28px] border border-border/55 bg-muted/30 p-3 shadow-[0_24px_72px_rgba(24,37,23,0.09)]">
              <div className="relative aspect-[4/4.8] overflow-hidden rounded-[24px]">
                <Image
                  src={editorialImages.qualityLab}
                  alt="Healthcare and pharmaceutical quality environment"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 28rem"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,19,12,0.02),rgba(8,19,12,0.22))]" />
              </div>

              <div className="absolute inset-x-7 bottom-7 rounded-[22px] border border-white/60 bg-white/88 p-4 shadow-[0_18px_46px_rgba(17,32,22,0.18)] backdrop-blur-md">
                <div className="flex items-center gap-4">
                  <div className="rounded-[18px] bg-white px-3 py-2 shadow-[0_12px_30px_rgba(17,32,22,0.08)]">
                    {/* eslint-disable-next-line @next/next/no-img-element -- local brand asset */}
                    <img
                      src={site.brand.logoSrc}
                      alt={site.brand.logoAlt}
                      className="h-14 w-auto object-contain"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Mexmed focus
                    </p>
                    <p className="mt-1 text-[1rem] font-semibold leading-snug text-foreground">
                      Trusted healthcare-market support with mission-led product communication
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[24px] border border-border/55 bg-card/92 p-2 shadow-[0_18px_52px_rgba(24,37,23,0.08)]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[20px]">
                <Image
                  src={editorialImages.partnerBriefing}
                  alt="Partner discussion and healthcare communication"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 20rem"
                />
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[24px] border border-border/55 bg-card/92 p-2 shadow-[0_18px_52px_rgba(24,37,23,0.08)]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[20px]">
                <Image
                  src={editorialImages.distributionReview}
                  alt="Product review and distribution coordination"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 20rem"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className={cn(
            sectionContentGap,
            "grid gap-6 lg:grid-cols-2",
          )}
        >
          {block.cards.map((item, index) => {
            const Icon = cardIcons[index];
            return (
              <article
                key={item.title}
                className="rounded-[22px] border border-border/50 bg-card/95 p-6 shadow-[0_18px_56px_rgba(24,37,23,0.08),inset_0_1px_0_0_rgba(255,255,255,0.9)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <Icon />
                  <span className="inline-flex rounded-full border border-primary/15 bg-primary/[0.06] px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-primary/80">
                    Core pillar
                  </span>
                </div>

                <h3 className="mt-5 text-[1.3rem] font-semibold tracking-[-0.025em] text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-[1rem] leading-7 text-muted-foreground">
                  {item.summary}
                </p>

                <ul className="mt-5 space-y-3 border-t border-border/55 pt-5">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-[0.92rem] leading-6 text-foreground/88"
                    >
                      <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-primary/80" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
