import { useEffect, useRef } from "react";

const OBSERVER_OPTIONS: IntersectionObserverInit = {
  root: null,
  rootMargin: "50px 0px -20px 0px",
  threshold: 0.01,
};

/**
 * Attaches an IntersectionObserver to the given ref element.
 * When the element enters the viewport, a "revealed" CSS class is added
 * to trigger scroll-reveal animations defined in index.css.
 *
 * Uses a generous rootMargin and low threshold to ensure elements
 * are revealed even when navigated to via anchor links.
 */
export function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    }, OBSERVER_OPTIONS);

    // Small delay to let the browser settle after hash navigation
    const timerId = window.setTimeout(() => {
      observer.observe(element);
    }, 50);

    return () => {
      window.clearTimeout(timerId);
      observer.disconnect();
    };
  }, []);

  return ref;
}
