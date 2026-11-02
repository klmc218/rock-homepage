import { Glasses, Laptop, Presentation, Tv } from 'lucide-react'
import Image from 'next/image'
import type { Dictionary } from '@/lib/i18n'
import { SectionHeading } from './section-heading'

const visuals = [
  { src: '/images/photos/carry-laptop.jpg', Icon: Presentation, position: 'object-[60%_50%]' },
  { src: '/images/photos/typing.jpg', Icon: Laptop, position: 'object-[50%_60%]' },
  { src: '/images/photos/phone.jpg', Icon: Tv, position: 'object-[60%_45%]' },
  { src: '/images/photos/hand-point.jpg', Icon: Glasses, position: 'object-[40%_45%]' },
]

export function UseCases({ dict }: { dict: Dictionary['useCases'] }) {
  return (
    <section id="use-cases" className="bg-surface py-20 text-surface-foreground lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow={dict.eyebrow} title={dict.title} subtitle={dict.subtitle} tone="light" />

        <ul className="scrollbar-none -mx-5 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 lg:grid-cols-4">
          {dict.items.map((item, i) => {
            const { src, Icon, position } = visuals[i]
            return (
              <li
                key={item.title}
                className="group w-[80%] shrink-0 snap-start overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 transition-shadow hover:shadow-xl sm:w-[55%] md:w-auto"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 80vw"
                    className={`object-cover ${position} transition-transform duration-700 group-hover:scale-105`}
                  />
                  <span className="absolute top-3 left-3 grid size-10 place-items-center rounded-xl bg-background/80 text-accent backdrop-blur">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-surface-muted">{item.desc}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
