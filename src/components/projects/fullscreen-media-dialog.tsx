"use client";

import type { RefObject } from "react";
import { X } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { Dialog, DialogClose, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ProjectMediaDisplay } from "@/components/projects/project-media";
import type { ProjectMedia } from "@/lib/types";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export function FullscreenMediaDialog({ media, projectTitle, open, onOpenChange, returnFocusRef }: { media: ProjectMedia; projectTitle: string; open: boolean; onOpenChange: (open: boolean) => void; returnFocusRef: RefObject<HTMLButtonElement | null> }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent showCloseButton={false} overlayClassName="z-[70] bg-black/88 backdrop-blur-md" className="z-[80] max-h-[calc(100vh-2rem)] w-[min(1180px,calc(100vw-2rem))] overflow-hidden rounded-[2rem] border-0 bg-black p-0 text-porcelain sm:max-w-[min(1180px,calc(100vw-2rem))]" onCloseAutoFocus={(event) => { event.preventDefault(); returnFocusRef.current?.focus(); }}>
        <DialogTitle className="sr-only">Fullscreen media for {projectTitle}</DialogTitle>
        <motion.div initial={shouldReduceMotion ? false : { scale: 0.96, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.25, ease }} className="relative aspect-video w-full">
          <ProjectMediaDisplay media={media} projectTitle={projectTitle} mode="fullscreen" />
          <DialogClose asChild><button type="button" className="glass-control absolute right-5 top-5 grid size-11 place-items-center rounded-full text-porcelain transition-colors hover:bg-porcelain/12" aria-label="Close fullscreen media"><X className="size-4" /></button></DialogClose>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
