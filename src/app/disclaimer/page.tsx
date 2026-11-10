import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { absoluteUrl } from "@/lib/site";
export const metadata: Metadata = { title: "Disclaimer", description: "Important limitations for UmarJaum and PublishRank product and SEO information.", alternates: { canonical: absoluteUrl("/disclaimer") } };
export default function Disclaimer() { return <LegalPage kind="disclaimer" />; }
