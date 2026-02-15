import { ACCENT_COLOR } from "@/shared/constants";

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  gpa?: string;
  percentage?: string;
  gpaNote?: string;
  achievements?: string[];
}

const educationData: EducationItem[] = [
  {
    degree: "B.E in Electronics and Communication",
    institution: "LJIET",
    period: "2019 - 2023",
    gpa: "8.67",
    gpaNote: "Till 6th semester",
    achievements: [
      "Strong academic performance in engineering program",
      "Focus on communication and electronics systems",
    ],
  },
  {
    degree: "HSC (12th)",
    institution: "Divine Life School",
    period: "Completed 2019",
    percentage: "52%",
  },
  {
    degree: "SSC (10th)",
    institution: "Divine Life School",
    period: "Completed 2017",
    percentage: "73.17%",
  },
];

// Secondary accents
const SECONDARY = {
  hsc: { accent: "#4f46e5", soft: "rgba(79,70,229,0.10)" }, // indigo
  ssc: { accent: "#059669", soft: "rgba(5,150,105,0.10)" }, // emerald
};

function getCardColors(index: number) {
  if (index === 0)
    return { accent: ACCENT_COLOR, soft: "rgba(37,99,235,0.10)" };
  if (index === 1) return SECONDARY.hsc;
  return SECONDARY.ssc;
}

