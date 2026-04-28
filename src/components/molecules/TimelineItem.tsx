import { TimelineDot } from "@/components/atoms/TimelineDot";
import { StatusBadge } from "@/components/atoms/StatusBadge";
import type { ExperienceCardColors } from "@/types/experience.types";

interface TimelineItemProps {
  experience: {
    title: string;
    company: string;
    start: string;
    end: string | null;
    summary: string;
  };
  colors: ExperienceCardColors;
  isLast: boolean;
}

export const TimelineItem = ({
  experience,
  colors,
  isLast,
}: TimelineItemProps) => {
  const isCurrent = experience.end === null;

  return (
    <div className="relative flex gap-6 group">
      {/* Timeline Line */}
      <div className="flex flex-col items-center flex-shrink-0">
        <TimelineDot isCurrent={isCurrent} color={isCurrent ? colors.accent : undefined} />
        {!isLast && (
          <div className="w-px h-full bg-[var(--color-border)] mt-3 group-hover:bg-[var(--color-accent)] transition-colors duration-500 opacity-30" />
        )}
      </div>

      {/* Content Card */}
      <div className="flex-1 pb-10">
        <div className="relative p-6 sm:p-8 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] hover:border-[var(--color-accent)]/20 transition-all duration-500 group-hover:bg-[var(--color-bg-card-hover)] overflow-hidden">
          {/* Card background */}
          <div className="absolute inset-0 dot-grid-bg opacity-15 pointer-events-none" />
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 10% 0%, rgba(215,25,33,0.05) 0%, transparent 60%)",
            }}
          />

          <div className="relative">
            {/* Header */}
            <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-[var(--color-text-primary)] mb-1">
                  {experience.title}
                </h3>
                <p className="font-mono text-xs font-medium uppercase tracking-wider text-[var(--color-text-tertiary)]">
                  {experience.company}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <StatusBadge isCurrent={isCurrent} />
                <span className="font-mono text-xs text-[var(--color-text-tertiary)] tracking-wider">
                  {formatDate(experience.start, experience.end)}
                </span>
              </div>
            </div>

            {/* Summary Points */}
            <div className="mt-5 pt-5 border-t border-[var(--color-border)] space-y-3">
              {experience.summary.split(";").map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-2.5 flex-shrink-0 opacity-60" />
                  <p className="text-base text-[var(--color-text-secondary)] leading-relaxed font-light">
                    {point.trim()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const formatDate = (start: string, end: string | null): string => {
  const startDate = new Date(start);
  const startMonth = startDate.toLocaleDateString("en-US", { month: "short" });
  const startYear = startDate.getFullYear();

  if (end === null) {
    return `${startMonth} ${startYear} — Present`;
  }

  const endDate = new Date(end);
  const endMonth = endDate.toLocaleDateString("en-US", { month: "short" });
  const endYear = endDate.getFullYear();

  return `${startMonth} ${startYear} — ${endMonth} ${endYear}`;
};
