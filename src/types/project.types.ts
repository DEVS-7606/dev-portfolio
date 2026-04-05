export interface ProjectItem {
  title: string;
  company: string | null;
  description: string;
  techStack: string[];
  projectLink?: string;
  imageUrl?: string;
}

export interface ProjectCardColors {
  accent: string;
  soft: string;
}
