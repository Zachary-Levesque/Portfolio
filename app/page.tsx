import Image from "next/image";
import { ViewTransitionLink } from "@/components/view-transition-link";

export default function HomePage() {
  return (
    <section className="flex min-h-[65vh] items-center py-8 sm:py-16">
      <div className="grid w-full gap-8 md:grid-cols-[minmax(0,1fr)_340px] md:items-center md:gap-10">
        <div className="min-w-0 max-w-3xl rounded-3xl border border-accent-border bg-surface p-5 sm:p-8">
          <h1 className="font-mono text-4xl font-semibold leading-tight text-foreground sm:text-5xl md:text-7xl">
            Zachary Levesque
          </h1>
          <p className="mt-5 text-lg leading-8 text-foreground sm:text-xl">
            Electrical Engineering & Physics student building systems from
            silicon to software.
          </p>
          <p className="mt-6 leading-7 text-muted">
            Currently a Systems Verification Engineer at Ranovus, and CEO and
            co-founder of Seets, an IoT occupancy-tracking startup piloting at
            the University of Ottawa Heart Institute. Graduating Winter 2027,
            aiming for systems engineering or quantitative roles.
          </p>
          <div className="mt-8 flex flex-col gap-3 font-mono text-sm sm:flex-row sm:flex-wrap">
            <ViewTransitionLink
              href="/about"
              className="min-h-11 rounded-full border border-accent bg-accent px-5 py-2.5 text-center text-surface transition-colors hover:border-accent-hover hover:bg-accent-hover"
            >
              About Me
            </ViewTransitionLink>
            <ViewTransitionLink
              href="/experience"
              className="min-h-11 rounded-full border border-accent-border bg-surface px-5 py-2.5 text-center text-accent transition-colors hover:border-accent hover:bg-accent-soft"
            >
              View Experience
            </ViewTransitionLink>
            <ViewTransitionLink
              href="/projects"
              className="min-h-11 rounded-full border border-red-border bg-surface px-5 py-2.5 text-center text-red transition-colors hover:border-red hover:bg-red-soft"
            >
              View Projects
            </ViewTransitionLink>
          </div>
        </div>

        <div className="relative mx-auto aspect-[4/5] w-full max-w-80 overflow-hidden rounded-3xl border border-accent-border bg-surface-blue p-2 md:mx-0">
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
