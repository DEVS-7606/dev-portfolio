import type { ProjectItem, ProjectCardColors } from "@/types/project.types";

export const PROJECTS_DATA: ProjectItem[] = [
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
    imageUrl: "/images/projects/view-com-au.png",
  },
  {
    title: "Weather Sphere",
    company: null,
    description:
      "Built a responsive weather app with real-time API integration, 3D globe visualisation using Three.js, and optimised async rendering patterns.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Three.js"],
    projectLink: "https://weather-sphere-one.vercel.app",
    imageUrl: "/images/projects/weather-sphere.png",
  },
  {
    title: "Dealers Invoice",
    company: null,
    description:
      "Built a full-stack SaaS invoice tool supporting GST calculations, vendor management, payment tracking, and analytics dashboards with exportable reports. Architected scalable frontend using Atomic Design, custom hooks, and protected routing with role-based access control for multi-user workflows. Designed layered Express backend with Zod validation, Supabase Row-Level Security (RLS), and Supabase Auth for secure, isolated tenant data.",
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "Supabase",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    projectLink: "https://projects-nu-lemon.vercel.app",
    imageUrl: "/images/projects/dealer-invoice.png",
  },
];

export const PROJECT_COLOR_THEMES: Record<number, ProjectCardColors> = {
  0: { accent: "#D71921", soft: "rgba(215,25,33,0.08)" },
  1: { accent: "#888888", soft: "rgba(136,136,136,0.08)" },
  2: { accent: "#555555", soft: "rgba(85,85,85,0.08)" },
  3: { accent: "#D71921", soft: "rgba(215,25,33,0.08)" },
};
