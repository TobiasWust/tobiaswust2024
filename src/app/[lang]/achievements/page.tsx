'use client';

import { useEffect, useMemo, useState } from "react";
import achievementStore from "../../../achievements/achievementStore";
import Achievement from "../../../components/Achievement";
import Progressbar from "../../../components/Progressbar";
import achievements from "../../../data/achievements";
import style from './page.module.scss';
import { toast } from "react-toastify";
import { useI18n } from "../../../i18n/I18nProvider";

export default function PAchievements() {
  const activeAchievements = achievementStore((state) => state.achievementIds);
  const resetAchievements = achievementStore((state) => state.resetAchievements);
  const addAchievement = achievementStore((state) => state.addAchievement);
  const [clickedReset, setClickedReset] = useState(false);
  const { t } = useI18n();
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
    toast(t.achievementsPage.resetDone, {
      type: 'success'
    })
  };

  return (
    <main className={style.achievements}>
      <section>
        <h2>{t.achievementsPage.heading}</h2>
        <p>{t.achievementsPage.intro}</p>
        <Progressbar value={mountedActiveAchievements.length} max={achievements.length} />
        <p><small>{t.achievementsPage.mobileNote}</small></p>
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
            <button className="btn" type="button" onClick={handleReset}>
              {t.achievementsPage.reset}
            </button>
          </div>)
          :
          (<div className={style.confirmWrapper}>
            <span>{t.achievementsPage.resetQuestion}</span>
            <button type="button" onClick={handleConfirm} className="btn inverted">{t.achievementsPage.confirm}</button>
            <button type="button" onClick={handleCancel} className="btn">{t.achievementsPage.cancel}</button>
          </div>)
        }
      </section>
    </main >
  )
}
