import { BatteryCharging, Feather, MonitorSmartphone, Orbit } from 'lucide-react'
import Image from 'next/image'
import type { Dictionary } from '@/lib/i18n'
import { SectionHeading } from './section-heading'

const icons = [Orbit, Feather, MonitorSmartphone, BatteryCharging]

export function Features({ dict }: { dict: Dictionary['features'] }) {
  return (
    <section id="products" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow={dict.eyebrow} title={dict.title} subtitle={dict.subtitle} />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-border bg-card lg:aspect-auto">
            <Image
              src="/images/photos/ring-macro.jpg"
              alt={dict.productAlt}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          <div className="min-w-0">
            <ul className="scrollbar-none -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 md:pb-0">
              {dict.items.map((item, i) => {
                const Icon = icons[i]
                return (
                  <li
                    key={item.title}
                    className="group relative w-[78%] shrink-0 snap-start overflow-hidden rounded-3xl border border-border bg-card p-6 transition-colors hover:border-accent/40 sm:w-[60%] md:w-auto lg:p-7"
                  >
                    <div
                      aria-hidden="true"
                      className="absolute -top-16 -right-16 size-40 rounded-full bg-primary/0 blur-3xl transition-colors duration-500 group-hover:bg-primary/25"
                    />
                    <span className="relative grid size-12 place-items-center rounded-2xl border border-accent/30 bg-accent/10 text-accent">
                      <Icon className="size-6" aria-hidden="true" />
                    </span>
                    <span className="relative mt-6 block font-mono text-xs text-muted-foreground">0{i + 1}</span>
                    <h3 className="relative mt-1 text-lg font-semibold">{item.title}</h3>
                    <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                  </li>
                )
              })}
            </ul>
            <p className="mt-3 text-center text-xs text-muted-foreground md:hidden">{dict.swipeHint} →</p>
          </div>
        </div>
      </div>
    </section>
  )
}
