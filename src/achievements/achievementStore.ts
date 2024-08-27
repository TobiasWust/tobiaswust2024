import { toast } from 'react-toastify';
import AchievementToast from '../components/AchievementToast';

import { create } from 'zustand';

type AchievementStore = {
  achievementIds: string[]
  addAchievement: (achievementId: string) => void;
};

const achievementStore = create<AchievementStore>((set) => ({
  achievementIds: [],
  addAchievement: (achievementId: string) => set((state) => {
    console.log({ achievementId });
    if (state.achievementIds.includes(achievementId)) return ({ achievementIds: state.achievementIds });
    toast(() => AchievementToast({ achievementId }));
    return ({ achievementIds: [...state.achievementIds, achievementId] })
  })
}));

export default achievementStore;


// if (state.achievementIds.includes(achievementId)) return state.achievementIds;

// return (
//   {
//     ...state,
//     achievementIds: [...state.achievementIds, achievementId]
//   }
// )
// })

// export default function useAchievement() {
//   const [achievements, setAchievements] = useState<string[]>([]);

//   const addAchievement = (achievementId: string) => {
//     if (achievements.includes(achievementId)) return;

//     toast(() => AchievementToast({ achievementId: achievementId }));
//     setAchievements([...achievements, achievementId])
//   }

//   useEffect(() => {
//     setAchievements(JSON.parse(localStorage.getItem('achievements') || '[]') as string[]);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('achievements', JSON.stringify(achievements));
//   }, [achievements]);

//   return {
//     addAchievement, achievements
//   }
// }

