import { toast } from 'react-toastify';
import Achievement from '../components/Achievement';

export default function useAchievement() {
  const addAchievement = (item: string) => {
    const achievements = JSON.parse(localStorage.getItem('achievements') || '[]') as string[];
    if (achievements.includes(item)) return;

    toast(() => Achievement({ achievementId: item }));
    localStorage.setItem('achievements', JSON.stringify([...achievements, item]));
  }
  const getAchievements = () => {
    return JSON.parse(localStorage.getItem('achievements') || '');
  }
  return {
    addAchievement, getAchievements
  }
}
