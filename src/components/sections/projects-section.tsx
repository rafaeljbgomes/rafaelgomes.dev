import { projects } from "@/lib/data";

import { ProjectCarousel } from "@/components/projects/project-carousel";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-shell">
      <div className="container-shell relative z-10">
        <div className="overflow-hidden rounded-[3rem] border border-porcelain/10 bg-[radial-gradient(circle_at_9%_5%,rgba(143,191,218,0.18),transparent_22rem),radial-gradient(circle_at_84%_0%,rgba(255,255,255,0.08),transparent_20rem),linear-gradient(145deg,#0a0b0d,#050607)] p-7 shadow-[0_40px_130px_rgba(0,0,0,0.34)] md:p-10 lg:p-12">
          <div className="mb-12 grid gap-8 md:mb-14 lg:grid-cols-[0.88fr_0.78fr] lg:items-start">
            <div className="flex flex-col gap-5">
              <span className="eyebrow text-porcelain/55">Featured work</span>
              <h2 id="projects-heading" className="max-w-3xl text-balance text-4xl font-bold leading-[0.96] text-porcelain md:text-6xl">
                Selected projects in backend, delivery and security.
              </h2>
            </div>
            <div className="flex flex-col justify-start lg:pt-10">
              <p className="max-w-xl text-left text-base leading-7 text-porcelain/62 md:text-lg md:leading-8">
                Explore the problem, my contribution, the key technical decisions, and the outcome behind each project.
              </p>
            </div>
          </div>

          <ProjectCarousel projects={projects} />
        </div>
      </div>
    </section>
  );
}
