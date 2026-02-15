import { aboutMe, skills } from "@/data";

const About = () => {
  return (
    <section id="about" className="scroll-mt-24 py-12 md:py-20">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
        {/* About Me Title */}
        <div className="relative">
          <h2 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
            About <span className="text-zinc-500 dark:text-zinc-600">Me</span>
          </h2>
          <div className="mt-4 h-1.5 w-20 bg-blue-600 rounded-full"></div>
        </div>

        {/* About Me Content */}
        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            {aboutMe}
          </p>
        </div>
      </div>

      {/* Technical Skills Section */}
      <div className="mt-24">
        <h3 className="mb-12 text-3xl font-bold tracking-tight text-center text-zinc-900 dark:text-zinc-100">
          What I Do
        </h3>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="group flex flex-col items-center justify-center gap-2 transition-transform hover:-translate-y-2"
              >
                <div className="text-6xl text-zinc-400 transition-colors group-hover:text-zinc-900 dark:group-hover:text-zinc-100">
                  <Icon />
                </div>
                <span className="text-sm font-medium text-zinc-500 uppercase tracking-wider group-hover:text-zinc-700 dark:text-zinc-400 dark:group-hover:text-zinc-200">
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
