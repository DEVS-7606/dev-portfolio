import { TimelineItem } from "@/components/molecules/TimelineItem";
import { getExperienceCardColors } from "@/utils/experience.utils";
import type { ExperienceItem } from "@/types/experience.types";

interface ExperienceGridProps {
  data: ExperienceItem[];
}

export const ExperienceGrid = ({ data }: ExperienceGridProps) => (
  <div className="relative">
    {/* Timeline Items */}
    <div className="space-y-0">
      {data.map((experience, index) => (
        <TimelineItem
          key={index}
          experience={experience}
          colors={getExperienceCardColors(index)}
          isLast={index === data.length - 1}
        />
      ))}
    </div>
  </div>
);
