import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/en";
import { site } from "@/data/site";
import Reveal from "@/components/Reveal";
import { ArrowRightIcon, LotusIcon, StarIcon } from "@/components/icons";

export default function Hero({
  locale,
  t,
}: {
  locale: Locale;
  t: Dictionary["hero"];
}) {
  const base = `/${locale}`;
  const stats = [
    { value: site.rating, label: t.stats.rating },
    { value: site.ratingCount, label: t.stats.guests },
    { value: "30+", label: t.stats.services },
  ];

  return (
    <section className="relative overflow-hidden bg-cream pt-28 md:pt-32">
      {/* soft decorative glows */}
      <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-gold-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-40 h-80 w-80 rounded-full bg-sand/60 blur-3xl" />

      <div className="container relative grid items-center gap-14 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:pb-24">
        {/* Copy */}
        <div className="max-w-xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-200 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest2 text-gold-700">
              <LotusIcon className="h-4 w-4 text-gold-500" />
              {t.badge}
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="heading-xl mt-6 text-balance">
              {t.title}{" "}
              <span className="relative whitespace-nowrap text-gold-600">
                {t.titleAccent}
                <svg
                  className="absolute -bottom-2 left-0 h-3 w-full text-gold-300"
                  viewBox="0 0 200 12"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path
                    d="M2 8c40-6 156-6 196 0"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="lead mt-6">{t.subtitle}</p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href={`${base}#booking`} className="btn-primary">
                {t.ctaBook}
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link href={`${base}/services`} className="btn-outline">
                {t.ctaServices}
              </Link>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-9 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[
                  "/images/reviews/guest-1.png",
                  "/images/reviews/guest-2.png",
                  "/images/gallery/guests-foot-spa.jpg",
                ].map((src) => (
                  <span
                    key={src}
                    className="h-11 w-11 overflow-hidden rounded-full border-2 border-cream bg-sand"
                  >
                    <Image
                      src={src}
                      alt=""
                      width={44}
                      height={44}
                      className="h-full w-full object-cover"
                    />
                  </span>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-gold-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4" />
                  ))}
                  <span className="ml-1 text-sm font-bold text-ink">
                    {site.rating}
                  </span>
                </div>
                <p className="text-xs text-muted">{t.ratingText}</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Image composition */}
        <Reveal delay={200} className="relative">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-gold-200/60 to-sand/40 blur-sm" />
            <div className="relative overflow-hidden rounded-[2.25rem] border border-white/60 shadow-card">
              <Image
                src="/images/hero/welcome.jpg"
                alt={
                  locale === "vi"
                    ? "Khách du lịch cùng nhân viên Trần Hằng Spa"
                    : "Happy guests with the Tran Hang Spa team"
                }
                width={1276}
                height={956}
                priority
                className="aspect-[4/3] w-full object-cover"
              />
            </div>

            {/* floating rating card */}
            <div className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-line bg-white/95 px-5 py-4 shadow-card backdrop-blur sm:block">
              <div className="flex items-center gap-1 text-gold-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-3.5 w-3.5" />
                ))}
              </div>
              <p className="mt-1 font-serif text-2xl font-semibold text-ink">
                {site.rating}
                <span className="ml-1 text-sm font-sans font-normal text-muted">
                  / 5.0
                </span>
              </p>
              <p className="text-xs text-muted">Google · {site.ratingCount}</p>
            </div>

            {/* floating open badge */}
            <div className="absolute -right-3 -top-3 hidden rotate-3 rounded-full border border-gold-200 bg-white px-4 py-2 text-xs font-semibold text-gold-700 shadow-soft md:block">
              {locale === "vi" ? "Mở 9:00 – 22:30" : "Open 9AM – 10:30PM"}
            </div>
          </div>
        </Reveal>
      </div>

      {/* stats strip */}
      <div className="relative border-t border-line bg-white/60">
        <div className="container grid grid-cols-3 divide-x divide-line py-6">
          {stats.map((s) => (
            <div key={s.label} className="px-2 text-center">
              <div className="font-serif text-2xl font-semibold text-gold-700 sm:text-3xl">
                {s.value}
              </div>
              <div className="mt-1 text-[0.7rem] uppercase tracking-wide text-muted sm:text-xs">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
