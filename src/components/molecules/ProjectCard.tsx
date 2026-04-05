import type { ProjectItem, ProjectCardColors } from "@/types/project.types";
import { Text } from "@/components/atoms/Text";
import { Icon } from "@/components/atoms/Icon";

interface ProjectCardProps {
  project: ProjectItem;
  colors: ProjectCardColors;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div 
      className="group flex flex-col h-full bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors duration-300 overflow-hidden shadow-sm hover:shadow-md"
    >
      {/* Media or Fallback Area */}
      <div className="h-48 md:h-56 relative overflow-hidden bg-zinc-100 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800">
        {project.imageUrl ? (
          <img 
            src={project.imageUrl} 
            alt={`Preview of ${project.title}`} 
            className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-zinc-50 dark:bg-zinc-900">
             <Icon 
               type="code" 
               className="w-12 h-12 text-zinc-300 dark:text-zinc-700"
             />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
        
        {project.projectLink && (
           <div className="absolute top-4 right-4">
             <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 dark:bg-zinc-900/95 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 text-[10px] font-bold uppercase tracking-wider shadow-sm">
               <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
               Live
             </div>
           </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 p-6 flex flex-col">
        <div className="mb-4">
          <Text variant="heading" className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
            {project.title}
          </Text>
          {project.company && (
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mt-1">
              {project.company}
            </p>
          )}
        </div>

        <Text variant="body" className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6 flex-1">
          {project.description.replace(/;/g, '. ')}
        </Text>

        <div className="mt-auto space-y-6">
          {/* Tech Tags - Minimalist style */}
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center text-xs font-medium px-2.5 py-1.5 rounded-md border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 bg-zinc-50 dark:bg-zinc-800/50"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Regular specific button */}
          {project.projectLink && (
            <a
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 text-sm font-semibold transition-colors"
            >
              View Live Project
              <Icon type="external" className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
