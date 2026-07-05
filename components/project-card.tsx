import type { Project } from "@/content/projects";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const topMetric = project.metrics[0];

  return (
    <article className="flex h-full flex-col rounded-lg border border-border bg-surface p-5 shadow-[0_18px_60px_rgba(0,0,0,0.18)] transition-colors hover:border-accent-hover/70">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase text-muted">
            {project.dateRange}
          </p>
          <h3 className="mt-2 font-mono text-xl font-semibold text-foreground">
            {project.title}
          </h3>
        </div>
      </div>

      <p
        className={
          featured
            ? "text-sm leading-6 text-muted"
            : "text-sm leading-6 text-muted md:min-h-24"
        }
      >
        {project.description}
      </p>

      {topMetric ? (
        <p className="mt-4 border-l-2 border-accent pl-3 font-mono text-sm text-accent">
          {topMetric}
        </p>
      ) : null}

      <div className="mt-5 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-accent/25 bg-accent/10 px-2.5 py-1 font-mono text-xs text-accent"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-auto flex gap-4 pt-6 font-mono text-sm">
        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="text-accent transition-colors hover:text-accent-hover"
          >
            GitHub
          </a>
        ) : null}
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="text-accent transition-colors hover:text-accent-hover"
          >
            Live
          </a>
        ) : null}
      </div>
    </article>
  );
}
