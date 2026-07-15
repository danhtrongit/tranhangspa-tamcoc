import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/en";
import {
  serviceCategories,
  highlightIds,
  itemFromPrice,
  allItems,
} from "@/data/services";
import { formatVnd } from "@/lib/format";
import Reveal from "@/components/Reveal";
import { ArrowRightIcon } from "@/components/icons";

export default function Highlights({
  locale,
  t,
}: {
  locale: Locale;
  t: Dictionary["highlights"];
}) {
  const base = `/${locale}`;
  const items = allItems();
  const cards = highlightIds
    .map((id) => items.find((i) => i.id === id))
    .filter((i): i is NonNullable<typeof i> => Boolean(i))
    .map((item) => {
      const category = serviceCategories.find((c) => c.id === item.categoryId);
      return {
        ...item,
        image: item.image ?? category?.image ?? "/images/gallery/treatment.jpg",
        categoryName: category?.name[locale] ?? "",
      };
    });

  return (
    <section id="services" className="section scroll-mt-24 bg-white">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow">{t.eyebrow}</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="heading-lg mt-4">{t.title}</h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="lead mt-4">{t.subtitle}</p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <Reveal
              key={card.id}
              delay={i * 70}
              as="article"
              className="group card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
            >
              <Link href={`${base}/services#${card.categoryId}`} className="block">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.name[locale]}
                    width={640}
                    height={480}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-wide text-gold-700 backdrop-blur">
                    {card.categoryName}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-serif text-xl text-ink">
                      {card.name[locale]}
                    </h3>
                  </div>
                  {card.desc && (
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
                      {card.desc[locale]}
                    </p>
                  )}
                  <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                    <span className="text-sm text-muted">
                      {t.from}{" "}
                      <span className="text-base font-bold tabular-nums text-gold-700">
                        {formatVnd(itemFromPrice(card))}
                      </span>
                    </span>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-gold-700 transition-transform group-hover:translate-x-0.5">
                      {t.book}
                      <ArrowRightIcon className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-12 text-center">
          <Link href={`${base}/services`} className="btn-outline">
            {t.viewAll}
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
