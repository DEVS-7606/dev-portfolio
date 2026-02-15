import { EducationCard } from "./EducationCard";
import type { EducationItem } from "@/types/education.types";

interface EducationGridProps {
  data: EducationItem[];
}

export const EducationGrid = ({ data }: EducationGridProps) => (
  <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 auto-rows-fr">
    {data.map((education, index) => (
      <EducationCard key={index} education={education} index={index} />
    ))}
  </div>
);
