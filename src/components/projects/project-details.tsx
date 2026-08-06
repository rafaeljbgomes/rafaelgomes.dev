import type { ReactNode } from "react";
import { CircleCheck, CircleHelp, Code2, Layers3, Trophy, User, type LucideIcon } from "lucide-react";

import { getProjectStatusLabel } from "@/components/projects/project-status-pill";
import type { Project } from "@/lib/types";

export function ProjectDetails({ project }: { project: Project }) {
  return (
    <div className="graphite-card flex min-h-[35rem] flex-col rounded-[2rem] p-6 md:p-7">
      <p className="font-technical text-xs uppercase tracking-[0.16em] text-glacier">Recruiter scan</p>
      <div className="mt-6 grid gap-5 border-b border-porcelain/12 pb-6 sm:grid-cols-3">
        <ScanItem icon={User} label="Role" value={project.role} />
        <ScanItem icon={Layers3} label="Stack" value={project.stack.slice(0, 3).join(" · ")} />
        <ScanItem icon={CircleCheck} label="Status" value={getProjectStatusLabel(project.status)} />
      </div>
      <div className="flex flex-1 flex-col">
        <DetailSection icon={CircleHelp} label="Problem" body={project.problem} />
        <DetailSection icon={User} label="My contribution" body={project.contribution} />
        <DetailSection icon={Code2} label="Technical decisions">
          <ul className="mt-2 space-y-2">
            {project.decisions.map((decision) => <li key={decision} className="flex gap-2 text-sm leading-6 text-porcelain/74"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-glacier" /><span>{decision}</span></li>)}
          </ul>
        </DetailSection>
        <DetailSection icon={Trophy} label="Outcome" body={project.outcome} />
      </div>
    </div>
  );
}

function ScanItem({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string }) {
  return <div className="flex gap-3 sm:border-r sm:border-porcelain/12 sm:pr-4 sm:last:border-r-0"><Icon className="mt-1 size-5 shrink-0 text-porcelain/82" strokeWidth={1.8} /><span><span className="font-technical block text-[0.68rem] uppercase tracking-[0.13em] text-porcelain/46">{label}</span><span className="mt-2 block text-sm font-medium leading-6 text-porcelain">{value}</span></span></div>;
}

function DetailSection({ icon: Icon, label, body, children }: { icon: LucideIcon; label: string; body?: string; children?: ReactNode }) {
  return <section className="grid grid-cols-[3.25rem_1fr] gap-4 border-b border-porcelain/12 py-6 last:border-b-0 last:pb-0"><span className="grid size-12 place-items-center rounded-[0.95rem] border border-porcelain/12 bg-glacier/10 text-glacier"><Icon className="size-5" strokeWidth={1.8} /></span><div><h4 className="text-lg font-semibold text-porcelain">{label}</h4>{body && <p className="mt-2 text-sm leading-6 text-porcelain/74">{body}</p>}{children}</div></section>;
}
