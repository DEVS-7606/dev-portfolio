import { ACHIEVEMENTS_DATA } from "@/config/achievements.config";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Achievements() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="relative scroll-mt-24 scroll-reveal border-t border-[var(--color-border)] overflow-hidden"
    >
      {/* Section background decoration */}
      <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px]"
          style={{
            background:
              "radial-gradient(circle at 100% 0%, rgba(215,25,33,0.05) 0%, transparent 60%)",
          }}
        />
        <div className="absolute bottom-16 left-0 w-[120px] h-px bg-gradient-to-r from-[var(--color-accent)] to-transparent opacity-15" />
        <div className="absolute top-24 left-10 w-px h-[150px] bg-gradient-to-b from-transparent via-[var(--color-accent)] to-transparent opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-24 sm:py-32 md:py-40">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
            ( 05 )
          </span>
          <div className="h-px flex-1 max-w-[60px] bg-[var(--color-accent)] opacity-30" />
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-text-tertiary)]">
            Milestones
          </span>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-[var(--color-text-primary)] leading-[1.1] mb-6">
            Achievements
          </h2>
          <p className="text-lg sm:text-xl font-light leading-relaxed text-[var(--color-text-secondary)] max-w-2xl">
            Notable recognition for contributions to development, AI, and team
            success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS_DATA.map((item, index) => (
            <div
              key={index}
              className="group relative p-6 sm:p-8 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] hover:border-[var(--color-accent)]/20 hover:bg-[var(--color-bg-card-hover)] transition-all duration-500 overflow-hidden"
            >
              {/* Card background glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 20% 0%, rgba(215,25,33,0.06) 0%, transparent 60%)",
                }}
              />

              {/* Dot pattern */}
              <div className="absolute inset-0 dot-grid-bg opacity-20 pointer-events-none" />

              {/* Content */}
              <div className="relative">
                {/* Trophy icon */}
                <div className="flex items-center justify-center w-12 h-12 rounded-full border border-[var(--color-accent)]/20 bg-[var(--color-accent-soft)] mb-5">
                  <span className="text-base text-[var(--color-accent)]">✦</span>
                </div>

                <h3 className="text-xl font-display font-bold text-[var(--color-accent)] mb-1">
                  {item.title}
                </h3>

                <p className="font-mono text-xs font-medium uppercase tracking-widest text-[var(--color-text-tertiary)] mb-4">
                  {item.organization}
                </p>

                <div className="pt-4 border-t border-[var(--color-border)]">
                  <p className="text-base text-[var(--color-text-secondary)] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
