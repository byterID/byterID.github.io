import en from "@/messages/en.json";
import ru from "@/messages/ru.json";
import hy from "@/messages/hy.json";
import type { Locale } from "@/lib/config";

/** en.json is the reference shape: ru.json and hy.json must match it. */
export type Messages = typeof en;

const MESSAGES: Record<Locale, Messages> = { en, ru, hy };

export function getMessages(locale: Locale): Messages {
  return MESSAGES[locale];
}
