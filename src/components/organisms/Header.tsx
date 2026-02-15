import { useEffect, useState } from "react";

type NavItem = {
  label: string;
  href: string;
};

const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-transparent backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-5xl items-center px-4">
        <a href="#top" className="sr-only">
          Back to top
        </a>

        <nav className="hidden w-full items-center justify-center gap-8 font-mono text-base text-zinc-700 dark:text-zinc-200 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="border-b border-transparent pb-1 hover:border-zinc-900 hover:text-zinc-900 dark:hover:border-white dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto md:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-900 dark:hover:text-white"
            aria-label={
              mobileOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {mobileOpen ? (
                <path
                  d="M6 6L18 18M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7H20M4 12H20M4 17H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="bg-white/95 backdrop-blur dark:bg-zinc-950/95 md:hidden">
          <nav className="mx-auto flex max-w-5xl flex-col px-4 py-2 font-mono text-base">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-900 dark:hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
