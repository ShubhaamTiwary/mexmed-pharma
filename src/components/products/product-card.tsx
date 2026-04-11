import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import type { Product } from "@/types/product";
import { cardPadding } from "@/lib/section-styles";
import { surfaceCard } from "@/lib/surface";
import { cn } from "@/lib/utils";

type ProductCardProps = {
  product: Product;
  className?: string;
  titleAs?: "h2" | "h3";
};

export function ProductCard({
  product,
  className,
  titleAs = "h2",
}: ProductCardProps) {
  const TitleTag = titleAs;

  return (
    <article
      className={cn(
        surfaceCard,
        cardPadding,
        "group relative flex h-full min-h-[200px] flex-col overflow-hidden sm:min-h-0",
        "before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-primary/25 before:via-border/80 before:to-transparent",
        "hover:border-primary/22 hover:shadow-[0_4px_20px_rgba(15,23,42,0.055)]",
        className,
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-2 gap-y-2 border-b border-border/50 pb-3.5">
        <span className="text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-primary/95">
          {product.category}
        </span>
        {product.dosageForm ? (
          <span className="rounded-sm border border-border/70 bg-muted/50 px-2 py-0.5 text-[0.6875rem] font-medium tabular-nums text-muted-foreground">
            {product.dosageForm}
          </span>
        ) : null}
      </div>

      <TitleTag className="mt-4 text-base font-medium leading-snug tracking-[-0.015em] text-foreground sm:text-[1.0625rem]">
        <Link
          href={product.href}
          className="text-foreground transition-colors duration-200 group-hover:text-primary"
        >
          {product.name}
        </Link>
      </TitleTag>

      <p className="mt-3 flex-1 text-[0.8125rem] leading-[1.62] text-muted-foreground line-clamp-4 sm:text-sm sm:leading-relaxed">
        {product.summary}
      </p>

      <Link
        href={product.href}
        className={cn(
          buttonVariants({ variant: "ghost", size: "sm" }),
          "mt-6 -ml-2 self-start px-2 text-[0.8125rem] font-medium text-primary hover:bg-primary/[0.05]",
        )}
      >
        View details
      </Link>
    </article>
  );
}
