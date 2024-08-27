'use client';

import achievementStore from "../../achievements/achievementStore";
import Achievement from "../../components/Achievement";
import Progressbar from "../../components/Progressbar";
import achievements from "../../data/achievements";
import style from './page.module.scss';

export default function PAchievements() {
  const activeAchievements = achievementStore((state) => state.achievementIds);

  return (
    <main className={style.achievements}>
      <section>
        <h2>Achievements</h2>
        <p>This website is filled with secrets. Can you find them all?</p>
        <Progressbar value={activeAchievements.length} max={achievements.length} />
        <div className={style.achievementGrid}>
          {achievements.map((achievement) => (
            <Achievement
              key={achievement.id}
              achievementId={achievement.id}
              active={activeAchievements.includes(achievement.id)}
            />
          ))}
        </div>
        {/* <button type="button">Reset All Achievements</button> */}
      </section>
    </main>
  )
}
