import Image from "next/image";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/content/projects";

export default function ProjectsPage() {
  return (
    <div className="space-y-10">
      <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-border bg-surface">
        <Image
          src="/images/presenting-seets.jpg"
          alt="Zachary presenting Seets"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1152px"
          className="object-cover"
        />
      </div>

      <section className="max-w-3xl">
        <p className="font-mono text-sm uppercase text-accent">Work</p>
        <h1 className="mt-3 font-mono text-4xl font-semibold">Projects</h1>
        <p className="mt-4 leading-7 text-muted">
          Systems projects across machine learning infrastructure, quantitative
          research, embedded products, AI agents, and simulation.
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </section>
    </div>
  );
}
