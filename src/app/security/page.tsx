import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { absoluteUrl } from "@/lib/site";
export const metadata: Metadata = { title: "Security policy", description: "Responsible security reporting guidance for the UmarJaum website and PublishRank project.", alternates: { canonical: absoluteUrl("/security") } };
export default function Security() { return <LegalPage kind="security" />; }
