// Central business / contact configuration for Tran Hang Spa.
// Phone is stored in local + international (E.164) form so we can build
// WhatsApp / Zalo / tel: links consistently.

const PHONE_LOCAL = "0349509257";
const PHONE_INTL = "84349509257"; // +84 349 509 257

export const site = {
  name: "Tran Hang Spa",
  nameVi: "Trần Hằng Spa",
  fullName: "Tran Hang Spa Massage Tam Coc",
  domain: "https://tranhangspatamcoc.com",

  phoneLocal: PHONE_LOCAL,
  phoneIntl: PHONE_INTL,
  phoneDisplay: "+84 349 509 257",
  email: "xekeok86@gmail.com",

  address: {
    en: "Doi 2, Tam Coc, Ninh Hai, Ninh Binh, Vietnam",
    vi: "Đội 2, Tam Cốc, Ninh Hải, Ninh Bình",
  },

  // Google Maps place (from the shared listing)
  mapLat: 20.2161556,
  mapLng: 105.9378512,
  mapsUrl: "https://maps.app.goo.gl/",
  mapsDirections:
    "https://www.google.com/maps/dir/?api=1&destination=20.2161556,105.9378512",
  mapsEmbed:
    "https://www.google.com/maps?q=20.2161556,105.9378512&hl=en&z=17&output=embed",

  hours: {
    en: "Open daily · 9:00 AM – 10:30 PM",
    vi: "Mở cửa hàng ngày · 9:00 – 22:30",
  },

  rating: "4.9",
  ratingCount: "500+",

  // Contact channels
  whatsapp: `https://wa.me/${PHONE_INTL}`,
  zalo: `https://zalo.me/${PHONE_INTL}`,
  tel: `tel:+${PHONE_INTL}`,
  messenger: "https://m.me/tranhangspa.tamcoc",

  social: {
    facebook: "https://www.facebook.com/tranhangspa.tamcoc",
    instagram: "https://www.instagram.com/tranhangspamassagetamcoc721",
    tiktok: "https://www.tiktok.com/@user8dy85rlqmh",
    youtube: "https://www.youtube.com",
  },
} as const;

export type Locale = "en" | "vi";

/** Build a pre-filled WhatsApp message link. */
export function whatsappLink(message: string) {
  return `${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
