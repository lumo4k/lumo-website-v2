export function RevealText({
  children,
  mode = "line",
}: {
  children: string;
  mode?: "line" | "word";
}) {
  const chunks = mode === "word" ? children.split(" ") : children.split("\n");
  return (
    <span aria-label={children}>
      {chunks.map((chunk, i) => (
        <span className="reveal-mask" aria-hidden="true" key={i}>
          <span data-hero-line>
            {chunk}
            {mode === "word" ? "\u00a0" : ""}
          </span>
        </span>
      ))}
    </span>
  );
}
