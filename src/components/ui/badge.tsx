import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

export const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.08em] transition-colors",
  {
    variants: {
      variant: {
        default:
          "border-primary/15 bg-primary/[0.08] text-primary dark:bg-primary/15",
        secondary:
          "border-border bg-muted text-muted-foreground",
        outline: "border-border text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export type BadgeProps = ComponentPropsWithoutRef<"span"> &
  VariantProps<typeof badgeVariants>;

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}
