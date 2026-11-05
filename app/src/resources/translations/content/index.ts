import { StaticContent } from '../../../core/types'
import { Locale } from '../'
import { en } from './en'
import { vi } from './vi'

export const content: Record<Locale, StaticContent> = {
  en,
  vi,
}

export const availableContentLocales = Object.keys(content)
