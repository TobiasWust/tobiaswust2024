'use client';

import achievements from '../data/achievements'
import style from './Achievement.module.scss'
import { GiTrophy } from "react-icons/gi";
import Link from 'next/link';
import { useI18n } from '../i18n/I18nProvider';
import { localizeAchievement } from '../i18n/localize';

export default function AchievementToast({ achievementId }: {
  achievementId: string
}) {
  const { t } = useI18n();
  const found = achievements.find(e => e.id === achievementId);

  if (!found) return null;
  const achievement = localizeAchievement(found, t);
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
