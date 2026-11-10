import { ArrowUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const R = 20;
const C = 2 * Math.PI * R;

/** Top reading-progress bar plus a floating back-to-top button with a progress ring. */
export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<SVGCircleElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${p})`;
      if (ringRef.current) ringRef.current.style.strokeDashoffset = `${C * (1 - p)}`;
      setShow(window.scrollY > 600);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px]" aria-hidden="true">
        <div ref={barRef} className="bg-signal h-full origin-left scale-x-0" />
      </div>
      <button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={cn(
          "group fixed bottom-5 right-5 z-40 grid size-12 place-items-center rounded-full bg-background text-primary shadow-[var(--shadow-glass)] transition-all duration-500 hover:-translate-y-1 md:bottom-8 md:right-8",
          show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0",
        )}
      >
        <svg
          viewBox="0 0 48 48"
          className="absolute inset-0 size-full -rotate-90"
          aria-hidden="true"
        >
          <circle cx="24" cy="24" r={R} fill="none" stroke="var(--border)" strokeWidth="2.5" />
          <circle
            ref={ringRef}
            cx="24"
            cy="24"
            r={R}
            fill="none"
            stroke="var(--signal)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray={C}
            strokeDashoffset={C}
          />
        </svg>
        <ArrowUp className="relative size-4 transition-transform group-hover:-translate-y-0.5" />
      </button>
    </>
  );
}
