import { ACHIEVEMENTS_DATA } from "@/config/achievements.config";
import { Text } from "@/components/atoms/Text";

export default function Achievements() {
  return (
    <section id="achievements" className="scroll-mt-24 py-8 sm:py-10 md:py-12">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight mb-2">
        Achievements
      </h2>
      <div className="grid gap-4 sm:gap-6 mt-6">
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
