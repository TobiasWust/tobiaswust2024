'use client';
import useAchievement from "../../achievements/useAchievement";
import Achievement from "../../components/Achievement";
import achievements from "../../data/achievements";
import style from './page.module.scss';

export default function PAchievements() {
  const { getAchievements } = useAchievement();
  const activeAachievements = getAchievements();

  return (
    <main>
      <h1>Achievements</h1>
      <p>This website is filled with secrets. Can you find all of them?</p>
      <div className={style.achievementGrid}>
        {achievements.map((achievement) => (
          <Achievement
            key={achievement.id}
            achievementId={achievement.id}
            active={activeAachievements.includes(achievement.id)}
          />
        ))}
      </div>
    </main>
  )
}
