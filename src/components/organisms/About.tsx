import { aboutMe, skills } from "@/data";

const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-24 py-10 sm:py-12 md:py-16 lg:py-20"
    >
      <div className="grid grid-cols-1 gap-8 sm:gap-10 md:gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
        {/* About Me Title */}
        <div className="relative">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            About <span className="text-zinc-500 dark:text-zinc-600">Me</span>
          </h2>
          <div className="mt-3 sm:mt-4 h-1.5 w-16 sm:w-20 bg-blue-600 rounded-full"></div>
        </div>

        {/* About Me Content */}
        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <p className="text-base sm:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            {aboutMe}
          </p>
        </div>
      </div>

      {/* Technical Skills Section */}
      <div className="mt-16 sm:mt-20 md:mt-24">
        <h3 className="mb-8 sm:mb-10 md:mb-12 text-2xl sm:text-3xl font-bold tracking-tight text-center text-zinc-900 dark:text-zinc-100">
          What I Do
        </h3>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="group flex flex-col items-center justify-center gap-2 transition-transform hover:-translate-y-2"
              >
                <div className="text-5xl sm:text-6xl text-zinc-400 transition-colors group-hover:text-zinc-900 dark:group-hover:text-zinc-100">
                  <Icon />
                </div>
                <span className="text-xs sm:text-sm font-medium text-zinc-500 uppercase tracking-wider group-hover:text-zinc-700 dark:text-zinc-400 dark:group-hover:text-zinc-200">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
