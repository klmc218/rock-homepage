import ko from '@/messages/ko.json'
import en from '@/messages/en.json'
import zh from '@/messages/zh.json'
import ja from '@/messages/ja.json'

export const locales = ['ko', 'en', 'zh', 'ja'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'ko'

export type Dictionary = typeof ko

const dictionaries: Record<Locale, Dictionary> = { ko, en, zh, ja }

export const localeLabels: Record<Locale, { code: string; native: string }> = {
  ko: { code: 'KO', native: '한국어' },
  en: { code: 'EN', native: 'English' },
  zh: { code: 'ZH', native: '简体中文' },
  ja: { code: 'JA', native: '日本語' },
}

export const htmlLang: Record<Locale, string> = {
  ko: 'ko',
  en: 'en',
  zh: 'zh-Hans',
  ja: 'ja',
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value)
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale]
}

export const navSections = [
  { id: 'products', key: 'products' },
  { id: 'technology', key: 'technology' },
  { id: 'use-cases', key: 'useCases' },
  { id: 'about', key: 'about' },
  { id: 'contact', key: 'contact' },
] as const
