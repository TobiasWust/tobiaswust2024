import { useEffect, useState } from "react";
import achievementStore from "./achievementStore";
import mirrorArrows from "../utils/mirrorStrings";

export default function useAtunic() {
  const addAchievement = achievementStore((state) => state.addAchievement);

  useEffect(() => {
    const sequence = [
      'ArrowUp', 'ArrowRight', 'ArrowUp', 'ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowUp', 'ArrowLeft', 'ArrowDown', 'ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowUp', 'ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowUp', 'ArrowLeft', 'ArrowUp'
    ];

    const indexTrackker = {
      normal: {
        sequence,
        index: 0
      },
      mirrored: {
        sequence: mirrorArrows(sequence, 'ArrowLeft', 'ArrowRight'),
        index: 0
      },
      reversed: {
        sequence: mirrorArrows([...sequence].reverse(), 'ArrowUp', 'ArrowDown'),
        index: 0
      },
      mirroredReversed: {
        sequence: mirrorArrows([...mirrorArrows(sequence, 'ArrowLeft', 'ArrowRight')].reverse(), 'ArrowUp', 'ArrowDown'),
        index: 0
      }
    }

    const tunicEvent = (e: KeyboardEvent) => {
      if (e.key === indexTrackker.normal.sequence[indexTrackker.normal.index]) {
        indexTrackker.normal.index++;
      } else {
        indexTrackker.normal.index = 0;
      }

      if (e.key === indexTrackker.mirrored.sequence[indexTrackker.mirrored.index]) {
        indexTrackker.mirrored.index++;
      } else {
        indexTrackker.mirrored.index = 0;
      }

      if (e.key === indexTrackker.reversed.sequence[indexTrackker.reversed.index]) {
        indexTrackker.reversed.index++;
      } else {
        indexTrackker.reversed.index = 0
      }

      if (e.key === indexTrackker.mirroredReversed.sequence[indexTrackker.mirroredReversed.index]) {
        indexTrackker.mirroredReversed.index++;
      } else {
        indexTrackker.mirroredReversed.index = 0;
      }

      if (indexTrackker.normal.index === indexTrackker.normal.sequence.length ||
        indexTrackker.mirrored.index === indexTrackker.mirrored.sequence.length ||
        indexTrackker.reversed.index === indexTrackker.reversed.sequence.length ||
        indexTrackker.mirroredReversed.index === indexTrackker.mirroredReversed.sequence.length
      ) {
        addAchievement('tunic');
      }

    };

    document.addEventListener('keydown', tunicEvent);
    return () => document.removeEventListener('keydown', tunicEvent);
  }, [addAchievement]);
}
