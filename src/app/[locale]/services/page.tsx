import type { Metadata } from "next";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import Reveal from "@/components/Reveal";
import PriceMenu from "@/components/sections/PriceMenu";
import { LotusIcon } from "@/components/icons";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const loc: Locale = isLocale(locale) ? locale : "en";
  const dict = getDictionary(loc);
  return {
    title: dict.meta.services.title,
    description: dict.meta.services.description,
    alternates: {
      canonical: `/${loc}/services`,
      languages: {
        en: "/en/services",
        vi: "/vi/services",
        "x-default": "/en/services",
      },
    },
  };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = (isLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(loc);
  const t = dict.servicesPage;

  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden bg-cream pt-32 pb-14">
        <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-gold-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 top-24 h-72 w-72 rounded-full bg-sand/60 blur-3xl" />
        <div className="container relative text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-200 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest2 text-gold-700">
              <LotusIcon className="h-4 w-4 text-gold-500" />
              {t.hero.badge}
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="heading-xl mx-auto mt-6 max-w-3xl text-balance">
              {t.hero.title}
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="lead mx-auto mt-5 max-w-2xl">{t.hero.subtitle}</p>
          </Reveal>
        </div>
      </section>

      <PriceMenu locale={loc} t={t} />
    </>
  );
}
