import { CardHeader } from "@/components/molecules/CardHeader";
import { ScoreDisplay } from "@/components/molecules/ScoreDisplay";
import { AchievementItem } from "@/components/molecules/AchievementItem";
import { Icon } from "@/components/atoms/Icon";
import { Text } from "@/components/atoms/Text";
import {
  getCardColors,
  isMainCard,
  getGridLayout,
  getCardLabel,
  getDisplayScore,
  getScoreLabel,
} from "@/utils/education.utils";
import type { EducationItem, CardColors } from "@/types/education.types";

interface EducationCardProps {
  education: EducationItem;
  index: number;
}

export const EducationCard = ({ education, index }: EducationCardProps) => {
  const colors = getCardColors(index);
  const isMain = isMainCard(index);
  const gridLayout = getGridLayout(index);
  const label = getCardLabel(index);
  const scoreValue = getDisplayScore(education.gpa, education.percentage);
  const scoreLabel = getScoreLabel(education.gpa);

  return (
    <div
      className={`
        group relative transition-all duration-700 ease-out
        ${gridLayout}
        hover:-translate-y-2
      `}
    >
      {/* Glow Effect */}
      <div
        className="absolute -inset-1 rounded-xl sm:rounded-2xl lg:rounded-[2rem] opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl"
        style={{
          background: `${colors.accent}40`,
        }}
      />

      {/* Card Container */}
      <div
        className="relative rounded-xl sm:rounded-2xl lg:rounded-[2rem] overflow-hidden h-full shadow-[0_4px_20px_rgba(0,0,0,0.08),0_1px_3px_rgba(0,0,0,0.1)]"
      >
        <CardBackground colors={colors} />
        <CardBorder colors={colors} />
        <HoverShadow colors={colors} />

        {/* Content */}
        <div
          className={`relative p-4 sm:p-5 md:p-6 lg:p-8 md:h-full flex flex-col`}
        >
          <CardHeader
            isMain={isMain}
            colors={colors}
            period={education.period}
            label={label}
          />

          <CardTitle
            isMain={isMain}
            colors={colors}
            degree={education.degree}
            institution={education.institution}
          />

          {scoreValue && (
            <ScoreDisplay
              colors={colors}
              value={scoreValue}
              label={scoreLabel}
              note={education.gpaNote}
            />
          )}

          {education.achievements && (
            <AchievementsList achievements={education.achievements} colors={colors} />
          )}
        </div>
      </div>
    </div>
  );
};

// Private Sub-Components
const CardBackground = ({
  colors,
}: {
  colors: CardColors;
}) => (
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-white dark:bg-zinc-900" />
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
      style={{
        background: `radial-gradient(circle at 20% 0%, ${colors.accent}12 0%, transparent 60%)`,
      }}
    />
  </div>
);

const CardBorder = ({
  colors,
}: {
  colors: CardColors;
}) => (
  <div
    className="absolute inset-0 rounded-xl sm:rounded-2xl lg:rounded-[2rem] pointer-events-none transition-all duration-500 ring-2 ring-inset group-hover:ring-[3px]"
    style={{
      ringColor: colors.accent + "30",
      boxShadow: `inset 0 1px 2px rgba(255,255,255,0.5)`,
    } as React.CSSProperties}
  />
);

const HoverShadow = ({ colors }: { colors: CardColors }) => (
  <div
    className="absolute inset-0 rounded-xl sm:rounded-2xl lg:rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
    style={{
      boxShadow: `0 20px 40px ${colors.accent}20, 0 10px 20px ${colors.accent}15`,
    }}
  />
);

const CardTitle = ({
  isMain,
  colors,
  degree,
  institution,
}: {
  isMain: boolean;
  colors: CardColors;
  degree: string;
  institution: string;
}) => (
  <>
    <Text
      variant="heading"
      className={`mb-2 transition-all duration-300 ${isMain
        ? "text-2xl sm:text-3xl lg:text-4xl"
        : "text-xl sm:text-2xl lg:text-3xl"
        } text-zinc-900 dark:text-zinc-100`}
      color={colors.accent}
    >
      {degree}
    </Text>

    <div
      className="flex items-center gap-2 text-sm sm:text-base font-semibold mb-auto text-zinc-600 dark:text-zinc-400"
    >
      <Icon type="building" className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
      {institution}
    </div>
  </>
);

const AchievementsList = ({
  achievements,
  colors
}: {
  achievements: string[],
  colors: CardColors
}) => (
  <div className="space-y-2 sm:space-y-2.5 mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-zinc-200 dark:border-zinc-800">
    {achievements.map((achievement, index) => (
      <AchievementItem key={index} colors={colors}>{achievement}</AchievementItem>
    ))}
  </div>
);
