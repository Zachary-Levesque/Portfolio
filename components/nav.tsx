"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/#home", sectionId: "home" },
  { label: "About", href: "/#about", sectionId: "about" },
  { label: "Experience", href: "/#experience", sectionId: "experience" },
  { label: "Education", href: "/#education", sectionId: "education" },
  { label: "Projects", href: "/#projects", sectionId: "projects" },
  { label: "Skills", href: "/#skills", sectionId: "skills" },
  { label: "Hobbies", href: "/#hobbies", sectionId: "hobbies" },
  { label: "Contact", href: "/#contact", sectionId: "contact" }
];

export function Nav() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const displayedActiveSection =
    pathname === "/" ? activeSection : pathname.replace("/", "") || "home";

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    const sections = navItems
      .map((item) => document.getElementById(item.sectionId))
      .filter((section): section is HTMLElement => Boolean(section));

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75]
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return (
    <header className="site-header fixed inset-x-0 top-0 z-50 border-b border-accent-border bg-surface-blue">
      <nav
        className="mx-auto w-full max-w-6xl border-l-4 border-red px-4 py-4 font-mono text-sm sm:px-6 md:flex md:flex-wrap md:items-center md:gap-6 md:py-5"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between gap-3 md:hidden">
          <span className="truncate text-muted">
            {navItems.find((item) => item.sectionId === displayedActiveSection)
              ?.label ?? "Menu"}
          </span>
          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((current) => !current)}
            className="min-h-11 rounded-full border border-accent-border bg-surface px-4 text-accent transition-colors hover:bg-accent-soft"
          >
            Menu
          </button>
        </div>

        <div
          id="mobile-navigation"
          className={`${isMenuOpen ? "grid" : "hidden"} mt-4 gap-2 md:mt-0 md:flex md:gap-6`}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="relative block min-h-11 rounded-2xl border border-accent-border bg-surface px-4 py-3 text-muted transition-colors hover:bg-accent-soft hover:text-accent md:min-h-0 md:rounded-none md:border-0 md:bg-transparent md:p-0 md:hover:bg-transparent"
            >
              {item.label}
              {displayedActiveSection === item.sectionId ? (
                <span className="active-nav-indicator" />
              ) : null}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
