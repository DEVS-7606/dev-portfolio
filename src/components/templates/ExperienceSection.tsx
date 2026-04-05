import { ExperienceGrid } from "@/components/organisms/ExperienceGrid";
import type { ExperienceItem } from "@/types/experience.types";

interface ExperienceSectionProps {
  title: string;
  data: ExperienceItem[];
}

export const ExperienceSection = ({ title, data }: ExperienceSectionProps) => (
  <section id="experience" className="scroll-mt-24 py-12 sm:py-16 md:py-20 border-t border-zinc-100 dark:border-zinc-800/50">
    <div className="flex flex-col items-center mb-12 text-center md:items-start md:text-left">
      <div className="text-[10px] font-bold uppercase tracking-wider text-accent mb-2">
        Career
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4 text-primary">
        {title}
      </h2>
      <div className="prose prose-zinc dark:prose-invert max-w-2xl">
        <p className="text-base sm:text-lg leading-relaxed text-secondary">
          Professional journey showcasing growth from intern to frontend
          developer, with hands-on experience in modern web technologies and clean
          code practices.
        </p>
      </div>
    </div>
    <ExperienceGrid data={data} />
  </section>
);
