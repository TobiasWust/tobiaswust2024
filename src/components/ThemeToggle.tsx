'use client';

import achievementStore from '../achievements/achievementStore';
import { useI18n } from '../i18n/I18nProvider';
import style from './ThemeToggle.module.scss';

// flips the theme that the inline script in app/[lang]/layout.tsx set before the first paint
export default function ThemeToggle() {
  const { t } = useI18n();
  const addAchievement = achievementStore((state) => state.addAchievement);

  const toggle = () => {
    const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch { }
    addAchievement('dayAndNight');
  };

  return (
    <button type='button' className={style.toggle} onClick={toggle} aria-label={t.nav.theme} title={t.nav.theme}>
      {/* both icons render; CSS shows the one for the current theme, so there's no mismatch before hydration */}
      <svg className={style.sun} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' aria-hidden='true'>
        <circle cx='12' cy='12' r='4' />
        <path d='M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4' />
      </svg>
      <svg className={style.moon} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true'>
        <path d='M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z' />
      </svg>
    </button>
  );
}
