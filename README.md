# Trần Hằng Spa — Website (Next.js, song ngữ EN/VI)

Website giới thiệu & đặt lịch cho **Trần Hằng Spa Massage Tam Cốc**, thiết kế hiện đại, tông
sáng/gold, tối ưu cho khách quốc tế. Bilingual English (mặc định) + Tiếng Việt.

A modern, bilingual (English-first + Vietnamese) marketing & booking site for
**Tran Hang Spa Massage Tam Coc**, Ninh Binh.

## Tech stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS 3** (custom gold-on-white design system)
- Built-in i18n via a `[locale]` route segment + middleware (no external i18n dependency)
- Google Fonts via `next/font` (Cormorant Garamond + Inter, with Vietnamese subset)
- SEO: per-page metadata, `hreflang` alternates, `sitemap.xml`, `robots.txt`, JSON-LD `HealthAndBeautyBusiness`

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000  (redirects to /en)
```

Production:

```bash
npm run build
npm run start
```

- `/` → auto-redirects to `/en` or `/vi` (based on the browser language / saved preference)
- English: `/en`, `/en/services`
- Tiếng Việt: `/vi`, `/vi/services`

## Project structure

```
src/
  app/
    [locale]/            # all pages live under a locale segment
      layout.tsx         # fonts, header/footer, metadata, floating contact
      page.tsx           # home page (assembles all sections)
      services/page.tsx  # full price menu
      not-found.tsx
    globals.css          # design system + utilities
    robots.ts, sitemap.ts
    middleware.ts (../)  # locale detection & redirect  (src/middleware.ts)
  components/
    Header, Footer, LanguageSwitcher, FloatingContact, BookingForm, Reveal, icons
    sections/            # Hero, TrustBar, About, Highlights, WhyUs, Gallery,
                         # Testimonials, ContactBooking, PriceMenu
  data/
    site.ts              # ← contact info, phone, socials, map, hours
    services.ts          # ← ALL services + prices (in thousands of VND)
  i18n/
    config.ts            # locales
    en.ts, vi.ts         # ← all UI copy (edit text here)
    dictionaries.ts
  lib/format.ts          # price / duration formatting
public/images/           # logo + photos (downloaded from the current site)
```

## Where to edit content

| Change | File |
| --- | --- |
| Phone, email, address, hours, socials, map | `src/data/site.ts` |
| Services, durations & **prices** | `src/data/services.ts` (prices are in **thousands of VND**, e.g. `400` → 400,000₫) |
| Any on-screen text (both languages) | `src/i18n/en.ts` and `src/i18n/vi.ts` |
| Photos / logo | `public/images/…` |

## ⚠️ Before going live — please review

1. **Testimonials are placeholders.** The three review quotes in `src/i18n/en.ts` /
   `vi.ts` (`testimonials.items`) are sample text. Replace them with **real Google /
   Facebook reviews** before publishing. The 4.9★ / 500+ rating shown is from the
   spa's real Google listing.
2. **Messenger link** (`site.messenger`) uses `m.me/tranhangspa.tamcoc` — confirm the
   page username is correct.
3. **Some original photos have Vietnamese promo text baked in.** The clean ones are
   used in prominent places; a few small thumbnails still show the shop sign. Swap in
   higher-res, text-free photos when available (`public/images/…`).
4. **Email** shown is `xekeok86@gmail.com` (from the current site) — update if needed.

## Booking

No backend is required. The booking form and floating button compose a pre-filled
message and open **WhatsApp** (primary), with quick buttons for **Call**, **Zalo**,
**Messenger**, and an **email** fallback (`mailto:`).
