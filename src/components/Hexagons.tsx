'use client';

import { useEffect } from 'react';
import achievementStore from '../achievements/achievementStore';
import styles from './Hexagons.module.scss'

export default function Hexagons() {
  const increaseCounter = achievementStore((state) => state.increaseCounter);
  const addAchievement = achievementStore((state) => state.addAchievement);
  const counters = achievementStore((state) => state.counters);

  useEffect(() => {
    if (counters?.hexagonsHovered > 30) addAchievement('hexagonHoverer')
    if (counters?.hexagonsHovered > 500) addAchievement('hexagonHunter')
    if (counters?.hexagonsHovered > 5000) addAchievement('hexagonHero')
  }, [counters.hexagonsHovered, addAchievement])

  return (
    <div className={styles.container}>
      {
        [...Array(8)].map((_, i) => (
          <div className={styles.row} key={i} style={{ '--hexagon-x': i } as React.CSSProperties}>
            {
              [...Array(18)].map((_, j) => (
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
