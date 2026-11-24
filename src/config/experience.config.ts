import { ACCENT_COLOR } from "@/shared/constants";
import type {
  ExperienceItem,
  ExperienceCardColors,
} from "@/types/experience.types";

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    title: "Full-Stack Engineer",
    company: "Movya",
    start: "2026-06",
    end: null,
    summary:
      "Built Smart Proposal, a sales proposal app for client Divya Bhaskar, now used by 468 employees who created 933 proposals worth INR 67.6 Cr in the first 3 months, using React, FastAPI, and PostgreSQL; Made discount approvals faster, with 42% of proposals approved automatically and the rest approved in about 1 hour, by building an approval flow for 18 sales roles that checks discount limits and profit margins; Kept the app fast for all users, with most requests answered in under 0.1 seconds, by adding Redis caching, background logging, and role-based access control; Let sales teams skip manual design work, generating 1,675 proposal documents and 1,728 AI ad designs automatically, by building PDF generation and AI ad pipelines with Playwright and n8n",
  },
  {
    title: "Full-Stack Developer",
    company: "Avesta Technologies",
    start: "2023-11",
    end: "2026-05",
    summary:
      "Built a greenfield IoT admin platform with 10+ modules and 5-role RBAC on a NATS event-driven architecture; Increased team development speed by 35% by introducing Atomic Design component libraries and scaffolding templates; Improved view.com.au search ranking from 7th to 3rd through structured data, canonical tags, and SSR metadata; Reached ~75% test coverage on critical modules with Jest, RTL, Cypress, and Playwright, wired into GitHub Actions CI",
  },
  {
    title: "Frontend Intern",
    company: "Avesta Technologies",
    start: "2023-02",
    end: "2023-11",
    summary:
      "Built React and Next.js features, reusable components, and REST API integrations for client and internal apps.",
  },
  {
    title: "Software Development Intern",
    company: "Karbh IT Solutions",
    start: "2022-07",
    end: "2022-08",
    summary:
      "Built backend features with Node.js and MySQL for data-driven web applications.",
  },
];

export const EXPERIENCE_COLOR_THEMES: Record<number, ExperienceCardColors> = {
  0: { accent: ACCENT_COLOR, soft: "rgba(215,25,33,0.08)" },
  1: { accent: "#888888", soft: "rgba(136,136,136,0.08)" },
  2: { accent: "#555555", soft: "rgba(85,85,85,0.08)" },
  3: { accent: "#555555", soft: "rgba(85,85,85,0.08)" },
};

export const EXPERIENCE_GRID_LAYOUTS = {
  current: "lg:col-span-4 lg:row-span-2",
  past: "lg:col-span-2",
} as const;
