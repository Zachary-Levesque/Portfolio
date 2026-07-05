import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/content/projects";

const featuredProjectTitles = [
  "Mini Tensor Engine",
  "Adaptive Market Regime Framework",
  "Knovara",
  "Smart Sensing Seating System (Seets)"
];

const featuredProjects = featuredProjectTitles
  .map((title) => projects.find((project) => project.title === title))
  .filter((project) => project !== undefined);

export default function HomePage() {
  return (
    <div className="space-y-20">
      <section className="grid gap-10 py-10 md:grid-cols-[1.3fr_0.7fr] md:items-end">
        <div>
          <p className="font-mono text-sm uppercase text-accent">
            Systems engineering / quant-track portfolio
          </p>
          <h1 className="mt-5 max-w-4xl font-mono text-5xl font-semibold leading-tight text-foreground md:text-7xl">
            Zachary Levesque
          </h1>
          <p className="mt-5 max-w-3xl text-xl leading-8 text-foreground">
            Electrical Engineering & Physics student building systems from
            silicon to software
          </p>
          <p className="mt-6 max-w-3xl leading-7 text-muted">
            I like solving hard problems and building systems that work
            end-to-end, from raw input to working output. I am currently at
            Ranovus as a Systems Verification Engineer, while building Seets
            and Knovara on the side.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 font-mono text-sm">
            <Link
              href="/projects"
              className="rounded border border-accent bg-accent px-4 py-2 text-background transition-colors hover:border-foreground hover:bg-foreground"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="rounded border border-border px-4 py-2 text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="border-l border-border pl-5 font-mono text-sm text-muted">
          <p>Electrical Engineering & Physics</p>
          <p className="mt-3">Systems verification</p>
          <p className="mt-3">Quantitative systems</p>
          <p className="mt-3">Embedded and full-stack products</p>
        </div>
      </section>

      <section>
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-sm uppercase text-accent">Selected</p>
            <h2 className="mt-2 font-mono text-3xl font-semibold">
              Featured Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="font-mono text-sm text-accent transition-colors hover:text-foreground"
          >
            All projects
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} featured />
          ))}
        </div>
      </section>
    </div>
  );
}
