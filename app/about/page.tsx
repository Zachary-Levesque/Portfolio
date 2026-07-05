export default function AboutPage() {
  const sections = [
    {
      title: "Opening",
      body: "I've always wanted to understand how things actually work. I do not just want to know what they do, but why. That curiosity pulled me into Electrical Engineering and Physics, and it's what keeps me focused on systems engineering: not one layer of the stack, but the whole path from raw input to working output."
    },
    {
      title: "What I do now",
      body: "I'm currently a Systems Verification Engineer at Ranovus, working across hardware and firmware boundaries on optical communication systems. Alongside that, I'm building Seets, an IoT occupancy tracking startup I co founded that's now piloting at the University of Ottawa Heart Institute, and Knovara, an AI powered onboarding copilot for engineering teams. Whether I'm solving a technical problem or running a company, I want to understand why something works, not just that it does."
    },
    {
      title: "A story",
      body: "In summer 2025, I attended the NCKU Semiconductor Summer School in Taiwan on an International Experience Bursary, diving into Digital IC Design. The course covered Verilog coding, transistor level layout, timing analysis, and synthesis. I finished with the top grade in the course. It sharpened my hands on understanding of what happens below the software layer, right down to the transistor."
    }
  ];

  return (
    <div className="mx-auto max-w-3xl space-y-14">
      {/* [FILL IN: photo path] */}
      <div className="flex aspect-[4/3] items-center justify-center rounded-lg border border-border bg-surface text-center font-mono text-sm uppercase text-muted">
        photo
      </div>

      <div className="space-y-12">
        {sections.map((section) => (
          <section key={section.title} className="space-y-3">
            <h2 className="font-mono text-xl font-semibold text-foreground">
              {section.title}
            </h2>
            <p className="text-lg leading-8 text-foreground">{section.body}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
