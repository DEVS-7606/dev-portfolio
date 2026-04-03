import { PROJECTS_DATA, PROJECT_COLOR_THEMES } from "@/config/projects.config";
import { Text } from "@/components/atoms/Text";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-8 sm:py-10 md:py-12">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight mb-2">
        Projects
      </h2>
      <div className="prose prose-zinc dark:prose-invert max-w-none mb-6 sm:mb-8">
        <p className="text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          Key projects showcasing hands-on experience with modern frontend
          technologies and real-world product development.
        </p>
      </div>

      <div className="grid gap-4 sm:gap-6">
        {PROJECTS_DATA.map((project, index) => {
          const colors = PROJECT_COLOR_THEMES[index] ?? PROJECT_COLOR_THEMES[0];
          return (
            <div
              key={index}
              className="bg-white dark:bg-zinc-900 rounded-lg sm:rounded-xl border border-zinc-200 dark:border-zinc-800 p-4 sm:p-5 md:p-6 hover:shadow-lg transition-all duration-300 hover:border-zinc-300 dark:hover:border-zinc-700"
            >
              {/* Title & Company */}
              <div className="flex items-center gap-3 flex-wrap">
                <Text
                  variant="heading"
                  className="text-lg sm:text-xl text-zinc-900 dark:text-zinc-100"
                  color={colors.accent}
                >
                  {project.title}
                </Text>
                {project.projectLink && (
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-blue-600 dark:text-blue-400 underline hover:text-blue-700 dark:hover:text-blue-300"
                  >
                    Project Link
                  </a>
                )}
              </div>
              {project.company && (
                <p className="text-sm text-zinc-500 dark:text-zinc-400 italic mb-3">
                  Developed as part of my role at {project.company}
                </p>
              )}

              {/* Description bullets */}
              <div className="space-y-2 mt-3 pt-3 border-t border-zinc-100 dark:border-zinc-800">
                {project.description.split(";").map((point, i) => (
                  <div key={i} className="flex items-start gap-2 sm:gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600 mt-1.5 sm:mt-2 flex-shrink-0" />
                    <Text
                      variant="body"
                      className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed"
                    >
                      {point.trim()}
                    </Text>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 bg-zinc-50 dark:bg-zinc-800/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
