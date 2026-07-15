import type { Dictionary } from "@/i18n/en";
import { site } from "@/data/site";
import Reveal from "@/components/Reveal";
import { ArrowRightIcon, StarIcon } from "@/components/icons";

export default function Testimonials({ t }: { t: Dictionary["testimonials"] }) {
  return (
    <section
      id="reviews"
      className="section scroll-mt-24 relative overflow-hidden bg-cream"
    >
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-gold-200/40 blur-3xl" />
      <div className="container relative">
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

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {t.items.map((item, i) => (
            <Reveal
              key={i}
              delay={i * 90}
              as="article"
              className="flex flex-col rounded-3xl border border-line bg-white p-7 shadow-soft"
            >
              <div className="flex items-center gap-1 text-gold-500">
                {Array.from({ length: 5 }).map((_, s) => (
                  <StarIcon key={s} className="h-4 w-4" />
                ))}
              </div>
              <p className="mt-5 flex-1 font-serif text-lg italic leading-relaxed text-charcoal">
                “{item.text}”
              </p>
              <div className="mt-6 border-t border-line pt-4">
                <p className="text-sm font-semibold text-ink">{item.name}</p>
                <p className="text-xs text-gold-700">{item.service}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-10 text-center">
          <a
            href={site.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gold-700 hover:text-gold-800"
          >
            {t.readMore}
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
