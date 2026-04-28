import type { ProjectItem } from "@/types/project.types";
import { Icon } from "@/components/atoms/Icon";

interface ProjectCardProps {
  project: ProjectItem;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="group flex flex-col h-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] hover:border-[var(--color-accent)]/20 hover:bg-[var(--color-bg-card-hover)] transition-all duration-500 overflow-hidden">
      {/* Media Area */}
      <div className="h-52 md:h-60 relative overflow-hidden bg-[var(--color-bg-secondary)]">
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={`Preview of ${project.title}`}
            className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center dot-grid-bg">
            <Icon
              type="code"
              className="w-12 h-12 text-[var(--color-text-tertiary)] opacity-30"
            />
          </div>
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-card)] via-transparent to-transparent opacity-60 pointer-events-none" />

        {/* Live badge */}
        {project.projectLink && (
          <div className="absolute top-4 right-4">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--color-bg-primary)]/90 backdrop-blur-sm border border-[var(--color-border)] font-mono text-[10px] font-semibold uppercase tracking-widest text-[var(--color-text-primary)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
              Live
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative flex-1 p-6 sm:p-8 flex flex-col overflow-hidden">
        {/* Card background */}
        <div className="absolute inset-0 dot-grid-bg opacity-15 pointer-events-none" />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 80% 80%, rgba(215,25,33,0.05) 0%, transparent 60%)",
          }}
        />

        <div className="relative flex-1 flex flex-col">
          <div className="mb-4">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-[var(--color-text-primary)]">
              {project.title}
            </h3>
            {project.company && (
              <p className="mt-1 font-mono text-xs font-medium uppercase tracking-widest text-[var(--color-text-tertiary)]">
                {project.company}
              </p>
            )}
          </div>

          <p className="text-base text-[var(--color-text-secondary)] font-light leading-relaxed mb-6 flex-1">
            {project.description.replace(/;/g, ". ")}
          </p>

          <div className="mt-auto space-y-5">
            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs font-medium px-3 py-1.5 rounded border border-[var(--color-border)] text-[var(--color-text-tertiary)] hover:border-[var(--color-accent)]/30 hover:text-[var(--color-accent)] transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA */}
            {project.projectLink && (
              <a
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-sm font-semibold uppercase tracking-wider text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors duration-300 group/link"
              >
                View Project
                <Icon
                  type="external"
                  className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300"
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
