import { ExperienceGrid } from "@/components/organisms/ExperienceGrid";
import type { ExperienceItem } from "@/types/experience.types";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface ExperienceSectionProps {
  title: string;
  data: ExperienceItem[];
}

export const ExperienceSection = ({ title, data }: ExperienceSectionProps) => {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative scroll-mt-24 scroll-reveal border-t border-[var(--color-border)] overflow-hidden"
    >
      {/* Section background decoration */}
      <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
        <div
          className="absolute bottom-0 left-0 w-[600px] h-[600px]"
          style={{
            background:
              "radial-gradient(circle at 0% 100%, rgba(215,25,33,0.04) 0%, transparent 60%)",
          }}
        />
        <div className="absolute top-32 right-0 w-[80px] h-px bg-gradient-to-l from-[var(--color-accent)] to-transparent opacity-15" />
        <div className="absolute bottom-40 left-10 w-px h-[200px] bg-gradient-to-b from-transparent via-[var(--color-accent)] to-transparent opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-24 sm:py-32 md:py-40">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
            ( 02 )
          </span>
          <div className="h-px flex-1 max-w-[60px] bg-[var(--color-accent)] opacity-30" />
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-text-tertiary)]">
            Career
          </span>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-[var(--color-text-primary)] leading-[1.1] mb-6">
            {title}
          </h2>
          <p className="text-lg sm:text-xl font-light leading-relaxed text-[var(--color-text-secondary)] max-w-2xl">
            Professional journey showcasing growth from intern to full-stack
            developer, with hands-on experience across modern web technologies.
          </p>
        </div>

        <ExperienceGrid data={data} />
      </div>
    </section>
  );
};
