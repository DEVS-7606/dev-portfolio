import { ACCENT_COLOR } from "@/shared/constants";
import type {
  ExperienceItem,
  ExperienceCardColors,
} from "@/types/experience.types";

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    title: "Full-Stack Developer",
    company: "Avesta Technologies",
    start: "2023-11",
    end: null,
    summary:
      "Designed and built a greenfield industrial IoT admin platform with 10+ modules covering machine onboarding, real-time monitoring, RBAC workflows, and analytics dashboards — worked within a NATS-based event-driven architecture for live data delivery; Architected a modular frontend using Atomic Design and layered patterns, introducing reusable component libraries and scaffolding templates that increased team development speed by 35%; Implemented a 5-role RBAC system with protected routing and conditional UI rendering, enforcing least-privilege access across all platform views; Optimised Core Web Vitals (LCP, FCP) for data-heavy dashboards via code splitting, lazy loading, and strategic memoisation, reducing unnecessary re-renders on high-frequency update components; Contributed to view.com.au, improving organic search rankings from 7th to 3rd position via technical SEO enhancements including structured data, canonical tags, and server-side metadata generation; Built and maintained unit and E2E test suites (Jest, RTL, Cypress, Playwright) achieving ~75%+ coverage on business-critical modules, reducing regression escapes to QA; Enforced accessibility standards (WCAG 2.1, ARIA, semantic HTML) and configured GitHub Actions pipelines for automated linting, testing, and preview deployments; Collaborated in an Agile/Scrum environment with sprint planning, code reviews, and iterative feature delivery across cross-functional product teams",
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
      "Built backend features using Node.js and MySQL, writing queries manually to support dynamic data-driven web applications.",
  },
];

export const EXPERIENCE_COLOR_THEMES: Record<number, ExperienceCardColors> = {
  0: { accent: ACCENT_COLOR, soft: "rgba(215,25,33,0.08)" },
  1: { accent: "#888888", soft: "rgba(136,136,136,0.08)" },
  2: { accent: "#555555", soft: "rgba(85,85,85,0.08)" },
};

export const EXPERIENCE_GRID_LAYOUTS = {
  current: "lg:col-span-4 lg:row-span-2",
  past: "lg:col-span-2",
} as const;
