'use client';

import { GoogleAnalytics } from '@next/third-parties/google';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import style from './CookieConsent.module.scss';

const GA_ID = 'G-C4JPK514R9';
const STORAGE_KEY = 'analytics-consent';
export const OPEN_CONSENT_EVENT = 'open-consent';

type Consent = 'granted' | 'denied' | null;

function readConsent(): Consent {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === 'granted' || value === 'denied' ? value : null;
  } catch {
    return null;
  }
}

// GA cookies are first-party (_ga, _ga_<id>), so they can be removed on withdrawal
function removeAnalyticsCookies() {
  const domain = window.location.hostname.replace(/^www\./, '');
  document.cookie.split(';')
    .map((c) => c.split('=')[0].trim())
    .filter((name) => name.startsWith('_ga'))
    .forEach((name) => {
      document.cookie = `${name}=; Max-Age=0; path=/`;
      document.cookie = `${name}=; Max-Age=0; path=/; domain=.${domain}`;
    });
}

export default function CookieConsent() {
  const [consent, setConsent] = useState<Consent>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const stored = readConsent();
    setConsent(stored);
    setOpen(stored === null);

    const reopen = () => setOpen(true);
    window.addEventListener(OPEN_CONSENT_EVENT, reopen);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, reopen);
  }, []);

  const decide = (value: 'granted' | 'denied') => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch { }
    if (value === 'denied' && consent === 'granted') {
      removeAnalyticsCookies();
      // the GA script is already running; a reload makes sure it stops
      window.location.reload();
      return;
    }
    setConsent(value);
    setOpen(false);
  };

  return (
    <>
      {consent === 'granted' && <GoogleAnalytics gaId={GA_ID} />}
      {open && (
        <div className={style.banner} role='dialog' aria-label='Privacy settings'>
          <p>
            May I use Google Analytics to see how visitors use this site? It sets cookies and sends data to Google.
            You can change your choice anytime under &quot;Privacy settings&quot; in the footer.
            {' '}<Link className='link' href='/privacy'>Privacy policy</Link>
          </p>
          <div className={style.actions}>
            <button type='button' className='btn inverted' onClick={() => decide('denied')}>Decline</button>
            <button type='button' className='btn inverted' onClick={() => decide('granted')}>Accept</button>
          </div>
        </div>
      )}
    </>
  );
}
