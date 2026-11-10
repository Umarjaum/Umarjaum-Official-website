import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { legal } from "@/lib/legal";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/security")({
  staticData: { sitemap: true },
  head: () =>
    pageHead({
      path: "/security",
      title: "Security Policy",
      description:
        "Responsible security reporting guidance for the UmarJaum website and the PublishRank project.",
    }),
  component: SecurityPage,
});

function SecurityPage() {
  return <LegalPage content={legal.security} />;
}
