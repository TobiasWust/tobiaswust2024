import { useEffect } from "react";
import useAchievement from "./useAchievement";

export default function useAfullscreenFanatic() {
  const { addAchievement } = useAchievement();

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



