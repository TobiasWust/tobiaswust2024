import achievements from '../data/achievements'
import style from './Achievement.module.scss'
import { GiTrophy } from "react-icons/gi";
import Link from 'next/link';

export default function AchievementToast({ achievementId }: {
  achievementId: string
}) {
  const achievement = achievements.find(e => e.id === achievementId);

  if (!achievement) return null;
  return (
    <Link href="/achievements" className={`${style.achievement} ${style.active}`}>
      <GiTrophy />
      <div>
        <h3>{achievement.label}</h3>
        <p>
          {achievement.description}
        </p>
      </div>
    </Link>
  )
}
