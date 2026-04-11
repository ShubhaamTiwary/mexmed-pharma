import type { ReactNode } from "react";

import { sectionPadding } from "@/lib/section-styles";
import { cn } from "@/lib/utils";

import { Container } from "./container";

type PageSectionProps = {
  children: ReactNode;
  className?: string;
};

/** Vertical rhythm aligned with homepage sections. */
export function PageSection({ children, className }: PageSectionProps) {
  return (
    <section className={cn(sectionPadding, className)}>
      <Container>{children}</Container>
    </section>
  );
}
