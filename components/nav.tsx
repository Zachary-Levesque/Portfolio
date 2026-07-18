"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { ViewTransitionLink } from "@/components/view-transition-link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Education", href: "/education" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Hobbies", href: "/hobbies" },
  { label: "Contact", href: "/contact" }
];

export function Nav() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="site-header sticky top-0 z-30 border-b border-accent-border bg-surface-blue">
      <nav
        className="mx-auto w-full max-w-6xl border-l-4 border-red px-4 py-4 font-mono text-sm sm:px-6 md:flex md:flex-wrap md:items-center md:gap-6 md:py-5"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between gap-3 md:hidden">
          <span className="truncate text-muted">
            {navItems.find((item) => item.href === pathname)?.label ?? "Menu"}
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
            <ViewTransitionLink
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="relative block min-h-11 rounded-2xl border border-accent-border bg-surface px-4 py-3 text-muted transition-colors hover:bg-accent-soft hover:text-accent md:min-h-0 md:rounded-none md:border-0 md:bg-transparent md:p-0 md:hover:bg-transparent"
            >
              {item.label}
              {pathname === item.href ? (
                <span className="active-nav-indicator" />
              ) : null}
            </ViewTransitionLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
