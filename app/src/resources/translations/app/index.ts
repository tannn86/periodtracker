import { AppTranslations } from '../../../core/types'
import { Locale } from '../'

import { en } from './en'
import { vi } from './vi'

export const appTranslations: Record<Locale, AppTranslations> = {
  en,
  vi,
}

export const availableAppLocales = Object.keys(appTranslations) as Locale[]
