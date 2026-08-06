"use client";

import { motion, useReducedMotion } from "motion/react";
import { Calendar, GraduationCap, MapPin } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { education, experiences, personalInfo } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export function AboutSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" className="section-shell">
      <div className="container-shell relative z-10">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, ease }}
            className="flex flex-col gap-5"
          >
            <span className="eyebrow">Background</span>
            <h2 className="max-w-3xl text-balance text-5xl font-bold leading-[0.96] text-ink md:text-7xl">
              Engineering foundations built through research and delivery.
            </h2>
          </motion.div>
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, delay: 0.08, ease }}
            className="max-w-2xl text-lg leading-8 text-muted-foreground"
          >
            {personalInfo.availability}. I bring practical experience across backend implementation,
            automated delivery, and research-led engineering work.
          </motion.p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="soft-card rounded-[2.5rem] p-5 md:p-7">
            <div className="flex flex-col gap-4">
              {experiences.map((experience, index) => (
                <motion.article
                  key={experience.id}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.24 }}
                  transition={{ duration: 0.58, delay: index * 0.06, ease }}
                  className="rounded-[2rem] bg-white p-6"
                >
                  <div className="flex flex-col gap-5">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <p className="font-technical text-xs uppercase tracking-[0.14em] text-muted-foreground">{experience.company}</p>
                        <h3 className="mt-2 text-2xl font-bold text-ink">{experience.role}</h3>
                      </div>
                      <Badge variant="secondary" className="rounded-full bg-accent px-3 py-1 text-ink">
                        Experience
                      </Badge>
                    </div>

                    <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
                      <span className="inline-flex items-center gap-2">
                        <Calendar className="size-4" />
                        {experience.period}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <MapPin className="size-4" />
                        {experience.location}
                      </span>
                    </div>

                    <p className="text-base leading-7 text-muted-foreground">{experience.description}</p>

                    <div className="grid gap-2">
                      {experience.highlights.map((highlight) => (
                        <p key={highlight} className="rounded-[1rem] bg-porcelain p-3 text-sm leading-6 text-ink/78">
                          {highlight}
                        </p>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {experience.technologies?.map((tech) => (
                        <Badge key={tech} variant="outline" className="rounded-full bg-ink/[0.02] px-3 py-1">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {education.map((item, index) => (
              <motion.article
                key={item.id}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.24 }}
                transition={{ duration: 0.58, delay: index * 0.08, ease }}
                className="soft-card flex min-h-[18rem] flex-col justify-between rounded-[2.5rem] p-7"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="grid size-12 place-items-center rounded-full bg-ink text-porcelain">
                    <GraduationCap className="size-5" />
                  </div>
                  <Badge variant={item.status === "completed" ? "default" : "outline"} className="rounded-full px-3 py-1">
                    {item.status === "completed" ? "Completed" : "In progress"}
                  </Badge>
                </div>

                <div className="mt-8">
                  <h3 className="text-2xl font-bold leading-tight text-ink">{item.degree}</h3>
                  <p className="mt-2 font-medium text-muted-foreground">{item.field}</p>
                  <div className="mt-5 text-sm leading-6 text-muted-foreground">
                    <p>{item.institution}</p>
                    <p>{item.period}</p>
                  </div>
                </div>

                {item.note && <p className="mt-6 text-sm leading-6 text-ink/72">{item.note}</p>}
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
