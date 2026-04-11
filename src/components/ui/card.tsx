import type { ComponentPropsWithoutRef } from "react";

import { surfaceCard } from "@/lib/surface";
import { cn } from "@/lib/utils";

function Card({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn(
        surfaceCard,
        "text-card-foreground",
        className,
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 p-7 pb-0 sm:p-8 sm:pb-0",
        className,
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: ComponentPropsWithoutRef<"h3">) {
  return (
    <h3
      className={cn(
        "text-lg font-semibold leading-snug tracking-[-0.02em]",
        className,
      )}
      {...props}
    />
  );
}

function CardDescription({
  className,
  ...props
}: ComponentPropsWithoutRef<"p">) {
  return (
    <p
      className={cn(
        "text-sm leading-relaxed text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("p-7 pt-5 sm:p-8 sm:pt-6", className)} {...props} />
  );
}

function CardFooter({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn(
        "flex items-center border-t border-border/50 p-7 pt-5 sm:p-8 sm:pt-6",
        className,
      )}
      {...props}
    />
  );
}

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle };
