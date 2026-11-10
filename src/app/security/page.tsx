import { LegalPage } from "@/components/legal-page";
import { absoluteUrl, pageMetadata} from "@/lib/site";
export const metadata = pageMetadata("/security", "Security policy", "Responsible security reporting guidance for the UmarJaum website and PublishRank project.");
export default function Security() { return <LegalPage kind="security" />; }
