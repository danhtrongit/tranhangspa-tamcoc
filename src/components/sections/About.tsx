import Image from "next/image";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/en";
import Reveal from "@/components/Reveal";
import { CheckIcon, LotusIcon } from "@/components/icons";

export default function About({
  locale,
  t,
}: {
  locale: Locale;
  t: Dictionary["about"];
}) {
  return (
    <section id="about" className="section scroll-mt-24">
      <div className="container grid items-center gap-14 lg:grid-cols-2">
        {/* Image collage */}
        <Reveal className="relative">
          <div className="relative mx-auto max-w-lg">
            <div className="overflow-hidden rounded-[2rem] border border-line shadow-card">
              <Image
                src="/images/gallery/room.jpg"
                alt={locale === "vi" ? "Không gian spa" : "The spa interior"}
                width={1276}
                height={956}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-4 hidden w-44 overflow-hidden rounded-2xl border-4 border-cream shadow-card sm:block">
              <Image
                src="/images/services/facial.png"
                alt=""
                width={407}
                height={567}
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
            <div className="absolute -left-4 -top-4 flex items-center gap-3 rounded-2xl border border-gold-200 bg-white/95 px-4 py-3 shadow-soft backdrop-blur">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-100 text-gold-600">
                <LotusIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-serif text-lg font-semibold leading-none text-ink">
                  Tam Coc
                </p>
                <p className="text-xs text-muted">Ninh Binh, Vietnam</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Copy */}
        <div>
          <Reveal>
            <span className="eyebrow">{t.eyebrow}</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="heading-lg mt-4 text-balance">{t.title}</h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 text-base leading-relaxed text-charcoal">{t.p1}</p>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-4 text-base leading-relaxed text-muted">{t.p2}</p>
          </Reveal>

          <Reveal delay={260}>
            <ul className="mt-7 space-y-3">
              {t.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-700">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm text-charcoal">{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-9 flex items-center gap-4 border-t border-line pt-6">
              <span className="font-serif text-3xl italic text-gold-700">
                {t.signature}
              </span>
              <span className="text-sm text-muted">{t.signatureRole}</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
