"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import type { MotionValue } from "motion/react";
import { ArrowDown, BriefcaseBusiness, Cloud, Code2, Database, Github, Mail, MapPin, Server } from "lucide-react";

import { Button } from "@/components/ui/button";
import { contactInfo, personalInfo } from "@/lib/data";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Focus", href: "#focus" },
  { label: "Work", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const heroFacts = [
  {
    label: "Location",
    value: "Porto, Portugal",
    icon: MapPin,
  },
  {
    label: "Focus",
    value: "Backend · DevOps · Architecture",
    icon: Code2,
  },
  {
    label: "Availability",
    value: "Open to Junior Roles",
    icon: BriefcaseBusiness,
  },
  {
    label: "Timezone",
    value: "GMT+1",
    icon: Server,
  },
];

function HeroSystemVisual({ y, shouldReduceMotion }: { y: MotionValue<number>; shouldReduceMotion: boolean }) {
  const tiles = [
    { label: "services", icon: Code2, className: "left-[29%] top-[33%] size-40 rotate-[-6deg]" },
    { label: "runtime", icon: Server, className: "left-[44%] top-[18%] size-32 rotate-[7deg]" },
    { label: "cloud", icon: Cloud, className: "right-[9%] top-[47%] size-28 rotate-[5deg]" },
    { label: "data", icon: Database, className: "left-[24%] bottom-[16%] size-28 rotate-[4deg]" },
  ];

  return (
    <motion.div
      aria-hidden
      style={{ y }}
      className="relative hidden min-h-[33rem] lg:block"
    >
      <div className="absolute inset-0 rounded-[4rem] bg-[radial-gradient(circle_at_50%_48%,rgba(143,191,218,0.24),transparent_19rem)] blur-2xl" />
      <div className="absolute left-[9%] top-[19%] h-[17rem] w-[29rem] rotate-[-8deg] rounded-[4rem] border border-glacier/24" />
      <div className="absolute left-[18%] top-[32%] h-px w-[27rem] rotate-[-17deg] border-t border-dashed border-glacier/34" />
      <div className="absolute left-[32%] top-[21%] h-[18rem] w-px rotate-[52deg] border-l border-dashed border-glacier/28" />
      <div className="absolute left-[26%] top-[42%] h-40 w-[25rem] rounded-[3rem] border border-glacier/18 bg-white/28 shadow-[0_28px_80px_rgba(143,191,218,0.18)] backdrop-blur-md" />
      <div className="absolute left-[35%] top-[30%] h-44 w-[25rem] rounded-[3rem] border border-white/80 bg-white/52 shadow-[0_35px_95px_rgba(20,20,22,0.08)] backdrop-blur-xl" />
      <div className="absolute left-[45%] top-[43%] h-44 w-[25rem] rounded-[3rem] border border-white/70 bg-white/36 shadow-[0_28px_90px_rgba(20,20,22,0.07)] backdrop-blur-xl" />

      {tiles.map((tile, index) => (
        <motion.div
          key={tile.label}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, delay: 0.18 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
          className={`absolute grid place-items-center rounded-[2rem] border border-white/80 bg-white/62 text-glacier shadow-[0_24px_70px_rgba(20,20,22,0.08)] backdrop-blur-xl ${tile.className}`}
        >
          <tile.icon className="size-10" strokeWidth={1.7} />
        </motion.div>
      ))}

      <div className="absolute left-[30%] top-[22%] grid grid-cols-5 gap-3 opacity-35">
        {Array.from({ length: 20 }).map((_, index) => (
          <span key={index} className="size-1 rounded-full bg-glacier" />
        ))}
      </div>
    </motion.div>
  );
}

export function HeroSection() {
  const [showNav, setShowNav] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion() ?? false;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const visualY = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : -44]);
  const markY = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 62]);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let frameId: number | undefined;

    const updateNavigationVisibility = () => {
      const currentScrollY = window.scrollY;
      const isNearTop = currentScrollY < 32;
      const isScrollingUp = currentScrollY < lastScrollY;

      const nextShowNav = isNearTop || isScrollingUp;
      setShowNav((previous) => (previous === nextShowNav ? previous : nextShowNav));
      lastScrollY = currentScrollY;
    };
    const handleScroll = () => {
      if (frameId === undefined) {
        frameId = window.requestAnimationFrame(() => {
          frameId = undefined;
          updateNavigationVisibility();
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateNavigationVisibility();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frameId !== undefined) window.cancelAnimationFrame(frameId);
    };
  }, []);

  const entranceInitial = shouldReduceMotion ? false : { opacity: 0, y: 28 };
  const entranceAnimate = { opacity: 1, y: 0 };

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden px-4 pb-20 pt-6">
      <motion.header
        aria-hidden={!showNav}
        inert={!showNav || undefined}
        initial={shouldReduceMotion ? false : { opacity: 0, y: -18 }}
        animate={{ opacity: showNav ? 1 : 0, y: showNav ? 0 : -22 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        className="pointer-events-none fixed inset-x-4 top-4 z-50 mx-auto flex max-w-6xl items-center justify-between gap-3"
      >
        <Link
          href="/"
          className="glass-nav pointer-events-auto inline-flex h-12 items-center gap-3 rounded-full px-4 text-sm font-semibold text-ink"
          aria-label="Rafael Gomes home"
        >
          <span className="grid size-8 place-items-center rounded-full bg-ink text-xs font-bold text-porcelain">
            RG
          </span>
          <span className="hidden sm:inline">Rafael Gomes</span>
        </Link>

        <nav className="glass-nav pointer-events-auto hidden h-12 items-center gap-1 rounded-full p-1 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-ink/72 transition-colors hover:bg-white/70 hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="glass-nav pointer-events-auto flex h-12 items-center gap-1 rounded-full p-1">
          <a
            href={contactInfo.github}
            target="_blank"
            rel="noreferrer"
            className="grid size-10 place-items-center rounded-full text-ink/70 transition-colors hover:bg-white/70 hover:text-ink"
            aria-label="Open GitHub profile"
          >
            <Github className="size-4" />
          </a>
          <Button asChild size="sm" className="rounded-full px-4">
            <a href={`mailto:${contactInfo.email}`}>
              <Mail data-icon="inline-start" />
              Let&apos;s talk
            </a>
          </Button>
        </div>
      </motion.header>

      <div aria-hidden className="quiet-grid absolute inset-x-0 top-0 h-[72vh] opacity-70" />
      <motion.div
        aria-hidden
        style={{ y: markY }}
        className="absolute left-1/2 top-[12%] -translate-x-1/2 text-[34vw] font-bold leading-none text-ink/[0.025]"
      >
        RG
      </motion.div>

      <div className="container-shell relative z-10 flex min-h-[calc(100vh-2rem)] items-center pt-24">
        <div className="flex w-full flex-col gap-10">
          <div className="grid w-full items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
            <motion.div
              initial={entranceInitial}
              animate={entranceAnimate}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-8"
            >
              <div className="eyebrow">Backend / DevOps / Architecture</div>

              <div className="flex flex-col gap-7">
                <h1 className="max-w-5xl text-balance text-[clamp(4.5rem,11vw,10.5rem)] font-bold leading-[0.86] tracking-normal text-ink">
                  Systems built with clarity.
                </h1>
                <p className="max-w-2xl text-balance text-xl leading-8 text-muted-foreground md:text-2xl md:leading-9">
                  {personalInfo.description}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Button asChild size="lg" className="h-12 rounded-full px-6">
                  <a href="#projects">
                    <ArrowDown data-icon="inline-start" />
                    View projects
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-12 rounded-full border-ink/10 bg-white/64 px-6 backdrop-blur">
                  <a href="#focus">
                    Technical focus
                    <ArrowDown data-icon="inline-end" />
                  </a>
                </Button>
              </div>
            </motion.div>

          <HeroSystemVisual y={visualY} shouldReduceMotion={shouldReduceMotion} />
          </div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="grid gap-4 border-t border-ink/8 pt-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {heroFacts.map((fact) => (
              <div key={fact.label} className="flex min-w-0 items-start gap-3">
                <span className="mt-1 grid size-9 shrink-0 place-items-center rounded-full border border-ink/8 bg-white/62 text-ink/58 shadow-sm">
                  <fact.icon className="size-4" />
                </span>
                <span className="min-w-0">
                  <span className="font-technical block text-[0.64rem] uppercase tracking-[0.13em] text-muted-foreground">
                    {fact.label}
                  </span>
                  <span className="mt-1 block text-sm font-medium leading-5 text-ink/82">{fact.value}</span>
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
