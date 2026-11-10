import { LegalPage } from "@/components/legal-page";
import { absoluteUrl, pageMetadata} from "@/lib/site";
export const metadata = pageMetadata("/cookies", "Cookie policy", "Browser storage, cookies and advertising technology policy for the UmarJaum website.");
export default function Cookies() { return <LegalPage kind="cookies" />; }
