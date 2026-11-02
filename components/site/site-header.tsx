'use client'

import { Menu } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { navSections, type Dictionary, type Locale } from '@/lib/i18n'
import { cn } from '@/lib/utils'
import { LanguageSwitcher } from './language-switcher'
import { Logo } from './logo'

type Props = { locale: Locale; nav: Dictionary['nav'] }

export function SiteHeader({ locale, nav }: Props) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 transition-colors duration-300',
        scrolled ? 'border-b border-border bg-background/80 backdrop-blur-xl' : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 lg:px-8">
        <Link href={`/${locale}`} aria-label={nav.home} className="shrink-0">
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navSections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground"
                >
                  {nav[s.key]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher locale={locale} label={nav.language} className="hidden md:inline-flex" />
          <a
            href="#contact"
            className="hidden h-9 items-center rounded-full bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 md:inline-flex"
          >
            {nav.inquiry}
          </a>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              aria-label={nav.menu}
              className="grid size-10 place-items-center rounded-full border border-border bg-foreground/5 text-foreground lg:hidden"
            >
              <Menu className="size-5" aria-hidden="true" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[85%] max-w-sm border-border bg-background p-6">
              <SheetTitle className="sr-only">{nav.menu}</SheetTitle>
              <Logo />
              <nav aria-label="Mobile" className="mt-8">
                <ul className="flex flex-col gap-1">
                  {navSections.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        onClick={() => setOpen(false)}
                        className="block rounded-xl px-4 py-3.5 text-lg font-medium text-foreground transition-colors hover:bg-foreground/5"
                      >
                        {nav[s.key]}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-auto inline-flex h-12 items-center justify-center rounded-full bg-primary font-medium text-primary-foreground"
              >
                {nav.inquiry}
              </a>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
