"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

const CLIP_END = "polygon(22% 0, 100% 0, 100% 100%, 0% 100%)";
const CLIP_START = "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)";
/** Full rectangle — used below `md` where diagonal clip is disabled */
const CLIP_FULL = "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)";

const InfoIcon = ({ type }: { type: "website" | "phone" | "address" }) => {
  const icons = {
    website: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5 shrink-0 text-primary"
        aria-hidden
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" x2="22" y1="12" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    phone: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5 shrink-0 text-primary"
        aria-hidden
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    address: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5 shrink-0 text-primary"
        aria-hidden
      >
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  };
  return (
    <div className="mr-2 mt-0.5 flex shrink-0 self-start">{icons[type]}</div>
  );
};

export interface HeroSection2Props {
  className?: string;
  logo?: {
    url?: string;
    alt?: string;
    text?: string;
  };
  slogan?: string;
  title: React.ReactNode;
  subtitle: string;
  callToAction: {
    text: string;
    href: string;
  };
  secondaryCallToAction?: {
    text: string;
    href: string;
  };
  backgroundImage: string;
  contactInfo: {
    website: string;
    websiteHref?: string;
    phone: string;
    phoneHref?: string;
    address: string;
  };
}

const HeroSection2 = React.forwardRef<HTMLDivElement, HeroSection2Props>(
  (
    {
      className,
      logo,
      slogan,
      title,
      subtitle,
      callToAction,
      secondaryCallToAction,
      backgroundImage,
      contactInfo,
    },
    ref,
  ) => {
    const reduceMotion = useReducedMotion();
    const [mounted, setMounted] = React.useState(false);
    const [isMdUp, setIsMdUp] = React.useState(false);

    React.useEffect(() => {
      setMounted(true);
    }, []);

    React.useEffect(() => {
      const mq = window.matchMedia("(min-width: 768px)");
      const apply = () => setIsMdUp(mq.matches);
      apply();
      mq.addEventListener("change", apply);
      return () => mq.removeEventListener("change", apply);
    }, []);

    const playMotion = mounted && !reduceMotion;

    const staggerOuter = React.useMemo(
      () => ({
        hidden: { opacity: 1 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: playMotion ? 0.1 : 0,
            delayChildren: playMotion ? 0.06 : 0,
          },
        },
      }),
      [playMotion],
    );

    const staggerInner = React.useMemo(
      () => ({
        hidden: { opacity: 1 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: playMotion ? 0.07 : 0,
            delayChildren: playMotion ? 0.02 : 0,
          },
        },
      }),
      [playMotion],
    );

    const fadeUp = React.useMemo(
      () => ({
        hidden: {
          opacity: playMotion ? 0 : 1,
          y: playMotion ? 18 : 0,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: playMotion ? 0.48 : 0,
            ease: [0.22, 1, 0.36, 1] as const,
          },
        },
      }),
      [playMotion],
    );

    const imageVariants = React.useMemo(
      () => ({
        hidden: {
          opacity: playMotion ? 0 : 1,
          y: playMotion ? 18 : 0,
          clipPath: playMotion && isMdUp ? CLIP_START : CLIP_FULL,
        },
        visible: {
          opacity: 1,
          y: 0,
          clipPath: isMdUp ? CLIP_END : CLIP_FULL,
          transition: {
            opacity: { duration: playMotion ? 0.48 : 0, ease: [0.22, 1, 0.36, 1] as const },
            y: { duration: playMotion ? 0.48 : 0, ease: [0.22, 1, 0.36, 1] as const },
            clipPath: {
              duration: playMotion && isMdUp ? 1 : 0,
              delay: playMotion && isMdUp ? 0.36 : 0,
              ease: [0, 0.55, 0.45, 1] as const,
            },
          },
        },
      }),
      [playMotion, isMdUp],
    );

    const renderCta = (cta: { text: string; href: string }, prominent: boolean) => {
      const classNameLink = prominent
        ? "text-lg font-bold tracking-[0.2em] text-primary transition-colors hover:text-primary/80"
        : "text-sm font-semibold tracking-wide text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline";

      if (cta.href.startsWith("/")) {
        return (
          <Link href={cta.href} className={classNameLink}>
            {cta.text}
          </Link>
        );
      }
      return (
        <a href={cta.href} className={classNameLink}>
          {cta.text}
        </a>
      );
    };

    const showHeader = Boolean(logo?.text || logo?.url || slogan);

    return (
      <motion.section
        ref={ref}
        key={playMotion ? "motion" : "static"}
        className={cn(
          "relative flex min-h-[min(92svh,880px)] w-full flex-col overflow-hidden border-b border-border bg-background text-foreground md:min-h-[min(100svh,920px)] md:flex-row",
          className,
        )}
        initial={playMotion ? "hidden" : false}
        animate="visible"
        variants={staggerOuter}
        aria-labelledby="hero-heading"
      >
        <motion.div
          className="flex w-full flex-col justify-between px-5 pb-10 pt-6 sm:px-8 sm:pb-12 sm:pt-8 md:w-1/2 md:max-w-none md:pb-12 md:pr-10 md:pt-8 lg:w-3/5 lg:px-12 lg:pb-14 lg:pr-12 lg:pt-10"
          variants={staggerInner}
          initial={playMotion ? "hidden" : false}
          animate="visible"
        >
          <div className="mx-auto w-full max-w-xl md:mx-0">
            {showHeader && (
              <motion.header className="mb-6 sm:mb-7" variants={fadeUp}>
                <div
                  className={cn(
                    logo?.url ? "flex items-start gap-3" : "block",
                  )}
                >
                  {logo?.url ? (
                    // eslint-disable-next-line @next/next/no-img-element -- remote or arbitrary brand assets
                    <img
                      src={logo.url}
                      alt={logo.alt ?? ""}
                      className="h-8 w-auto object-contain"
                    />
                  ) : null}
                  <div className="min-w-0">
                    {logo?.text ? (
                      <p className="text-lg font-bold tracking-tight text-foreground">
                        {logo.text}
                      </p>
                    ) : null}
                    {slogan ? (
                      <p
                        className={cn(
                          "text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-muted-foreground",
                          logo?.text && "mt-1",
                        )}
                      >
                        {slogan}
                      </p>
                    ) : null}
                  </div>
                </div>
              </motion.header>
            )}

            <motion.h1
              id="hero-heading"
              className="text-4xl font-bold leading-[1.12] tracking-tight text-foreground md:text-5xl md:leading-[1.08]"
              variants={fadeUp}
            >
              {title}
            </motion.h1>
            <motion.div
              className="my-6 h-1 w-20 bg-primary"
              variants={fadeUp}
              aria-hidden
            />
            <motion.p
              className="mb-8 max-w-md text-base leading-relaxed text-muted-foreground md:max-w-[28rem]"
              variants={fadeUp}
            >
              {subtitle}
            </motion.p>
            <motion.div
              className="flex flex-col gap-4 md:flex-row md:items-baseline md:gap-10"
              variants={fadeUp}
            >
              {renderCta(callToAction, true)}
              {secondaryCallToAction
                ? renderCta(secondaryCallToAction, false)
                : null}
            </motion.div>
          </div>

          <motion.footer
            className="mt-10 w-full border-t border-border/80 pt-7 sm:mt-12 sm:pt-8 md:mt-14"
            variants={fadeUp}
          >
            <div className="grid grid-cols-1 gap-5 text-xs leading-snug text-muted-foreground md:grid-cols-3 md:gap-x-6 md:gap-y-4 lg:gap-x-10">
              <div className="flex min-w-0 items-start gap-0">
                <InfoIcon type="website" />
                <div className="min-w-0 flex-1 pt-0.5">
                  {contactInfo.websiteHref ? (
                    <a
                      href={contactInfo.websiteHref}
                      className="font-medium text-foreground/90 underline-offset-2 hover:underline"
                    >
                      {contactInfo.website}
                    </a>
                  ) : (
                    <span>{contactInfo.website}</span>
                  )}
                </div>
              </div>
              <div className="flex min-w-0 items-start gap-0">
                <InfoIcon type="phone" />
                <div className="min-w-0 flex-1 pt-0.5">
                  {contactInfo.phoneHref ? (
                    <a
                      href={contactInfo.phoneHref}
                      className="font-medium text-foreground/90 underline-offset-2 hover:underline"
                    >
                      {contactInfo.phone}
                    </a>
                  ) : (
                    <span>{contactInfo.phone}</span>
                  )}
                </div>
              </div>
              <div className="flex min-w-0 items-start gap-0">
                <InfoIcon type="address" />
                <span className="min-w-0 flex-1 pt-0.5 text-pretty leading-snug">
                  {contactInfo.address}
                </span>
              </div>
            </div>
          </motion.footer>
        </motion.div>

        <motion.div
          className={cn(
            "relative min-h-[240px] w-full bg-cover bg-center sm:min-h-[300px] md:min-h-full md:w-1/2 lg:w-2/5",
            "max-md:[clip-path:none]",
          )}
          style={{ backgroundImage: `url(${backgroundImage})` }}
          variants={imageVariants}
          initial={playMotion ? "hidden" : false}
          animate="visible"
        />
      </motion.section>
    );
  },
);

HeroSection2.displayName = "HeroSection2";

export { HeroSection2 };
