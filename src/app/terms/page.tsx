import { LegalPage } from "@/components/legal-page";
import { absoluteUrl, pageMetadata} from "@/lib/site";
export const metadata = pageMetadata("/terms", "Terms of use", "Terms for using the UmarJaum official website and PublishRank resources.");
export default function Terms() { return <LegalPage kind="terms" />; }
