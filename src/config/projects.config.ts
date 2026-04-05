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
      "Built a responsive weather application that fetches and displays real-time weather data for user-searched locations. Integrated external REST APIs and handled asynchronous state updates, loading states, and error scenarios for a smooth UX. Designed reusable UI components with attention to responsiveness, clean layout, and fast interaction.",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    projectLink: "https://weather-sphere-one.vercel.app",
    imageUrl: "/images/projects/weather-sphere.png",
  },
  {
    title: "KudosNotes",
    company: null,
    description:
      "Developed a complete web application during a 36-hour AI Powered Development Hackathon at Avesta Technologies, emphasizing efficient use of AI-powered tools like Cursor with MCPs, SOPs, and rule-based workflows. Delivered with a team of 4, securing 2nd place.",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "AI-Powered Development",
    ],
    projectLink: "https://kudosnotes.netlify.app/",
    imageUrl: "/images/projects/kudosnotes.png",
  },
];

export const PROJECT_COLOR_THEMES: Record<number, ProjectCardColors> = {
  0: { accent: "rgb(37 99 235)", soft: "rgba(37,99,235,0.10)" },
  1: { accent: "#4f46e5", soft: "rgba(79,70,229,0.10)" },
  2: { accent: "#0ea5e9", soft: "rgba(14,165,233,0.10)" },
  3: { accent: "#059669", soft: "rgba(5,150,105,0.10)" },
};
