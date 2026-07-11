import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const highlights = [
    { label: "Systems verification", tone: "blue" },
    { label: "Embedded protocols", tone: "blue" },
    { label: "Startup builder", tone: "red" }
  ];

  return (
    <section className="flex min-h-[65vh] items-center py-16">
      <div className="grid w-full gap-10 md:grid-cols-[1fr_340px] md:items-center">
        <div className="max-w-3xl rounded-3xl border border-accent-border bg-surface p-8">
          <p className="mb-5 font-mono text-sm uppercase text-red-muted">
            Electrical engineering portfolio
          </p>
          <h1 className="font-mono text-5xl font-semibold leading-tight text-foreground md:text-7xl">
            Zachary Levesque
          </h1>
          <p className="mt-5 text-xl leading-8 text-foreground">
            Electrical Engineering & Physics student building systems from
            silicon to software.
          </p>
          <p className="mt-6 leading-7 text-muted">
            Currently a Systems Verification Engineer at Ranovus, and CEO and
            co-founder of Seets, an IoT occupancy-tracking startup piloting at
            the University of Ottawa Heart Institute. Graduating Winter 2027,
            aiming for systems engineering or quantitative roles.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 font-mono text-xs">
            {highlights.map((item) => (
              <span
                key={item.label}
                className={
                  item.tone === "red"
                    ? "rounded-full border border-red-border bg-red-soft px-3 py-1.5 text-red-muted"
                    : "rounded-full border border-accent-border bg-accent-soft px-3 py-1.5 text-accent-muted"
                }
              >
                {item.label}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3 font-mono text-sm">
            <Link
              href="/about"
              className="rounded-full border border-accent bg-accent px-5 py-2.5 text-surface transition-colors hover:border-accent-hover hover:bg-accent-hover"
            >
              About Me
            </Link>
            <Link
              href="/experience"
              className="rounded-full border border-accent-border bg-surface px-5 py-2.5 text-accent transition-colors hover:border-accent hover:bg-accent-soft"
            >
              View Experience
            </Link>
            <Link
              href="/projects"
              className="rounded-full border border-red-border bg-surface px-5 py-2.5 text-red transition-colors hover:border-red hover:bg-red-soft"
            >
              View Projects
            </Link>
          </div>
        </div>

        <div className="relative aspect-[4/5] w-full max-w-80 overflow-hidden rounded-3xl border border-accent-border bg-surface-blue p-2">
          <Image
            src="/images/professional.jpeg"
            alt="Professional portrait of Zachary Levesque"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 320px"
            className="rounded-[1.25rem] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
