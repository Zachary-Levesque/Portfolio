export default function HobbiesPage() {
  const hobbies = [
    {
      title: "Soccer",
      accent: "SC",
      description:
        "I have played soccer since I was four years old, all the way through university. I played for OTFC OPDL, OSU PLSQ, and Louis Riel Soccer."
    },
    {
      title: "Golf",
      accent: "GF",
      description:
        "I started golfing about four years ago and I am still working on my game. I currently play at a 15 handicap."
    },
    {
      title: "Guitar",
      accent: "GT",
      description: "I started playing guitar six months ago and I love learning it."
    },
    {
      title: "Skiing",
      accent: "SK",
      description: "I have been skiing my whole life."
    },
    {
      title: "Sports",
      accent: "SP",
      description:
        "Beyond soccer, golf, and skiing, I just love sports in general, watching and playing whatever I can."
    },
    {
      title: "The Outdoors",
      accent: "OD",
      description:
        "I love fishing, boating, being in nature, and spending time outside."
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
