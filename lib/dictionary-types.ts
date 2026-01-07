// lib/dictionary-types.ts
import { Locale } from '@/i18n-config';

// Import actual types from JSON files
import type commonEn from '@/dictionaries/common/en.json';
import type homeEn from '@/dictionaries/home/en.json';
import type protectionEn from '@/dictionaries/protection/en.json';
import type automotiveEn from '@/dictionaries/automotive/en.json';
import type technologyEn from '@/dictionaries/technology/en.json';
import type contactEn from '@/dictionaries/contact/en.json';

// Export dictionary types
export type CommonDictionary = typeof commonEn;
export type HomeDictionary = typeof homeEn;
export type ProtectionDictionary = typeof protectionEn;
export type AutomotiveDictionary = typeof automotiveEn;
export type TechnologyDictionary = typeof technologyEn;
export type ContactDictionary = typeof contactEn;

// Type map for getDictionary function
export type DictionaryMap = {
    common: CommonDictionary;
    home: HomeDictionary;
    protection: ProtectionDictionary;
    automotive: AutomotiveDictionary;
    technology: TechnologyDictionary;
    contact: ContactDictionary;
};

export type PageType = keyof DictionaryMap;