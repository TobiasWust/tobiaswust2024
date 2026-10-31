'use client';

import { useRef } from 'react';
import style from './HireMe.module.scss';
import { useI18n } from '../i18n/I18nProvider';

// how far the button leans toward the cursor, as a share of the cursor's offset
const PULL = 0.25;

export default function HireMe({ small }: { small?: boolean }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const { t } = useI18n();

  const lean = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el || small) return;
    const r = el.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) * PULL;
    const dy = (e.clientY - (r.top + r.height / 2)) * PULL;
    el.style.translate = `${dx}px ${dy}px`;
  };

  return (
    <a
      ref={ref}
      className={`${style.hireme} ${small ? style.small : ''}`}
      href="/#contact"
      onMouseMove={lean}
      onMouseLeave={() => { if (ref.current) ref.current.style.translate = ''; }}
    >
      <span>{t.nav.hireMe}</span>
    </a>
  )
}
