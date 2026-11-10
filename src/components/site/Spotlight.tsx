import gsap from "gsap";
import { useRef, type HTMLAttributes, type PointerEvent } from "react";
import { cn } from "@/lib/utils";

interface SpotlightProps extends HTMLAttributes<HTMLDivElement> {
  /** Adds a subtle 3D tilt that follows the pointer. */
  tilt?: boolean;
}

/** Glass panel with a pointer-following light and gradient edge. */
export function Spotlight({ className, tilt, children, ...rest }: SpotlightProps) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
    if (tilt && e.pointerType === "mouse") {
      gsap.to(el, {
        rotateY: (x / r.width - 0.5) * 6,
        rotateX: -(y / r.height - 0.5) * 6,
        transformPerspective: 900,
        duration: 0.5,
        ease: "power3.out",
      });
    }
  };

  const onLeave = () => {
    if (tilt && ref.current)
      gsap.to(ref.current, { rotateX: 0, rotateY: 0, duration: 0.7, ease: "power3.out" });
  };

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={cn("spotlight glass rounded-3xl", className)}
      {...rest}
    >
      {children}
    </div>
  );
}
