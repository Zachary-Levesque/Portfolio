import Link from "next/link";

export default function HomePage() {
  return (
    <section className="relative flex min-h-[60vh] items-center py-12">
      <div className="relative max-w-3xl">
        <div className="pointer-events-none absolute -left-10 top-8 h-48 w-72 rounded-full bg-accent/15 blur-3xl" />
        <h1 className="relative font-mono text-5xl font-semibold leading-tight text-foreground md:text-7xl">
          Zachary Levesque
        </h1>
        <p className="mt-5 text-xl leading-8 text-foreground">
          Electrical Engineering & Physics student building systems from silicon
          to software.
        </p>
        <p className="mt-6 leading-7 text-muted">
          Currently a Systems Verification Engineer at Ranovus, and CEO and
          co-founder of Seets, an IoT occupancy-tracking startup piloting at the
          University of Ottawa Heart Institute. Graduating Winter 2027, aiming
          for systems engineering or quantitative roles.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 font-mono text-sm">
          <Link
            href="/projects"
            className="rounded border border-accent bg-accent px-4 py-2 text-background transition-colors hover:border-accent-hover hover:bg-accent-hover"
          >
            View Projects
          </Link>
          <Link
            href="/about"
            className="rounded border border-border px-4 py-2 text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            About Me
          </Link>
        </div>
      </div>
    </section>
  );
}
