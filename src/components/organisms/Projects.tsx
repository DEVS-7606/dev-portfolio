import { PROJECTS_DATA, PROJECT_COLOR_THEMES } from "@/config/projects.config";
import { ProjectCard } from "@/components/molecules/ProjectCard";
import { Text } from "@/components/atoms/Text";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-12 sm:py-16 md:py-20">
      <div className="flex flex-col items-center mb-12 text-center md:items-start md:text-left">
        <Text variant="label" className="text-accent mb-2">
          Portfolio
        </Text>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4 text-primary">
          Featured Projects
        </h2>
        <div className="prose prose-zinc dark:prose-invert max-w-2xl">
          <p className="text-base sm:text-lg leading-relaxed text-secondary">
            A curated selection of my recent work, ranging from complex enterprise systems to modern consumer applications. 
            Each project reflects my commitment to clean code and exceptional user experience.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
        {PROJECTS_DATA.map((project, index) => {
          const colors = PROJECT_COLOR_THEMES[index] ?? PROJECT_COLOR_THEMES[0];
          return (
            <ProjectCard 
              key={index} 
              project={project} 
              colors={colors} 
            />
          );
        })}
      </div>
    </section>
  );
}
