import { useEffect } from "react";
import achievementStore from "./achievementStore";

export default function useAfullscreenFanatic() {
  const addAchievement = achievementStore((state) => state.addAchievement);

  useEffect(() => {
    const fullscreenListener = () => {
      if (screen.height === window.innerHeight) {
        addAchievement('fullscreenFanatic');
      }
    };
    document.addEventListener("fullscreenchange", fullscreenListener);
    window.addEventListener("resize", fullscreenListener);
    return () => document.removeEventListener('fullscreenchange', fullscreenListener);
  }, [addAchievement]);
}



