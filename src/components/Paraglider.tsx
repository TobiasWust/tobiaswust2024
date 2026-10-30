'use client';

import { useEffect, useRef } from 'react';
import achievementStore from '../achievements/achievementStore';
import useReducedMotion from '../utils/useReducedMotion';
import style from './Paraglider.module.scss';

// one flight: glide in, circle up in a thermal, glide out
const GLIDE_IN = 4000;
const THERMAL = 7000;
const GLIDE_OUT = 4000;
const FLIGHT = GLIDE_IN + THERMAL + GLIDE_OUT;
const LOOPS = 3;

const ease = (t: number) => t * t * (3 - 2 * t);
const pause = () => 15000 + Math.random() * 10000;

export default function Paraglider() {
  const glider = useRef<HTMLButtonElement>(null);
  const escaping = useRef<number | null>(null);
  const reduced = useReducedMotion();
  const addAchievement = achievementStore((state) => state.addAchievement);

  useEffect(() => {
    const el = glider.current;
    const hero = el?.parentElement;
    if (!el || !hero || reduced) return;

    let frame = 0;
    let start = performance.now() + 3000;
    let visible = true;
    let last = { x: -100, y: 0 };
    let prevX = -100;
    let facing = 1;

    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
    observer.observe(hero);

    const tick = (now: number) => {
      frame = requestAnimationFrame(tick);
      if (!visible || document.hidden) return;

      const t = now - start;
      if (t < 0) {
        el.style.opacity = '0';
        return;
      }
      if (t > FLIGHT || (escaping.current && now - escaping.current > 1500)) {
        escaping.current = null;
        start = now + pause();
        return;
      }

      const { width: w, height: h } = hero.getBoundingClientRect();
      // the thermal sits right of the centred text
      const cx = w * (w < 700 ? 0.78 : 0.82);
      const r = Math.min(60, w * 0.08);
      const y0 = h * 0.62;
      const climb = h * 0.35;
      let x: number;
      let y: number;
      let bank = 0;

      if (t < GLIDE_IN) {
        const p = ease(t / GLIDE_IN);
        x = -60 + (cx - r + 60) * p;
        y = h * 0.5 + (y0 - h * 0.5) * p;
      } else if (t < GLIDE_IN + THERMAL) {
        const p = (t - GLIDE_IN) / THERMAL;
        const angle = Math.PI * 2 * LOOPS * p;
        x = cx - r * Math.cos(angle);
        // flattened circle reads as perspective
        y = y0 - climb * p + r * 0.35 * Math.sin(angle);
        bank = Math.sin(angle) * 12;
      } else {
        const p = ease((t - GLIDE_IN - THERMAL) / GLIDE_OUT);
        x = cx - r + (w + 60 - cx + r) * p;
        y = y0 - climb + h * 0.08 * p;
      }

      if (escaping.current) {
        const p = (now - escaping.current) / 1500;
        x = last.x + 40 * p;
        y = last.y - h * p * p;
      } else {
        last = { x, y };
      }

      // face the direction of travel; ignore sub-pixel jitter at the turning points
      if (Math.abs(x - prevX) > 0.2) facing = x > prevX ? 1 : -1;
      prevX = x;
      el.style.opacity = '1';
      el.style.translate = `${x}px ${y}px`;
      el.style.rotate = `${bank * facing}deg`;
      el.style.scale = `${facing} 1`;
    };

    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [reduced]);

  if (reduced) return null;

  return (
    <button
      ref={glider}
      type='button'
      className={style.glider}
      aria-label='A paraglider catching a thermal'
      onClick={(e) => {
        e.stopPropagation();
        if (escaping.current) return;
        escaping.current = performance.now();
        addAchievement('thermalHunter');
      }}
    >
      <svg viewBox='0 0 48 40' aria-hidden='true'>
        <path className={style.canopy} d='M4 12 C 12 2, 36 2, 44 12 L 40 14 C 33 7, 15 7, 8 14 Z' />
        <path className={style.lines} d='M7 13 L23 31 M14 10 L23 31 M34 10 L25 31 M41 13 L25 31' />
        <circle className={style.pilot} cx='24' cy='33' r='3' />
      </svg>
    </button>
  );
}
