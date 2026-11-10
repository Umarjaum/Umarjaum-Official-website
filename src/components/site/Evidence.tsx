import { cn } from "@/lib/utils";

interface EvidenceProps {
  src: string;
  alt: string;
  label: string;
  caption?: string;
  className?: string;
  priority?: boolean;
}

/** A real PublishRank capture inside a glass browser frame. */
export function Evidence({ src, alt, label, caption, className, priority }: EvidenceProps) {
  return (
    <figure
      className={cn("group/evidence glass-strong overflow-hidden rounded-2xl p-2", className)}
    >
      <div className="flex items-center justify-between gap-3 px-3 pb-2.5 pt-1.5">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-primary/80" />
          <span className="size-2.5 rounded-full bg-primary-glow/60" />
          <span className="size-2.5 rounded-full bg-mint/60" />
        </div>
        <span className="truncate font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground">
          {label}
        </span>
      </div>
      <div className="overflow-hidden rounded-xl border border-border">
        <img
          src={src}
          alt={alt}
          width={1440}
          height={1000}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          className="block h-auto w-full transition-transform duration-[1.2s] ease-[cubic-bezier(.22,1,.36,1)] group-hover/evidence:scale-[1.035]"
        />
      </div>
      {caption ? (
        <figcaption className="px-3 pb-1.5 pt-3 text-xs leading-relaxed text-muted-foreground">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
