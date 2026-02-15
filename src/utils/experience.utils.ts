import { EXPERIENCE_COLOR_THEMES, EXPERIENCE_GRID_LAYOUTS } from "@/config/experience.config";
import type { ExperienceCardColors } from "@/types/experience.types";

export const getExperienceCardColors = (index: number): ExperienceCardColors => 
  EXPERIENCE_COLOR_THEMES[index] || EXPERIENCE_COLOR_THEMES[0];

export const isCurrentJob = (end: string | null): boolean => end === null;

export const getExperienceGridLayout = (isCurrent: boolean): string => 
  isCurrent ? EXPERIENCE_GRID_LAYOUTS.current : EXPERIENCE_GRID_LAYOUTS.past;

export const formatDateRange = (start: string, end: string | null): string => {
  const startDate = new Date(start);
  const startMonth = startDate.toLocaleDateString('en-US', { month: 'short' });
  const startYear = startDate.getFullYear();
  
  if (end === null) {
    return `${startMonth} ${startYear} - Present`;
  }
  
  const endDate = new Date(end);
  const endMonth = endDate.toLocaleDateString('en-US', { month: 'short' });
  const endYear = endDate.getFullYear();
  
  return `${startMonth} ${startYear} - ${endMonth} ${endYear}`;
};
