import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export function LotusIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21c-4.5 0-8-2.6-8-6 2.2 0 4 .8 5.2 2" />
      <path d="M12 21c4.5 0 8-2.6 8-6-2.2 0-4 .8-5.2 2" />
      <path d="M12 21c-2.4 0-4-2.2-4-5 0-3 1.8-5.3 4-7 2.2 1.7 4 4 4 7 0 2.8-1.6 5-4 5Z" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg {...base} fill="currentColor" stroke="none" {...props}>
      <path d="M12 3.5l2.47 5.01 5.53.8-4 3.9.94 5.5L12 16.9l-4.94 2.6.94-5.5-4-3.9 5.53-.8L12 3.5Z" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M20 10c0 5.5-8 12-8 12s-8-6.5-8-12a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 5.5 5.5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7 2 2 0 0 1 6.5 3.5Z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" />
    </svg>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function SparkleIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
      <path d="M12 8c1 2 2 3 4 4-2 1-3 2-4 4-1-2-2-3-4-4 2-1 3-2 4-4Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* ---- Brand / social (filled glyphs) ---- */

export function WhatsappIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 5L2 22l5.2-1.36a9.9 9.9 0 0 0 4.84 1.24h.01c5.5 0 9.96-4.46 9.96-9.96 0-2.66-1.04-5.16-2.92-7.04A9.9 9.9 0 0 0 12.04 2Zm0 1.8c2.18 0 4.23.85 5.78 2.4a8.13 8.13 0 0 1 2.4 5.77c0 4.52-3.68 8.2-8.2 8.2a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.1.81.83-3.02-.2-.31a8.17 8.17 0 0 1-1.25-4.36c0-4.52 3.68-8.2 8.22-8.2ZM8.5 6.9c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.02 2.6.13.17 1.76 2.8 4.35 3.82 2.15.85 2.59.68 3.06.64.47-.04 1.52-.62 1.73-1.22.21-.6.21-1.12.15-1.22-.06-.11-.23-.17-.48-.29-.25-.13-1.52-.75-1.75-.84-.23-.08-.4-.12-.57.13-.17.25-.66.83-.8 1-.15.17-.3.19-.55.06-.25-.13-1.06-.39-2.02-1.25-.75-.66-1.25-1.48-1.4-1.73-.15-.25-.02-.38.11-.51.11-.11.25-.29.38-.44.12-.15.16-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.55-1.38-.77-1.88-.2-.48-.4-.42-.55-.43h-.5Z" />
    </svg>
  );
}

export function ZaloIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="currentColor" {...props}>
      <path d="M24 4C12.4 4 3 12.4 3 22.8c0 5.9 3 11.1 7.8 14.6-.2 2-.9 4.6-2.4 6.6-.4.6.1 1.3.8 1.1 3.8-.9 6.5-2.4 8.3-3.7 2.4.6 4.9.9 7.5.9 11.6 0 21-8.4 21-18.8S35.6 4 24 4Z" />
    </svg>
  );
}

export function MessengerIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2C6.3 2 2 6.2 2 11.8c0 2.9 1.2 5.5 3.1 7.2.2.2.3.4.3.6l.05 1.7c.02.6.62 1 1.16.76l1.9-.84c.16-.07.34-.08.5-.04 1 .27 2.05.42 3.14.42 5.7 0 10-4.2 10-9.8S17.7 2 12 2Zm6 7.6-2.94 4.66c-.47.74-1.47.93-2.18.4l-2.34-1.75a.6.6 0 0 0-.72 0l-3.16 2.4c-.42.32-.97-.18-.69-.63l2.94-4.66c.47-.74 1.47-.93 2.18-.4l2.34 1.75c.21.16.5.16.72 0l3.16-2.4c.42-.32.97.18.69.63Z" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.49-3.9 3.77-3.9 1.09 0 2.24.19 2.24.19v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.9h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TiktokIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M16.5 3c.3 2.1 1.5 3.6 3.5 3.9v2.6c-1.3.1-2.5-.3-3.6-1v5.8c0 3.3-2.4 5.7-5.5 5.7A5.4 5.4 0 0 1 5.5 14c0-3.1 2.6-5.6 5.9-5.2v2.8c-.4-.13-.8-.2-1.2-.13a2.6 2.6 0 0 0-2 2.6c0 1.5 1.1 2.6 2.5 2.6 1.5 0 2.6-1.1 2.6-2.9V3h3.2Z" />
    </svg>
  );
}

export function YoutubeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22.5 7.2a2.7 2.7 0 0 0-1.9-1.9C18.9 4.8 12 4.8 12 4.8s-6.9 0-8.6.5A2.7 2.7 0 0 0 1.5 7.2 28 28 0 0 0 1 12a28 28 0 0 0 .5 4.8 2.7 2.7 0 0 0 1.9 1.9c1.7.5 8.6.5 8.6.5s6.9 0 8.6-.5a2.7 2.7 0 0 0 1.9-1.9A28 28 0 0 0 23 12a28 28 0 0 0-.5-4.8ZM9.8 15.3V8.7l5.7 3.3-5.7 3.3Z" />
    </svg>
  );
}
