"use client";

import { useState } from "react";
import { site, whatsappLink } from "@/data/site";
import type { Dictionary } from "@/i18n/en";
import {
  CloseIcon,
  MessengerIcon,
  PhoneIcon,
  WhatsappIcon,
  ZaloIcon,
} from "./icons";

export default function FloatingContact({
  labels,
  message,
}: {
  labels: Dictionary["booking"]["channels"];
  message: string;
}) {
  const [open, setOpen] = useState(false);

  const actions = [
    {
      label: labels.whatsapp,
      href: whatsappLink(message),
      className: "bg-[#25D366]",
      icon: <WhatsappIcon className="h-6 w-6" />,
    },
    {
      label: labels.messenger,
      href: site.messenger,
      className: "bg-[#0084FF]",
      icon: <MessengerIcon className="h-6 w-6" />,
    },
    {
      label: labels.zalo,
      href: site.zalo,
      className: "bg-[#0068FF]",
      icon: <ZaloIcon className="h-6 w-6" />,
    },
    {
      label: labels.call,
      href: site.tel,
      className: "bg-gold-600",
      icon: <PhoneIcon className="h-5 w-5" />,
    },
  ];

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      <ul
        className={`flex flex-col items-end gap-3 transition-all duration-300 ${
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        {actions.map((a) => (
          <li key={a.label} className="flex items-center gap-2.5">
            <span className="rounded-full bg-ink/85 px-3 py-1 text-xs font-medium text-white shadow-lg">
              {a.label}
            </span>
            <a
              href={a.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={a.label}
              className={`flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg ring-4 ring-white/60 transition-transform hover:scale-105 ${a.className}`}
            >
              {a.icon}
            </a>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close contact menu" : "Open contact menu"}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-goldglow ring-4 ring-white/60 transition-transform hover:scale-105"
      >
        {!open && (
          <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-40" />
        )}
        {open ? (
          <CloseIcon className="h-6 w-6" />
        ) : (
          <WhatsappIcon className="h-7 w-7" />
        )}
      </button>
    </div>
  );
}
