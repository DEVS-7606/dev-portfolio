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
  animationDelay?: string;
}

export default function SocialLinks({
  className = "",
  animationDelay,
}: SocialLinksProps) {
  return (
    <div
      className={`flex gap-x-4 sm:gap-x-6 md:gap-x-8 text-gray-700 animate-fade-in ${animationDelay} pb-8 sm:pb-12 md:pb-24 ${className}`}
    >
      {HERO_CONFIG.socialLinks.map((social: SocialLink) => {
        const Icon = ICON_MAP[social.iconType];

        return (
          <a
            key={social.label}
            href={social.href}
            target={social.href.startsWith("http") ? "_blank" : undefined}
            rel={
              social.href.startsWith("http") ? "noopener noreferrer" : undefined
            }
            aria-label={social.label}
            className="transition-colors duration-300 hover:text-blue-600"
          >
            <Icon
              className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8"
              aria-hidden="true"
            />
          </a>
        );
      })}
    </div>
  );
}
