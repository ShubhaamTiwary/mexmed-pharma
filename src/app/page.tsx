import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

export default function HomePage() {
  return (
    <>
      <section
        className="border-b border-border/80 bg-gradient-to-b from-card to-background py-24 lg:py-32"
        aria-labelledby="hero-heading"
      >
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mx-auto">Pharmaceutical excellence</Badge>
            <h1
              id="hero-heading"
              className="mt-6 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]"
            >
              Mexmed Pharma
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Building a trusted, modern presence for healthcare partners and
              patients. Explore our company, capabilities, and commitment to
              quality.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/contact"
                className={cn(buttonVariants({ variant: "default", size: "lg" }))}
              >
                Contact us
              </Link>
              <Link
                href="/about"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
              >
                About us
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section
        className="py-20 lg:py-28"
        aria-labelledby="overview-heading"
      >
        <Container>
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              id="overview-heading"
              heading="h2"
              eyebrow="Overview"
              title="Focused on quality and compliance"
              description="This section will highlight key value propositions, therapeutic areas, and differentiators as content is finalized."
              align="center"
            />
          </div>
          <div className="mx-auto mt-14 max-w-3xl">
            <Card>
              <CardHeader>
                <CardTitle>What we stand for</CardTitle>
                <CardDescription>
                  Placeholder for pillars — quality systems, patient safety, and
                  transparent partnerships.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Replace this card with real content blocks or a grid of
                  services as the site grows. The card uses subtle border and
                  shadow for a calm, clinical feel.
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>
    </>
  );
}
