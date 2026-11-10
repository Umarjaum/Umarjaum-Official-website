import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { absoluteUrl } from "@/lib/site";
export const metadata: Metadata = { title: "Cookie policy", description: "Browser storage, cookies and advertising technology policy for the UmarJaum website.", alternates: { canonical: absoluteUrl("/cookies") } };
export default function Cookies() { return <LegalPage kind="cookies" />; }
