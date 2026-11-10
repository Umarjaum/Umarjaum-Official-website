import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { absoluteUrl } from "@/lib/site";
export const metadata: Metadata = { title: "Terms of use", description: "Terms for using the UmarJaum official website and PublishRank resources.", alternates: { canonical: absoluteUrl("/terms") } };
export default function Terms() { return <LegalPage kind="terms" />; }
