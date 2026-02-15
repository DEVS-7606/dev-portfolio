export interface ExperienceItem {
  title: string;
  company: string;
  start: string;
  end: string | null;
  summary: string;
}

export interface ExperienceCardColors {
  accent: string;
  soft: string;
}

export type ExperienceCardType = 'current' | 'past';
