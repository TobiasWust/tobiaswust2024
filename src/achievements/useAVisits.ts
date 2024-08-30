import { useEffect } from "react";
import achievementStore from "./achievementStore";

export default function useAVisits() {
  const increaseCounter = achievementStore((state) => state.increaseCounter);
  const addAchievement = achievementStore((state) => state.addAchievement);
  const counters = achievementStore((state) => state.counters);

  useEffect(() => {
    increaseCounter('visits');
  }, [increaseCounter]);

  useEffect(() => {
    if (counters.visits >= 2) addAchievement('returningVisitor');
    if (counters.visits >= 5) addAchievement('fanboy');
    if (counters.visits >= 30) addAchievement('stalker');
  }, [addAchievement, counters.visits]);
}
