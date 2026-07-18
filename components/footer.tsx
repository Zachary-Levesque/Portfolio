const footerLinks = [
  { label: "GitHub", href: "https://github.com/Zachary-Levesque" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/zachary-levesque" },
  { label: "Email", href: "mailto:zlevesque93@gmail.com" }
];

export function Footer() {
  return (
    <footer className="site-footer border-t border-accent-border bg-surface-blue">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center gap-4 px-4 py-5 text-sm text-muted sm:px-6">
        {footerLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="min-h-11 py-3 transition-colors hover:text-accent sm:min-h-0 sm:py-0"
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
