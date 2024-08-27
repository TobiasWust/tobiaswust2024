'use client';

import useAchievement from "../../achievements/useAchievement";
import Achievement from "../../components/Achievement";
import Progressbar from "../../components/Progressbar";
import achievements from "../../data/achievements";
import style from './page.module.scss';

export default function PAchievements() {
  const { achievements: activeAachievements } = useAchievement();

  return (
    <main className={style.achievements}>
      <section>
        <h2>Achievements</h2>
        <p>This website is filled with secrets. Can you find them all?</p>
        <Progressbar value={activeAachievements.length} max={achievements.length} />
        <div className={style.achievementGrid}>
          {achievements.map((achievement) => (
            <Achievement
              key={achievement.id}
              achievementId={achievement.id}
              active={activeAachievements.includes(achievement.id)}
            />
          ))}
        </div>
        {/* <button type="button">Reset All Achievements</button> */}
      </section>
    </main>
  )
}
