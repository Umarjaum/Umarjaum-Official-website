import { LegalPage } from "@/components/legal-page";
import { absoluteUrl, pageMetadata} from "@/lib/site";
export const metadata = pageMetadata("/disclaimer", "Disclaimer", "Important limitations for UmarJaum and PublishRank product and SEO information.");
export default function Disclaimer() { return <LegalPage kind="disclaimer" />; }
