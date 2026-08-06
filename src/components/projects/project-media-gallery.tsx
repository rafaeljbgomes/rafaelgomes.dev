"use client";

import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Maximize2, Play } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { FullscreenMediaDialog } from "@/components/projects/fullscreen-media-dialog";
import { ProjectMediaDisplay } from "@/components/projects/project-media";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/types";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export function ProjectMediaGallery({ project }: { project: Project }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fullscreenOpen, setFullscreenOpen] = useState(false);
  const fullscreenButtonRef = useRef<HTMLButtonElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const media = project.media[activeIndex];
  const hasMultiple = project.media.length > 1;

  if (!media) return null;
  const goTo = (direction: -1 | 1) => setActiveIndex((index) => (index + direction + project.media.length) % project.media.length);

  return (
    <>
      <div className="graphite-card relative flex min-h-[35rem] overflow-hidden rounded-[2rem] p-3">
        <div className="relative min-h-[32rem] w-full overflow-hidden rounded-[1.55rem] bg-black">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={`${project.id}-${activeIndex}`} initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 44 }} animate={{ opacity: 1, x: 0 }} exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -44 }} transition={{ duration: 0.36, ease }} className="absolute inset-0">
              <ProjectMediaDisplay media={media} projectTitle={project.title} mode="gallery" />
            </motion.div>
          </AnimatePresence>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/72 via-black/10 to-black/10" />
          {media.type === "video" && <div className="pointer-events-none absolute left-1/2 top-1/2 grid size-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/26 bg-white/12 text-white shadow-[0_20px_80px_rgba(255,255,255,0.12)] backdrop-blur-xl"><Play className="ml-1 size-9 fill-current" /></div>}
          <div className="absolute left-5 top-5 rounded-full border border-porcelain/14 bg-black/24 px-4 py-2 font-technical text-xs text-porcelain/86 backdrop-blur-md">{String(activeIndex + 1).padStart(2, "0")} / {String(project.media.length).padStart(2, "0")}</div>
          <button ref={fullscreenButtonRef} type="button" onClick={() => setFullscreenOpen(true)} className="glass-control absolute bottom-6 right-6 grid size-12 place-items-center rounded-[1rem] text-porcelain transition-colors hover:bg-porcelain/14" aria-label="Open current media fullscreen"><Maximize2 className="size-5" /></button>
          {hasMultiple && <><button type="button" onClick={() => goTo(-1)} className="glass-control absolute left-5 top-1/2 grid size-14 -translate-y-1/2 place-items-center rounded-full text-porcelain transition-colors hover:bg-porcelain/14" aria-label="Previous project media"><ArrowLeft className="size-6" /></button><button type="button" onClick={() => goTo(1)} className="glass-control absolute right-5 top-1/2 grid size-14 -translate-y-1/2 place-items-center rounded-full text-porcelain transition-colors hover:bg-porcelain/14" aria-label="Next project media"><ArrowRight className="size-6" /></button></>}
          <div className="absolute bottom-7 left-1/2 flex w-[min(24rem,calc(100%-8rem))] -translate-x-1/2 gap-3" role="group" aria-label="Select project media">
            {project.media.map((item, index) => <button key={`${item.src}-${index}`} type="button" onClick={() => setActiveIndex(index)} className={cn("h-1.5 flex-1 rounded-full transition-colors", index === activeIndex ? "bg-glacier" : "bg-porcelain/22 hover:bg-porcelain/46")} aria-label={`Show media ${index + 1}`} aria-pressed={index === activeIndex} />)}
          </div>
        </div>
      </div>
      <FullscreenMediaDialog media={media} projectTitle={project.title} open={fullscreenOpen} onOpenChange={setFullscreenOpen} returnFocusRef={fullscreenButtonRef} />
    </>
  );
}
