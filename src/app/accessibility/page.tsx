import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { absoluteUrl } from "@/lib/site";
export const metadata: Metadata = { title: "Accessibility", description: "Accessibility commitments and feedback guidance for the UmarJaum official website.", alternates: { canonical: absoluteUrl("/accessibility") } };
export default function Accessibility() { return <LegalPage kind="accessibility" />; }
