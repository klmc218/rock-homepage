'use client'

import { useState } from 'react'
import { Activity, Award, BatteryLow, ChevronDown, Globe, Newspaper, ShieldCheck, ArrowUpRight } from 'lucide-react'
import type { Dictionary } from '@/lib/i18n'
import { SectionHeading } from './section-heading'
import { cn } from '@/lib/utils'

const icons = [Activity, ShieldCheck, BatteryLow]

export function Technology({ dict }: { dict: Dictionary['technology'] }) {
  // Accordion state: default open first category or toggle multiple
  const [openSection, setOpenSection] = useState<string | null>('awards')

  const toggleSection = (id: string) => {
    setOpenSection((prev) => (prev === id ? null : id))
  }

  return (
    <section id="technology" className="relative overflow-hidden py-20 lg:py-28">
      <div aria-hidden="true" className="absolute right-0 bottom-0 -z-10 h-96 w-96 rounded-full bg-accent/15 blur-[140px]" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow={dict.eyebrow} title={dict.title} subtitle={dict.subtitle} />

        {/* 3대 핵심 기술 기둥 (v0 원본 유지) */}
        <ul className="mt-12 grid gap-4 md:grid-cols-3 md:gap-6">
          {dict.pillars.map((p, i) => {
            const Icon = icons[i]
            return (
              <li key={p.title} className="rounded-3xl border border-border bg-card p-6 lg:p-8">
                <Icon className="size-7 text-accent" aria-hidden="true" />
                <h3 className="mt-6 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </li>
            )
          })}
        </ul>

        {/* 글로벌 전시 및 주요 연혁 섹션 */}
        <div className="mt-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="font-mono text-xs tracking-widest text-accent uppercase">Global Footprint & History</p>
              <h3 className="mt-2 text-2xl font-semibold md:text-3xl">{dict.timelineTitle}</h3>
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{dict.timelineSubtitle}</p>
            </div>
          </div>

          {/* 주요 4대 마일스톤 가로 요약 타임라인 (2012 설립 ~ 현재) */}
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {dict.milestones.map((m, i) => (
              <li
                key={m.period}
                className="relative rounded-2xl border border-border/80 bg-card/60 p-5 backdrop-blur-sm transition-all hover:border-accent/40"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-accent px-2.5 py-1 rounded-full bg-accent/10 border border-accent/20">
                    {m.period}
                  </span>
                  <span className="text-xs text-muted-foreground/60">Stage 0{i + 1}</span>
                </div>
                <h4 className="mt-3 text-base font-semibold text-foreground">{m.title}</h4>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{m.desc}</p>
              </li>
            ))}
          </ol>

          {/* 클릭 시 아래로 펼쳐지는 인터랙티브 아코디언 드롭다운 (3개 분야) */}
          <div className="mt-8 space-y-4">
            {/* 1. 수상 및 인증경력 아코디언 */}
            <div className="rounded-3xl border border-border bg-card/70 overflow-hidden transition-all duration-300">
              <button
                type="button"
                onClick={() => toggleSection('awards')}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.02] transition-colors focus:outline-none"
                aria-expanded={openSection === 'awards'}
              >
                <div className="flex items-center gap-3.5">
                  <div className="grid size-10 place-items-center rounded-2xl bg-primary/10 text-primary border border-primary/20">
                    <Award className="size-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2.5">
                      <h4 className="text-lg font-semibold text-foreground">{dict.categories.awards}</h4>
                      <span className="text-xs font-mono text-primary bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20">
                        {dict.awardsList.length}건
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5">클릭하여 수상 및 정부 인증 전체 내역 확인</p>
                  </div>
                </div>
                <div className={cn(
                  "grid size-8 place-items-center rounded-full border border-border bg-background transition-transform duration-300",
                  openSection === 'awards' ? "rotate-180 text-primary border-primary/40" : "text-muted-foreground"
                )}>
                  <ChevronDown className="size-4" />
                </div>
              </button>

              {openSection === 'awards' && (
                <div className="border-t border-border/60 p-6 pt-5 bg-background/40 animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {dict.awardsList.map((item, idx) => (
                      <div
                        key={idx}
                        className="rounded-2xl border border-border/50 bg-card/80 p-4 transition-all hover:border-primary/40 hover:bg-card"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-mono text-xs font-semibold text-primary">{item.date}</span>
                          <span className="text-[11px] text-muted-foreground/80 truncate bg-muted px-2 py-0.5 rounded-md">
                            {item.org}
                          </span>
                        </div>
                        <p className="mt-2 text-sm font-medium text-foreground leading-snug">{item.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 2. 국내외 전시회 참석 아코디언 */}
            <div className="rounded-3xl border border-border bg-card/70 overflow-hidden transition-all duration-300">
              <button
                type="button"
                onClick={() => toggleSection('exhibitions')}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.02] transition-colors focus:outline-none"
                aria-expanded={openSection === 'exhibitions'}
              >
                <div className="flex items-center gap-3.5">
                  <div className="grid size-10 place-items-center rounded-2xl bg-accent/10 text-accent border border-accent/20">
                    <Globe className="size-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2.5">
                      <h4 className="text-lg font-semibold text-foreground">{dict.categories.exhibitions}</h4>
                      <span className="text-xs font-mono text-accent bg-accent/10 px-2.5 py-0.5 rounded-full border border-accent/20">
                        {dict.exhibitionsList.length}건
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5">클릭하여 CES, MWC, SLUSH 등 글로벌 전시 참가 내역 확인</p>
                  </div>
                </div>
                <div className={cn(
                  "grid size-8 place-items-center rounded-full border border-border bg-background transition-transform duration-300",
                  openSection === 'exhibitions' ? "rotate-180 text-accent border-accent/40" : "text-muted-foreground"
                )}>
                  <ChevronDown className="size-4" />
                </div>
              </button>

              {openSection === 'exhibitions' && (
                <div className="border-t border-border/60 p-6 pt-5 bg-background/40 animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {dict.exhibitionsList.map((item, idx) => (
                      <div
                        key={idx}
                        className="rounded-2xl border border-border/50 bg-card/80 p-4 transition-all hover:border-accent/40 hover:bg-card"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-mono text-xs font-semibold text-accent">{item.date}</span>
                          <span className="text-[11px] text-muted-foreground/80 truncate bg-muted px-2 py-0.5 rounded-md">
                            {item.location}
                          </span>
                        </div>
                        <p className="mt-2 text-sm font-medium text-foreground leading-snug">{item.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 3. 언론소개 아코디언 */}
            <div className="rounded-3xl border border-border bg-card/70 overflow-hidden transition-all duration-300">
              <button
                type="button"
                onClick={() => toggleSection('media')}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.02] transition-colors focus:outline-none"
                aria-expanded={openSection === 'media'}
              >
                <div className="flex items-center gap-3.5">
                  <div className="grid size-10 place-items-center rounded-2xl bg-teal-500/10 text-teal-400 border border-teal-500/20">
                    <Newspaper className="size-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2.5">
                      <h4 className="text-lg font-semibold text-foreground">{dict.categories.media}</h4>
                      <span className="text-xs font-mono text-teal-400 bg-teal-500/10 px-2.5 py-0.5 rounded-full border border-teal-500/20">
                        {dict.mediaList.length}건
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5">클릭하여 TV 방송, 라디오, 주요 신문 보도 기사 원문 확인</p>
                  </div>
                </div>
                <div className={cn(
                  "grid size-8 place-items-center rounded-full border border-border bg-background transition-transform duration-300",
                  openSection === 'media' ? "rotate-180 text-teal-400 border-teal-400/40" : "text-muted-foreground"
                )}>
                  <ChevronDown className="size-4" />
                </div>
              </button>

              {openSection === 'media' && (
                <div className="border-t border-border/60 p-6 pt-5 bg-background/40 animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {dict.mediaList.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block rounded-2xl border border-border/50 bg-card/80 p-4 transition-all hover:border-teal-400/50 hover:bg-card"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-mono text-xs font-semibold text-teal-400">{item.date}</span>
                          <span className="inline-flex items-center gap-1 text-[11px] text-muted-foreground group-hover:text-teal-300 transition-colors">
                            {item.media}
                            <ArrowUpRight className="size-3" />
                          </span>
                        </div>
                        <p className="mt-2 text-sm font-medium text-foreground leading-snug group-hover:text-teal-300 transition-colors">
                          {item.title}
                        </p>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
