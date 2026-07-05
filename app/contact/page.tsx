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
        <p className="font-mono text-sm uppercase text-accent">Contact</p>
        <h1 className="mt-3 font-mono text-4xl font-semibold text-foreground">
          Let&apos;s connect
        </h1>
        <p className="mt-4 leading-7 text-muted">
          I&apos;d love to learn more about you — feel free to reach out.
        </p>
      </section>

      <section className="space-y-3 font-mono text-sm">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="block text-accent transition-colors hover:text-accent-hover"
          >
            {link.label}
          </a>
        ))}
      </section>
    </div>
  );
}
