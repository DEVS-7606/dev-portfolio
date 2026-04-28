import { aboutMe, skills } from "@/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const About = () => {
  const sectionRef = useScrollReveal<HTMLElement>();
  const skillsRef = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative scroll-mt-24 scroll-reveal border-t border-[var(--color-border)] overflow-hidden"
    >
      {/* Section background decoration */}
      <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-0 right-0 w-[700px] h-[700px]"
          style={{
            background:
              "radial-gradient(circle at 100% 0%, rgba(215,25,33,0.04) 0%, transparent 60%)",
          }}
        />
        <div className="absolute bottom-20 left-0 w-[100px] h-px bg-gradient-to-r from-[var(--color-accent)] to-transparent opacity-15" />
        <div className="absolute top-40 right-12 w-px h-[160px] bg-gradient-to-b from-transparent via-[var(--color-accent)] to-transparent opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-24 sm:py-32 md:py-40">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
            ( 01 )
          </span>
          <div className="h-px flex-1 max-w-[60px] bg-[var(--color-accent)] opacity-30" />
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-text-tertiary)]">
            About
          </span>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-[var(--color-text-primary)] leading-[1.1]">
            About
            <br />
            <span className="text-[var(--color-text-tertiary)]">Me</span>
          </h2>

          <p className="text-lg sm:text-xl font-light leading-relaxed text-[var(--color-text-secondary)] max-w-2xl">
            {aboutMe}
          </p>
        </div>

        {/* Skills Grid */}
        <div
          ref={skillsRef}
          className="scroll-reveal scroll-reveal-children mt-20 sm:mt-28"
        >
          <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-text-tertiary)] mb-10">
            Technologies
          </h3>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-6 sm:gap-8">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="group flex flex-col items-center gap-3 cursor-default"
                >
                  <div className="flex items-center justify-center w-16 h-16 rounded-full border border-[var(--color-border)] group-hover:border-[var(--color-accent)] text-[var(--color-text-tertiary)] group-hover:text-[var(--color-accent)] transition-all duration-300">
                    <Icon className="text-3xl" />
                  </div>
                  <span className="font-mono text-[10px] font-medium uppercase tracking-wider text-[var(--color-text-tertiary)] group-hover:text-[var(--color-text-primary)] transition-colors duration-300 text-center">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
