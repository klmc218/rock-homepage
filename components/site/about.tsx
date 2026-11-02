import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import type { Dictionary } from '@/lib/i18n'
import { SectionHeading } from './section-heading'

const gallery = ['/images/photos/ring-studio.jpg', '/images/photos/ring-laptop.jpg', '/images/photos/hand-keyboard.jpg']

export function About({ dict }: { dict: Dictionary['about'] }) {
  return (
    <section id="about" className="bg-surface py-20 text-surface-foreground lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <SectionHeading eyebrow={dict.eyebrow} title={dict.title} tone="light" />
          <p className="mt-6 text-base leading-relaxed text-pretty text-surface-muted md:text-lg">{dict.body}</p>
          <ul className="mt-10 grid gap-6 sm:grid-cols-3">
            {dict.values.map((v) => (
              <li key={v.title} className="border-t-2 border-primary pt-4">
                <p className="font-semibold">{v.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-surface-muted">{v.desc}</p>
              </li>
            ))}
          </ul>

          <figure className="mt-12">
            <figcaption className="font-mono text-xs tracking-widest text-surface-muted uppercase">
              {dict.galleryTitle}
            </figcaption>
            <ul className="mt-4 grid grid-cols-3 gap-3">
              {gallery.map((src, i) => (
                <li key={src} className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-slate-100">
                  <Image
                    src={src}
                    alt={dict.galleryAlts[i]}
                    fill
                    sizes="(min-width: 1024px) 15vw, 33vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </li>
              ))}
            </ul>
          </figure>
        </div>

        <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl bg-background p-8 text-foreground md:p-10">
          <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-60" />
          <div aria-hidden="true" className="absolute -top-20 -right-20 size-72 rounded-full bg-primary/40 blur-[100px]" />
          <div className="relative">
            <p className="font-mono text-sm text-accent">www.rock.re.kr</p>
            <h3 className="mt-4 text-2xl font-semibold md:text-3xl">{dict.partnerTitle}</h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">{dict.partnerBody}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {['OEM/ODM', 'Distribution', 'Bulk Purchase', 'B2B'].map((tag) => (
                <li key={tag} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <a
            href="https://www.rock.re.kr"
            target="_blank"
            rel="noopener noreferrer"
            className="relative mt-10 inline-flex h-12 w-fit items-center gap-2 rounded-full bg-foreground px-6 font-medium text-background transition-colors hover:bg-foreground/90"
          >
            {dict.visitSite}
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
