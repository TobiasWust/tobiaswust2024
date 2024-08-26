import achievements from '../data/achievements'
import style from './Achievement.module.scss'

export default function Achievement({ achievementId }: { achievementId: string }) {
  const achievement = achievements.find(e => e.id === achievementId);
  if (!achievement) return null;
  return (
    <div className={style.achievement}>
      <h3>{achievement.label}</h3>
      <p>
        {achievement.description}
      </p>
    </div>
  )
}
