import type { ProjectItem, ProjectCardColors } from "@/types/project.types";

export const PROJECTS_DATA: ProjectItem[] = [
  {
    title: "Smart Proposal",
    company: "Movya",
    description:
      "Sales proposal platform built for Divya Bhaskar, used by 468 employees to create 933 proposals worth INR 67.6 Cr in its first 3 months. Features a discount approval workflow for 18 sales roles that checks discount limits and profit margins (42% of proposals auto-approved), Redis caching with sub-100ms responses, role-based access control, and automated PDF generation and AI ad design pipelines with Playwright and n8n.",
    techStack: [
      "React",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Playwright",
      "n8n",
    ],
  },
  {
    title: "IIOT Admin Panel with Dashboard",
    company: "Avesta Technologies",
    description:
      "Built a greenfield IIoT admin panel featuring machine onboarding, real-time monitoring dashboards, and RBAC-based access control, while adhering to best practices such as Atomic Design, Clean Code (Uncle Bob), layered architecture, and the Single Responsibility Principle (SRP)",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Recharts",
      "i18n",
      "NATS",
    ],
  },
  {
    title: "view.com.au",
    company: "Avesta Technologies",
    description:
      "Contributed to the frontend architecture of a B2C website, defining scalable UI patterns, reusable component structure, and maintainable state management while implementing responsive pages, performance optimizations, SEO improvements, and tests to support reliable delivery and future expansion",
    techStack: [
      "Next.js",
      "React.js",
      "Cucumber",
      "Redux",
      "Redux Toolkit",
      "Tailwind CSS",
      "CSS",
      "HTML",
    ],
    projectLink: "https://view.com.au/",
    imageUrl: "/images/projects/view-com-au.webp",
  },
  {
    title: "Weather Sphere",
    company: null,
    description:
      "Built a responsive weather app with real-time third-party API integration, client-side caching, and 3D globe visualisation using Three.js.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Three.js"],
    projectLink: "https://weather-sphere-one.vercel.app",
    imageUrl: "/images/projects/weather-sphere.webp",
  },
  {
    title: "Dealers Invoice",
    company: null,
    description:
      "Built a full-stack SaaS invoice management tool end-to-end as a solo project, from backend API to production deployment on Vercel. Layered Express.js backend with Zod validation and structured error handling, secured with Supabase Auth (JWT) and Row-Level Security for multi-user data isolation. PostgreSQL schema covering vendors, GST line-item invoices, payment tracking, and report aggregation, plus a React frontend built with Atomic Design, protected routing with RBAC, and analytics dashboards with CSV export.",
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    projectLink: "https://projects-nu-lemon.vercel.app",
    imageUrl: "/images/projects/dealer-invoice.webp",
  },
];

export const PROJECT_COLOR_THEMES: Record<number, ProjectCardColors> = {
  0: { accent: "#D71921", soft: "rgba(215,25,33,0.08)" },
  1: { accent: "#888888", soft: "rgba(136,136,136,0.08)" },
  2: { accent: "#555555", soft: "rgba(85,85,85,0.08)" },
  3: { accent: "#D71921", soft: "rgba(215,25,33,0.08)" },
  4: { accent: "#888888", soft: "rgba(136,136,136,0.08)" },
};
