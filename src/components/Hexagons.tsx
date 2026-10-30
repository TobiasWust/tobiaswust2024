'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import achievementStore from '../achievements/achievementStore';
import styles from './Hexagons.module.scss'
import useReducedMotion from '../utils/useReducedMotion';

// regular pointy-top hexagon geometry, handed to Hexagons.module.scss as CSS variables
const HEX_WIDTH = 100;
const HEX_GAP = 4;
const HEX_HEIGHT = HEX_WIDTH * 2 / Math.sqrt(3);
const COL_STEP = HEX_WIDTH + HEX_GAP;
const ROW_STEP = COL_STEP * Math.sqrt(3) / 2;

// ripple speed: delay per pixel of distance from the origin
const RIPPLE_MS_PER_PX = 0.9;
const GUST_EVERY = 30000;
const IDLE_BEFORE_GUST = 8000;

const geometry = {
  '--hex-w': `${HEX_WIDTH}px`,
  '--hex-h': `${HEX_HEIGHT}px`,
  '--hex-gap': `${HEX_GAP}px`,
  '--row-step': `${ROW_STEP}px`,
} as React.CSSProperties;

export default function Hexagons() {
  const increaseCounter = achievementStore((state) => state.increaseCounter);
  const addAchievement = achievementStore((state) => state.addAchievement);
  const counters = achievementStore((state) => state.counters);

  const container = useRef<HTMLDivElement>(null);
  const lastTouched = useRef<Element | null>(null);
  const [grid, setGrid] = useState({ rows: 8, cols: 18 });
  const reduced = useReducedMotion();
  const lastActivity = useRef(0);

  useEffect(() => {
    if (counters?.hexagonsHovered > 30) addAchievement('hexagonHoverer')
    if (counters?.hexagonsHovered > 500) addAchievement('hexagonHunter')
    if (counters?.hexagonsHovered > 5000) addAchievement('hexagonHero')
  }, [counters.hexagonsHovered, addAchievement])

  // size the grid so it always covers the whole hero
  useEffect(() => {
    const el = container.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      const rows = Math.ceil(height / ROW_STEP) + 1;
      const cols = Math.ceil(width / COL_STEP) + 1;
      setGrid((g) => (g.rows === rows && g.cols === cols ? g : { rows, cols }));
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // a wave spreading out from (x, y), in viewport coordinates
  const ripple = useCallback((x: number, y: number) => {
    const el = container.current;
    if (!el) return;
    el.querySelectorAll<HTMLElement>(`.${styles.hexagon}`).forEach((hexagon) => {
      const r = hexagon.getBoundingClientRect();
      const distance = Math.hypot(r.left + r.width / 2 - x, r.top + r.height / 2 - y);
      hexagon.style.setProperty('--ripple-delay', `${Math.round(distance * RIPPLE_MS_PER_PX)}ms`);
    });
    // restart the animation even if a ripple is still running
    el.classList.remove(styles.rippling);
    void el.offsetWidth;
    el.classList.add(styles.rippling);
  }, []);

  // when the hero sits idle, an occasional gust drifts through from the left
  useEffect(() => {
    const el = container.current;
    if (!el || reduced) return;
    let visible = true;
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
    observer.observe(el);
    const markActive = () => { lastActivity.current = Date.now(); };
    window.addEventListener('pointermove', markActive, { passive: true });
    const timer = setInterval(() => {
      if (!visible || document.hidden || Date.now() - lastActivity.current < IDLE_BEFORE_GUST) return;
      const rect = el.getBoundingClientRect();
      ripple(rect.left - 400, rect.top + rect.height * Math.random());
    }, GUST_EVERY);
    return () => {
      clearInterval(timer);
      observer.disconnect();
      window.removeEventListener('pointermove', markActive);
    };
  }, [reduced, ripple]);

  const light = (hexagon: Element) => {
    hexagon.classList.add(styles.lit);
    setTimeout(() => hexagon.classList.remove(styles.lit), 100);
    increaseCounter('hexagonsHovered');
  };

  // :hover never fires while dragging a finger, so track touches by hand
  const handleTouchMove = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    const hexagon = document.elementFromPoint(touch.clientX, touch.clientY);
    if (!hexagon?.classList.contains(styles.hexagon) || hexagon === lastTouched.current) return;
    lastTouched.current = hexagon;
    light(hexagon);
  };

  return (
    <div
      ref={container}
      className={styles.container}
      style={geometry}
      onTouchMove={handleTouchMove}
      onClick={(e) => !reduced && ripple(e.clientX, e.clientY)}
      aria-hidden='true'
    >
      {
        [...Array(grid.rows)].map((_, i) => (
          <div className={styles.row} key={i} style={{ '--row': i } as React.CSSProperties}>
            {
              [...Array(grid.cols)].map((_, j) => (
                <div
                  onMouseEnter={() => increaseCounter('hexagonsHovered')}
                  className={styles.hexagon} key={j} style={{ '--col': j } as React.CSSProperties}></div>
              ))
            }
          </div>
        ))
      }
    </div>
  )
}
