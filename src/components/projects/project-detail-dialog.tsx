"use client";

import { ArrowUpRight, Github, X } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { ProjectDetails } from "@/components/projects/project-details";
import { ProjectMediaGallery } from "@/components/projects/project-media-gallery";
import { ProjectStatusPill } from "@/components/projects/project-status-pill";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import type { Project } from "@/lib/types";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export function ProjectDetailDialog({ project, projectIndex, projectCount, open, onOpenChange }: { project: Project; projectIndex: number; projectCount: number; open: boolean; onOpenChange: (open: boolean) => void }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent showCloseButton={false} overlayClassName="bg-black/70 backdrop-blur-xl" className="max-h-[calc(100vh-1.25rem)] w-[min(1520px,calc(100vw-1.25rem))] overflow-y-auto rounded-[2.5rem] border border-porcelain/10 bg-graphite-ink p-5 text-porcelain shadow-[0_44px_140px_rgba(0,0,0,0.62)] sm:max-w-[min(1520px,calc(100vw-1.25rem))] md:p-8">
        <motion.div key={project.id} initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.97, y: 18 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.36, ease }} className="flex flex-col gap-7">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="max-w-5xl">
              <p className="font-technical text-sm uppercase tracking-[0.14em] text-porcelain/56">Project <span className="text-glacier">{String(projectIndex + 1).padStart(2, "0")}</span> / {String(projectCount).padStart(2, "0")}</p>
              <DialogTitle className="mt-5 text-balance text-4xl font-bold leading-[0.98] text-porcelain md:text-6xl">{project.title}</DialogTitle>
              <DialogDescription className="mt-4 max-w-4xl text-lg leading-8 text-porcelain/62">{project.summary}</DialogDescription>
            </div>
            <div className="flex shrink-0 flex-wrap items-center gap-3">
              <ProjectStatusPill status={project.status} />
              {project.githubUrl && <Button asChild variant="outline" className="glass-control h-12 rounded-full border-porcelain/12 px-5 text-porcelain hover:bg-porcelain/12 hover:text-porcelain"><a href={project.githubUrl} target="_blank" rel="noreferrer"><Github data-icon="inline-start" />View on GitHub<ArrowUpRight data-icon="inline-end" /></a></Button>}
              <DialogClose asChild><button type="button" className="glass-control grid size-12 place-items-center rounded-full text-porcelain transition-colors hover:bg-porcelain/12" aria-label="Close project details"><X className="size-5" /></button></DialogClose>
            </div>
          </div>
          <div className="grid gap-6 xl:grid-cols-[1.12fr_0.78fr]">
            <ProjectMediaGallery project={project} />
            <ProjectDetails project={project} />
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
