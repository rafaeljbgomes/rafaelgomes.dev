import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />

      <footer className="border-t border-ink/10 py-10">
        <div className="container-shell flex flex-col justify-between gap-4 text-sm text-muted-foreground md:flex-row md:items-center">
          <p>© 2026 Rafael Gomes. Junior Backend Engineer with a DevOps delivery focus.</p>
          <p>Built with Next.js, React, Tailwind CSS, shadcn/ui, and Motion.</p>
        </div>
      </footer>
    </main>
  );
}
