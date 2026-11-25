import { useEffect, useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import TrunkThumb from "@/components/atoms/TrunkThumb";

const RESUME_PDF_PATH = "/Dev_Resume_FS.pdf";

type NavItem = {
  label: string;
  href: string;
};

const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // True while the hero fills the screen: the logo slot shows the Trunk
  // thumbnail instead of the name.
  const [atHero, setAtHero] = useState(true);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const hero = document.getElementById("hero");
      const heroHeight = hero?.offsetHeight ?? window.innerHeight;
      setAtHero(window.scrollY < heroHeight * 0.5);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "border-b border-[var(--color-border)] backdrop-blur-md"
        : "bg-transparent"
        }`}
      style={
        scrolled
          ? {
            backgroundColor:
              "color-mix(in srgb, var(--color-bg-primary) 20%, transparent)",
          }
          : undefined
      }
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-12">
        {/* Logo / Name */}
        <a
          href="#hero"
          aria-label="Dev Shah, back to top"
          className="grid items-center font-mono text-sm font-semibold tracking-widest uppercase text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors duration-300"
        >
          <span
            className={`col-start-1 row-start-1 transition-all duration-500 ${atHero ? "-translate-y-2 opacity-0" : "translate-y-0 opacity-100"
              }`}
          >
            Dev Shah
          </span>
          <span
            aria-hidden="true"
            className={`col-start-1 row-start-1 justify-self-start transition-all duration-500 ${atHero ? "scale-100 opacity-100" : "scale-75 opacity-0"
              }`}
          >
            <TrunkThumb size={40} active={atHero} />
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-xs font-medium uppercase tracking-widest text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-300 relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--color-accent)] group-hover:w-full transition-all duration-300" />
            </a>
          ))}

          {/* Resume Button */}
          <a
            href={RESUME_PDF_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs font-medium uppercase tracking-widest px-3 py-1.5 rounded border border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white transition-all duration-300"
          >
            Resume
          </a>
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle — Nothing dot style */}
          <button
            type="button"
            onClick={toggleTheme}
            className="relative w-8 h-8 flex items-center justify-center rounded-full border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all duration-300 group"
            aria-label="Toggle theme"
          >
            <div
              className={`w-3 h-3 rounded-full transition-all duration-500 ${theme === "dark"
                ? "bg-[var(--color-text-primary)] scale-100"
                : "bg-[var(--color-accent)] scale-75"
                }`}
            />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="flex items-center justify-center w-8 h-8 rounded-full border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors duration-300 md:hidden"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <div className="flex flex-col items-center justify-center gap-1">
              <span
                className={`block w-3 h-px bg-[var(--color-text-primary)] transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[3px]" : ""
                  }`}
              />
              <span
                className={`block w-3 h-px bg-[var(--color-text-primary)] transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[2px]" : ""
                  }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <nav className="flex flex-col px-6 pb-6 pt-2 bg-[var(--color-bg-primary)]/95 border-b border-[var(--color-border)]">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="py-3 font-mono text-xs font-medium uppercase tracking-widest text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] border-b border-[var(--color-border)] last:border-b-0 transition-colors duration-300"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}

          {/* Resume Link — Mobile */}
          <a
            href={RESUME_PDF_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 font-mono text-xs font-medium uppercase tracking-widest text-[var(--color-accent)] hover:text-[var(--color-text-primary)] transition-colors duration-300"
            onClick={() => setMobileOpen(false)}
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
