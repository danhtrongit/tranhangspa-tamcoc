import Image from "next/image";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/en";
import Reveal from "@/components/Reveal";

const photos = [
  { src: "/images/hero/welcome.jpg", span: "sm:col-span-2 sm:row-span-2", ratio: "aspect-square sm:aspect-auto" },
  { src: "/images/gallery/guests-foot-spa.jpg", span: "", ratio: "aspect-square" },
  { src: "/images/gallery/room.jpg", span: "", ratio: "aspect-square" },
  { src: "/images/gallery/interior.jpg", span: "", ratio: "aspect-square" },
  { src: "/images/gallery/relax.jpg", span: "", ratio: "aspect-square" },
];

export default function Gallery({
  locale,
  t,
}: {
  locale: Locale;
  t: Dictionary["gallery"];
}) {
  return (
    <section id="gallery" className="section scroll-mt-24 bg-white">
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

        <Reveal delay={120} className="mt-14">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {photos.map((p, i) => (
              <div
                key={p.src}
                className={`group relative overflow-hidden rounded-2xl border border-line ${p.span} ${p.ratio}`}
              >
                <Image
                  src={p.src}
                  alt={
                    locale === "vi"
                      ? "Không gian Trần Hằng Spa"
                      : "Inside Tran Hang Spa"
                  }
                  width={i === 0 ? 1000 : 600}
                  height={i === 0 ? 800 : 600}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
