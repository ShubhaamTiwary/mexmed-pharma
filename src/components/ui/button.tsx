import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[10px] text-sm font-semibold tracking-[-0.01em] transition-[color,background-color,border-color,box-shadow] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-[0_1px_0_0_rgba(255,255,255,0.08)_inset,0_4px_16px_rgba(10,18,32,0.12)] hover:bg-primary/[0.94] active:bg-primary/[0.9]",
        outline:
          "border border-border/70 bg-card text-foreground shadow-[inset_0_1px_0_0_rgba(255,255,255,0.85)] hover:border-primary/35 hover:bg-muted/45",
        ghost:
          "font-medium text-foreground hover:bg-muted/55",
        link: "font-medium text-primary underline-offset-4 hover:underline",
        /** Primary action on navy / dark bands */
        onInverse:
          "border border-transparent bg-white text-navy shadow-[0_2px_12px_rgba(0,0,0,0.12)] hover:bg-white/[0.97] focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-navy",
        /** Secondary on navy bands */
        outlineOnInverse:
          "border border-white/40 bg-transparent font-medium text-white hover:bg-white/[0.09] focus-visible:ring-white/35 focus-visible:ring-offset-2 focus-visible:ring-offset-navy",
      },
      size: {
        sm: "h-9 px-4 text-xs",
        md: "h-10 px-5 text-[0.8125rem]",
        lg: "h-12 min-w-[168px] px-8 text-[0.9375rem]",
        icon: "size-10 rounded-[10px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

export type ButtonProps = ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof buttonVariants>;

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
