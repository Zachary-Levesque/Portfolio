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
  const experienceCardBaseClassName =
    "block rounded-3xl border border-accent-border bg-surface p-5 sm:p-6";
  const experienceCardClassName =
    `${experienceCardBaseClassName} transition-colors hover:bg-surface-blue`;
  const linkedExperienceCardClassName =
    `${experienceCardBaseClassName} transform-gpu transition-all hover:-translate-y-3 hover:bg-surface-blue focus-visible:-translate-y-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-border`;
  const renderExperienceContent = (entry: (typeof experience)[number]) => (
    <>
      <p className="font-mono text-sm text-muted">{entry.dateRange}</p>
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <div className="min-w-0">
          <h2 className="mt-2 font-mono text-xl font-semibold text-foreground sm:text-2xl">
            {entry.role}
          </h2>
          <p className="mt-1 text-red-muted">{entry.company}</p>
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
    </>
  );
  const renderExperienceEntry = (entry: (typeof experience)[number]) => (
    <article key={`${entry.company}-${entry.role}`} className="relative">
      {entry.websiteUrl ? (
        <a
          href={entry.websiteUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`Visit ${entry.company}`}
          className={linkedExperienceCardClassName}
        >
          {renderExperienceContent(entry)}
        </a>
      ) : (
        <div className={experienceCardClassName}>
          {renderExperienceContent(entry)}
        </div>
      )}
    </article>
  );

  const teachingAssistantCard = (
    <div className="rounded-3xl border border-accent-border bg-surface p-5 transition-colors hover:bg-surface-blue sm:p-6">
      <p className="font-mono text-sm text-muted">
        Sep 2025 to May 2026, Ottawa, ON
      </p>
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <div className="min-w-0">
          <h2 className="mt-2 font-mono text-xl font-semibold text-foreground sm:text-2xl">
            Teaching Assistant
          </h2>
          <p className="mt-1 text-red-muted">University of Ottawa</p>
        </div>
      </div>

      <div className="mt-5 space-y-5">
        {teachingAssistantEntries.map((taEntry) => (
          <div
            key={taEntry.role}
            className="border-t border-accent-border pt-5 first:border-t-0 first:pt-0"
          >
            <p className="font-mono text-sm text-muted">{taEntry.dateRange}</p>
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
    </div>
  );
  const teachingAssistantUrl = teachingAssistantEntries[0]?.websiteUrl;

  return (
    <div className="space-y-10">
      <section className="max-w-3xl">
        <p className="font-mono text-sm uppercase text-red-muted">Timeline</p>
        <h1 className="mt-3 font-mono text-3xl font-semibold sm:text-4xl">
          Experience
        </h1>
      </section>

      <section className="relative space-y-6">
        {entriesBeforeTeachingAssistant.map(renderExperienceEntry)}

        <article>
          {teachingAssistantUrl ? (
            <a
              href={teachingAssistantUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Visit University of Ottawa"
              className="block rounded-3xl transform-gpu transition-transform hover:-translate-y-3 focus-visible:-translate-y-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-border"
            >
              {teachingAssistantCard}
            </a>
          ) : (
            teachingAssistantCard
          )}
        </article>

        {entriesAfterTeachingAssistant.map(renderExperienceEntry)}
      </section>
    </div>
  );
}
