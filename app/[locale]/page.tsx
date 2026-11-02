import { notFound } from 'next/navigation'
import { getDictionary, isLocale } from '@/lib/i18n'
import { SiteHeader } from '@/components/site/site-header'
import { Hero } from '@/components/site/hero'
import { Features } from '@/components/site/features'
import { UseCases } from '@/components/site/use-cases'
import { Technology } from '@/components/site/technology'
import { About } from '@/components/site/about'
import { Contact } from '@/components/site/contact'
import { SiteFooter } from '@/components/site/site-footer'
import { MobileActionBar } from '@/components/site/mobile-action-bar'

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const dict = getDictionary(locale)

  return (
    <>
      <SiteHeader locale={locale} nav={dict.nav} />
      <main>
        <Hero dict={dict.hero} />
        <Features dict={dict.features} />
        <UseCases dict={dict.useCases} />
        <Technology dict={dict.technology} />
        <About dict={dict.about} />
        <Contact dict={dict.contact} />
      </main>
      <SiteFooter locale={locale} dict={dict.footer} nav={dict.nav} />
      <MobileActionBar locale={locale} nav={dict.nav} />
    </>
  )
}
