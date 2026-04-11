import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-[0_1px_0_0_rgba(255,255,255,0.06)_inset] hover:bg-primary/92",
        outline:
          "border border-border bg-card text-foreground hover:border-primary/40 hover:bg-muted/40",
        ghost: "text-foreground hover:bg-muted/50",
        link: "text-primary underline-offset-4 hover:underline",
        /** Primary action on navy / dark bands */
        onInverse:
          "border border-transparent bg-white text-navy shadow-none hover:bg-white/95 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-navy",
        /** Secondary on navy bands */
        outlineOnInverse:
          "border border-white/45 bg-transparent text-white hover:bg-white/[0.08] focus-visible:ring-white/35 focus-visible:ring-offset-2 focus-visible:ring-offset-navy",
      },
      size: {
        sm: "h-9 px-3.5 text-xs",
        md: "h-10 px-5",
        lg: "h-12 min-w-[168px] px-7 text-[0.9375rem]",
        icon: "size-10",
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
