'use client'

import { Check, ChevronDown, Globe } from 'lucide-react'
import { useRouter } from 'next/navigation'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { localeLabels, locales, type Locale } from '@/lib/i18n'
import { cn } from '@/lib/utils'

type Props = {
  locale: Locale
  label: string
  className?: string
  side?: 'top' | 'bottom'
}

export function LanguageSwitcher({ locale, label, className, side = 'bottom' }: Props) {
  const router = useRouter()

  function switchTo(next: Locale) {
    if (next === locale) return
    router.push(`/${next}${window.location.hash}`, { scroll: false })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label={label}
        className={cn(
          'inline-flex h-9 items-center gap-1.5 rounded-full border border-border bg-foreground/5 px-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground/10 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none',
          className,
        )}
      >
        <Globe className="size-4 text-accent" aria-hidden="true" />
        <span>{localeLabels[locale].code}</span>
        <ChevronDown className="size-3.5 opacity-60" aria-hidden="true" />
      </DropdownMenuTrigger>
      <DropdownMenuContent side={side} align="end" className="min-w-40">
        {locales.map((l) => (
          <DropdownMenuItem
            key={l}
            onClick={() => switchTo(l)}
            className="flex items-center justify-between gap-3"
            aria-current={l === locale ? 'true' : undefined}
          >
            <span className="flex items-center gap-2">
              <span className="w-6 text-xs font-semibold text-muted-foreground">{localeLabels[l].code}</span>
              <span lang={l}>{localeLabels[l].native}</span>
            </span>
            {l === locale && <Check className="size-4 text-accent" aria-hidden="true" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
