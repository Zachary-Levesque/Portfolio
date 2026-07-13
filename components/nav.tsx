"use client";

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

  return (
    <header className="site-header sticky top-0 z-30 border-b border-accent-border bg-surface-blue">
      <nav
        className="mx-auto flex w-full max-w-6xl flex-wrap items-center gap-6 border-l-4 border-red px-6 py-5 font-mono text-sm"
        aria-label="Main navigation"
      >
        {navItems.map((item) => (
          <ViewTransitionLink
            key={item.href}
            href={item.href}
            className="relative text-muted transition-colors hover:text-accent"
          >
            {item.label}
            {pathname === item.href ? (
              <span className="active-nav-indicator" />
            ) : null}
          </ViewTransitionLink>
        ))}
      </nav>
    </header>
  );
}
