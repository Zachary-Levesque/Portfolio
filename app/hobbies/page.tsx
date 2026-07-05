export default function HobbiesPage() {
  const hobbies = [
    {
      title: "Soccer",
      accent: "SC",
      description:
        "[FILL IN: your soccer background — played growing up / current league / etc.]. I also coached youth soccer at Ottawa TFC for two years."
    },
    {
      title: "Golf",
      accent: "GF",
      description:
        "[FILL IN: how long you've played, favorite course, handicap if relevant]. It's actually what inspired my Sports Strategy Engine project — a Monte Carlo decision engine for golf strategy optimization."
    },
    {
      title: "Guitar",
      accent: "GT",
      description:
        "[FILL IN: how long you've played, genre, electric/acoustic]."
    },
    {
      title: "The Outdoors",
      accent: "OD",
      description:
        "[FILL IN: hiking, camping, specific activities or places you go]."
    }
  ];

  return (
    <div className="space-y-10">
      <section className="max-w-3xl">
        <p className="font-mono text-sm uppercase text-accent">Outside work</p>
        <h1 className="mt-3 font-mono text-4xl font-semibold text-foreground">
          Hobbies
        </h1>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        {hobbies.map((hobby) => (
          <article
            key={hobby.title}
            className="flex h-full flex-col rounded-lg border border-border bg-surface p-5 shadow-[0_18px_60px_rgba(0,0,0,0.18)]"
          >
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-accent/25 bg-accent/10 font-mono text-sm text-accent">
              {hobby.accent}
            </div>
            <h2 className="font-mono text-xl font-semibold text-foreground">
              {hobby.title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted">
              {hobby.description}
            </p>
          </article>
        ))}
      </section>
    </div>
  );
}
