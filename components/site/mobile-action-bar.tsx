import { MessageSquare } from 'lucide-react'
import type { Dictionary, Locale } from '@/lib/i18n'
import { LanguageSwitcher } from './language-switcher'

type Props = { locale: Locale; nav: Dictionary['nav'] }

export function MobileActionBar({ locale, nav }: Props) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] md:hidden">
      <div className="mx-auto flex max-w-md items-center gap-2 rounded-full border border-border bg-background/85 p-1.5 shadow-2xl shadow-black/40 backdrop-blur-xl">
        <LanguageSwitcher locale={locale} label={nav.language} side="top" className="h-11 border-transparent" />
        <a
          href="#contact"
          className="flex h-11 flex-1 items-center justify-center gap-2 rounded-full bg-primary text-sm font-semibold text-primary-foreground"
        >
          <MessageSquare className="size-4" aria-hidden="true" />
          {nav.inquiry}
        </a>
      </div>
    </div>
  )
}
