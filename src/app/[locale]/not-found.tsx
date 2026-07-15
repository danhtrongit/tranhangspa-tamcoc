import Link from "next/link";
import { ArrowRightIcon, LotusIcon } from "@/components/icons";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-cream px-6 pt-24 text-center">
      <div>
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold-100 text-gold-600">
          <LotusIcon className="h-8 w-8" />
        </span>
        <p className="mt-6 font-serif text-6xl text-gold-700">404</p>
        <h1 className="mt-2 font-serif text-2xl text-ink">
          Page not found · Không tìm thấy trang
        </h1>
        <p className="mx-auto mt-3 max-w-md text-sm text-muted">
          The page you are looking for may have moved. Let&apos;s get you back to
          a place of calm.
        </p>
        <Link href="/en" className="btn-primary mt-8">
          Back to home
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
