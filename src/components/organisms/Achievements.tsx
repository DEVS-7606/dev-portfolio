import { ACHIEVEMENTS_DATA } from "@/config/achievements.config";
import { Text } from "@/components/atoms/Text";

export default function Achievements() {
  return (
    <section id="achievements" className="scroll-mt-24 py-12 sm:py-16 md:py-20 border-t border-zinc-100 dark:border-zinc-800/50">
      <div className="flex flex-col items-center mb-12 text-center md:items-start md:text-left">
        <div className="text-[10px] font-bold uppercase tracking-wider text-accent mb-2">
          Milestones
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4 text-primary">
          Achievements
        </h2>
        <div className="prose prose-zinc dark:prose-invert max-w-2xl">
          <p className="text-base sm:text-lg leading-relaxed text-secondary">
            Highlights of notable achievements and recognition received for contributions to AI, development, and team success.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ACHIEVEMENTS_DATA.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-zinc-900 rounded-lg sm:rounded-xl border border-zinc-200 dark:border-zinc-800 p-4 sm:p-5 md:p-6 hover:shadow-lg transition-all duration-300 hover:border-zinc-300 dark:hover:border-zinc-700"
          >
            <Text
              variant="heading"
              className="text-lg sm:text-xl text-zinc-900 dark:text-zinc-100 mb-1"
              color="rgb(37 99 235)"
            >
              {item.title}
            </Text>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 italic mb-3">
              {item.organization}
            </p>
            <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800">
              <Text
                variant="body"
                className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed"
              >
                {item.description}
              </Text>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
