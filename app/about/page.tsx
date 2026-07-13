import Image from "next/image";

export default function AboutPage() {
  const sections = [
    {
      title: "Introduction",
      body: "I've always wanted to understand how things actually work. As a kid, I was always asking questions: how does this work, why does that happen, and what is really going on underneath? That curiosity shaped who I am and pushed me toward Electrical Engineering and Physics, where I could build a deeper understanding of the physical world while learning how to apply that knowledge through engineering to create real solutions."
    },
    {
      title: "What I do now",
      body: "I'm currently a Systems Verification Engineer at Ranovus, working across hardware and firmware boundaries to implement and validate communication protocols like I2C and SPI. Alongside that, I'm building Seets, an IoT occupancy tracking startup I co founded that's now piloting at the University of Ottawa Heart Institute. Across engineering and entrepreneurship, I care about understanding the principles behind a system so I can build, test, and improve it with purpose."
    },
    {
      title: "A story",
      body: "In summer 2025, I attended the NCKU Semiconductor Summer School in Taiwan on an International Experience Bursary, diving into Digital IC Design. The course covered Verilog coding, transistor level layout, timing analysis, and synthesis. I finished with the top grade in the course. It sharpened my hands on understanding of what happens below the software layer, right down to the transistor."
    }
  ];

  return (
    <div className="mx-auto max-w-3xl space-y-14">
      <figure>
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-accent-border bg-surface-blue p-2">
          <Image
            src="/images/taiwan.jpeg"
            alt="Zachary at NCKU Semiconductor Summer School in Taiwan"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 768px"
            className="rounded-[1.25rem] object-cover"
          />
        </div>
        <figcaption className="mt-2 font-mono text-xs text-muted">
          NCKU Semiconductor Summer School, Taiwan.
        </figcaption>
      </figure>

      <div className="space-y-12">
        {sections.map((section) => (
          <section
            key={section.title}
            className="space-y-3 rounded-3xl border border-accent-border bg-surface p-6"
          >
            <h2 className="font-mono text-xl font-semibold text-accent-muted">
              {section.title}
            </h2>
            <p className="text-lg leading-8 text-foreground">{section.body}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
