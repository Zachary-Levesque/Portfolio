import { experience } from "@/content/experience";

export default function ExperiencePage() {
  return (
    <div className="space-y-10">
      <section className="max-w-3xl">
        <p className="font-mono text-sm uppercase text-accent">Timeline</p>
        <h1 className="mt-3 font-mono text-4xl font-semibold">Experience</h1>
      </section>

      <section className="relative space-y-8 border-l border-border pl-6">
        {experience.map((entry) => (
          <article key={`${entry.company}-${entry.role}`} className="relative">
            <div className="absolute -left-[31px] top-1 h-3 w-3 rounded-full border border-accent bg-background" />
            <p className="font-mono text-sm text-accent">{entry.dateRange}</p>
            <div className="mt-2 rounded-lg border border-border bg-surface p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <div>
                  <h2 className="font-mono text-2xl font-semibold">
                    {entry.company}
                  </h2>
                  <p className="mt-1 text-foreground">{entry.role}</p>
                </div>
              </div>

              <ul className="mt-5 space-y-3 text-sm leading-6 text-muted">
                {entry.bullets.map((bullet) => (
                  <li key={bullet} className="pl-4">
                    <span className="-ml-4 text-accent">- </span>
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {entry.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded border border-border px-2 py-1 font-mono text-xs text-muted"
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
