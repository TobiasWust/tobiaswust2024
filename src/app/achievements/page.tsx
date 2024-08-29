'use client';

import { useEffect, useMemo, useState } from "react";
import achievementStore from "../../achievements/achievementStore";
import Achievement from "../../components/Achievement";
import Progressbar from "../../components/Progressbar";
import achievements from "../../data/achievements";
import style from './page.module.scss';
import { toast } from "react-toastify";

export default function PAchievements() {
  const activeAchievements = achievementStore((state) => state.achievementIds);
  const resetAchievements = achievementStore((state) => state.resetAchievements);
  const addAchievement = achievementStore((state) => state.addAchievement);
  const [clickedReset, setClickedReset] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true)
  }, [])

  const mountedActiveAchievements = useMemo(() => mounted ? activeAchievements : [], [mounted, activeAchievements])

  const handleReset = () => {
    setClickedReset(true);
  };
  const handleCancel = () => {
    setClickedReset(false);
    addAchievement('reset');
  };

  const handleConfirm = () => {
    setClickedReset(false);
    resetAchievements();
    toast('Achievements reset', {
      type: 'success'
    })
  };

  return (
    <main className={style.achievements}>
      <section>
        <h2>Achievements</h2>
        <p>This website is filled with secrets. Can you find them all?</p>
        <Progressbar value={mountedActiveAchievements.length} max={achievements.length} />
        <p><small>Sorry, some of them are not available on mobile or not a11y friendly :(</small></p>
        <div className={style.achievementGrid}>
          {achievements.map((achievement) => (
            <Achievement
              key={achievement.id}
              achievementId={achievement.id}
              active={mountedActiveAchievements.includes(achievement.id)}
            />
          ))}
        </div>
        {!clickedReset ?
          (<div className={style.confirmWrapper}>
            <button type="button" onClick={handleReset}>
              Reset All Achievements
            </button>
          </div>)
          :
          (<div className={style.confirmWrapper}>
            <span>Really Reset All Achievements?</span>
            <button type="button" onClick={handleConfirm} className={style.inverted}>Confirm</button>
            <button type="button" onClick={handleCancel}>Cancel</button>
          </div>)
        }
      </section>
    </main >
  )
}
