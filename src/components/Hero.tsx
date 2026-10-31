'use client';
import { useState } from 'react';
import styles from './Hero.module.scss'
import Hexagons from './Hexagons'
import HireMe from './HireMe'
import achievementStore from '../achievements/achievementStore';
import projects from '../data/projects';
import Availability from './Availability';
import Paraglider from './Paraglider';
import CountUp from './CountUp';
import { useI18n } from '../i18n/I18nProvider';

export default function Hero() {
  const [adventure, setAdventure] = useState(false);
  const addAchievement = achievementStore((state) => state.addAchievement);
  const { t } = useI18n();

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
      <div className={styles.background}>
        <Hexagons />
        <Paraglider />
      </div>
      <p className={styles.eyebrow}>{t.hero.eyebrow}</p>
      <h1>Tobias Wust</h1>
      <p className={styles.tagline}>
        {t.hero.tagline}
      </p>
      <p className={styles.adventureLine}>{t.hero.adventureBefore}<span
        onMouseDown={handleAdventureDown}
        onMouseUp={handleAdventureUp}
      >{t.hero.adventureWord}</span>{t.hero.adventureAfter}</p>
      <div className={styles.ctas}>
        <HireMe />
        <a className="btn inverted" href="/#projects">{t.hero.seeMyWork}</a>
      </div>
      {/* right under the buttons: reassurance at the moment a visitor decides to get in touch */}
      <Availability />
      <ul className={styles.stats}>
        <li><strong><CountUp to={15} suffix='+' /></strong> {t.hero.stats.years}</li>
        <li><strong><CountUp to={projects.length} suffix='+' /></strong> {t.hero.stats.projects}</li>
        <li><strong>{t.hero.stats.remote}</strong> {t.hero.stats.remoteFrom}</li>
      </ul>
    </section>
  )
}
