import type { Dictionary } from "@/i18n/en";
import { CheckIcon } from "@/components/icons";

export default function TrustBar({ t }: { t: Dictionary["trust"] }) {
  const items = [t.a, t.b, t.c, t.d];
  return (
    <div className="border-b border-line bg-gold-600 text-cream">
      <div className="container flex flex-wrap items-center justify-center gap-x-8 gap-y-2 py-3.5 text-center">
        {items.map((item) => (
          <span
            key={item}
            className="inline-flex items-center gap-2 text-xs font-medium sm:text-sm"
          >
            <CheckIcon className="h-4 w-4 shrink-0 text-gold-200" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
