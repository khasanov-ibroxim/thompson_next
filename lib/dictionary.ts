// lib/dictionary.ts
import { Locale } from '@/i18n-config';
import type { DictionaryMap, PageType, CommonDictionary } from './dictionary-types';

// ✅ Page-specific dictionary paths
const pageDictionaries = {
  common: {
    en: () => import('@/dictionaries/common/en.json').then((m) => m.default),
    ru: () => import('@/dictionaries/common/ru.json').then((m) => m.default),
    uz: () => import('@/dictionaries/common/uz.json').then((m) => m.default),
  },
  home: {
    en: () => import('@/dictionaries/home/en.json').then((m) => m.default),
    ru: () => import('@/dictionaries/home/ru.json').then((m) => m.default),
    uz: () => import('@/dictionaries/home/uz.json').then((m) => m.default),
  },
  protection: {
    en: () => import('@/dictionaries/protection/en.json').then((m) => m.default),
    ru: () => import('@/dictionaries/protection/ru.json').then((m) => m.default),
    uz: () => import('@/dictionaries/protection/uz.json').then((m) => m.default),
  },
  automotive: {
    en: () => import('@/dictionaries/automotive/en.json').then((m) => m.default),
    ru: () => import('@/dictionaries/automotive/ru.json').then((m) => m.default),
    uz: () => import('@/dictionaries/automotive/uz.json').then((m) => m.default),
  },
  technology: {
    en: () => import('@/dictionaries/technology/en.json').then((m) => m.default),
    ru: () => import('@/dictionaries/technology/ru.json').then((m) => m.default),
    uz: () => import('@/dictionaries/technology/uz.json').then((m) => m.default),
  },
  contact: {
    en: () => import('@/dictionaries/contact/en.json').then((m) => m.default),
    ru: () => import('@/dictionaries/contact/ru.json').then((m) => m.default),
    uz: () => import('@/dictionaries/contact/uz.json').then((m) => m.default),
  },
} as const;

export type { PageType };

// ✅ Get dictionary for specific page with proper typing
export async function getDictionary<T extends PageType>(
    locale: Locale,
    page: T
): Promise<DictionaryMap[T]> {
  const fallbackLocale: Locale = 'ru';

  try {
    // Check if locale exists for this page
    if (!pageDictionaries[page][locale]) {
      console.warn(`Dictionary for ${page}/${locale} not found, falling back to ${fallbackLocale}`);
      return await pageDictionaries[page][fallbackLocale]() as DictionaryMap[T];
    }

    return await pageDictionaries[page][locale]() as DictionaryMap[T];
  } catch (error) {
    console.error(`Error loading dictionary for ${page}/${locale}:`, error);

    // Fallback to ru
    try {
      return await pageDictionaries[page][fallbackLocale]() as DictionaryMap[T];
    } catch (fallbackError) {
      console.error(`Failed to load fallback dictionary:`, fallbackError);
      throw new Error(`Could not load dictionary for ${page}`);
    }
  }
}

// ✅ Get common dictionary (for navbar, footer, etc)
export async function getCommonDictionary(locale: Locale): Promise<CommonDictionary> {
  const fallbackLocale: Locale = 'ru';

  try {
    if (!pageDictionaries.common[locale]) {
      console.warn(`Common dictionary for ${locale} not found, falling back to ${fallbackLocale}`);
      return await pageDictionaries.common[fallbackLocale]() as CommonDictionary;
    }
    return await pageDictionaries.common[locale]() as CommonDictionary;
  } catch (error) {
    console.error(`Error loading common dictionary for ${locale}:`, error);
    return await pageDictionaries.common[fallbackLocale]() as CommonDictionary;
  }
}