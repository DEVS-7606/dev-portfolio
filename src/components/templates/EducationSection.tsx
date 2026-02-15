import { EducationGrid } from "@/components/organisms/EducationGrid";
import type { EducationItem } from "@/types/education.types";

interface EducationSectionProps {
  title: string;
  data: EducationItem[];
}

export const EducationSection = ({ title, data }: EducationSectionProps) => (
  <section id="education" className="scroll-mt-24 py-8 sm:py-10 md:py-12">
    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight mb-6 sm:mb-8">
      {title}
    </h2>
    <EducationGrid data={data} />
  </section>
);
