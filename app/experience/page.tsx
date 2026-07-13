import { awards } from "@/content/awards";
import { education } from "@/content/education";
import { experience } from "@/content/experience";

export default function ExperiencePage() {
  return (
    <div className="space-y-16">
      <section className="max-w-3xl">
        <p className="font-mono text-sm uppercase text-accent-muted">Timeline</p>
        <h1 className="mt-3 font-mono text-4xl font-semibold">Experience</h1>
      </section>

      <section className="relative space-y-6">
        {experience.map((entry) => (
          <article key={`${entry.company}-${entry.role}`} className="relative">
            <p className="font-mono text-sm text-muted">{entry.dateRange}</p>
            <div className="mt-2 rounded-3xl border border-accent-border bg-surface p-6 transition-colors hover:bg-surface-blue">
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
                    <span className="-ml-4 text-red-muted">- </span>
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

      <section className="space-y-6">
        <div className="max-w-3xl">
          <p className="font-mono text-sm uppercase text-accent-muted">
            Academic background
          </p>
          <h2 className="mt-3 font-mono text-3xl font-semibold text-foreground">
            Education
          </h2>
        </div>

        {education.map((entry) => (
          <article
            key={`${entry.school}-${entry.credential}`}
            className="rounded-3xl border border-accent-border bg-surface p-6 transition-colors hover:bg-surface-blue"
          >
            <p className="font-mono text-sm text-muted">{entry.dateRange}</p>
            <h3 className="mt-2 font-mono text-2xl font-semibold text-foreground">
              {entry.school}
            </h3>
            <p className="mt-1 text-foreground">{entry.credential}</p>
            {entry.grade ? (
              <p className="mt-3 font-mono text-sm text-red-muted">
                Grade: {entry.grade}
              </p>
            ) : null}

            <ul className="mt-5 space-y-3 text-sm leading-6 text-muted">
              {entry.bullets.map((bullet) => (
                <li key={bullet} className="pl-4">
                  <span className="-ml-4 text-red-muted">- </span>
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
          </article>
        ))}
      </section>

      <section className="space-y-6">
        <div className="max-w-3xl">
          <p className="font-mono text-sm uppercase text-red-muted">
            Recognition
          </p>
          <h2 className="mt-3 font-mono text-3xl font-semibold text-foreground">
            Honors & Awards
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {awards.map((award) => (
            <article
              key={`${award.title}-${award.date}`}
              className="rounded-3xl border border-accent-border bg-surface p-6 transition-colors hover:bg-surface-blue"
            >
              <p className="font-mono text-sm text-muted">{award.date}</p>
              <h3 className="mt-2 font-mono text-xl font-semibold text-foreground">
                {award.title}
              </h3>
              <p className="mt-2 text-sm text-accent-muted">
                Issued by {award.issuer}
              </p>
              {award.associatedWith ? (
                <p className="mt-1 text-sm text-muted">
                  Associated with {award.associatedWith}
                </p>
              ) : null}
              <ul className="mt-4 space-y-2 text-sm leading-6 text-muted">
                {award.bullets.map((bullet) => (
                  <li key={bullet} className="pl-4">
                    <span className="-ml-4 text-red-muted">- </span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
