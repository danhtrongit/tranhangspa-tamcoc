"use client";

import { useState, type FormEvent } from "react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/en";
import { serviceCategories } from "@/data/services";
import { site, whatsappLink } from "@/data/site";
import {
  MailIcon,
  MessengerIcon,
  PhoneIcon,
  WhatsappIcon,
  ZaloIcon,
} from "./icons";

export default function BookingForm({
  locale,
  t,
}: {
  locale: Locale;
  t: Dictionary["booking"];
}) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    people: "1",
    notes: "",
  });

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function buildMessage() {
    const L = locale === "vi";
    const lines = [
      t.defaultMessage,
      "",
      `${L ? "• Tên" : "• Name"}: ${form.name || "—"}`,
      `${L ? "• Liệu trình" : "• Treatment"}: ${form.service || "—"}`,
      `${L ? "• Ngày" : "• Date"}: ${form.date || "—"}`,
      `${L ? "• Giờ" : "• Time"}: ${form.time || "—"}`,
      `${L ? "• Số khách" : "• Guests"}: ${form.people}`,
      form.notes ? `${L ? "• Ghi chú" : "• Notes"}: ${form.notes}` : "",
      `${L ? "• Liên hệ" : "• Contact"}: ${form.phone || "—"}`,
    ].filter(Boolean);
    return lines.join("\n");
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    window.open(whatsappLink(buildMessage()), "_blank", "noopener,noreferrer");
  }

  function sendEmail() {
    const subject =
      locale === "vi"
        ? "Yêu cầu đặt lịch - Trần Hằng Spa"
        : "Booking request - Tran Hang Spa";
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(buildMessage())}`;
  }

  const channels = [
    {
      label: t.channels.whatsapp,
      href: whatsappLink(t.defaultMessage),
      className: "bg-[#25D366] text-white",
      icon: <WhatsappIcon className="h-5 w-5" />,
    },
    {
      label: t.channels.call,
      href: site.tel,
      className: "bg-gold-600 text-white",
      icon: <PhoneIcon className="h-4 w-4" />,
    },
    {
      label: t.channels.zalo,
      href: site.zalo,
      className: "bg-[#0068FF] text-white",
      icon: <ZaloIcon className="h-5 w-5" />,
    },
    {
      label: t.channels.messenger,
      href: site.messenger,
      className: "bg-[#0084FF] text-white",
      icon: <MessengerIcon className="h-5 w-5" />,
    },
  ];

  const inputClass =
    "w-full rounded-xl border border-line bg-cream/50 px-4 py-3 text-sm text-ink placeholder:text-muted/70 focus:border-gold-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-200";
  const labelClass =
    "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-charcoal";

  return (
    <div className="rounded-3xl border border-line bg-white p-6 shadow-card sm:p-8">
      {/* Quick channels */}
      <p className="text-xs font-semibold uppercase tracking-widest2 text-gold-700">
        {t.quick}
      </p>
      <div className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
        {channels.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-1.5 rounded-xl px-3 py-2.5 text-xs font-semibold transition-transform hover:-translate-y-0.5 ${c.className}`}
          >
            {c.icon}
            {c.label}
          </a>
        ))}
      </div>

      <div className="my-6 flex items-center gap-3 text-xs uppercase tracking-widest text-muted">
        <span className="h-px flex-1 bg-line" />
        {t.or}
        <span className="h-px flex-1 bg-line" />
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className={labelClass} htmlFor="bk-name">
              {t.form.name}
            </label>
            <input
              id="bk-name"
              className={inputClass}
              placeholder={t.form.namePlaceholder}
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              required
            />
          </div>
          <div>
            <label className={labelClass} htmlFor="bk-phone">
              {t.form.phone}
            </label>
            <input
              id="bk-phone"
              className={inputClass}
              placeholder={t.form.phonePlaceholder}
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
            />
          </div>
        </div>

        <div>
          <label className={labelClass} htmlFor="bk-service">
            {t.form.service}
          </label>
          <select
            id="bk-service"
            className={inputClass}
            value={form.service}
            onChange={(e) => update("service", e.target.value)}
          >
            <option value="">{t.form.servicePlaceholder}</option>
            {serviceCategories.map((c) => (
              <optgroup key={c.id} label={c.name[locale]}>
                {c.items.map((item) => (
                  <option key={item.id} value={item.name[locale]}>
                    {item.name[locale]}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <label className={labelClass} htmlFor="bk-date">
              {t.form.date}
            </label>
            <input
              id="bk-date"
              type="date"
              className={inputClass}
              value={form.date}
              onChange={(e) => update("date", e.target.value)}
            />
          </div>
          <div>
            <label className={labelClass} htmlFor="bk-time">
              {t.form.time}
            </label>
            <input
              id="bk-time"
              type="time"
              className={inputClass}
              value={form.time}
              onChange={(e) => update("time", e.target.value)}
            />
          </div>
          <div>
            <label className={labelClass} htmlFor="bk-people">
              {t.form.people}
            </label>
            <select
              id="bk-people"
              className={inputClass}
              value={form.people}
              onChange={(e) => update("people", e.target.value)}
            >
              {["1", "2", "3", "4", "5", "6+"].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className={labelClass} htmlFor="bk-notes">
            {t.form.notes}
          </label>
          <textarea
            id="bk-notes"
            rows={3}
            className={inputClass}
            placeholder={t.form.notesPlaceholder}
            value={form.notes}
            onChange={(e) => update("notes", e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-3 pt-1 sm:flex-row">
          <button type="submit" className="btn-primary flex-1">
            <WhatsappIcon className="h-5 w-5" />
            {t.form.submitWhatsapp}
          </button>
          <button
            type="button"
            onClick={sendEmail}
            className="btn-ghost flex-1"
          >
            <MailIcon className="h-4 w-4" />
            {t.form.submit}
          </button>
        </div>
      </form>
    </div>
  );
}
