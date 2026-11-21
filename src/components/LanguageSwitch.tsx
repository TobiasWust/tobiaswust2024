'use client';

import { useEffect, useState } from 'react';
import { otherLanguageUrl } from '../i18n/config';
import { importAchievementsFromUrl, withAchievements } from '../achievements/crossDomainSync';
import { useI18n } from '../i18n/I18nProvider';

// links to the same page and section on the other language's domain
export default function LanguageSwitch() {
  const { lang, t } = useI18n();
  const target = lang === 'en' ? 'de' : 'en';
  const [href, setHref] = useState<string | undefined>();

  // achievements carried over from the other domain; the switch is in the nav on every page
  useEffect(() => {
    importAchievementsFromUrl();
  }, []);

  // the target depends on the current URL (path, hash, localhost), so build it in the browser
  useEffect(() => {
    const update = () => setHref(otherLanguageUrl(new URL(window.location.href), target));
    update();
    window.addEventListener('hashchange', update);
    return () => window.removeEventListener('hashchange', update);
  }, [target]);

  const link = (
    <a
      href={href ?? otherLanguageUrl(new URL('https://wust.dev'), target)}
      hrefLang={target}
      lang={target}
      title={t.nav.switchLanguageLabel}
      // set right on the element: the achievements are read at click time, and a state update could land after navigation starts
      onClick={(e) => {
        e.currentTarget.href = withAchievements(otherLanguageUrl(new URL(window.location.href), target));
      }}
    >
      {target.toUpperCase()}
    </a>
  );
  const current = <span aria-current='true'>{lang.toUpperCase()}</span>;

  // DE / EN from the shared wust-ui header, the current language in orange
  return (
    <div className='wu-lang' role='group' aria-label={t.nav.switchLanguageLabel}>
      {lang === 'de' ? current : link}
      <span aria-hidden='true'>/</span>
      {lang === 'de' ? link : current}
    </div>
  );
}
