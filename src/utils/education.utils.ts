import { COLOR_THEMES, CARD_LABELS, GRID_LAYOUTS } from "@/config/education.config";
import type { CardColors } from "@/types/education.types";

export const getCardColors = (index: number): CardColors => 
  COLOR_THEMES[index] || COLOR_THEMES[0];

export const isMainCard = (index: number): boolean => index === 0;

export const getGridLayout = (index: number): string => 
  isMainCard(index) ? GRID_LAYOUTS.main : GRID_LAYOUTS.secondary;

export const getCardLabel = (index: number): string => 
  CARD_LABELS[index] || "Education";

export const getDisplayScore = (gpa?: string, percentage?: string): string => 
  gpa ?? percentage ?? "";

export const getScoreLabel = (gpa?: string): string => 
  gpa ? "GPA Score" : "Percentage";
