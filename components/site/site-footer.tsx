import Link from 'next/link'
import { localeLabels, locales, navSections, type Dictionary, type Locale } from '@/lib/i18n'
import { Logo } from './logo'

type Props = { locale: Locale; dict: Dictionary['footer']; nav: Dictionary['nav'] }

export function SiteFooter({ locale, dict, nav }: Props) {
  return (
    <footer className="border-t border-border pb-28 md:pb-0">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <Logo />
          <p className="mt-4 text-sm text-muted-foreground">{dict.tagline}</p>
          <dl className="mt-6 grid gap-1.5 text-sm text-muted-foreground">
            <div className="flex gap-2">
              <dt className="text-foreground/80">{dict.company}</dt>
            </div>
            <div className="flex gap-2">
              <dt>{dict.bizNo}</dt>
              <dd>450-86-00873</dd>
            </div>
            <div className="flex gap-2">
              <dt>{dict.address}</dt>
              <dd>{dict.addressValue}</dd>
            </div>
            <div className="flex gap-2">
              <dt>{dict.email}</dt>
              <dd>
                <a href="mailto:info@rock.re.kr" className="hover:text-foreground">
                  info@rock.re.kr
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <nav aria-label={dict.sitemap}>
          <p className="text-sm font-semibold">{dict.sitemap}</p>
          <ul className="mt-4 grid gap-2.5 text-sm text-muted-foreground">
            {navSections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="hover:text-foreground">
                  {nav[s.key]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label={dict.languages}>
          <p className="text-sm font-semibold">{dict.languages}</p>
          <ul className="mt-4 grid gap-2.5 text-sm text-muted-foreground">
            {locales.map((l) => (
              <li key={l}>
                <Link
                  href={`/${l}`}
                  hrefLang={l}
                  lang={l}
                  aria-current={l === locale ? 'page' : undefined}
                  className="inline-flex items-center gap-2 hover:text-foreground aria-[current=page]:text-accent"
                >
                  <span className="w-6 text-xs font-semibold">{localeLabels[l].code}</span>
                  {localeLabels[l].native}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-7xl px-5 py-6 text-xs text-muted-foreground lg:px-8">
          © {new Date().getFullYear()} R.O.C.K Co., Ltd. {dict.rights} · www.rock.re.kr
        </p>
      </div>
    </footer>
  )
}
