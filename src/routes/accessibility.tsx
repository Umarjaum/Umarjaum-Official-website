import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { legal } from "@/lib/legal";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/accessibility")({
  staticData: { sitemap: true },
  head: () =>
    pageHead({
      path: "/accessibility",
      title: "Accessibility Statement",
      description:
        "Accessibility commitments, reduced-motion support and feedback guidance for the UmarJaum website.",
    }),
  component: AccessibilityPage,
});

function AccessibilityPage() {
  return <LegalPage content={legal.accessibility} />;
}
