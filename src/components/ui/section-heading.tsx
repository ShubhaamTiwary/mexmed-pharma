import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  /** Use h2 when the page already has an h1 (e.g. a hero). */
  heading?: "h1" | "h2";
  /** Sets `id` on the title heading for landmarks / `aria-labelledby`. */
  id?: string;
  /** Tighter stack for dense sections. */
  density?: "default" | "comfortable";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  heading = "h1",
  id,
  density = "default",
  className,
}: SectionHeadingProps) {
  const HeadingTag = heading;

  return (
    <header
      className={cn(
        density === "comfortable" ? "space-y-3.5" : "space-y-4 sm:space-y-5",
        align === "center" && "mx-auto max-w-3xl text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-primary sm:text-[0.6875rem]",
            align === "center" && "mx-auto max-w-prose",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <HeadingTag
        id={id}
        className={cn(
          "text-balance font-semibold tracking-[-0.025em] text-foreground",
          align === "center" && "mx-auto max-w-[20ch] sm:max-w-[24ch]",
          heading === "h1"
            ? "text-[1.875rem] leading-[1.12] sm:text-[2.125rem] lg:text-[2.375rem] lg:leading-[1.1]"
            : "max-w-[min(32ch,100%)] text-[1.5rem] leading-snug sm:text-[1.75rem] lg:text-[2rem] lg:leading-[1.12]",
        )}
      >
        {title}
      </HeadingTag>
      {description ? (
        <p
          className={cn(
            "max-w-[42rem] text-[0.9375rem] leading-relaxed text-muted-foreground sm:text-base sm:leading-[1.65]",
            align === "center" && "mx-auto text-balance",
            align === "left" && "text-pretty",
          )}
        >
          {description}
        </p>
      ) : null}
    </header>
  );
}
