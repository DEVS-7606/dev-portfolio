import { Icon } from "@/components/atoms/Icon";
import type { EducationItem } from "@/types/education.types";

interface EducationCardProps {
  education: EducationItem;
  index: number;
}

export const EducationCard = ({ education, index }: EducationCardProps) => {
  const isMain = index === 0;
  const scoreValue = education.gpa ?? education.percentage ?? "";
  const scoreLabel = education.gpa ? "GPA" : "Score";

  return (
    <div
      className={`group relative transition-all duration-700 ease-out hover:-translate-y-1 ${
        isMain ? "md:col-span-2 md:row-span-2" : ""
      }`}
    >
      {/* Glow Effect on hover */}
      <div
        className="absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl pointer-events-none"
        style={{
          background: "rgba(215, 25, 33, 0.15)",
        }}
      />

      {/* Card Container */}
      <div className="relative rounded-xl overflow-hidden h-full border border-[var(--color-border)] group-hover:border-[var(--color-accent)]/30 transition-all duration-500">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-[var(--color-bg-card)]" />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background:
              "radial-gradient(circle at 20% 0%, rgba(215,25,33,0.06) 0%, transparent 60%)",
          }}
        />

        {/* Dot grid subtle pattern */}
        <div className="absolute inset-0 dot-grid-bg opacity-30" />

        {/* Hover shadow */}
        <div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            boxShadow:
              "0 20px 40px rgba(215,25,33,0.08), 0 10px 20px rgba(215,25,33,0.05)",
          }}
        />

        {/* Content */}
        <div className="relative p-6 sm:p-8 flex flex-col h-full">
          {/* Top accent line */}
          <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-500" />

          {/* Icon */}
          <div className="flex items-center justify-center w-12 h-12 rounded-full border border-[var(--color-border)] group-hover:border-[var(--color-accent)]/30 transition-colors duration-300 mb-5">
            <Icon
              type={isMain ? "graduation" : "book"}
              className="w-5 h-5 text-[var(--color-text-tertiary)] group-hover:text-[var(--color-accent)] transition-colors duration-300"
            />
          </div>

          {/* Period */}
          <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-text-tertiary)]">
            {education.period}
          </span>

          {/* Degree */}
          <h3
            className={`mt-3 font-display font-bold text-[var(--color-text-primary)] leading-tight ${
              isMain ? "text-2xl sm:text-3xl lg:text-4xl" : "text-lg sm:text-xl"
            }`}
          >
            {education.degree}
          </h3>

          {/* Institution */}
          <p className="mt-2 font-mono text-sm text-[var(--color-text-tertiary)] uppercase tracking-wider">
            {education.institution}
          </p>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Score */}
          {scoreValue && (
            <div className="mt-6 pt-5 border-t border-[var(--color-border)]">
              <div className="flex items-baseline gap-2">
                <span
                  className={`font-display font-bold text-[var(--color-accent)] ${
                    isMain ? "text-5xl lg:text-6xl" : "text-3xl"
                  }`}
                >
                  {scoreValue}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-text-tertiary)]">
                  {scoreLabel}
                </span>
              </div>
              {education.gpaNote && (
                <p className="mt-1 font-mono text-[10px] text-[var(--color-text-tertiary)] opacity-60">
                  {education.gpaNote}
                </p>
              )}
            </div>
          )}

          {/* Achievements */}
          {education.achievements && (
            <div className="mt-5 pt-5 border-t border-[var(--color-border)] space-y-2">
              {education.achievements.map((achievement, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-[var(--color-accent)] mt-2 flex-shrink-0 opacity-60" />
                  <p className="text-sm text-[var(--color-text-secondary)] font-light leading-relaxed">
                    {achievement}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
