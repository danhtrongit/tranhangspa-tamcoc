import type { Dictionary } from "@/i18n/en";
import Reveal from "@/components/Reveal";
import {
  CheckIcon,
  GlobeIcon,
  LotusIcon,
  SparkleIcon,
} from "@/components/icons";

const icons = [
  <LotusIcon key="lotus" className="h-6 w-6" />,
  <GlobeIcon key="globe" className="h-6 w-6" />,
  <SparkleIcon key="sparkle" className="h-6 w-6" />,
  <CheckIcon key="check" className="h-6 w-6" />,
];

export default function WhyUs({ t }: { t: Dictionary["why"] }) {
  return (
    <section className="section relative overflow-hidden bg-gold-50">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gold-line" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-gold-200/40 blur-3xl" />
      <div className="container relative">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow">{t.eyebrow}</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="heading-lg mt-4 text-balance">{t.title}</h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 80}
              as="article"
              className="group relative rounded-3xl border border-line bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-gold-200 hover:shadow-card"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-100 text-gold-600 transition-colors group-hover:bg-gold-600 group-hover:text-white">
                {icons[i % icons.length]}
              </span>
              <h3 className="mt-6 font-serif text-xl text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.desc}
              </p>
              <span className="mt-5 block h-px w-10 bg-gold-300 transition-all duration-300 group-hover:w-16" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
