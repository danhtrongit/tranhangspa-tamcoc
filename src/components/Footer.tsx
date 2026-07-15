import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/en";
import { site } from "@/data/site";
import { serviceCategories } from "@/data/services";
import {
  ClockIcon,
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  TiktokIcon,
  YoutubeIcon,
} from "./icons";

export default function Footer({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const t = dict.footer;
  const base = `/${locale}`;
  const year = 2026;

  const explore = [
    { href: `${base}#about`, label: dict.nav.about },
    { href: `${base}/services`, label: dict.nav.services },
    { href: `${base}#gallery`, label: dict.nav.gallery },
    { href: `${base}#reviews`, label: dict.nav.reviews },
    { href: `${base}#booking`, label: dict.nav.book },
  ];

  const popular = serviceCategories
    .slice(0, 5)
    .map((c) => ({ href: `${base}/services#${c.id}`, label: c.name[locale] }));

  const socials = [
    { href: site.social.facebook, label: "Facebook", icon: <FacebookIcon className="h-5 w-5" /> },
    { href: site.social.instagram, label: "Instagram", icon: <InstagramIcon className="h-5 w-5" /> },
    { href: site.social.tiktok, label: "TikTok", icon: <TiktokIcon className="h-5 w-5" /> },
    { href: site.social.youtube, label: "YouTube", icon: <YoutubeIcon className="h-5 w-5" /> },
  ];

  return (
    <footer className="relative overflow-hidden bg-ink text-cream/80">
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gold-500/10 blur-3xl" />
      <div className="container relative py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/95 p-1.5">
                <Image
                  src="/images/logo.png"
                  alt=""
                  width={40}
                  height={42}
                  className="h-9 w-auto"
                />
              </span>
              <span className="font-serif text-xl text-white">
                {locale === "vi" ? site.nameVi : site.name}
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/70">
              {t.tagline}
            </p>
            <p className="mt-5 font-serif text-lg italic text-gold-300">
              {t.madeWith}
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest2 text-gold-300">
              {t.explore}
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {explore.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-cream/70 transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest2 text-gold-300">
              {t.services}
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {popular.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-cream/70 transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest2 text-gold-300">
              {t.contact}
            </h4>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
                <span className="text-cream/70">{site.address[locale]}</span>
              </li>
              <li className="flex gap-3">
                <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
                <a href={site.tel} className="text-cream/70 transition-colors hover:text-white">
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <MailIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
                <a href={`mailto:${site.email}`} className="text-cream/70 transition-colors hover:text-white">
                  {site.email}
                </a>
              </li>
              <li className="flex gap-3">
                <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
                <span className="text-cream/70">{site.hours[locale]}</span>
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-cream transition-colors hover:bg-gold-500 hover:text-white"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-cream/50 sm:flex-row">
          <p>
            © {year} {site.fullName}. {t.rights}
          </p>
          <p>{site.address[locale]}</p>
        </div>
      </div>
    </footer>
  );
}
