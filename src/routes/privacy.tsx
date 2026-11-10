import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { legal } from "@/lib/legal";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  staticData: { sitemap: true },
  head: () =>
    pageHead({
      path: "/privacy",
      title: "Privacy Policy",
      description:
        "Privacy information for the UmarJaum official website: what is processed, hosting data, advertising status and contact guidance.",
    }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return <LegalPage content={legal.privacy} />;
}
