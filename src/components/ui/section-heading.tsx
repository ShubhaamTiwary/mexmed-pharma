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
  /** Tighter stack for dense sections; default matches marketing sections. */
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
        density === "comfortable" ? "space-y-4" : "space-y-5",
        align === "center" && "mx-auto max-w-3xl text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.14em] text-primary",
            align === "center" && "mx-auto max-w-prose",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <HeadingTag
        id={id}
        className={cn(
          "text-balance font-semibold tracking-tight text-foreground",
          heading === "h1"
            ? "text-3xl sm:text-4xl lg:text-[2.5rem] lg:leading-tight"
            : "text-2xl sm:text-3xl lg:text-4xl",
        )}
      >
        {title}
      </HeadingTag>
      {description ? (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-[1.0625rem] sm:leading-relaxed",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </header>
  );
}
