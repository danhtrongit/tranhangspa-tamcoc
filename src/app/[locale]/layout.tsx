import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { locales, isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { site } from "@/data/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const loc: Locale = isLocale(locale) ? locale : "en";
  const dict = getDictionary(loc);
  return {
    metadataBase: new URL(site.domain),
    title: {
      default: dict.meta.home.title,
      template: `%s`,
    },
    description: dict.meta.home.description,
    icons: { icon: "/images/logo.png", apple: "/images/logo.png" },
    openGraph: {
      type: "website",
      siteName: site.fullName,
      locale: loc === "vi" ? "vi_VN" : "en_US",
      title: dict.meta.home.title,
      description: dict.meta.home.description,
      images: ["/images/hero/welcome.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.home.title,
      description: dict.meta.home.description,
      images: ["/images/hero/welcome.jpg"],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <html
      lang={locale}
      className={`${cormorant.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Header locale={locale} nav={dict.nav} />
        <main>{children}</main>
        <Footer locale={locale} dict={dict} />
        <FloatingContact
          labels={dict.booking.channels}
          message={dict.booking.defaultMessage}
        />
      </body>
    </html>
  );
}
