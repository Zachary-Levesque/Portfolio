import { experience } from "@/content/experience";

export default function ExperiencePage() {
  return (
    <div className="space-y-10">
      <section className="max-w-3xl">
        <p className="font-mono text-sm uppercase text-accent-muted">Timeline</p>
        <h1 className="mt-3 font-mono text-4xl font-semibold">Experience</h1>
      </section>

      <section className="relative space-y-6">
        {experience.map((entry) => (
          <article key={`${entry.company}-${entry.role}`} className="relative">
            <p className="font-mono text-sm text-muted">{entry.dateRange}</p>
            <div className="mt-2 rounded-3xl border border-border bg-surface p-6 transition-colors hover:border-accent-border">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <div>
                  <h2 className="font-mono text-2xl font-semibold text-foreground">
                    {entry.company}
                  </h2>
                  <p className="mt-1 text-foreground">{entry.role}</p>
                </div>
              </div>

              <ul className="mt-5 space-y-3 text-sm leading-6 text-muted">
                {entry.bullets.map((bullet) => (
                  <li key={bullet} className="pl-4">
                    <span className="-ml-4 text-accent-muted">- </span>
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {entry.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-accent-border bg-accent-soft px-2.5 py-1 font-mono text-xs text-accent-muted"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
