import { toast } from 'react-toastify';
import AchievementToast from '../components/AchievementToast';

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type AchievementStore = {
  achievementIds: string[]
  counters: {
    [counterName: string]: number
  },
  addAchievement: (achievementId: string) => void;
};

const achievementStore = create(
  persist<AchievementStore>((set, get) => ({
    achievementIds: [],
    counters: {},
    addAchievement: (achievementId: string) => {
      if (get().achievementIds.includes(achievementId)) return;
      toast(() => AchievementToast({ achievementId }));
      set({ achievementIds: [...get().achievementIds, achievementId] })
    },
    setCounter: (counterName: string, value: number) => {
      if (get().counters[counterName] && get().counters[counterName] > value) return;
      set({
        counters: {
          [counterName]: value
        }
      })
    },
    increaseCounter: (counterName: string) => {
      const value = get().counters[counterName] || 0;
      set({
        counters: {
          [counterName]: value + 1
        }
      })
    }
  }), {
    name: 'achievementStore',
    storage: createJSONStorage(() => localStorage)
  })
);

export default achievementStore;
