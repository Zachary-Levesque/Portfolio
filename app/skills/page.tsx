import { skillGroups } from "@/content/skills";

export default function SkillsPage() {
  return (
    <div className="space-y-10">
      <section className="max-w-3xl">
        <p className="font-mono text-sm uppercase text-accent-muted">
          Technical range
        </p>
        <h1 className="mt-3 font-mono text-3xl font-semibold text-foreground sm:text-4xl">
          Skills
        </h1>
        <p className="mt-4 leading-7 text-muted">
          A practical toolkit across software, hardware, modeling, embedded
          systems, and technical leadership.
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((group) => (
          <article
            key={group.category}
            className="rounded-3xl border border-accent-border bg-surface p-5 transition-colors hover:bg-surface-blue sm:p-6"
          >
            <h2 className="font-mono text-xl font-semibold text-foreground">
              {group.category}
            </h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-accent-border bg-accent-soft px-3 py-1.5 font-mono text-xs text-accent-muted"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
