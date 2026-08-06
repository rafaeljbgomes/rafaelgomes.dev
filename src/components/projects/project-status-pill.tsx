import { cn } from "@/lib/utils";
import type { Project } from "@/lib/types";

const statusLabels: Record<Project["status"], string> = {
  research: "Research",
  completed: "Completed",
  "in-progress": "In progress",
};

export function getProjectStatusLabel(status: Project["status"]) {
  return statusLabels[status];
}

export function ProjectStatusPill({
  status,
  className,
}: {
  status: Project["status"];
  className?: string;
}) {
  return (
    <span className={cn("inline-flex h-10 items-center gap-2 rounded-full border border-porcelain/14 bg-porcelain/[0.045] px-4 font-technical text-xs font-semibold uppercase tracking-[0.04em] text-porcelain", className)}>
      <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(74,222,128,0.65)]" />
      {getProjectStatusLabel(status)}
    </span>
  );
}
