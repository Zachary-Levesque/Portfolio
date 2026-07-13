"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const pages = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Education", href: "/education" },
  { label: "Projects", href: "/projects" },
  { label: "Hobbies", href: "/hobbies" },
  { label: "Contact", href: "/contact" }
];

export function PageLinks() {
  const pathname = usePathname();
  const currentIndex = pages.findIndex((page) => page.href === pathname);

  if (currentIndex <= 0) {
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
      className="mt-16 grid gap-3 border-t border-accent-border pt-8 font-mono text-sm md:grid-cols-2"
    >
      {previousPage ? (
        <Link
          href={previousPage.href}
          className="rounded-3xl border border-accent-border bg-surface p-5 text-muted transition-colors hover:bg-surface-blue hover:text-accent"
        >
          <span className="block text-xs uppercase text-red-muted">
            Previous
          </span>
          <span className="mt-2 block text-lg text-foreground">
            {previousPage.label}
          </span>
        </Link>
      ) : (
        <div />
      )}

      {nextPage ? (
        <Link
          href={nextPage.href}
          className="rounded-3xl border border-accent-border bg-surface p-5 text-right text-muted transition-colors hover:bg-surface-blue hover:text-accent"
        >
          <span className="block text-xs uppercase text-red-muted">Next</span>
          <span className="mt-2 block text-lg text-foreground">
            {nextPage.label}
          </span>
        </Link>
      ) : null}
    </nav>
  );
}
