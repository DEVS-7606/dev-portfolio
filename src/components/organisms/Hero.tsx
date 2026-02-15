import HeroBackground from "@/components/molecules/HeroBackground";
import SocialLinks from "@/components/molecules/SocialLinks";
import ScrollIndicator from "@/components/atoms/ScrollIndicator";
import { ANIMATION_DELAYS } from "@/shared/constants";

export default function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden bg-white py-16 sm:py-20 md:py-24 md:h-screen"
      data-hero-section
      id="hero"
    >
      <HeroBackground />

      {/* Content Container */}
      <div
        className="relative flex gap-4 sm:gap-6 h-full w-full
       flex-col items-start justify-normal px-4 sm:px-8 md:px-12 lg:px-24"
      >
        {/* Hero Text */}
        <div className="w-full">
          <h2 className="text-pretty text-xl sm:text-2xl md:text-6xl font-bold tracking-tight text-gray-700 animate-fade-in">
            Hello! 👋
          </h2>
          <h1 className="mt-6 sm:mt-8 md:mt-10 text-pretty text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight text-gray-800 animate-fade-in animation-delay-200">
            I&apos;m <span style={{ color: "rgb(37 99 235)" }}>Dev Shah</span>
          </h1>
          <p className="mt-4 sm:mt-6 md:mt-8 text-pretty text-base sm:text-lg md:text-2xl font-medium text-gray-600 animate-fade-in animation-delay-400">
            Software Engineer
          </p>
        </div>

        {/* Social Links */}
        <SocialLinks animationDelay={ANIMATION_DELAYS.SLOW} />
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator href="#about" ariaLabel="Scroll to About" />

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
