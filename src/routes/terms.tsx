import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { legal } from "@/lib/legal";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/terms")({
  staticData: { sitemap: true },
  head: () =>
    pageHead({
      path: "/terms",
      title: "Terms of Use",
      description: "Terms for using the UmarJaum official website and PublishRank resources.",
    }),
  component: TermsPage,
});

function TermsPage() {
  return <LegalPage content={legal.terms} />;
}
