import "../globals.css";
import { notFound } from "next/navigation";
import { RootDocument } from "@/components/RootDocument";
import { isLocale } from "@/lib/config";
import { buildMetadata } from "@/lib/metadata";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

// /ru/ and /hy/. /hy/ is always built; HY_ENABLED only controls the switcher.
export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: "ru" }, { locale: "hy" }];
}

export async function generateMetadata({ params }: Omit<Props, "children">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return buildMetadata(locale);
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <RootDocument locale={locale}>{children}</RootDocument>;
}
