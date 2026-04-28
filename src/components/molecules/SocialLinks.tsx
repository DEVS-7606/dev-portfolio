import type { ComponentType } from "react";
import type { LucideProps } from "lucide-react";
import { Github, Linkedin, Mail } from "lucide-react";
import { HERO_CONFIG } from "@/shared/constants";

type SocialLink = {
  label: string;
  href: string;
  iconType: "mail" | "linkedin" | "github";
};

const ICON_MAP: Record<SocialLink["iconType"], ComponentType<LucideProps>> = {
  mail: Mail,
  linkedin: Linkedin,
  github: Github,
};

interface SocialLinksProps {
  className?: string;
}

export default function SocialLinks({ className = "" }: SocialLinksProps) {
  return (
    <div className={`flex items-center gap-5 ${className}`}>
      {HERO_CONFIG.socialLinks.map((social: SocialLink) => {
        const Icon = ICON_MAP[social.iconType];

        return (
          <a
            key={social.label}
            href={social.href}
            target={social.href.startsWith("http") ? "_blank" : undefined}
            rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label={social.label}
            className="group flex items-center justify-center w-12 h-12 rounded-full border border-[var(--color-border)] hover:border-[var(--color-accent)] text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-all duration-300"
          >
            <Icon className="h-5 w-5" aria-hidden="true" />
          </a>
        );
      })}
    </div>
  );
}
