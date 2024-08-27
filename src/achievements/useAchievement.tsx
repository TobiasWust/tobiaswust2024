import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import AchievementToast from '../components/AchievementToast';

export default function useAchievement() {
  const [achievements, setAchievements] = useState<string[]>([]);

  const addAchievement = (achievementId: string) => {
    if (achievements.includes(achievementId)) return;

    toast(() => AchievementToast({ achievementId: achievementId }));
    setAchievements([...achievements, achievementId])
  }

  useEffect(() => {
    setAchievements(JSON.parse(localStorage.getItem('achievements') || '[]') as string[]);
  }, []);

  useEffect(() => {
    localStorage.setItem('achievements', JSON.stringify(achievements));
  }, [achievements]);

  return {
    addAchievement, achievements
  }
}
