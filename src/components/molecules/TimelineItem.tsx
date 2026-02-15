import { TimelineDot } from "@/components/atoms/TimelineDot";
import { StatusBadge } from "@/components/atoms/StatusBadge";
import { Icon } from "@/components/atoms/Icon";
import { Text } from "@/components/atoms/Text";
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
    <div className="relative flex gap-3 sm:gap-4 md:gap-6 group">
      {/* Timeline Line */}
      <div className="flex flex-col items-center flex-shrink-0">
        <TimelineDot
          isCurrent={isCurrent}
          color={isCurrent ? colors.accent : undefined}
        />
        {!isLast && (
          <div className="w-0.5 h-full bg-zinc-200 dark:bg-zinc-700 mt-2 group-hover:bg-zinc-300 dark:group-hover:bg-zinc-600 transition-colors duration-300" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-6 sm:pb-8">
        <div className="bg-white dark:bg-zinc-900 rounded-lg sm:rounded-xl border border-zinc-200 dark:border-zinc-800 p-4 sm:p-5 md:p-6 hover:shadow-lg transition-all duration-300 hover:border-zinc-300 dark:hover:border-zinc-700 group-hover:translate-x-1">
          {/* Header */}
          <div className="flex items-start justify-between mb-3 sm:mb-4">
            <div className="flex-1">
              <Text
                variant="heading"
                className="text-lg sm:text-xl text-zinc-900 dark:text-zinc-100 mb-1"
                color={colors.accent}
              >
                {experience.title}
              </Text>

              <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 mb-2">
                <Icon type="building" className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <Text
                  variant="body"
                  className="font-medium text-sm sm:text-base"
                >
                  {experience.company}
                </Text>
              </div>

              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <StatusBadge isCurrent={isCurrent} />
                <Text
                  variant="caption"
                  className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-500"
                >
                  {formatDate(experience.start, experience.end)}
                </Text>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-zinc-100 dark:border-zinc-800">
            <div className="space-y-2">
              {experience.summary.split(";").map((point, index) => (
                <div key={index} className="flex items-start gap-2 sm:gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600 mt-1.5 sm:mt-2 flex-shrink-0" />
                  <Text
                    variant="body"
                    className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed"
                  >
                    {point.trim()}
                  </Text>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper function
const formatDate = (start: string, end: string | null): string => {
  const startDate = new Date(start);
  const startMonth = startDate.toLocaleDateString("en-US", { month: "short" });
  const startYear = startDate.getFullYear();

  if (end === null) {
    return `${startMonth} ${startYear} - Present`;
  }

  const endDate = new Date(end);
  const endMonth = endDate.toLocaleDateString("en-US", { month: "short" });
  const endYear = endDate.getFullYear();

  return `${startMonth} ${startYear} - ${endMonth} ${endYear}`;
};
