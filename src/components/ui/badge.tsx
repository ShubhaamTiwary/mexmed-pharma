import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

export const badgeVariants = cva(
  "inline-flex items-center rounded-[8px] border px-2.5 py-1.5 text-[0.625rem] font-semibold uppercase tracking-[0.18em] transition-colors",
  {
    variants: {
      variant: {
        default:
          "border-border/70 bg-card text-primary shadow-[inset_0_1px_0_0_rgba(255,255,255,0.9)]",
        secondary:
          "border-transparent bg-muted text-muted-foreground",
        outline: "border-border/80 text-foreground",
        /** On navy hero — minimal chrome */
        onInverse:
          "border-white/25 bg-white/[0.08] text-white/95",
        /** Deep premium hero — hairline pill */
        heroInk:
          "border-white/20 bg-white/[0.05] text-white/[0.92] backdrop-blur-[2px]",
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
