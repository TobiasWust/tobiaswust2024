import { toast } from 'react-toastify';
import AchievementToast from '../components/AchievementToast';

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type AchievementStore = {
  achievementIds: string[]
  addAchievement: (achievementId: string) => void;
};

const achievementStore = create(
  persist<AchievementStore>((set, get) => ({
    achievementIds: [],
    addAchievement: (achievementId: string) => {
      if (get().achievementIds.includes(achievementId)) return;
      toast(() => AchievementToast({ achievementId }));
      set({ achievementIds: [...get().achievementIds, achievementId] })
    }
  }), {
    name: 'achievementStore',
    storage: createJSONStorage(() => localStorage)
  })
);

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

