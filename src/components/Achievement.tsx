import achievements from '../data/achievements'

export default function Achievement({ achievementId }: { achievementId: string }) {
  const achievement = achievements.find(e => e.id === achievementId);
  if (!achievement) return null;
  return (
    <div>
      <h3>{achievement.label}</h3>
      <p>
        {achievement.description}
      </p>
    </div>
  )
}
