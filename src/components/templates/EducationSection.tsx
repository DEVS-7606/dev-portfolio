import { EducationGrid } from "@/components/organisms/EducationGrid";
import type { EducationItem } from "@/types/education.types";

interface EducationSectionProps {
  title: string;
  data: EducationItem[];
}

export const EducationSection = ({ title, data }: EducationSectionProps) => (
  <section id="education" className="scroll-mt-24 py-10">
    <h2 className="text-2xl font-semibold tracking-tight mb-8">{title}</h2>
    <EducationGrid data={data} />
  </section>
);
