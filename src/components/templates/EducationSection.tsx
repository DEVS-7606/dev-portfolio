import { EducationGrid } from "@/components/organisms/EducationGrid";
import type { EducationItem } from "@/types/education.types";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface EducationSectionProps {
  title: string;
  data: EducationItem[];
}

export const EducationSection = ({ title, data }: EducationSectionProps) => {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section
      id="education"
      ref={sectionRef}
      className="relative scroll-mt-24 scroll-reveal border-t border-[var(--color-border)] overflow-hidden"
    >
      {/* Section background decoration */}
      <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-0 left-0 w-[700px] h-[700px]"
          style={{
            background:
              "radial-gradient(circle at 0% 0%, rgba(215,25,33,0.04) 0%, transparent 60%)",
          }}
        />
        <div className="absolute top-60 right-8 w-px h-[180px] bg-gradient-to-b from-transparent via-[var(--color-accent)] to-transparent opacity-10" />
        <div className="absolute bottom-24 left-0 w-[90px] h-px bg-gradient-to-r from-[var(--color-accent)] to-transparent opacity-15" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-24 sm:py-32 md:py-40">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
            ( 03 )
          </span>
          <div className="h-px flex-1 max-w-[60px] bg-[var(--color-accent)] opacity-30" />
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-text-tertiary)]">
            Academic
          </span>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-[var(--color-text-primary)] leading-[1.1] mb-6">
            {title}
          </h2>
          <p className="text-lg sm:text-xl font-light leading-relaxed text-[var(--color-text-secondary)] max-w-2xl">
            Academic background and formal education that built my foundation in
            software engineering.
          </p>
        </div>

        <EducationGrid data={data} />
      </div>
    </section>
  );
};
