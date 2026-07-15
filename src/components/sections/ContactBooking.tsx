import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/en";
import { site } from "@/data/site";
import Reveal from "@/components/Reveal";
import BookingForm from "@/components/BookingForm";
import {
  ArrowRightIcon,
  ClockIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "@/components/icons";

export default function ContactBooking({
  locale,
  booking,
  location,
}: {
  locale: Locale;
  booking: Dictionary["booking"];
  location: Dictionary["location"];
}) {
  const details = [
    {
      icon: <MapPinIcon className="h-5 w-5" />,
      label: location.addressLabel,
      value: site.address[locale],
    },
    {
      icon: <ClockIcon className="h-5 w-5" />,
      label: location.hoursLabel,
      value: site.hours[locale],
    },
    {
      icon: <PhoneIcon className="h-5 w-5" />,
      label: location.phoneLabel,
      value: site.phoneDisplay,
      href: site.tel,
    },
    {
      icon: <MailIcon className="h-5 w-5" />,
      label: location.emailLabel,
      value: site.email,
      href: `mailto:${site.email}`,
    },
  ];

  return (
    <section
      id="contact"
      className="section scroll-mt-24 relative overflow-hidden bg-gradient-to-b from-white to-gold-50"
    >
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow">{booking.eyebrow}</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="heading-lg mt-4">{booking.title}</h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="lead mt-4">{booking.subtitle}</p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Contact + map */}
          <Reveal>
            <div className="flex h-full flex-col">
              <span className="eyebrow">{location.eyebrow}</span>
              <h3 className="heading-lg mt-3 text-3xl">{location.title}</h3>

              <ul className="mt-7 space-y-5">
                {details.map((d) => (
                  <li key={d.label} className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-100 text-gold-600">
                      {d.icon}
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                        {d.label}
                      </p>
                      {d.href ? (
                        <a
                          href={d.href}
                          className="text-base font-medium text-ink transition-colors hover:text-gold-700"
                        >
                          {d.value}
                        </a>
                      ) : (
                        <p className="text-base font-medium text-ink">
                          {d.value}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <a
                href={site.mapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline mt-7 w-fit"
              >
                {location.directions}
                <ArrowRightIcon className="h-4 w-4" />
              </a>

              <div className="mt-7 flex-1 overflow-hidden rounded-3xl border border-line shadow-soft">
                <iframe
                  src={site.mapsEmbed}
                  title="Tran Hang Spa on Google Maps"
                  className="h-full min-h-[280px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </Reveal>

          {/* Booking */}
          <Reveal delay={120}>
            <div id="booking" className="scroll-mt-24">
              <BookingForm locale={locale} t={booking} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
