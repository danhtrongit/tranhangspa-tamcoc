import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale } from "@/i18n/config";

const PUBLIC_FILE = /\.(.*)$/;

function detectLocale(request: NextRequest): string {
  // 1. Explicit cookie preference
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  if (cookieLocale && locales.includes(cookieLocale as (typeof locales)[number])) {
    return cookieLocale;
  }

  // 2. Accept-Language header
  const accept = request.headers.get("accept-language");
  if (accept) {
    const preferred = accept
      .split(",")
      .map((part) => part.split(";")[0].trim().toLowerCase());
    for (const lang of preferred) {
      if (lang.startsWith("vi")) return "vi";
      if (lang.startsWith("en")) return "en";
    }
  }

  // 3. Fallback — English (foreign-visitor focused)
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ignore Next internals, API and static files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/images") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  // Already prefixed with a supported locale
  const hasLocale = locales.some(
    (loc) => pathname === `/${loc}` || pathname.startsWith(`/${loc}/`),
  );
  if (hasLocale) return NextResponse.next();

  // Redirect to the detected locale
  const locale = detectLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|images|favicon.ico|robots.txt|sitemap.xml).*)"],
};
