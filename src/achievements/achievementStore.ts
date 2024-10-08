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
  setCounter: (counterName: string, value: number) => void;
  increaseCounter: (counterName: string) => void;
  resetAchievements: () => void;
};

const achievementStore = create(
  persist<AchievementStore>((set, get) => ({
    achievementIds: [],
    counters: {},
    addAchievement: (achievementId) => {
      if (get().achievementIds.includes(achievementId)) return;
      toast(() => AchievementToast({ achievementId }));
      set({ achievementIds: [...get().achievementIds, achievementId] })
    },
    setCounter: (counterName, value) => {
      if (get().counters[counterName] && get().counters[counterName] > value) return;
      set({
        counters: {
          ...get().counters,
          [counterName]: value
        }
      })
    },
    increaseCounter: (counterName) => {
      const value = get().counters[counterName] || 0;
      set({
        counters: {
          ...get().counters,
          [counterName]: value + 1
        }
      })
    },
    resetAchievements: () => {
      set({
        achievementIds: [],
        counters: {}
      });
    }
  }), {
    name: 'achievementStore',
    storage: createJSONStorage(() => localStorage)
  })
);

export default achievementStore;
