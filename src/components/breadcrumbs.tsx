"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const routeLabels: Record<string, string> = {
  about: "About",
  publishrank: "PublishRank",
  work: "Selected work",
  faq: "FAQ",
  contact: "Contact",
  privacy: "Privacy",
  terms: "Terms",
  cookies: "Cookie policy",
  disclaimer: "Disclaimer",
  security: "Security policy",
  accessibility: "Accessibility",
};

function labelForSegment(segment: string) {
  return (
    routeLabels[segment] ??
    segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  );
}

export function Breadcrumbs() {
  const pathname = usePathname() || "/";
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="breadcrumb-nav">
      <div className="wrap">
        <ol className="breadcrumb-list">
          <li>
            <Link href="/">Home</Link>
          </li>
          {segments.map((segment, index) => {
            const href = `/${segments.slice(0, index + 1).join("/")}`;
            const current = index === segments.length - 1;

            return (
              <li key={href} className="breadcrumb-entry">
                <span className="breadcrumb-separator" aria-hidden="true">
                  /
                </span>
                {current ? (
                  <span aria-current="page" className="breadcrumb-current">
                    {labelForSegment(segment)}
                  </span>
                ) : (
                  <Link href={href}>{labelForSegment(segment)}</Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
