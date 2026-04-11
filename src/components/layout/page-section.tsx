import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Container } from "./container";

type PageSectionProps = {
  children: ReactNode;
  className?: string;
};

/** Strong vertical rhythm for marketing sections. */
export function PageSection({ children, className }: PageSectionProps) {
  return (
    <section className={cn("py-20 lg:py-28", className)}>
      <Container>{children}</Container>
    </section>
  );
}
