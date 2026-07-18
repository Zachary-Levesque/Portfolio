"use client";

import { usePathname } from "next/navigation";
import { ViewTransitionLink } from "@/components/view-transition-link";

const pages = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Education", href: "/education" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Hobbies", href: "/hobbies" },
  { label: "Contact", href: "/contact" }
];

export function PageLinks() {
  const pathname = usePathname();
  const currentIndex = pages.findIndex((page) => page.href === pathname);

  if (currentIndex <= 0 || currentIndex === pages.length - 1) {
    return null;
  }

  const previousPage = currentIndex > 0 ? pages[currentIndex - 1] : null;
  const nextPage =
    currentIndex < pages.length - 1 ? pages[currentIndex + 1] : null;

  if (!previousPage && !nextPage) {
    return null;
  }

  return (
    <nav
      aria-label="Page navigation"
      className="mt-12 grid grid-cols-2 gap-3 border-t border-accent-border pt-6 font-mono text-sm sm:mt-16 sm:pt-8"
    >
      {previousPage ? (
        <ViewTransitionLink
          href={previousPage.href}
          className="min-h-11 rounded-3xl border border-accent-border bg-surface p-5 text-muted transition-colors hover:bg-surface-blue hover:text-accent"
        >
          <span className="block text-xs uppercase text-red-muted">
            Previous
          </span>
          <span className="mt-2 block text-lg text-foreground">
            {previousPage.label}
          </span>
        </ViewTransitionLink>
      ) : (
        <div />
      )}

      {nextPage ? (
        <ViewTransitionLink
          href={nextPage.href}
          className="min-h-11 rounded-3xl border border-accent-border bg-surface p-5 text-right text-muted transition-colors hover:bg-surface-blue hover:text-accent"
        >
          <span className="block text-xs uppercase text-red-muted">Next</span>
          <span className="mt-2 block text-lg text-foreground">
            {nextPage.label}
          </span>
        </ViewTransitionLink>
      ) : null}
    </nav>
  );
}
