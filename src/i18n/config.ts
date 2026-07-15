export const locales = ["en", "vi"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  vi: "Tiếng Việt",
};

export const localeShort: Record<Locale, string> = {
  en: "EN",
  vi: "VI",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
