import { LegalPage } from "@/components/legal-page";
import { absoluteUrl, pageMetadata} from "@/lib/site";
export const metadata = pageMetadata("/accessibility", "Accessibility", "Accessibility commitments and feedback guidance for the UmarJaum official website.");
export default function Accessibility() { return <LegalPage kind="accessibility" />; }
