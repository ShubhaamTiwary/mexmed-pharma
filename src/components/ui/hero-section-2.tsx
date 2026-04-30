"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import {
  trackHeroContact,
  trackHeroTrustPoint,
} from "@/lib/analytics-events";
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
  trustPoints?: readonly string[];
  metrics?: readonly {
    label: string;
    value: string;
  }[];
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
      trustPoints = [],
      metrics = [],
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
    const [activeTrustIndex, setActiveTrustIndex] = React.useState(0);

    React.useEffect(() => {
      if (trustPoints.length <= 1) return;
      const timer = window.setInterval(() => {
        setActiveTrustIndex((index) => (index + 1) % trustPoints.length);
      }, 3800);
      return () => window.clearInterval(timer);
    }, [trustPoints]);

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
            opacity: {
              duration: playMotion ? 0.48 : 0,
              ease: [0.22, 1, 0.36, 1] as const,
            },
            y: {
              duration: playMotion ? 0.48 : 0,
              ease: [0.22, 1, 0.36, 1] as const,
            },
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

    const showHeader = Boolean(logo?.text || logo?.url || slogan);

    return (
      <motion.section
        ref={ref}
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
          <div className="mx-auto w-full max-w-xl md:mx-0 md:max-w-[46rem]">
            {showHeader && (
              <motion.header className="mb-6 sm:mb-7" variants={fadeUp}>
                <div
                  className={cn(logo?.url ? "flex items-start gap-3" : "block")}
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
                          "text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground sm:text-[0.78rem]",
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
              className="mb-8 max-w-md text-[1.05rem] leading-[1.8] text-muted-foreground md:max-w-[29rem] md:text-[1.125rem]"
              variants={fadeUp}
            >
              {subtitle}
            </motion.p>

            {(trustPoints.length > 0 || metrics.length > 0) && (
              <motion.div
                className="mt-8 rounded-[18px] border border-border/60 bg-card/88 p-4 shadow-[0_14px_40px_rgba(10,18,32,0.06),inset_0_1px_0_0_rgba(255,255,255,0.9)] backdrop-blur-sm sm:mt-10 sm:p-5"
                variants={fadeUp}
              >
                {trustPoints.length > 0 ? (
                  <div>
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:text-[0.78rem]">
                      Why partners notice Mexmed
                    </p>
                    <p className="mt-3 text-[0.95rem] leading-[1.72] text-foreground sm:text-base">
                      {trustPoints[activeTrustIndex]}
                    </p>
                    {trustPoints.length > 1 ? (
                      <div className="mt-4 flex items-center gap-2">
                        {trustPoints.map((point, index) => (
                          <button
                            key={point}
                            type="button"
                            aria-label={`Show trust point ${index + 1}`}
                            aria-pressed={activeTrustIndex === index}
                            onClick={() => {
                              setActiveTrustIndex(index);
                              trackHeroTrustPoint({
                                index,
                                total: trustPoints.length,
                              });
                            }}
                            className={cn(
                              "h-2.5 rounded-full transition-all duration-200",
                              activeTrustIndex === index
                                ? "w-7 bg-primary"
                                : "w-2.5 bg-border hover:bg-muted-foreground/40",
                            )}
                          />
                        ))}
                      </div>
                    ) : null}
                  </div>
                ) : null}

                {metrics.length > 0 ? (
                  <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 [&>*:last-child]:col-span-2 sm:[&>*:last-child]:col-span-1">
                    {metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="flex min-h-[6.5rem] flex-col justify-between rounded-[14px] border border-border/55 bg-background/88 px-3 py-3 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.88)] sm:min-h-[6.25rem]"
                      >
                        <p className="text-balance text-[1.05rem] font-semibold leading-tight tracking-tight text-foreground sm:text-[1.3rem]">
                          {metric.value}
                        </p>
                        <p className="mt-2 text-[0.68rem] font-medium uppercase leading-snug tracking-[0.11em] text-muted-foreground sm:text-[0.75rem] sm:tracking-[0.12em]">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : null}
              </motion.div>
            )}
          </div>

          <motion.footer
            className="mt-10 w-full border-t border-border/80 pt-7 sm:mt-12 sm:pt-8 md:mt-14"
            variants={fadeUp}
          >
            <div className="grid grid-cols-1 gap-5 text-[0.95rem] leading-[1.6] text-muted-foreground md:grid-cols-3 md:gap-x-6 md:gap-y-4 lg:gap-x-10">
              <div className="flex min-w-0 items-start gap-0">
                <InfoIcon type="website" />
                <div className="min-w-0 flex-1 pt-0.5">
                  {contactInfo.websiteHref ? (
                    <a
                      href={contactInfo.websiteHref}
                      className="font-medium text-foreground/90 underline-offset-2 hover:underline"
                      onClick={() => trackHeroContact("website")}
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
                      onClick={() => trackHeroContact("phone")}
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
            "relative mx-5 mb-5 min-h-[320px] w-auto overflow-hidden rounded-[26px] border border-white/45 shadow-[0_20px_60px_rgba(10,18,32,0.12)] sm:mx-8 sm:min-h-[360px] md:mx-0 md:mb-0 md:min-h-full md:w-1/2 md:rounded-none md:border-0 md:shadow-none lg:w-2/5",
            "max-md:[clip-path:none]",
          )}
          variants={imageVariants}
          initial={playMotion ? "hidden" : false}
          animate="visible"
        >
          <Image
            src={backgroundImage}
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,12,24,0.08),rgba(4,12,24,0.34))]" />
          <div className="absolute inset-x-4 bottom-4 rounded-[18px] border border-white/30 bg-white/10 p-4 text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.18)] backdrop-blur-md sm:inset-x-5 sm:bottom-5 md:hidden">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white/80">
              Mexmed focus
            </p>
            <p className="mt-2 text-[0.95rem] leading-[1.65] text-white">
              {trustPoints[activeTrustIndex] ??
                "Quality-led formulations with responsive partner support."}
            </p>
          </div>
        </motion.div>
      </motion.section>
    );
  },
);

HeroSection2.displayName = "HeroSection2";

export { HeroSection2 };
