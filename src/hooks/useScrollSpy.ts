import { useEffect, useRef, useState } from "react";

export const useScrollSpy = () => {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const sections = ["hero", "about", "experience", "education", "projects"];
    const sectionVisibility = new Map<string, number>();

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const sectionId = entry.target.id;
        if (entry.isIntersecting) {
          sectionVisibility.set(sectionId, entry.intersectionRatio);
        } else {
          sectionVisibility.delete(sectionId);
        }
      });

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = window.setTimeout(() => {
        if (sectionVisibility.size === 0) return;

        let maxRatio = 0;
        let mostVisibleSection = "hero";

        sectionVisibility.forEach((ratio, sectionId) => {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            mostVisibleSection = sectionId;
          }
        });

        if (mostVisibleSection !== activeSection) {
          setActiveSection(mostVisibleSection);

          const newHash =
            mostVisibleSection === "hero" ? "" : `#${mostVisibleSection}`;

          window.history.replaceState(
            null,
            "",
            newHash
              ? window.location.pathname + newHash
              : window.location.pathname,
          );
        }
      }, 100);
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      // More forgiving margins - hero will trigger easier at top
      rootMargin: "0px 0px -40% 0px",
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
    });

    sections.forEach((id) => {
      const element =
        id === "hero"
          ? document.querySelector("[data-hero-section]")
          : document.querySelector(`#${id}`);

      if (element) {
        if (!element.id) {
          element.id = id;
        }
        observer.observe(element);
      }
    });

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      observer.disconnect();
    };
  }, [activeSection]);

  return activeSection;
};
