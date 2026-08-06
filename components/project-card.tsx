import Image from "next/image";
import type { Project } from "@/content/projects";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const topMetric = project.metrics[0];
  const projectUrl = project.liveUrl ?? project.githubUrl;
  const cardClassName =
    "flex h-full min-w-0 flex-col rounded-3xl border border-accent-border bg-surface p-5 transition-colors hover:bg-surface-blue sm:p-6";
  const cardContent = (
    <>
      <div className="mb-4 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="font-mono text-xs uppercase text-muted">
            {project.dateRange}
          </p>
          <h3 className="mt-2 font-mono text-lg font-semibold text-foreground sm:text-xl">
            {project.title}
          </h3>
        </div>
        {project.logoPath ? (
          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl border border-accent-border bg-background">
            <Image
              src={project.logoPath}
              alt={`${project.title} logo`}
              fill
              sizes="56px"
              className="object-contain p-1"
            />
          </div>
        ) : null}
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
        <p className="mt-4 border-l-2 border-red-border pl-3 font-mono text-sm text-red-muted">
          {topMetric}
        </p>
      ) : null}

      <div className="mt-5 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-accent-border bg-accent-soft px-2.5 py-1 font-mono text-xs text-accent-muted"
          >
            {tech}
          </span>
        ))}
      </div>

      {projectUrl ? (
        <p className="mt-auto pt-6 font-mono text-sm text-accent">
          View project
        </p>
      ) : null}
    </>
  );

  return projectUrl ? (
    <article className="h-full">
      <a
        href={projectUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open ${project.title}`}
        className={cardClassName}
      >
        {cardContent}
      </a>
    </article>
  ) : (
    <article className={cardClassName}>{cardContent}</article>
  );
}
