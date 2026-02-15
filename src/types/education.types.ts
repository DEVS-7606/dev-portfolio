export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  gpa?: string;
  percentage?: string;
  gpaNote?: string;
  achievements?: string[];
}

export interface CardColors {
  accent: string;
  soft: string;
}

export type CardType = 'primary' | 'secondary';
export type CardIndex = 0 | 1 | 2;
