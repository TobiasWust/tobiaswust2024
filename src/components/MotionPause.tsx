'use client';

import { useEffect, useState } from 'react';
import { FaPause, FaPlay } from 'react-icons/fa';
import { useI18n } from '../i18n/I18nProvider';
import motionStore from '../utils/motionStore';
import useReducedMotion from '../utils/useReducedMotion';
import style from './MotionPause.module.scss';

// WCAG 2.2.2: the hero keeps moving on its own (paraglider, gusts), so visitors need a way to stop it
export default function MotionPause() {
  const { t } = useI18n();
  const paused = motionStore((state) => state.paused);
  const togglePaused = motionStore((state) => state.togglePaused);
  const reduced = useReducedMotion();
  // the stored choice only exists in the browser; render after mount to avoid a hydration mismatch
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // with reduced motion nothing moves on its own, so there's nothing to pause
  if (!mounted || reduced) return null;

  // the label says what the button does next; no aria-pressed, since the label already changes
  return (
    <button type='button' className={style.pause} onClick={togglePaused}>
      {paused ? <FaPlay aria-hidden /> : <FaPause aria-hidden />}
      {paused ? t.hero.resumeAnimations : t.hero.pauseAnimations}
    </button>
  );
}
