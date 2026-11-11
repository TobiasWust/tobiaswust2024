import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

// visitor's choice to pause the decorative hero animations (paraglider, gusts); remembered across visits
type MotionStore = {
  paused: boolean;
  togglePaused: () => void;
};

const motionStore = create(
  persist<MotionStore>((set, get) => ({
    paused: false,
    togglePaused: () => set({ paused: !get().paused }),
  }), {
    name: 'motionStore',
    storage: createJSONStorage(() => localStorage),
  })
);

export default motionStore;
