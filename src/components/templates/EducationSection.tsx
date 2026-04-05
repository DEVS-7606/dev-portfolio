import { EducationGrid } from "@/components/organisms/EducationGrid";
import type { EducationItem } from "@/types/education.types";

interface EducationSectionProps {
  title: string;
  data: EducationItem[];
}

export const EducationSection = ({ title, data }: EducationSectionProps) => (
  <section id="education" className="scroll-mt-24 py-12 sm:py-16 md:py-20 border-t border-zinc-100 dark:border-zinc-800/50">
    <div className="flex flex-col items-center mb-12 text-center md:items-start md:text-left">
      <div className="text-[10px] font-bold uppercase tracking-wider text-accent mb-2">
        Academic
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4 text-primary">
        {title}
      </h2>
      <div className="prose prose-zinc dark:prose-invert max-w-2xl">
        <p className="text-base sm:text-lg leading-relaxed text-secondary">
          Academic background and formal education that built my foundation in software engineering and computer science.
        </p>
      </div>
    </div>
    <EducationGrid data={data} />
  </section>
);
