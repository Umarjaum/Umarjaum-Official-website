import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadProps {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  action?: ReactNode;
  className?: string;
  /** "center" draws the PublishRank-style title with a rule on each side. */
  align?: "left" | "center";
}

export function SectionHead({
  eyebrow,
  title,
  intro,
  action,
  className,
  align = "left",
}: SectionHeadProps) {
  if (align === "center") {
    return (
      <div className={cn("mb-12 text-center md:mb-16", className)}>
        <p className="eyebrow" data-reveal>
          {eyebrow}
        </p>
        <div className="mt-4 flex items-center gap-6">
          <span
            data-rule="right"
            className="hidden h-px flex-1 origin-right bg-primary/30 md:block"
            aria-hidden="true"
          />
          <h2
            data-split="scroll"
            className="display max-w-3xl text-[clamp(1.9rem,3.6vw,3rem)] md:mx-0 mx-auto"
          >
            {title}
          </h2>
          <span
            data-rule="left"
            className="hidden h-px flex-1 origin-left bg-primary/30 md:block"
            aria-hidden="true"
          />
        </div>
        {intro ? (
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-muted-foreground" data-reveal>
            {intro}
          </p>
        ) : null}
        {action ? (
          <div className="mt-7 flex justify-center" data-reveal>
            {action}
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between",
        className,
      )}
    >
      <div className="max-w-3xl">
        <p className="eyebrow" data-reveal>
          {eyebrow}
        </p>
        <h2 data-split="scroll" className="display mt-4 text-[clamp(1.9rem,3.6vw,3rem)]">
          {title}
        </h2>
      </div>
      {intro || action ? (
        <div className="max-w-sm space-y-6" data-reveal>
          {intro ? <p className="leading-relaxed text-muted-foreground">{intro}</p> : null}
          {action}
        </div>
      ) : null}
    </div>
  );
}
