import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { legal } from "@/lib/legal";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/cookies")({
  staticData: { sitemap: true },
  head: () =>
    pageHead({
      path: "/cookies",
      title: "Cookie Policy",
      description:
        "Browser storage, cookies and advertising technology policy for the UmarJaum website.",
    }),
  component: CookiesPage,
});

function CookiesPage() {
  return <LegalPage content={legal.cookies} />;
}
