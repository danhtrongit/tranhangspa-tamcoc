"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/en";
import { site } from "@/data/site";
import LanguageSwitcher from "./LanguageSwitcher";
import { ArrowRightIcon, CloseIcon, MenuIcon, PhoneIcon } from "./icons";

export default function Header({
  locale,
  nav,
}: {
  locale: Locale;
  nav: Dictionary["nav"];
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const base = `/${locale}`;
  const links = [
    { href: `${base}#about`, label: nav.about },
    { href: `${base}/services`, label: nav.services },
    { href: `${base}#gallery`, label: nav.gallery },
    { href: `${base}#reviews`, label: nav.reviews },
    { href: `${base}#contact`, label: nav.contact },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-cream/90 py-2.5 shadow-[0_10px_30px_-24px_rgba(94,68,33,0.5)] backdrop-blur-md"
          : "border-b border-transparent py-4"
      }`}
    >
      <div className="container flex items-center justify-between gap-4">
        <Link
          href={base}
          className="flex items-center gap-3"
          aria-label={site.fullName}
        >
          <Image
            src="/images/logo.png"
            alt=""
            width={44}
            height={46}
            className="h-10 w-auto drop-shadow-sm"
            priority
          />
          <span className="flex flex-col leading-none">
            <span className="font-serif text-lg font-semibold tracking-tight text-ink sm:text-xl">
              {locale === "vi" ? site.nameVi : site.name}
            </span>
            <span className="mt-0.5 text-[0.6rem] font-semibold uppercase tracking-widest2 text-gold-600">
              Massage · Tam Coc
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="link-underline text-sm font-medium text-charcoal transition-colors hover:text-gold-700"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher locale={locale} />
          <Link href={`${base}#booking`} className="btn-primary text-sm">
            {nav.book}
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher locale={locale} compact />
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label={nav.menu}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink"
          >
            <MenuIcon className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-ink/40 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col bg-cream shadow-2xl transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-line px-5 py-4">
            <span className="font-serif text-lg text-ink">
              {locale === "vi" ? site.nameVi : site.name}
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink"
            >
              <CloseIcon className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex flex-col gap-1 px-3 py-4">
            <Link
              href={base}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-medium text-charcoal hover:bg-white"
            >
              {nav.home}
            </Link>
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-charcoal hover:bg-white"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto space-y-3 border-t border-line px-5 py-5">
            <Link
              href={`${base}#booking`}
              onClick={() => setOpen(false)}
              className="btn-primary w-full"
            >
              {nav.book}
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <a href={site.tel} className="btn-outline w-full">
              <PhoneIcon className="h-4 w-4" />
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
