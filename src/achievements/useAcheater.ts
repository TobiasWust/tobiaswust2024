import { useEffect, useState } from "react";
import achievementStore from "./achievementStore";

export default function useAcheater() {
  const addAchievement = achievementStore((state) => state.addAchievement);

  useEffect(() => {
    const sequence = [
      'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'
    ];

    let index = 0

    const cheaterEvent = (e: KeyboardEvent) => {
      if (e.key === sequence[index]) {
        index++
      } else index = 0;

      if (index === sequence.length) {
        addAchievement('cheater');
      }

    };

    document.addEventListener('keydown', cheaterEvent);
    return () => document.removeEventListener('keydown', cheaterEvent);
  }, [addAchievement]);
}
