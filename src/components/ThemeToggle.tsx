'use client';

import { useEffect } from 'react';
import { applyTheme, icons, toggleTheme } from 'wust-ui';
import achievementStore from '../achievements/achievementStore';
import { useI18n } from '../i18n/I18nProvider';

const setColorSchemeMeta = (theme: 'light' | 'dark' | null) =>
  document.querySelector('meta[name="color-scheme"]')?.setAttribute('content', theme ?? 'light dark');

// the round toggle from the shared wust-ui header; the icon shows the current theme
export default function ThemeToggle() {
  const { t } = useI18n();
  const addAchievement = achievementStore((state) => state.addAchievement);

  // keep other open tabs in sync
  useEffect(() => {
    const sync = (e: StorageEvent) => {
      if (e.key !== 'theme') return;
      const theme = e.newValue === 'light' || e.newValue === 'dark' ? e.newValue : null;
      applyTheme(theme);
      setColorSchemeMeta(theme);
    };
    window.addEventListener('storage', sync);
    return () => window.removeEventListener('storage', sync);
  }, []);

  const toggle = () => {
    toggleTheme();
    setColorSchemeMeta((document.documentElement.dataset.theme as 'light' | 'dark' | undefined) ?? null);
    addAchievement('dayAndNight');
  };

  return (
    <button
      type='button'
      className='wu-icon-btn wu-theme'
      onClick={toggle}
      aria-label={t.nav.theme}
      title={t.nav.theme}
      // both icons render; CSS shows the one for the current theme, so there's no mismatch before hydration
      dangerouslySetInnerHTML={{ __html: icons.moon + icons.sun }}
    />
  );
}
