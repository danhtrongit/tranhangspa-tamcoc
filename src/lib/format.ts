import type { Locale } from "@/i18n/config";
import type { ServiceItem } from "@/data/services";

/** Format a price given in THOUSANDS of VND, e.g. 400 -> "400,000₫". */
export function formatVnd(thousands: number): string {
  return `${(thousands * 1000).toLocaleString("en-US")}₫`;
}

/** Compact form, e.g. 400 -> "400K". */
export function formatK(thousands: number): string {
  return `${thousands}K`;
}

/** Duration label, e.g. 90 -> "90 min" / "90 phút". */
export function formatMinutes(min: number, locale: Locale): string {
  return locale === "vi" ? `${min} phút` : `${min} min`;
}

/** Human-readable price for a service item (range / flat / from). */
export function itemPriceLabel(item: ServiceItem, locale: Locale): string {
  const from = locale === "vi" ? "từ" : "from";
  if (item.priceRange) {
    return `${formatVnd(item.priceRange[0])} – ${formatVnd(item.priceRange[1])}`;
  }
  if (typeof item.flatPrice === "number") {
    return formatVnd(item.flatPrice);
  }
  if (item.durations?.length) {
    const min = Math.min(...item.durations.map((d) => d.price));
    return `${from} ${formatVnd(min)}`;
  }
  return "";
}
