import achievements from '../data/achievements'
import style from './Achievement.module.scss'
import { GiTrophy } from "react-icons/gi";

export default function Achievement({ achievementId, active }: {
  achievementId: string
  active: boolean
}) {
  const achievement = achievements.find(e => e.id === achievementId);
  if (!achievement) return null;
  return (
    <div className={`${style.achievement} ${active ? style.active : undefined}`}>
      <GiTrophy />
      <div>
        <h3>{achievement.label}</h3>
        <p>
          {(achievement.secret && !active) ? '??????????' : achievement.description}
        </p>
      </div>
    </div>
  )
}
