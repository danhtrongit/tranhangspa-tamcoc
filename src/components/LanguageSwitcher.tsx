"use client";

import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";
import { locales, localeShort, type Locale } from "@/i18n/config";
import { GlobeIcon } from "./icons";

export default function LanguageSwitcher({
  locale,
  compact = false,
}: {
  locale: Locale;
  compact?: boolean;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function switchTo(next: Locale) {
    if (next === locale) return;
    // Replace the leading /<locale> segment with the new one
    const segments = pathname.split("/");
    segments[1] = next;
    const newPath = segments.join("/") || `/${next}`;
    // Persist preference for one year
    document.cookie = `NEXT_LOCALE=${next}; path=/; max-age=31536000; samesite=lax`;
    startTransition(() => router.push(newPath));
  }

  return (
    <div
      className={`inline-flex items-center rounded-full border border-line bg-white/70 p-0.5 ${
        isPending ? "opacity-60" : ""
      }`}
      role="group"
      aria-label="Language"
    >
      {!compact && (
        <GlobeIcon className="ml-2 mr-0.5 h-4 w-4 text-gold-600" aria-hidden />
      )}
      {locales.map((loc) => (
        <button
          key={loc}
          type="button"
          onClick={() => switchTo(loc)}
          aria-pressed={loc === locale}
          className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
            loc === locale
              ? "bg-gold-600 text-white shadow-sm"
              : "text-charcoal hover:text-gold-700"
          }`}
        >
          {localeShort[loc]}
        </button>
      ))}
    </div>
  );
}
