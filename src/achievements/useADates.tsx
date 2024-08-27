import { useEffect } from "react";
import useAchievement from "./useAchievement";

export default function useADates() {
  const { addAchievement } = useAchievement();

  useEffect(() => {
    addAchievement('scrollMaster');

    const date = new Date();

    const isChristmas = (date.getDate() === 24) && (date.getMonth() === 11);
    const isMyBirthday = (date.getDate() === 19) && (date.getMonth() === 11);
    const isNightowl = date.getHours() < 4;

    if (isChristmas) addAchievement('santaClaus');
    if (isMyBirthday) addAchievement('happyBirthday');
    if (isNightowl) addAchievement('nightOwl');

    setTimeout(() => {
      addAchievement('stayAwhile');
    }, 600000) //10 minutes

  }, [addAchievement]);
}
