'use client';
import useAchievement from "../../achievements/useAchievement";
import Achievement from "../../components/Achievement";

export default function PAchievements() {
  const { getAchievements } = useAchievement();
  const achievements = getAchievements();

  return (
    <main>
      <h1>Achievements</h1>
      <hr />
      {achievements.map((achievementId: string) => (
        // <p key={achievementId}>{achievementId}</p>
        <Achievement key={achievementId} achievementId={achievementId} />
      ))}
    </main>
  )
}
