import { toast } from 'react-toastify';

export default function useAchievement() {
  const addAchievement = (item: string) => {
    const achievements = JSON.parse(localStorage.getItem('achievements') || '[]') as string[];
    if (achievements.includes(item)) return;

    toast(`added ${item}`);
    localStorage.setItem('achievements', JSON.stringify([...achievements, item]));
  }
  const getAchievements = (item: string) => {
    return JSON.parse(localStorage.getItem('achievements') || '');
  }
  return {
    addAchievement, getAchievements
  }
}
