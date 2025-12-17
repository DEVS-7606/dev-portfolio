import type { ComponentType } from "react";
import type { LucideProps } from "lucide-react";
import { Github, Linkedin, Mail } from "lucide-react";
import { ArrowFatLinesDown } from "@phosphor-icons/react";

type SocialLink = {
  label: string;
  href: string;
  Icon: ComponentType<LucideProps>;
};

export default function Hero() {
  const accentColor = "rgb(37 99 235)";

  const socials: SocialLink[] = [
    {
      label: "Email",
      href: "mailto:devs95471@gmail.com",
      Icon: Mail,
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/dev-shah",
      Icon: Linkedin,
    },
    {
      label: "GitHub",
      href: "https://github.com",
      Icon: Github,
    },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-white py-24 md:h-screen">
      {/* Gradient overlay - more visible */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `radial-gradient(ellipse 1000px 1400px at 0% 0%, ${accentColor}60 0%, ${accentColor}40 15%, ${accentColor}20 35%, rgba(255, 255, 255, 0.4) 65%, rgba(255, 255, 255, 0.9) 85%, white 100%)`,
        }}
      />

      {/* SVG Background */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="hero-grid"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
          <pattern
            id="programming-symbols"
            x={0}
            y={0}
            width={400}
            height={400}
            patternUnits="userSpaceOnUse"
          >
            <text
              x={50}
              y={50}
              fill={accentColor}
              fontFamily="monospace"
              fontSize={24}
              transform="rotate(-15)"
            >
              {"</>"}
            </text>
            <text
              x={150}
              y={100}
              fill={accentColor}
              fontFamily="monospace"
              fontSize={20}
              transform="rotate(10)"
            >
              {"{}"}
            </text>
            <text
              x={250}
              y={80}
              fill={accentColor}
              fontFamily="monospace"
              fontSize={18}
              transform="rotate(-5)"
            >
              {"=>"}
            </text>
            <text
              x={100}
              y={200}
              fill={accentColor}
              fontFamily="monospace"
              fontSize={22}
              transform="rotate(15)"
            >
              {"[]"}
            </text>
            <text
              x={300}
              y={180}
              fill={accentColor}
              fontFamily="monospace"
              fontSize={20}
              transform="rotate(-10)"
            >
              {"<>"}
            </text>
            <text
              x={200}
              y={250}
              fill={accentColor}
              fontFamily="monospace"
              fontSize={24}
              transform="rotate(5)"
            >
              {"()"}
            </text>
            <text
              x={50}
              y={320}
              fill={accentColor}
              fontFamily="monospace"
              fontSize={18}
              transform="rotate(-8)"
            >
              {"::"}
            </text>
            <text
              x={350}
              y={300}
              fill={accentColor}
              fontFamily="monospace"
              fontSize={22}
              transform="rotate(12)"
            >
              {"=="}
            </text>
            <text
              x={150}
              y={350}
              fill={accentColor}
              fontFamily="monospace"
              fontSize={20}
              transform="rotate(-15)"
            >
              {"++"}
            </text>
            <text
              x={250}
              y={370}
              fill={accentColor}
              fontFamily="monospace"
              fontSize={24}
              transform="rotate(8)"
            >
              {";"}
            </text>
          </pattern>
        </defs>

        <rect
          fill="url(#programming-symbols)"
          width="100%"
          height="100%"
          opacity={0.35}
        />
        <rect
          fill="url(#hero-grid)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>

      {/* Content Container */}
      <div
        className="relative flex h-full w-full
       flex-col items-start justify-normal px-8 sm:px-12 md:px-24"
      >
        {/* Hero Text */}
        <div className="w-full">
          <h2 className="text-pretty text-xl sm:text-2xl md:text-5xl font-bold tracking-tight text-gray-700 animate-fade-in">
            Hello! 👋
          </h2>
          <h1 className="mt-6 sm:mt-8 md:mt-10 text-pretty text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-800 animate-fade-in animation-delay-200">
            I&apos;m <span style={{ color: accentColor }}>Dev Shah</span>
          </h1>
          <p className="mt-4 sm:mt-6 md:mt-8 text-pretty text-base sm:text-lg md:text-xl font-medium text-gray-600 animate-fade-in animation-delay-400">
            Software Engineer
          </p>
        </div>

        {/* Social Links - Bottom */}
        <div className="mt-8 flex gap-x-4 sm:gap-x-6 md:gap-x-8 text-gray-700 animate-fade-in animation-delay-600 pb-8 sm:pb-12 md:pb-24">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={
                s.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              aria-label={s.label}
              className="transition-colors duration-300 hover:text-blue-600"
            >
              <s.Icon
                className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8"
                aria-hidden="true"
              />
            </a>
          ))}
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About"
        className="group absolute bottom-60 left-1/2 z-10 -translate-x-1/2 rounded-full bg-white/90 p-3 shadow-[0_14px_30px_rgba(0,0,0,0.14)] ring-1 ring-black/5 backdrop-blur transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(0,0,0,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
      >
        <ArrowFatLinesDown
          size={28}
          weight="fill"
          className="text-gray-700 transition group-hover:text-blue-600 animate-arrow-float"
        />
      </a>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes arrowFloat {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(8px);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animate-arrow-float {
          animation: arrowFloat 1.6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
