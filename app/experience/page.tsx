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
  const entriesBeforeTeachingAssistant = otherEntries.slice(
    0,
    firstTeachingAssistantIndex
  );
  const entriesAfterTeachingAssistant = otherEntries.slice(
    firstTeachingAssistantIndex
  );
  const renderExperienceEntry = (entry: (typeof experience)[number]) => (
    <article key={`${entry.company}-${entry.role}`} className="relative">
      <p className="font-mono text-sm text-muted">{entry.dateRange}</p>
      <div className="mt-2 rounded-3xl border border-accent-border bg-surface p-5 transition-colors hover:bg-surface-blue sm:p-6">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <div className="min-w-0">
            <h2 className="font-mono text-xl font-semibold text-foreground sm:text-2xl">
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
  );

  return (
    <div className="space-y-10">
      <section className="max-w-3xl">
        <p className="font-mono text-sm uppercase text-accent-muted">Timeline</p>
        <h1 className="mt-3 font-mono text-3xl font-semibold sm:text-4xl">
          Experience
        </h1>
      </section>

      <section className="relative space-y-6">
        {entriesBeforeTeachingAssistant.map(renderExperienceEntry)}

        <article className="rounded-3xl border border-accent-border bg-surface p-5 transition-colors hover:bg-surface-blue sm:p-6">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <div className="min-w-0">
              <h2 className="font-mono text-xl font-semibold text-foreground sm:text-2xl">
                Teaching Assistant
              </h2>
              <p className="mt-1 text-accent-muted">University of Ottawa</p>
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
                <h3 className="mt-2 font-mono text-lg font-semibold text-foreground sm:text-xl">
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

        {entriesAfterTeachingAssistant.map(renderExperienceEntry)}
      </section>
    </div>
  );
}
