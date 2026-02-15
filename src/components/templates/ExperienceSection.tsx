import { ExperienceGrid } from "@/components/organisms/ExperienceGrid";
import type { ExperienceItem } from "@/types/experience.types";

interface ExperienceSectionProps {
  title: string;
  data: ExperienceItem[];
}

export const ExperienceSection = ({ title, data }: ExperienceSectionProps) => (
  <section id="experience" className="scroll-mt-24 py-10">
    <h2 className="text-2xl font-semibold tracking-tight mb-2">{title}</h2>
    <div className="prose prose-zinc dark:prose-invert max-w-none mb-8">
      <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
        Professional journey showcasing growth from intern to frontend
        developer, with hands-on experience in modern web technologies and clean
        code practices.
      </p>
    </div>
    <ExperienceGrid data={data} />
  </section>
);
