import type { EducationItem, CardColors } from "@/types/education.types";

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "B.E in Electronics and Communication",
    institution: "LJIET",
    period: "2019 - 2023",
    gpa: "8.67",
    gpaNote: "Till 6th semester",
    achievements: [
      "Strong academic performance in engineering program",
      "Focus on communication and electronics systems",
    ],
  },
  {
    degree: "HSC (12th)",
    institution: "Divine Life School",
    period: "Completed 2019",
    percentage: "52%",
  },
  {
    degree: "SSC (10th)",
    institution: "Divine Life School",
    period: "Completed 2017",
    percentage: "73.17%",
  },
];

export const COLOR_THEMES: Record<number, CardColors> = {
  0: { accent: "#2563eb", soft: "rgba(37,99,235,0.10)" },
  1: { accent: "#4f46e5", soft: "rgba(79,70,229,0.10)" },
  2: { accent: "#059669", soft: "rgba(5,150,105,0.10)" },
};

export const CARD_LABELS: Record<number, string> = {
  0: "Bachelor Degree",
  1: "Higher Secondary",
  2: "Secondary",
};

export const GRID_LAYOUTS = {
  main: "lg:col-span-4 lg:row-span-2",
  secondary: "lg:col-span-2",
} as const;
