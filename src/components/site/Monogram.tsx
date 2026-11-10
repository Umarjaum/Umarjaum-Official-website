import { cn } from "@/lib/utils";

export function Monogram({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "relative grid size-9 place-items-center rounded-[10px] bg-signal font-mono text-[0.72rem] font-bold tracking-[-0.12em] text-primary-foreground shadow-signal",
        className,
      )}
    >
      UJ
    </span>
  );
}

export function Wordmark() {
  return (
    <span className="inline-flex items-center gap-2.5">
      <Monogram />
      <span className="text-lg font-bold tracking-[-0.04em]">UmarJaum</span>
    </span>
  );
}
