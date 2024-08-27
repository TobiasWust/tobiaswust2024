import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import AchievementToast from '../components/AchievementToast';

export default function useAchievement() {
  const [achievements, setAchievements] = useState<string[]>([]);

  const addAchievement = (achievementId: string) => {
    const achievements = JSON.parse(localStorage.getItem('achievements') || '[]') as string[];
    if (achievements.includes(achievementId)) return;

    toast(() => AchievementToast({ achievementId: achievementId }));
    localStorage.setItem('achievements', JSON.stringify([...achievements, achievementId]));
  }

  useEffect(() => {
    setAchievements(JSON.parse(localStorage.getItem('achievements') || '[]') as string[]);
  }, []);

  const getAchievements = () => {
    return achievements;
  }
  return {
    addAchievement, getAchievements
  }
}
