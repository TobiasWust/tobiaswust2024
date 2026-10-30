'use client';
import { useState } from 'react';
import styles from './Hero.module.scss'
import Hexagons from './Hexagons'
import HireMe from './HireMe'
import achievementStore from '../achievements/achievementStore';
import projects from '../data/projects';
import Availability from './Availability';

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
    <section className={`${styles.hero} ${adventure ? styles.adventure : ''}`}>
      <Hexagons />
      <Availability />
      <p className={styles.eyebrow}>Senior Fullstack Engineer</p>
      <h1>Tobias Wust</h1>
      <p className={styles.tagline}>
        AI writes code. I make sure it&apos;s the right code: I turn your business goals into products that ship, faster with AI and with the judgment AI doesn&apos;t have.
      </p>
      <p className={styles.adventureLine}>Fullstack expertise with a passion for <span
        onMouseDown={handleAdventureDown}
        onMouseUp={handleAdventureUp}
      >adventure</span>.</p>
      <div className={styles.ctas}>
        <HireMe />
        <a className="btn inverted" href="/#projects">See my work</a>
      </div>
      <ul className={styles.stats}>
        <li><strong>15+</strong> years of experience</li>
        <li><strong>{projects.length}+</strong> shipped projects</li>
        <li><strong>Remote</strong> from Germany</li>
      </ul>
    </section>
  )
}
