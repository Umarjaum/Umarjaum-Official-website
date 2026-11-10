import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { legal } from "@/lib/legal";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/disclaimer")({
  staticData: { sitemap: true },
  head: () =>
    pageHead({
      path: "/disclaimer",
      title: "Disclaimer",
      description:
        "Important limitations for UmarJaum and PublishRank product and SEO information — no ranking promises.",
    }),
  component: DisclaimerPage,
});

function DisclaimerPage() {
  return <LegalPage content={legal.disclaimer} />;
}
