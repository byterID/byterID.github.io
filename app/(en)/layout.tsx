import "../globals.css";
import { RootDocument } from "@/components/RootDocument";
import { buildMetadata } from "@/lib/metadata";

// English lives at "/". It needs its own root layout so that <html lang="en">
// differs from /ru/ and /hy/ in the static export.
export const metadata = buildMetadata("en");

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <RootDocument locale="en">{children}</RootDocument>;
}
