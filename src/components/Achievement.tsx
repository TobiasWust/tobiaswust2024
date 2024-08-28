import achievements from '../data/achievements'
import style from './Achievement.module.scss'
import { GiTrophy } from "react-icons/gi";
import Progressbar from './Progressbar';
import { useEffect, useState } from 'react';
import achievementStore from '../achievements/achievementStore';

export default function Achievement({ achievementId, active }: {
  achievementId: string
  active: boolean
}) {
  const achievement = achievements.find(e => e.id === achievementId);
  const [progress, setProgress] = useState(0);
  const [maxProgress, setMaxProgress] = useState(1);
  const counters = achievementStore((state) => state.counters);

  useEffect(() => {
    if (!achievement) return;
    setProgress((
      achievement.counterName && counters[achievement.counterName] ||
      achievement.getProgress && achievement.getProgress()) ||
      0
    );
    setMaxProgress(achievement.maxProgress || (achievement.getMaxProgress && achievement.getMaxProgress()) || 1);
  }, [achievement, setProgress, setMaxProgress, counters]);

  if (!achievement) return null;
  return (
    <div className={`${style.achievement} ${active ? style.active : undefined}`}>
      <GiTrophy />
      <div>
        <h3>{achievement.label}</h3>
        <p>
          {(achievement.secret && !active) ? '??????????' : achievement.description}
        </p>
        {achievement.withProgress &&
          <Progressbar
            value={Math.min(progress, maxProgress)}
            max={maxProgress} />}
      </div>
    </div>
  )
}
