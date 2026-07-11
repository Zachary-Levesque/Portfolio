import Image from "next/image";

type Hobby = {
  title: string;
  accent: string;
  image: string | null;
  imageAlt: string | null;
  imagePosition: string;
  description: string;
};

export default function HobbiesPage() {
  const hobbies: Hobby[] = [
    {
      title: "Soccer",
      accent: "SC",
      image: "/images/soccer.jpg",
      imageAlt: "Zachary playing soccer",
      imagePosition: "object-[50%_18%]",
      description:
        "I have played soccer since I was four years old, all the way through university. I played for OTFC OPDL, OSU PLSQ, and Louis Riel Soccer, and I was always captain of my teams. Soccer helped shape me as a leader, a skill I still carry today."
    },
    {
      title: "Golf",
      accent: "GF",
      image: "/images/golf.jpeg",
      imageAlt: "Zachary golfing",
      imagePosition: "object-[50%_78%]",
      description:
        "I started golfing about four years ago and I am still working on my game. I currently play at a 15 handicap."
    },
    {
      title: "Guitar",
      accent: "GT",
      image: null,
      imageAlt: null,
      imagePosition: "object-center",
      description: "I started playing guitar six months ago and I love learning it."
    },
    {
      title: "Skiing",
      accent: "SK",
      image: "/images/ski.jpeg",
      imageAlt: "Zachary skiing",
      imagePosition: "object-[50%_40%]",
      description: "I have been skiing my whole life."
    },
    {
      title: "Sports",
      accent: "SP",
      image: "/images/sports.jpeg",
      imageAlt: "Zachary at a sports event",
      imagePosition: "object-[50%_70%]",
      description:
        "Beyond soccer, golf, and skiing, I just love sports in general, watching and playing whatever I can."
    },
    {
      title: "The Outdoors",
      accent: "OD",
      image: "/images/boating.jpeg",
      imageAlt: "Zachary boating outdoors",
      imagePosition: "object-[50%_45%]",
      description:
        "I love fishing, boating, being in nature, and spending time outside."
    }
  ];

  return (
    <div className="space-y-10">
      <section className="max-w-3xl">
        <p className="font-mono text-sm uppercase text-accent-muted">Outside work</p>
        <h1 className="mt-3 font-mono text-4xl font-semibold text-foreground">
          Hobbies
        </h1>
      </section>

      <section className="space-y-5">
        {hobbies.map((hobby) => (
          <article
            key={hobby.title}
            className="grid overflow-hidden rounded-3xl border border-accent-border bg-surface transition-colors hover:bg-surface-blue md:grid-cols-[1fr_320px]"
          >
            <div className="flex flex-col p-6">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-accent-border bg-accent-soft font-mono text-sm text-accent-muted">
                {hobby.accent}
              </div>
              <h2 className="font-mono text-xl font-semibold text-foreground">
                {hobby.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-muted">
                {hobby.description}
              </p>
            </div>
            {hobby.image ? (
              <div className="relative aspect-[4/5] border-t border-border bg-background md:aspect-auto md:min-h-[24rem] md:border-l md:border-t-0">
                <Image
                  src={hobby.image}
                  alt={hobby.imageAlt ?? hobby.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className={`object-cover ${hobby.imagePosition}`}
                />
              </div>
            ) : null}
          </article>
        ))}
      </section>
    </div>
  );
}
