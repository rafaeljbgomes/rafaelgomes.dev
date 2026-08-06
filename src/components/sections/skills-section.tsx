"use client";

import { motion, useReducedMotion } from "motion/react";
import { Boxes, GitBranch, Server } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { focusAreas, skills } from "@/lib/data";

const focusIcons = [Server, GitBranch, Boxes];

const stackGroups = [
  { label: "Languages", categories: ["languages"] },
  { label: "Backend", categories: ["backend"] },
  { label: "DevOps", categories: ["devops"] },
  { label: "Architecture", categories: ["architecture"] },
  { label: "Quality", categories: ["quality", "security"] },
];

export function SkillsSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="focus" className="section-shell">
      <div className="container-shell relative z-10">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-5"
          >
            <span className="eyebrow">Technical focus</span>
            <h2 className="max-w-3xl text-balance text-5xl font-bold leading-[0.96] text-ink md:text-7xl">
              Backend and delivery, with evidence.
            </h2>
          </motion.div>
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl text-lg leading-8 text-muted-foreground"
          >
            I build backend foundations and dependable delivery workflows, then make architectural choices
            that keep services maintainable as they evolve.
          </motion.p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {focusAreas.map((area, index) => {
            const Icon = focusIcons[index] ?? Server;

            return (
              <motion.article
                key={area.title}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{ duration: 0.65, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="soft-card flex min-h-[34rem] flex-col justify-between rounded-[2.5rem] p-7 md:p-8"
              >
                <div className="flex flex-col gap-8">
                  <div className="flex items-start justify-between gap-6">
                    <div className="grid size-14 place-items-center rounded-full bg-ink text-porcelain">
                      <Icon className="size-6" />
                    </div>
                    <span className="font-technical text-xs text-muted-foreground">0{index + 1}</span>
                  </div>

                  <div className="flex flex-col gap-4">
                    <p className="font-technical text-xs uppercase tracking-[0.14em] text-muted-foreground">{area.eyebrow}</p>
                    <h3 className="text-3xl font-bold leading-tight text-ink md:text-4xl">{area.title}</h3>
                    <p className="text-base leading-7 text-muted-foreground">{area.description}</p>
                  </div>

                  <div className="flex flex-col gap-3">
                    {area.proof.map((item) => (
                      <div key={item} className="rounded-[1.25rem] bg-porcelain p-4 text-sm leading-6 text-ink/82">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {area.tools.map((tool) => (
                    <Badge key={tool} variant="secondary" className="rounded-full bg-ink/[0.04] px-3 py-1 text-ink">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.24 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 rounded-[2rem] bg-white/72 p-5 shadow-[0_20px_60px_rgba(20,20,22,0.05)] ring-1 ring-ink/[0.05]"
        >
          <div className="grid gap-4 md:grid-cols-5">
            {stackGroups.map((group) => {
              const values = skills
                .filter((skill) => group.categories.includes(skill.category))
                .slice(0, 6);

              return (
                <div key={group.label} className="rounded-[1.5rem] bg-porcelain p-4">
                  <p className="font-technical text-xs uppercase tracking-[0.12em] text-muted-foreground">{group.label}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {values.map((skill) => (
                      <span key={skill.name} className="rounded-full bg-white px-3 py-1 text-xs font-medium text-ink/78">
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
