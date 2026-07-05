const footerLinks = [
  { label: "GitHub", href: "https://github.com/placeholder" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/placeholder" },
  { label: "Email", href: "mailto:placeholder@example.com" }
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center gap-4 px-6 py-5 text-sm text-muted">
        {footerLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="transition-colors hover:text-foreground"
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
