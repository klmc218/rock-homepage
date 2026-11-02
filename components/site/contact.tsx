'use client'

import { CheckCircle2, Mail, Send } from 'lucide-react'
import { useActionState } from 'react'
import { submitInquiry, type ContactState } from '@/app/actions/contact'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import type { Dictionary } from '@/lib/i18n'
import { SectionHeading } from './section-heading'

const initialState: ContactState = { status: 'idle' }
const fieldClass = 'h-12 rounded-xl bg-background/60 px-4 text-base md:text-sm'

export function Contact({ dict }: { dict: Dictionary['contact'] }) {
  const [state, formAction, pending] = useActionState(submitInquiry, initialState)
  const invalid = (field: string) => (state.status === 'error' && state.fields?.includes(field)) || undefined

  return (
    <section id="contact" className="relative py-20 pb-32 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-8">
        <div>
          <SectionHeading eyebrow={dict.eyebrow} title={dict.title} subtitle={dict.subtitle} />
          <a
            href="mailto:info@rock.re.kr"
            className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 transition-colors hover:border-accent/40"
          >
            <Mail className="size-5 text-accent" aria-hidden="true" />
            <span className="font-medium">info@rock.re.kr</span>
          </a>
        </div>

        <div className="rounded-3xl border border-border bg-card p-6 md:p-10">
          {state.status === 'success' ? (
            <div role="status" className="flex flex-col items-center py-12 text-center">
              <CheckCircle2 className="size-12 text-accent" aria-hidden="true" />
              <p className="mt-4 text-lg font-medium text-balance">{dict.success}</p>
            </div>
          ) : (
            <form action={formAction} className="grid gap-5 md:grid-cols-2" noValidate>
              <div className="grid gap-2">
                <Label htmlFor="name">{dict.name} *</Label>
                <Input id="name" name="name" autoComplete="name" required placeholder={dict.placeholderName} aria-invalid={invalid('name')} className={fieldClass} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="company">{dict.company} *</Label>
                <Input id="company" name="company" autoComplete="organization" required placeholder={dict.placeholderCompany} aria-invalid={invalid('company')} className={fieldClass} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="country">{dict.country} *</Label>
                <Input id="country" name="country" autoComplete="country-name" required placeholder={dict.placeholderCountry} aria-invalid={invalid('country')} className={fieldClass} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">{dict.email} *</Label>
                <Input id="email" name="email" type="email" autoComplete="email" required placeholder={dict.placeholderEmail} aria-invalid={invalid('email')} className={fieldClass} />
              </div>
              <div className="grid gap-2 md:col-span-2">
                <Label htmlFor="type">{dict.type} *</Label>
                <select
                  id="type"
                  name="type"
                  required
                  defaultValue=""
                  aria-invalid={invalid('type')}
                  className="h-12 w-full rounded-xl border border-input bg-background/60 px-4 text-base text-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive md:text-sm"
                >
                  <option value="" disabled>
                    {dict.selectType}
                  </option>
                  {Object.entries(dict.types).map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid gap-2 md:col-span-2">
                <Label htmlFor="message">{dict.message}</Label>
                <Textarea id="message" name="message" rows={5} placeholder={dict.placeholderMessage} className="min-h-32 rounded-xl bg-background/60 px-4 py-3 text-base md:text-sm" />
              </div>

              {state.status === 'error' && (
                <p role="alert" className="text-sm text-destructive md:col-span-2">
                  {dict.error}
                </p>
              )}

              <div className="flex flex-col gap-4 md:col-span-2 md:flex-row md:items-center md:justify-between">
                <p className="text-xs leading-relaxed text-muted-foreground md:max-w-sm">{dict.privacy}</p>
                <button
                  type="submit"
                  disabled={pending}
                  className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-7 font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
                >
                  <Send className="size-4" aria-hidden="true" />
                  {pending ? dict.submitting : dict.submit}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
