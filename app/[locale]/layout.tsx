import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Noto_Sans_JP, Noto_Sans_KR, Noto_Sans_SC } from 'next/font/google'
import { notFound } from 'next/navigation'
import { getDictionary, htmlLang, isLocale, locales } from '@/lib/i18n'
import '../globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const notoKr = Noto_Sans_KR({ weight: ['400', '500', '700'], variable: '--font-noto-kr', display: 'swap', preload: false })
const notoSc = Noto_Sans_SC({ weight: ['400', '500', '700'], variable: '--font-noto-sc', display: 'swap', preload: false })
const notoJp = Noto_Sans_JP({ weight: ['400', '500', '700'], variable: '--font-noto-jp', display: 'swap', preload: false })

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const dict = getDictionary(locale)
  return {
    metadataBase: new URL('https://www.rock.re.kr'),
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(locales.map((l) => [htmlLang[l], `/${l}`])),
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      images: ['/images/photos/ring-case.jpg'],
      siteName: 'R.O.C.K',
    },
    icons: { icon: '/icon.svg', apple: '/apple-icon.png' },
  }
}

export const viewport: Viewport = {
  themeColor: '#0B0F19',
  colorScheme: 'dark',
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  return (
    <html
      lang={htmlLang[locale]}
      className={`${inter.variable} ${notoKr.variable} ${notoSc.variable} ${notoJp.variable}`}
    >
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
