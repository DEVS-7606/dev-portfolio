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
      "Designed and built a greenfield industrial IoT admin panel with 10+ modules covering machine onboarding, real-time monitoring, RBAC, and analytics dashboards. Architected a modular frontend using Atomic Design and layered patterns with Dependency Inversion, introducing reusable component libraries that increased team development speed by 35%. Implemented a 5-role RBAC system with protected routing enforcing least-privilege access. Optimised Core Web Vitals (LCP, FCP) via code splitting, lazy loading, and strategic memoisation. Contributed to view.com.au, improving organic search rankings from 7th to 3rd position via technical SEO enhancements. Built and maintained unit and E2E test suites using Jest, RTL, Cypress, and Playwright with ~75%+ coverage on business-critical modules.",
  },
  {
    title: "Frontend Intern",
    company: "Avesta Technologies",
    start: "2023-02",
    end: "2023-11",
    summary:
      "Developed React and Next.js features including CRUD operations, reusable UI components, and REST API integrations. Contributed to responsive UI development and frontend architecture improvements for both client-facing applications and internal tooling.",
  },
  {
    title: "Software Development Intern",
    company: "Karbh IT Solutions",
    start: "2022-07",
    end: "2022-08",
    summary:
      "Built backend features using Node.js and database integrations for dynamic web applications.",
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
