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
        "group flex h-full min-h-[220px] flex-col transition-colors duration-200 hover:border-primary/25 sm:min-h-0 dark:hover:border-primary/30 dark:hover:bg-card",
        className,
      )}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border/50 pb-3.5">
        <span className="text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-primary">
          {product.category}
        </span>
        {product.dosageForm ? (
          <span className="text-xs font-medium text-muted-foreground">
            {product.dosageForm}
          </span>
        ) : null}
      </div>

      <TitleTag className="mt-4 text-base font-semibold leading-snug tracking-tight text-foreground sm:text-lg">
        <Link
          href={product.href}
          className="text-foreground transition-colors duration-200 group-hover:text-primary"
        >
          {product.name}
        </Link>
      </TitleTag>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-4">
        {product.summary}
      </p>

      <Link
        href={product.href}
        className={cn(
          buttonVariants({ variant: "ghost", size: "sm" }),
          "mt-6 -ml-2 self-start px-2 text-primary hover:bg-primary/8 hover:text-primary dark:hover:bg-primary/10",
        )}
      >
        View details
      </Link>
    </article>
  );
}
