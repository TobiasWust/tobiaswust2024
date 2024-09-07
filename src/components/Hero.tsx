'use client';
import { useState } from 'react';
import styles from './Hero.module.scss'
import Hexagons from './Hexagons'
import HireMe from './HireMe'
import achievementStore from '../achievements/achievementStore';

export default function Hero() {
  const [adventure, setAdventure] = useState(false);
  const addAchievement = achievementStore((state) => state.addAchievement);

  const handleAdventureDown = () => {
    if (window.innerWidth < 768) setAdventure(!adventure);
    else setAdventure(true)
    addAchievement('adventureTime')
  }

  const handleAdventureUp = () => {
    if (window.innerWidth >= 768) setAdventure(false)
  }



  return (
    <div className={`${styles.hero} ${adventure ? styles.adventure : ''}`}>
      <Hexagons />
      <h2>Tobias Wust</h2>
      <h3>Fullstack expertise with a passion for <span
        onMouseDown={handleAdventureDown}
        onMouseUp={handleAdventureUp}
      >adventure</span>.</h3>
      <HireMe />
      <ul>
        <li>15+ years of experience</li>
        <li>React - Node.js - TypeScript</li>
        <li>Remote work from Germany</li>
      </ul>
    </div>
  )
}
