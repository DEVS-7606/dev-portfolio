import { PROJECTS_DATA } from "@/config/projects.config";
import { ProjectCard } from "@/components/molecules/ProjectCard";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Projects() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative scroll-mt-24 scroll-reveal border-t border-[var(--color-border)] overflow-hidden"
    >
      {/* Section background decoration */}
      <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
        <div
          className="absolute bottom-0 right-0 w-[700px] h-[700px]"
          style={{
            background:
              "radial-gradient(circle at 100% 100%, rgba(215,25,33,0.04) 0%, transparent 60%)",
          }}
        />
        <div className="absolute top-48 left-0 w-[100px] h-px bg-gradient-to-r from-[var(--color-accent)] to-transparent opacity-15" />
        <div className="absolute bottom-32 right-10 w-px h-[220px] bg-gradient-to-b from-transparent via-[var(--color-accent)] to-transparent opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-24 sm:py-32 md:py-40">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
            ( 04 )
          </span>
          <div className="h-px flex-1 max-w-[60px] bg-[var(--color-accent)] opacity-30" />
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-text-tertiary)]">
            Portfolio
          </span>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-[var(--color-text-primary)] leading-[1.1] mb-6">
            Featured
            <br />
            <span className="text-[var(--color-text-tertiary)]">Projects</span>
          </h2>
          <p className="text-lg sm:text-xl font-light leading-relaxed text-[var(--color-text-secondary)] max-w-2xl">
            A curated selection of recent work — from complex enterprise systems
            to modern consumer applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
