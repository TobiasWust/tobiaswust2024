'use client';

import { useEffect, useRef, useState } from 'react';
import achievementStore from '../achievements/achievementStore';
import styles from './Hexagons.module.scss'

// must match the hexagon size and row overlap in Hexagons.module.scss
const HEX_WIDTH = 100;
const HEX_HEIGHT = 110;
const ROW_STEP = HEX_HEIGHT - 32;

export default function Hexagons() {
  const increaseCounter = achievementStore((state) => state.increaseCounter);
  const addAchievement = achievementStore((state) => state.addAchievement);
  const counters = achievementStore((state) => state.counters);

  const container = useRef<HTMLDivElement>(null);
  const lastTouched = useRef<Element | null>(null);
  const [grid, setGrid] = useState({ rows: 8, cols: 18 });

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
      const cols = Math.ceil(width / HEX_WIDTH) + 1;
      setGrid((g) => (g.rows === rows && g.cols === cols ? g : { rows, cols }));
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

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
    <div ref={container} className={styles.container} onTouchMove={handleTouchMove} aria-hidden='true'>
      {
        [...Array(grid.rows)].map((_, i) => (
          <div className={styles.row} key={i} style={{ '--hexagon-x': i } as React.CSSProperties}>
            {
              [...Array(grid.cols)].map((_, j) => (
                <div
                  onMouseEnter={() => increaseCounter('hexagonsHovered')}
                  className={styles.hexagon} key={j} style={{ '--hexagon-y': j } as React.CSSProperties}></div>
              ))
            }
          </div>
        ))
      }
    </div>
  )
}
