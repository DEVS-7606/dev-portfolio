import HeroBackground from "@/components/molecules/HeroBackground";
import SocialLinks from "@/components/molecules/SocialLinks";
import ScrollIndicator from "@/components/atoms/ScrollIndicator";

export default function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24"
      data-hero-section
      id="hero"
    >
      <HeroBackground />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto w-full py-32">
        {/* Mono label */}
        <div className="animate-fade-in">
          <span className="font-mono text-base font-medium uppercase tracking-[0.3em] text-[var(--color-text-tertiary)]">
            Software Engineer
          </span>
        </div>

        {/* Name — massive, Nothing-style */}
        <h1 className="mt-6 text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-bold tracking-tight text-[var(--color-text-primary)] animate-fade-in animation-delay-200 leading-[0.9]">
          Dev
          <br />
          <span className="text-[var(--color-accent)]">Shah</span>
          {/* <span className="text-[var(--color-accent)] font-mono text-lg sm:text-xl md:text-2xl align-super ml-2">
            ●
          </span> */}
        </h1>

        {/* Tagline */}
        <p className="mt-8 max-w-lg text-base sm:text-lg font-body font-light text-[var(--color-text-secondary)] leading-relaxed animate-fade-in animation-delay-400">
          Building modern web experiences with React, TypeScript
          <br className="hidden sm:block" />
          &amp; clean code practices.
        </p>

        {/* Decorative line */}
        <div className="mt-8 w-12 h-px bg-[var(--color-accent)] opacity-60 animate-fade-in animation-delay-600" />

        {/* Social Links */}
        <div className="mt-8 animate-fade-in animation-delay-800">
          <SocialLinks />
        </div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator href="#about" ariaLabel="Scroll to About" />
    </section>
  );
}
