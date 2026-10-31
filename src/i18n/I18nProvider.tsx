'use client';

import { createContext, useContext } from 'react';
import type { Locale } from './config';
import type { Dictionary } from './dictionaries/en';

type I18n = { lang: Locale; t: Dictionary };

const I18nContext = createContext<I18n | null>(null);

// the server layout passes in only the active language's dictionary
export function I18nProvider({ lang, dictionary, children }: { lang: Locale; dictionary: Dictionary; children: React.ReactNode }) {
  return <I18nContext.Provider value={{ lang, t: dictionary }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const value = useContext(I18nContext);
  if (!value) throw new Error('useI18n must be used inside I18nProvider');
  return value;
}
