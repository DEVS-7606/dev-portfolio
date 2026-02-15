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
        className="absolute -inset-1 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl"
        style={{
          background: isMain
            ? `linear-gradient(135deg, ${colors.accent}60, #1e40af60)`
            : `${colors.accent}40`,
        }}
      />

      {/* Card Container */}
      <div
        className="relative rounded-[2rem] overflow-hidden h-full"
        style={{
          boxShadow: isMain
            ? "0 10px 40px rgba(0, 0, 0, 0.15)"
            : "0 4px 20px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.1)",
        }}
      >
        <CardBackground isMain={isMain} colors={colors} />
        <CardBorder isMain={isMain} colors={colors} />
        {!isMain && <HoverShadow colors={colors} />}

        {/* Content */}
        <div
          className={`relative p-6 lg:p-8 h-full flex flex-col ${isMain ? "text-white" : ""}`}
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
              isMain={isMain}
              colors={colors}
              value={scoreValue}
              label={scoreLabel}
              note={education.gpaNote}
            />
          )}

          {education.achievements && (
            <AchievementsList achievements={education.achievements} />
          )}
        </div>
      </div>
    </div>
  );
};

// Private Sub-Components
const CardBackground = ({
  isMain,
  colors,
}: {
  isMain: boolean;
  colors: CardColors;
}) => (
  <div className="absolute inset-0">
    {isMain ? (
      <>
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${colors.accent} 0%, #1e40af 100%)`,
          }}
        />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(255,255,255,0.8) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(255,255,255,0.5) 0%, transparent 50%)
            `,
          }}
        />
      </>
    ) : (
      <>
        <div className="absolute inset-0 bg-white dark:bg-zinc-900" />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: `radial-gradient(circle at 20% 0%, ${colors.accent}12 0%, transparent 60%)`,
          }}
        />
      </>
    )}
  </div>
);

const CardBorder = ({
  isMain,
  colors,
}: {
  isMain: boolean;
  colors: CardColors;
}) => (
  <div
    className={`absolute inset-0 rounded-[2rem] pointer-events-none transition-all duration-500 ${
      isMain
        ? "ring-1 ring-inset ring-white/20"
        : "ring-2 ring-inset group-hover:ring-[3px]"
    }`}
    style={
      !isMain
        ? ({
            ringColor: colors.accent + "30",
            boxShadow: `inset 0 1px 2px rgba(255,255,255,0.5)`,
          } as React.CSSProperties)
        : {}
    }
  />
);

const HoverShadow = ({ colors }: { colors: CardColors }) => (
  <div
    className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
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
      className={`mb-2 transition-all duration-300 ${
        isMain
          ? "text-3xl lg:text-4xl text-white"
          : "text-2xl lg:text-3xl text-zinc-900 dark:text-zinc-100"
      }`}
      color={!isMain ? colors.accent : undefined}
    >
      {degree}
    </Text>

    <div
      className={`flex items-center gap-2 text-base font-semibold mb-auto ${
        isMain ? "text-white/90" : "text-zinc-600 dark:text-zinc-400"
      }`}
    >
      <Icon type="building" className="w-4 h-4" />
      {institution}
    </div>
  </>
);

const AchievementsList = ({ achievements }: { achievements: string[] }) => (
  <div className="space-y-2.5 mt-6 pt-6 border-t border-white/20">
    {achievements.map((achievement, index) => (
      <AchievementItem key={index}>{achievement}</AchievementItem>
    ))}
  </div>
);
