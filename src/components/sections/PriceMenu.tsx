import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/en";
import { serviceCategories, type ServiceCategory } from "@/data/services";
import { formatVnd, formatMinutes, itemPriceLabel } from "@/lib/format";
import Reveal from "@/components/Reveal";
import { ArrowRightIcon } from "@/components/icons";

function hasDurations(cat: ServiceCategory) {
  return cat.items.some((i) => i.durations && i.durations.length > 0);
}

export default function PriceMenu({
  locale,
  t,
}: {
  locale: Locale;
  t: Dictionary["servicesPage"];
}) {
  const base = `/${locale}`;

  return (
    <section className="section bg-cream pt-10">
      <div className="container">
        {/* Jump-to chips */}
        <div className="sticky top-[76px] z-30 -mx-2 mb-12 overflow-x-auto rounded-2xl border border-line bg-white/85 px-2 py-2.5 shadow-soft backdrop-blur">
          <div className="flex items-center gap-2 whitespace-nowrap px-1">
            <span className="hidden shrink-0 pl-2 pr-1 text-xs font-semibold uppercase tracking-wide text-muted sm:inline">
              {t.jumpTo}:
            </span>
            {serviceCategories.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="shrink-0 rounded-full px-4 py-1.5 text-sm font-medium text-charcoal transition-colors hover:bg-gold-100 hover:text-gold-700"
              >
                {c.name[locale]}
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-16">
          {serviceCategories.map((cat) => (
            <div key={cat.id} id={cat.id} className="scroll-mt-32">
              {/* Category header */}
              <Reveal className="flex flex-col gap-5 sm:flex-row sm:items-center">
                <div className="h-24 w-24 shrink-0 overflow-hidden rounded-2xl border border-line shadow-soft">
                  <Image
                    src={cat.image}
                    alt={cat.name[locale]}
                    width={200}
                    height={200}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="font-serif text-2xl text-ink sm:text-3xl">
                    {cat.name[locale]}
                  </h2>
                  <p className="mt-1.5 max-w-xl text-sm text-muted">
                    {cat.blurb[locale]}
                  </p>
                </div>
              </Reveal>

              <div className="mt-6 h-px w-full bg-gold-line" />

              {/* Items */}
              {hasDurations(cat) ? (
                <div className="mt-6 grid gap-4 lg:grid-cols-2">
                  {cat.items.map((item) => (
                    <Reveal
                      key={item.id}
                      as="article"
                      className="card p-6"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-serif text-lg text-ink">
                            {item.name[locale]}
                          </h3>
                          {item.desc && (
                            <p className="mt-1.5 text-sm leading-relaxed text-muted">
                              {item.desc[locale]}
                            </p>
                          )}
                        </div>
                        <Link
                          href={`${base}#booking`}
                          className="shrink-0 rounded-full border border-gold-300 px-4 py-1.5 text-xs font-semibold text-gold-700 transition-colors hover:bg-gold-600 hover:text-white"
                        >
                          {t.book}
                        </Link>
                      </div>

                      {item.durations ? (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {item.durations.map((d) => (
                            <div
                              key={d.min}
                              className="flex items-center gap-2 rounded-xl border border-line bg-cream/60 px-3 py-2"
                            >
                              <span className="text-xs font-medium text-muted">
                                {formatMinutes(d.min, locale)}
                              </span>
                              <span className="text-sm font-bold tabular-nums text-gold-700">
                                {formatVnd(d.price)}
                              </span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="mt-4 text-lg font-bold tabular-nums text-gold-700">
                          {itemPriceLabel(item, locale)}
                        </p>
                      )}
                    </Reveal>
                  ))}
                </div>
              ) : (
                /* Compact flat-price list (nails, waxing, etc.) */
                <Reveal className="mt-6 grid gap-x-10 gap-y-1 rounded-3xl border border-line bg-white p-6 shadow-soft sm:grid-cols-2">
                  {cat.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-baseline justify-between gap-3 border-b border-dashed border-line py-3 last:border-0"
                    >
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm font-medium text-ink">
                          {item.name[locale]}
                        </span>
                        {item.desc && (
                          <span className="text-xs text-muted">
                            {item.desc[locale]}
                          </span>
                        )}
                      </div>
                      <span className="whitespace-nowrap text-sm font-bold tabular-nums text-gold-700">
                        {itemPriceLabel(item, locale)}
                      </span>
                    </div>
                  ))}
                </Reveal>
              )}
            </div>
          ))}
        </div>

        {/* Note + CTA */}
        <div className="mt-16 rounded-3xl border border-gold-200 bg-gold-50 p-8 text-center">
          <p className="mx-auto max-w-2xl text-sm text-charcoal">{t.note}</p>
          <Link href={`${base}#booking`} className="btn-primary mt-6">
            {t.book}
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
