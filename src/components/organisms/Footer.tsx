import SocialLinks from "@/components/molecules/SocialLinks";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12 sm:py-16">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
          {/* Left — Branding */}
          <div className="flex flex-col items-center sm:items-start gap-3">
            <span className="font-mono text-xs font-semibold tracking-widest uppercase text-[var(--color-text-primary)]">
              Dev Shah
            </span>
            <span className="font-mono text-[10px] text-[var(--color-text-tertiary)] tracking-wider">
              © {currentYear} — All rights reserved
            </span>
          </div>

          {/* Right — Social */}
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
