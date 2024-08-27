import { toast } from 'react-toastify';
import Achievement from '../components/Achievement';

export default function useAchievement() {
  const addAchievement = (achievementId: string) => {
    const achievements = JSON.parse(localStorage.getItem('achievements') || '[]') as string[];
    if (achievements.includes(achievementId)) return;

    toast(() => Achievement({ achievementId: achievementId, active: true, hideProgressbar: true }));
    localStorage.setItem('achievements', JSON.stringify([...achievements, achievementId]));
  }
  const getAchievements = () => {
    return JSON.parse(localStorage.getItem('achievements') || '[]') as string[];
  }
  return {
    addAchievement, getAchievements
  }
}
