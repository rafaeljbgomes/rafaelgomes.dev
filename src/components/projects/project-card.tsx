"use client";

import { ArrowUpRight, CircleHelp, Github, Layers3, Trophy, User } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { Button } from "@/components/ui/button";
import { ProjectMediaDisplay } from "@/components/projects/project-media";
import { getProjectStatusLabel, ProjectStatusPill } from "@/components/projects/project-status-pill";
import type { Project } from "@/lib/types";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export function ProjectCard({
  project,
  index,
  projectCount,
  onOpen,
  registerSlide,
}: {
  project: Project;
  index: number;
  projectCount: number;
  onOpen: (projectId: string, trigger: HTMLButtonElement) => void;
  registerSlide: (element: HTMLElement | null) => void;
}) {
  const shouldReduceMotion = useReducedMotion();
  const media = project.media[0];

  return (
    <motion.article
      ref={registerSlide}
      id={`project-slide-${project.id}`}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.24 }}
      transition={{ duration: 0.68, delay: index * 0.05, ease }}
      className="grid w-full shrink-0 snap-start overflow-hidden rounded-[2.25rem] border border-porcelain/10 bg-white/[0.035] shadow-[0_30px_90px_rgba(0,0,0,0.36)] lg:w-[min(1320px,calc(100vw-3rem))] lg:grid-cols-[1.02fr_0.98fr]"
    >
      <div className="relative min-h-[25rem] overflow-hidden bg-graphite-card-soft lg:min-h-[30rem]">
        {media ? <ProjectMediaDisplay media={media} projectTitle={project.title} mode="preview" /> : <div className="flex size-full items-center justify-center text-sm text-porcelain/40">Project media</div>}
        <div className="absolute inset-0 bg-gradient-to-t from-black/64 via-black/8 to-transparent" />
        <div className="absolute left-5 top-5 rounded-full bg-glacier/90 px-3 py-1 font-technical text-xs font-semibold text-graphite-ink">
          {project.accent} / {String(projectCount).padStart(2, "0")}
        </div>
        <div className="absolute bottom-5 left-5 flex items-center gap-4 font-technical text-xs uppercase tracking-[0.08em] text-porcelain/80">
          <span className="inline-flex items-center gap-2"><span className="size-1.5 rounded-full bg-glacier" />{getProjectStatusLabel(project.status)}</span>
          {project.year && <span>{project.year}</span>}
        </div>
      </div>

      <div className="flex min-h-[25rem] flex-col justify-between gap-8 bg-[linear-gradient(145deg,rgba(17,19,23,0.96),rgba(7,8,10,0.98))] p-6 md:p-8">
        <div className="flex flex-col gap-5">
          <div className="flex flex-wrap items-center gap-3">
            <ProjectStatusPill status={project.status} className="h-8 px-3 text-[0.65rem]" />
            <span className="font-technical text-xs uppercase tracking-[0.14em] text-glacier">{project.focus}</span>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-balance text-3xl font-bold leading-[0.98] text-porcelain md:text-5xl">{project.title}</h3>
            <p className="max-w-xl text-base leading-7 text-porcelain/66 md:text-lg md:leading-8">{project.summary}</p>
          </div>
        </div>

        <div className="grid gap-3">
          <CardDetail icon={CircleHelp} label="Problem" value={project.problem} />
          <CardDetail icon={User} label="Role" value={project.role} />
          <CardDetail icon={Layers3} label="Stack" value={project.stack.slice(0, 5).join(" · ")} />
          <CardDetail icon={Trophy} label="Outcome" value={project.outcome} />
        </div>

        <div className="flex flex-wrap gap-3">
          <Button onClick={(event) => onOpen(project.id, event.currentTarget)} className="h-11 rounded-full bg-porcelain px-5 text-ink hover:bg-porcelain/90">
            View more details
            <ArrowUpRight data-icon="inline-end" />
          </Button>
          {project.githubUrl && (
            <Button asChild variant="outline" className="h-11 rounded-full border-porcelain/15 bg-porcelain/[0.04] px-5 text-porcelain hover:bg-porcelain/10 hover:text-porcelain">
              <a href={project.githubUrl} target="_blank" rel="noreferrer"><Github data-icon="inline-start" />Repository</a>
            </Button>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function CardDetail({ icon: Icon, label, value }: { icon: typeof CircleHelp; label: string; value: string }) {
  return (
    <div className="grid grid-cols-[2.75rem_1fr] gap-4 border-b border-porcelain/10 pb-4 last:border-b-0 last:pb-0">
      <span className="grid size-11 place-items-center rounded-[0.9rem] border border-porcelain/10 bg-glacier/10 text-glacier"><Icon className="size-5" strokeWidth={1.8} /></span>
      <span><span className="font-technical block text-[0.65rem] uppercase tracking-[0.13em] text-porcelain/48">{label}</span><span className="mt-1 block text-sm leading-6 text-porcelain/78">{value}</span></span>
    </div>
  );
}
