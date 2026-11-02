import { NextResponse, type NextRequest } from 'next/server'
import { defaultLocale, locales, type Locale } from '@/lib/i18n'

function detectLocale(request: NextRequest): Locale {
  const header = request.headers.get('accept-language') ?? ''
  const preferred = header
    .split(',')
    .map((part) => part.split(';')[0].trim().toLowerCase().slice(0, 2))
  return (preferred.find((code) => (locales as readonly string[]).includes(code)) as Locale) ?? defaultLocale
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const hasLocale = locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`))
  if (hasLocale) return

  const url = request.nextUrl.clone()
  url.pathname = `/${detectLocale(request)}${pathname === '/' ? '' : pathname}`
  return NextResponse.redirect(url)
}

export const config = {
  matcher: ['/((?!api|_next|images|.*\\..*).*)'],
}
