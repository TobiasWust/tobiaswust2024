'use client';

import { useEffect, useState } from 'react';
import { otherLanguageUrl } from '../i18n/config';
import { useI18n } from '../i18n/I18nProvider';
import style from './LanguageSwitch.module.scss';

// links to the same page and section on the other language's domain
export default function LanguageSwitch() {
  const { lang, t } = useI18n();
  const target = lang === 'en' ? 'de' : 'en';
  const [href, setHref] = useState<string | undefined>();

  // the target depends on the current URL (path, hash, localhost), so build it in the browser
  useEffect(() => {
    const update = () => setHref(otherLanguageUrl(new URL(window.location.href), target));
    update();
    window.addEventListener('hashchange', update);
    return () => window.removeEventListener('hashchange', update);
  }, [target]);

  return (
    <a
      className={`link ${style.switch}`}
      href={href ?? otherLanguageUrl(new URL('https://wust.dev'), target)}
      hrefLang={target}
      lang={target}
      aria-label={t.nav.switchLanguageLabel}
      title={t.nav.switchLanguageLabel}
      onClick={() => setHref(otherLanguageUrl(new URL(window.location.href), target))}
    >
      {target.toUpperCase()}
    </a>
  );
}
