const ITEMS = [
  "SEO is infrastructure",
  "Built for publishing desks",
  "Evidence over hype",
  "Physics-minded engineering",
  "Open source where it matters",
  "Made in Pakistan",
];

export function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div
      className="relative overflow-hidden border-y border-border bg-card/60 py-5 backdrop-blur"
      aria-label="Principles"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
      <div className="flex w-max animate-marquee gap-12 hover:[animation-play-state:paused]">
        {row.map((item, i) => (
          <span
            key={i}
            aria-hidden={i >= ITEMS.length}
            className="flex items-center gap-4 whitespace-nowrap font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground"
          >
            <span className="text-primary">✦</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
