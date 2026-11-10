import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { labelForSegment } from "@/lib/seo";

export function Breadcrumbs() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="wrap relative z-10">
      <ol className="glass inline-flex flex-wrap items-center gap-1.5 rounded-full px-4 py-2 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-muted-foreground">
        <li>
          <Link to="/" className="transition-colors hover:text-primary">
            Home
          </Link>
        </li>
        {segments.map((segment, i) => {
          const current = i === segments.length - 1;
          return (
            <li key={segment} className="inline-flex items-center gap-1.5">
              <ChevronRight className="size-3 opacity-50" aria-hidden="true" />
              {current ? (
                <span aria-current="page" className="text-foreground">
                  {labelForSegment(segment)}
                </span>
              ) : (
                <span>{labelForSegment(segment)}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
