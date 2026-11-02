import { ArrowRight, Download } from 'lucide-react'
import Image from 'next/image'
import type { Dictionary } from '@/lib/i18n'

export function Hero({ dict }: { dict: Dictionary['hero'] }) {
  return (
    <section className="relative isolate overflow-hidden pt-28 pb-16 md:pt-36 lg:pb-24">
      <div aria-hidden="true" className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div aria-hidden="true" className="absolute -top-40 left-1/2 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-primary/25 blur-[140px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-8">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium tracking-wide text-accent">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
            {dict.eyebrow}
          </p>
          <h1 className="mt-6 text-4xl leading-[1.08] font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl xl:text-7xl">
            {dict.title}{' '}
            <span className="bg-gradient-to-r from-primary via-sky-400 to-accent bg-clip-text text-transparent">
              {dict.titleAccent}
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-pretty text-muted-foreground md:text-lg">
            {dict.subtitle}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Download className="size-4" aria-hidden="true" />
              {dict.ctaBrochure}
            </a>
            <a
              href="#contact"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border bg-foreground/5 px-6 font-medium text-foreground transition-colors hover:bg-foreground/10"
            >
              {dict.ctaPartner}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-4 border-t border-border pt-8">
            {dict.stats.map((s) => (
              <div key={s.value}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-xl font-semibold text-foreground md:text-2xl">{s.value}</dd>
                <dd className="mt-1 text-xs leading-snug text-muted-foreground md:text-sm">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-card shadow-2xl shadow-primary/20 sm:aspect-[4/3] lg:aspect-[5/6]">
            <Image
              src="/images/photos/ring-case.jpg"
              alt={dict.imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover object-[50%_40%]"
            />
            <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/60 to-transparent" />

            <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl border border-border bg-background/70 px-4 py-3 backdrop-blur-md">
              <span className="flex items-center gap-2 text-sm font-medium">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-accent" />
                </span>
                {dict.liveLabel}
              </span>
              <span className="font-mono text-xs text-muted-foreground">x 0.42 · y -1.08 · z 0.17</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