export default function Education() {
  return (
    <section id="education" className="scroll-mt-24 py-10">
      <h2 className="text-2xl font-semibold tracking-tight mb-8">Education</h2>

      <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 auto-rows-fr">
        {educationData.map((edu, index) => {
          const colors = getCardColors(index);
          const isMain = index === 0;

          return (
            <div
              key={index}
              className={`
                group relative transition-all duration-700 ease-out
                ${isMain ? "lg:col-span-4 lg:row-span-2" : "lg:col-span-2"}
                hover:-translate-y-2
              `}
            >
              {/* Enhanced glow effect */}
              <div
                className="absolute -inset-1 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl"
                style={{
                  background: isMain
                    ? `linear-gradient(135deg, ${ACCENT_COLOR}60, #1e40af60)`
                    : `${colors.accent}40`,
                }}
              />

              <div
                className="relative rounded-[2rem] overflow-hidden h-full"
                style={{
                  boxShadow: isMain
                    ? "0 10px 40px rgba(0, 0, 0, 0.15)"
                    : "0 4px 20px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.1)",
                }}
              >
                {/* Background */}
                <div className="absolute inset-0">
                  {isMain ? (
                    <>
                      <div
                        className="absolute inset-0"
                        style={{
                          background: `linear-gradient(135deg, ${ACCENT_COLOR} 0%, #1e40af 100%)`,
                        }}
                      />
                      {/* Light spots for main card */}
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
                      {/* Subtle gradient on hover */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                        style={{
                          background: `radial-gradient(circle at 20% 0%, ${colors.accent}12 0%, transparent 60%)`,
                        }}
                      />
                    </>
                  )}
                </div>

                {/* Enhanced border with color accent */}
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
                          boxShadow: `inset 0 1px 2px rgba(255,255,255,0.5)`, // inner highlight
                        } as React.CSSProperties)
                      : {}
                  }
                />

                {/* Outer shadow on hover for smaller cards */}
                {!isMain && (
                  <div
                    className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      boxShadow: `0 20px 40px ${colors.accent}20, 0 10px 20px ${colors.accent}15`,
                    }}
                  />
                )}

                <div
                  className={`relative p-6 lg:p-8 h-full flex flex-col ${isMain ? "text-white" : ""}`}
                >
                  {/* Top meta */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-3 rounded-2xl transition-all duration-500 ${
                          isMain
                            ? "bg-white/20 backdrop-blur-sm"
                            : "bg-zinc-100 dark:bg-zinc-800 group-hover:scale-110"
                        }`}
                        style={
                          !isMain
                            ? {
                                boxShadow: `0 4px 12px ${colors.accent}20`,
                              }
                            : {}
                        }
                      >
                        <svg
                          className="w-6 h-6"
                          style={{ color: isMain ? "white" : colors.accent }}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          {isMain ? (
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                            />
                          ) : (
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                            />
                          )}
                        </svg>
                      </div>

                      <div>
                        <div
                          className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${
                            isMain
                              ? "text-white/70"
                              : "text-zinc-500 dark:text-zinc-400"
                          }`}
                        >
                          {isMain
                            ? "Bachelor Degree"
                            : index === 1
                              ? "Higher Secondary"
                              : "Secondary"}
                        </div>

                        {/* Period badge with subtle shadow */}
                        <span
                          className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full transition-all duration-300 ${
                            isMain
                              ? "bg-white/20 backdrop-blur-sm text-white"
                              : "text-white group-hover:shadow-lg"
                          }`}
                          style={
                            !isMain
                              ? {
                                  backgroundColor: colors.accent,
                                  boxShadow: `0 2px 8px ${colors.accent}40`,
                                }
                              : {}
                          }
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-current opacity-75" />
                          {edu.period}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className={`font-black mb-2 leading-tight tracking-tight transition-all duration-300 ${
                      isMain
                        ? "text-3xl lg:text-4xl text-white"
                        : "text-2xl lg:text-3xl text-zinc-900 dark:text-zinc-100"
                    }`}
                    style={!isMain ? { color: colors.accent } : {}}
                  >
                    {edu.degree}
                  </h3>

                  {/* Institution */}
                  <div
                    className={`flex items-center gap-2 text-base font-semibold mb-auto ${
                      isMain
                        ? "text-white/90"
                        : "text-zinc-600 dark:text-zinc-400"
                    }`}
                  >
                    <svg
                      className="w-4 h-4 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                    {edu.institution}
                  </div>

                  {/* Score card with enhanced shadow */}
                  {(edu.gpa || edu.percentage) && (
                    <div
                      className={`mt-6 ${isMain ? "" : "pt-4 border-t border-zinc-200 dark:border-zinc-800"}`}
                    >
                      <div
                        className={`rounded-2xl p-5 transition-all duration-500 group-hover:scale-105 ${
                          isMain
                            ? "bg-white/15 backdrop-blur-xl ring-1 ring-white/20"
                            : "bg-zinc-50 dark:bg-zinc-800/50 ring-2"
                        }`}
                        style={
                          !isMain
                            ? {
                                backgroundColor: colors.soft,
                                borderColor: colors.accent + "30",
                                boxShadow: `0 4px 16px ${colors.accent}15, inset 0 1px 0 rgba(255,255,255,0.5)`,
                              }
                            : {}
                        }
                      >
                        <div
                          className={`text-4xl lg:text-5xl font-black mb-1 ${isMain ? "text-white" : ""}`}
                          style={!isMain ? { color: colors.accent } : {}}
                        >
                          {edu.gpa ?? edu.percentage}
                        </div>
                        <div
                          className={`text-[10px] font-bold uppercase tracking-wider ${
                            isMain
                              ? "text-white/80"
                              : "text-zinc-600 dark:text-zinc-400"
                          }`}
                        >
                          {edu.gpa ? "GPA Score" : "Percentage"}
                        </div>
                        {edu.gpaNote && isMain && (
                          <div className="text-xs mt-1.5 text-white/70">
                            {edu.gpaNote}
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Achievements */}
                  {edu.achievements && (
                    <div className="space-y-2.5 mt-6 pt-6 border-t border-white/20">
                      {edu.achievements.map((achievement, achIndex) => (
                        <div
                          key={achIndex}
                          className="flex items-start gap-3 text-sm font-medium bg-white/10 backdrop-blur-md rounded-xl px-4 py-3 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:translate-x-1"
                        >
                          <svg
                            className="w-5 h-5 flex-shrink-0 text-white/90"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-white/95 leading-relaxed">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
