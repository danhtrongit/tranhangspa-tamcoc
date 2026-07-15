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
  mapLat: 20.216160615191892,
  mapLng: 105.9352762751569,
  mapsUrl: "https://maps.app.goo.gl/JozFZFBPNy2fC6Ue6",
  mapsDirections: "https://maps.app.goo.gl/JozFZFBPNy2fC6Ue6",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3436.9006340672317!2d105.9352762751569!3d20.216160615191892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31367be13991aee7%3A0xb89e07429147db44!2zVHLhuqduIEjhurFuZyBTcGEgTWFzc2FnZSBUYW0gQ-G7kWMoQmVzdCBTcGEgaW4gVGFtIEPhu5FjKSDsiqTtjIwg66eI7IKs7KeA!5e1!3m2!1svi!2s!4v1784102770965!5m2!1svi!2s",

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
