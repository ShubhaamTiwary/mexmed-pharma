import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { company } from "@/data/company";
import { products } from "@/data/products";
import { editorialImages } from "@/lib/product-visuals";
import { ctaRowFlex, sectionPadding } from "@/lib/section-styles";
import { cn } from "@/lib/utils";

export function AboutPreviewSection() {
  const { aboutPreview } = company;
  const formulationCount = products.length;

  const facts = [
    { label: "Years in healthcare markets", value: "12+" },
    { label: "Operating reach", value: "India + Nepal" },
    { label: "Catalogue entries", value: String(formulationCount) },
  ] as const;

  return (
    <section
      className={cn(
        sectionPadding,
        "border-b border-border/45 bg-background",
      )}
      aria-labelledby="about-preview-heading"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14 xl:gap-16">
          <div className="relative lg:col-span-5 xl:col-span-5">
            <div
              className={cn(
                "relative aspect-[4/5] overflow-hidden rounded-[14px] border border-border/55 bg-muted/50 shadow-[0_20px_60px_rgba(10,18,32,0.08)] sm:aspect-[3/4] lg:sticky lg:top-28 lg:max-h-[min(520px,70vh)]",
              )}
            >
              <Image
                src={editorialImages.aboutFacility}
                alt="Healthcare and pharmaceutical research environment"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div
                className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/[0.06]"
                aria-hidden
              />
            </div>
          </div>

          <div className="flex flex-col gap-8 lg:col-span-7 xl:col-span-7">
            <SectionHeading
              id="about-preview-heading"
              heading="h2"
              eyebrow={aboutPreview.eyebrow}
              title={aboutPreview.title}
              className="max-w-xl"
            />

            <div className="space-y-5 sm:space-y-6">
              <p className="text-pretty text-[1.0625rem] font-medium leading-[1.65] text-foreground sm:text-[1.125rem]">
                {aboutPreview.lead}
              </p>
              <p className="text-pretty text-[0.9375rem] leading-[1.68] text-muted-foreground sm:text-base">
                {aboutPreview.body}
              </p>
            </div>

            <dl className="grid gap-4 sm:grid-cols-3 sm:gap-4">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-[10px] border border-border/55 bg-card px-4 py-4 shadow-[0_8px_32px_rgba(10,18,32,0.05),inset_0_1px_0_0_rgba(255,255,255,0.9)] sm:py-4"
                >
                  <dt className="text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    {fact.label}
                  </dt>
                  <dd className="mt-2 text-xl font-semibold tabular-nums tracking-tight text-foreground">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className={ctaRowFlex}>
              <Link
                href={aboutPreview.cta.href}
                className={cn(
                  buttonVariants({ variant: "default", size: "md" }),
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
