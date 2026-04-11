import Link from "next/link";

import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import type { Product } from "@/types/product";
import {
  cardPaddingLg,
  ctaRowCentered,
  sectionPaddingMid,
} from "@/lib/section-styles";
import { surfaceCard } from "@/lib/surface";
import { cn } from "@/lib/utils";

type ProductEnquiryCtaProps = {
  product: Product;
  className?: string;
};

export function ProductEnquiryCta({ product, className }: ProductEnquiryCtaProps) {
  const contactHref = `/contact?product=${encodeURIComponent(product.id)}`;

  return (
    <aside
      className={cn(
        sectionPaddingMid,
        "border-t border-border/50 bg-muted/50",
        className,
      )}
      aria-labelledby="product-enquiry-heading"
    >
      <Container>
        <div className={cn(surfaceCard, cardPaddingLg, "sm:p-10 lg:p-11")}>
          <div className="mx-auto max-w-2xl text-center">
            <h2
              id="product-enquiry-heading"
              className="text-balance text-xl font-medium tracking-tight text-foreground sm:text-2xl"
            >
              Request information
            </h2>
            <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
              Ask about availability, packs, or distribution for{" "}
              <span className="font-medium text-foreground">{product.name}</span>
              . We reply using the phone number and email listed on our contact
              page.
            </p>
            <div className={ctaRowCentered}>
              <Link
                href={contactHref}
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "w-full min-w-[180px] sm:w-auto",
                )}
              >
                Send enquiry
              </Link>
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "w-full sm:w-auto",
                )}
              >
                General contact
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </aside>
  );
}
