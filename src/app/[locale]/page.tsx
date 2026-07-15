import type { Metadata } from "next";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { site } from "@/data/site";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import About from "@/components/sections/About";
import Highlights from "@/components/sections/Highlights";
import WhyUs from "@/components/sections/WhyUs";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import ContactBooking from "@/components/sections/ContactBooking";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const loc: Locale = isLocale(locale) ? locale : "en";
  const dict = getDictionary(loc);
  return {
    title: dict.meta.home.title,
    description: dict.meta.home.description,
    alternates: {
      canonical: `/${loc}`,
      languages: { en: "/en", vi: "/vi", "x-default": "/en" },
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = (isLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(loc);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: site.fullName,
    image: `${site.domain}/images/hero/welcome.jpg`,
    url: site.domain,
    telephone: `+${site.phoneIntl}`,
    email: site.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Doi 2, Tam Coc",
      addressLocality: "Ninh Hai",
      addressRegion: "Ninh Binh",
      addressCountry: "VN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.mapLat,
      longitude: site.mapLng,
    },
    openingHours: "Mo-Su 09:00-22:30",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.rating,
      reviewCount: "500",
    },
    sameAs: [
      site.social.facebook,
      site.social.instagram,
      site.social.tiktok,
      site.social.youtube,
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero locale={loc} t={dict.hero} />
      <TrustBar t={dict.trust} />
      <About locale={loc} t={dict.about} />
      <Highlights locale={loc} t={dict.highlights} />
      <WhyUs t={dict.why} />
      <Gallery locale={loc} t={dict.gallery} />
      <Testimonials t={dict.testimonials} />
      <ContactBooking
        locale={loc}
        booking={dict.booking}
        location={dict.location}
      />
    </>
  );
}
