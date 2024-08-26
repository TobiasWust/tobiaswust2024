import { useEffect } from "react";
import useAchievement from "./useAchievement";

export default function useAscrollMaster() {
  const { addAchievement } = useAchievement();

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
