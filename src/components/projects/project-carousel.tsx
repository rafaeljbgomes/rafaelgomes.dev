"use client";

import dynamic from "next/dynamic";
import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useReducedMotion } from "motion/react";

import { ProjectCard } from "@/components/projects/project-card";
import { useProjectCarousel } from "@/components/projects/use-project-carousel";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/types";

const ProjectDetailDialog = dynamic(() => import("@/components/projects/project-detail-dialog").then((module) => module.ProjectDetailDialog), { ssr: false });

export function ProjectCarousel({ projects }: { projects: Project[] }) {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
  const dialogTriggerRef = useRef<HTMLButtonElement | null>(null);
  const shouldReduceMotion = useReducedMotion() ?? false;
  const { activeIndex, railRef, registerSlide, scrollToIndex } = useProjectCarousel(projects.length, shouldReduceMotion);
  const activeProject = projects.find((project) => project.id === activeProjectId) ?? null;

  const closeProjectDetails = () => {
    setActiveProjectId(null);
    window.requestAnimationFrame(() => dialogTriggerRef.current?.focus());
  };

  return (
    <>
      <div ref={railRef} role="region" aria-roledescription="carousel" aria-labelledby="projects-heading" className="-mx-1 flex snap-x snap-mandatory gap-6 overflow-x-auto px-1 pb-8 [scrollbar-width:none] md:gap-7 md:pb-10 [&::-webkit-scrollbar]:hidden">
        {projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} projectCount={projects.length} registerSlide={registerSlide(index)} onOpen={(projectId, trigger) => { dialogTriggerRef.current = trigger; setActiveProjectId(projectId); }} />)}
      </div>
      <div className="flex items-center justify-center gap-4" aria-label="Project carousel controls">
        <button type="button" onClick={() => scrollToIndex(activeIndex - 1)} className="glass-control grid size-11 place-items-center rounded-full text-porcelain transition-colors hover:bg-porcelain/12" aria-label="Previous project"><ArrowLeft className="size-5" /></button>
        <div className="flex items-center gap-2" role="group" aria-label="Select a project">
          {projects.map((project, index) => <button key={project.id} type="button" onClick={() => scrollToIndex(index)} className={cn("size-2 rounded-full transition-all", index === activeIndex ? "w-8 bg-glacier" : "bg-porcelain/24 hover:bg-porcelain/46")} aria-label={`Show project ${index + 1}: ${project.title}`} aria-controls={`project-slide-${project.id}`} aria-pressed={index === activeIndex} />)}
        </div>
        <button type="button" onClick={() => scrollToIndex(activeIndex + 1)} className="glass-control grid size-11 place-items-center rounded-full text-porcelain transition-colors hover:bg-porcelain/12" aria-label="Next project"><ArrowRight className="size-5" /></button>
      </div>
      {activeProject && <ProjectDetailDialog project={activeProject} projectIndex={projects.findIndex((project) => project.id === activeProject.id)} projectCount={projects.length} open onOpenChange={(open) => { if (!open) closeProjectDetails(); }} />}
    </>
  );
}
