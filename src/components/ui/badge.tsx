import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

export const badgeVariants = cva(
  "inline-flex items-center rounded-sm border px-2.5 py-1 text-[0.625rem] font-medium uppercase tracking-[0.14em] transition-colors",
  {
    variants: {
      variant: {
        default:
          "border-border/90 bg-card text-primary",
        secondary:
          "border-transparent bg-muted text-muted-foreground",
        outline: "border-border text-foreground",
        /** On navy hero — minimal chrome */
        onInverse:
          "border-white/25 bg-white/[0.08] text-white/95",
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
