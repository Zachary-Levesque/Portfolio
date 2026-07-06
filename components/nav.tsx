import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Hobbies", href: "/hobbies" },
  { label: "Contact", href: "/contact" }
];

export function Nav() {
  return (
    <header className="border-b border-border bg-surface">
      <nav
        className="mx-auto flex w-full max-w-6xl flex-wrap items-center gap-4 px-6 py-5 font-mono text-sm"
        aria-label="Main navigation"
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-muted transition-colors hover:text-accent"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
