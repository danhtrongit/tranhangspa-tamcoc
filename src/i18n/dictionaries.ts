import type { Locale } from "./config";
import { en, type Dictionary } from "./en";
import { vi } from "./vi";

const dictionaries: Record<Locale, Dictionary> = { en, vi };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? en;
}

export type { Dictionary };
