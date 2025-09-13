'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import en from '@/locales/en.json';
import mr from '@/locales/mr.json';

export type Locale = 'en' | 'mr';
const dictionaries: Record<Locale, Record<string, string>> = { en, mr };

interface I18nContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextValue>({
  locale: 'en',
  setLocale: () => {},
  t: (key: string) => key,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en');
  const t = (key: string) => dictionaries[locale][key] || key;
  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
