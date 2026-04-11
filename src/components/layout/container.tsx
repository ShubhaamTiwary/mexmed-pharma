import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

/** Max content width ~1240px — within 1200–1280px marketing band. */
export function Container({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10",
        className,
      )}
      {...props}
    />
  );
}
