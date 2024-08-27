import { toast } from 'react-toastify';
import Achievement from '../components/Achievement';
import { useEffect } from 'react';

export default function useAchievement() {
  const [achievements, setAchievements] = useState<string[]>([]);

  const addAchievement = (achievementId: string) => {
    const achievements = JSON.parse(localStorage.getItem('achievements') || '[]') as string[];
    if (achievements.includes(achievementId)) return;

    toast(() => Achievement({ achievementId: achievementId, active: true, hideProgressbar: true }));
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
