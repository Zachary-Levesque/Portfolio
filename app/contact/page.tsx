export default function ContactPage() {
  const links = [
    { label: "zlevesque93@gmail.com", href: "mailto:zlevesque93@gmail.com" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/zachary-levesque"
    },
    { label: "GitHub", href: "https://github.com/Zachary-Levesque" }
  ];

  return (
    <div className="max-w-3xl space-y-8">
      <section>
        <p className="font-mono text-sm uppercase text-red-muted">Contact</p>
        <h1 className="mt-3 font-mono text-3xl font-semibold text-foreground sm:text-4xl">
          Let&apos;s connect
        </h1>
        <p className="mt-4 leading-7 text-muted">
          I&apos;d love to learn more about you. Feel free to reach out.
        </p>
      </section>

      <section className="space-y-3 font-mono text-sm">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="block min-h-11 transform-gpu rounded-2xl border border-red-border bg-surface-blue px-5 py-4 text-accent transition-all hover:-translate-y-3 hover:bg-red-soft hover:text-red focus-visible:-translate-y-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-border"
          >
            {link.label}
          </a>
        ))}
        <a
          href="/files/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="block min-h-11 transform-gpu rounded-2xl border border-accent bg-accent px-5 py-4 text-base text-surface transition-all hover:-translate-y-3 hover:border-accent-hover hover:bg-accent-hover focus-visible:-translate-y-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-border"
        >
          Resume
        </a>
      </section>
    </div>
  );
}
