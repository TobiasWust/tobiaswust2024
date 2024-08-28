import { useEffect } from "react";
import achievementStore from "./achievementStore";

export default function useAscrollMaster() {
  const addAchievement = achievementStore((state) => state.addAchievement);

  useEffect(() => {
    const scrollListener = () => {
      if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight) {
        addAchievement('scrollMaster');
      }
    };

    window.addEventListener('scroll', scrollListener);
    return () => window.removeEventListener('scroll', scrollListener);
  }, [addAchievement]);
}
