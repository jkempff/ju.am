export default function Home() {
  return (
    <main className="flex flex-col items-center leading-relaxed text-xl font-normal text-muted-foreground max-w-3xl mx-auto px-3">
      <p className="[text-wrap:balance] mt-24 mb-8 text-muted-foreground text-center">
        <span className="font-semibold text-accent-foreground">
          {"Hi, my name is Ju. "}
        </span>
        My real name is Julian Kempff, but everyone just calls me Ju. I love
        spending time with my family, music, both listening to and creating, and
        everything web development.
      </p>

      <p className="[text-wrap:balance] mb-28 text-center">
        <span className="text-accent-foreground font-semibold text-center my-2">
          Things I do
          {": "}
        </span>
        UI engineering at{" "}
        <a
          className="underline underline-offset-4 hover:text-accent-foreground"
          href="https://uxi.de/"
        >
          UX&I
        </a>
        , noise band{" "}
        <a
          className="underline underline-offset-4 hover:text-accent-foreground"
          href="https://triebe-bei-bandcamp.bandcamp.com/"
        >
          TRIEBE
        </a>
        , platform for concert lovers called{" "}
        <a
          className="underline underline-offset-4 hover:text-accent-foreground"
          href="https://derkonzert.de"
        >
          derkonzert.de
        </a>
        , organizing concerts in Munich with{" "}
        <a
          className="underline underline-offset-4 hover:text-accent-foreground"
          href="https://holyfingers.events"
        >
          Holy Fingers
        </a>
        .
      </p>
    </main>
  );
}
