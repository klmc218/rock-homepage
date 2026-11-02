import { cn } from '@/lib/utils'

type Props = {
  eyebrow: string
  title: string
  subtitle?: string
  tone?: 'dark' | 'light'
  className?: string
}

export function SectionHeading({ eyebrow, title, subtitle, tone = 'dark', className }: Props) {
  return (
    <div className={cn('max-w-2xl', className)}>
      <p className={cn('text-sm font-semibold tracking-wide uppercase', tone === 'dark' ? 'text-accent' : 'text-primary')}>
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance md:text-4xl lg:text-5xl">{title}</h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-base leading-relaxed text-pretty md:text-lg',
            tone === 'dark' ? 'text-muted-foreground' : 'text-surface-muted',
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
