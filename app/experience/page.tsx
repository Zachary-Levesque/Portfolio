import { experience } from "@/content/experience";

export default function ExperiencePage() {
  const teachingAssistantEntries = experience.filter(
    (entry) =>
      entry.company === "University of Ottawa" &&
      entry.role.startsWith("Teaching Assistant")
  );
  const otherEntries = experience.filter(
    (entry) =>
      !(
        entry.company === "University of Ottawa" &&
        entry.role.startsWith("Teaching Assistant")
      )
  );
  const firstTeachingAssistantIndex = experience.findIndex(
    (entry) =>
      entry.company === "University of Ottawa" &&
      entry.role.startsWith("Teaching Assistant")
  );
  const orderedEntries = [
    ...otherEntries.slice(0, firstTeachingAssistantIndex),
    { type: "teaching-assistant-group" as const },
    ...otherEntries.slice(firstTeachingAssistantIndex)
  ];

  return (
    <div className="space-y-10">
      <section className="max-w-3xl">
        <p className="font-mono text-sm uppercase text-accent-muted">Timeline</p>
        <h1 className="mt-3 font-mono text-4xl font-semibold">Experience</h1>
      </section>

      <section className="relative space-y-6">
        {orderedEntries.map((entry) =>
          "type" in entry && entry.type === "teaching-assistant-group" ? (
            <article
              key="university-of-ottawa-ta-group"
              className="rounded-3xl border border-accent-border bg-surface p-6 transition-colors hover:bg-surface-blue"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <div>
                  <h2 className="font-mono text-2xl font-semibold text-foreground">
                    Teaching Assistant
                  </h2>
                  <p className="mt-1 text-accent-muted">
                    University of Ottawa
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-5">
                {teachingAssistantEntries.map((taEntry) => (
                  <div
                    key={taEntry.role}
                    className="border-t border-accent-border pt-5 first:border-t-0 first:pt-0"
                  >
                    <p className="font-mono text-sm text-muted">
                      {taEntry.dateRange}
                    </p>
                    <h3 className="mt-2 font-mono text-xl font-semibold text-foreground">
                      {taEntry.role}
                    </h3>

                    <ul className="mt-4 space-y-3 text-sm leading-6 text-muted">
                      {taEntry.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2">
                          <span className="shrink-0 text-red-muted">-</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {taEntry.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-accent-border bg-accent-soft px-2.5 py-1 font-mono text-xs text-accent-muted"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ) : (
            <article key={`${entry.company}-${entry.role}`} className="relative">
              <p className="font-mono text-sm text-muted">{entry.dateRange}</p>
              <div className="mt-2 rounded-3xl border border-accent-border bg-surface p-6 transition-colors hover:bg-surface-blue">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <h2 className="font-mono text-2xl font-semibold text-foreground">
                      {entry.role}
                    </h2>
                    <p className="mt-1 text-accent-muted">{entry.company}</p>
                  </div>
                </div>

                <ul className="mt-5 space-y-3 text-sm leading-6 text-muted">
                  {entry.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="shrink-0 text-red-muted">-</span>
                      <span>{bullet}</span>
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
          )
        )}
      </section>
    </div>
  );
}
