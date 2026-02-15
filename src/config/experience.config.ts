import { ACCENT_COLOR } from "@/shared/constants";
import type {
  ExperienceItem,
  ExperienceCardColors,
} from "@/types/experience.types";

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    title: "Frontend Developer",
    company: "Avesta Technologies",
    start: "2023-11",
    end: null,
    summary:
      "Develop and deploy real-world projects with focus on performance optimization; Implement SEO best practices and testing strategies; Apply clean code principles and layered architecture; Utilize atomic design patterns for scalable UI components.",
  },
  {
    title: "Intern",
    company: "Avesta Technologies",
    start: "2023-02",
    end: "2023-11",
    summary:
      "Mastered JavaScript fundamentals and modern ES6+ features; Learned React framework and Next.js for full-stack development; Built practical projects implementing CRUD operations; Gained hands-on experience with component-based architecture.",
  },
  {
    title: "Summer Intern (15 days)",
    company: "Karbh IT Solutions / Karbh IT",
    start: "2022-07-01",
    end: "2022-07-15",
    summary:
      "Worked on web development projects using modern technologies; Gained exposure to backend programming with Node.js; Learned database management and optimization techniques; Collaborated on real client projects.",
  },
];

export const EXPERIENCE_COLOR_THEMES: Record<number, ExperienceCardColors> = {
  0: { accent: ACCENT_COLOR, soft: "rgba(37,99,235,0.10)" },
  1: { accent: "#4f46e5", soft: "rgba(79,70,229,0.10)" },
  2: { accent: "#059669", soft: "rgba(5,150,105,0.10)" },
};

export const EXPERIENCE_GRID_LAYOUTS = {
  current: "lg:col-span-4 lg:row-span-2",
  past: "lg:col-span-2",
} as const;
