import { cva, type VariantProps } from "class-variance-authority";

/** Call-to-action styles shared by <Link>, <a> and <button>. */
export const ctaVariants = cva(
  "group/cta relative inline-flex shrink-0 items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-full font-semibold tracking-tight transition-[transform,box-shadow,background-color,color,border-color] duration-300 ease-out will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.97]",
  {
    variants: {
      variant: {
        signal:
          "bg-signal text-primary-foreground shadow-signal hover:-translate-y-0.5 hover:shadow-[0_24px_60px_-12px_color-mix(in_oklab,var(--signal)_70%,transparent)]",
        glass:
          "glass text-foreground hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary",
        ink: "bg-background text-primary shadow-[var(--shadow-glass)] hover:-translate-y-0.5 hover:bg-brand-soft",
        outline:
          "border border-foreground/25 bg-transparent text-foreground hover:-translate-y-0.5 hover:border-primary hover:text-primary",
        ghost: "text-muted-foreground hover:text-foreground",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-12 px-6 text-[0.95rem]",
        lg: "h-14 px-8 text-base",
      },
    },
    defaultVariants: { variant: "signal", size: "md" },
  },
);

export type CtaVariants = VariantProps<typeof ctaVariants>;
