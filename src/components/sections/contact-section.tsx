"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const links = [
  {
    label: "Email",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "Rafael Gomes",
    href: contactInfo.linkedin,
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "rafaeljbgomes",
    href: contactInfo.github,
    icon: Github,
  },
];

export function ContactSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="contact" className="section-shell pb-12">
      <div className="container-shell relative z-10">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease }}
          className="soft-card overflow-hidden rounded-[2.75rem] p-6 md:p-10"
        >
          <div className="grid min-w-0 gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div className="flex min-w-0 flex-col gap-7">
              <span className="eyebrow">Contact</span>
              <h2 className="max-w-3xl text-balance text-4xl font-bold leading-[0.96] text-ink sm:text-5xl md:text-7xl">
                Let&apos;s build reliable software.
              </h2>
              <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                I am seeking junior Backend Engineering, DevOps, Platform Engineering, and secure-software
                opportunities. If you need someone who values dependable services and disciplined delivery,
                I&apos;d be glad to connect.
              </p>

              <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="size-4 text-ink/55" />
                  {contactInfo.location}
                </span>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="h-12 w-full rounded-full px-6 sm:w-auto">
                  <a href={`mailto:${contactInfo.email}`}>
                    <Mail data-icon="inline-start" />
                    Email Rafael
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-12 w-full rounded-full border-ink/10 bg-white/64 px-6 sm:w-auto">
                  <a href="#projects">Explore projects</a>
                </Button>
              </div>
            </div>

            <div className="flex min-w-0 flex-col gap-2">
              {links.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.label === "Email" ? undefined : "_blank"}
                  rel={link.label === "Email" ? undefined : "noreferrer"}
                  initial={shouldReduceMotion ? false : { opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.52, delay: index * 0.06, ease }}
                  className="group flex items-center justify-between gap-4 rounded-[1.75rem] p-5 transition-colors hover:bg-ink/[0.055]"
                >
                  <div className="flex min-w-0 items-center gap-4">
                    <span className="grid size-12 shrink-0 place-items-center rounded-full bg-ink text-porcelain shadow-sm">
                      <link.icon className="size-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="font-technical block text-xs uppercase tracking-[0.12em] text-muted-foreground">{link.label}</span>
                      <span className="mt-1 block truncate text-lg font-semibold text-ink">{link.value}</span>
                    </span>
                  </div>
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-ink/[0.04] text-ink transition-colors group-hover:bg-ink group-hover:text-porcelain">
                    <ArrowUpRight className="size-4" />
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
