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
        "group flex h-full min-h-[200px] flex-col sm:min-h-0",
        "hover:border-primary/30 hover:shadow-[0_2px_8px_rgba(15,23,42,0.06)]",
        className,
      )}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border/60 pb-3">
        <span className="text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-primary">
          {product.category}
        </span>
        {product.dosageForm ? (
          <span className="text-[0.8125rem] font-medium text-muted-foreground">
            {product.dosageForm}
          </span>
        ) : null}
      </div>

      <TitleTag className="mt-4 text-base font-medium leading-snug tracking-tight text-foreground sm:text-[1.0625rem]">
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
          "mt-6 -ml-2 self-start px-2 text-primary hover:bg-primary/[0.06]",
        )}
      >
        View details
      </Link>
    </article>
  );
}
