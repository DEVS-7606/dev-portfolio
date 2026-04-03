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
      "Built a greenfield IIoT admin panel with machine onboarding, real-time dashboards, and production monitoring; Designed RBAC system for 5 user roles, improving maintainability and scaling feature delivery by 20%; Developed B2C websites with strong focus on performance and SEO optimization; Applied clean code, layered architecture, and atomic design for scalable UI",
  },
  {
    title: "Intern",
    company: "Avesta Technologies",
    start: "2023-02",
    end: "2023-11",
    summary:
      "Built projects using React/Next.js with CRUD operations and modern frontend architecture",
  },
  {
    title: "Summer Intern (15 days)",
    company: "Karbh IT Solutions / Karbh IT",
    start: "2022-07-01",
    end: "2022-07-15",
    summary: "Worked on web apps with Node.js backend and database integration",
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
