import type { Achievement } from '../data/achievements';
import type { Project } from '../data/projects';
import type { Dictionary } from './dictionaries/en';

// English lives in src/data; other languages override the texts by id and fall back to English
export function localizeProject(project: Project, t: Dictionary): Project {
  const texts = t.projectTexts[project.id];
  return texts ? { ...project, ...texts } : project;
}

export function localizeAchievement(achievement: Achievement, t: Dictionary): Achievement {
  const texts = t.achievementTexts[achievement.id];
  return texts ? { ...achievement, ...texts } : achievement;
}
