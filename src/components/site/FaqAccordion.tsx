import { useId, useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/content";
import { cn } from "@/lib/utils";

export function FaqAccordion() {
  const [active, setActive] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="space-y-3" data-stagger>
      {faqs.map(([question, answer], index) => {
        const open = active === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;
        return (
          <div
            key={question}
            className={cn(
              "glass rounded-2xl transition-colors duration-300",
              open
                ? "border-primary/40 bg-[color-mix(in_oklab,var(--signal)_6%,transparent)]"
                : "hover:border-primary/25",
            )}
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setActive(open ? null : index)}
                className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left text-lg font-semibold tracking-tight md:px-8 md:py-6"
              >
                <span>{question}</span>
                <span
                  className={cn(
                    "grid size-9 shrink-0 place-items-center rounded-full border border-border text-primary transition-transform duration-500",
                    open && "rotate-45 border-primary/50 bg-primary/10",
                  )}
                >
                  <Plus className="size-4" aria-hidden="true" />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className="collapse-grid"
              data-open={open}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 pr-16 leading-relaxed text-muted-foreground md:px-8">
                  {answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
