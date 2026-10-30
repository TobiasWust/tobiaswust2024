'use client';

import { IconType } from 'react-icons';
import {
  SiAmazonaws, SiAnthropic, SiDocker, SiFigma, SiGit, SiGithubcopilot, SiMicrosoftazure, SiMongodb, SiNextdotjs,
  SiNodedotjs, SiOpenai, SiReact, SiReactquery, SiSentry, SiStripe, SiSupabase, SiTailwindcss, SiTypescript, SiVite,
} from 'react-icons/si';
import projects from '../data/projects';
import skills from '../data/skills';
import { dailyTools, toolboxGroups } from '../data/toolbox';
import { PROJECT_FILTER_EVENT } from './Services';
import style from './Toolbox.module.scss';

// one consistent icon set; each icon takes its brand colour on hover
// (colours that are too dark for the background are lightened)
const icons: Record<string, { icon: IconType; color: string }> = {
  react: { icon: SiReact, color: '#61DAFB' },
  nextjs: { icon: SiNextdotjs, color: '#ffffff' },
  typescript: { icon: SiTypescript, color: '#3178C6' },
  tailwindcss: { icon: SiTailwindcss, color: '#06B6D4' },
  'react-query': { icon: SiReactquery, color: '#FF4154' },
  vite: { icon: SiVite, color: '#9499FF' },
  nodejs: { icon: SiNodedotjs, color: '#5FA04E' },
  supabase: { icon: SiSupabase, color: '#3FCF8E' },
  mongodb: { icon: SiMongodb, color: '#47A248' },
  stripe: { icon: SiStripe, color: '#8F88FF' },
  docker: { icon: SiDocker, color: '#2496ED' },
  'claude-icon': { icon: SiAnthropic, color: '#D97757' },
  openai: { icon: SiOpenai, color: '#ffffff' },
  'github-copilot': { icon: SiGithubcopilot, color: '#ffffff' },
  aws: { icon: SiAmazonaws, color: '#FF9900' },
  'microsoft-azure': { icon: SiMicrosoftazure, color: '#3A9BFF' },
  git: { icon: SiGit, color: '#F05032' },
  figma: { icon: SiFigma, color: '#F24E1E' },
  sentry: { icon: SiSentry, color: '#A08CFF' },
};

const projectCount = (id: string) => projects.filter((p) => p.skills.includes(id)).length;

const grouped = new Set(toolboxGroups.flatMap((g) => g.skills));
const otherSkills = skills.filter((s) => !grouped.has(s.id));

export default function Toolbox() {
  const showProjects = (label: string) => {
    window.dispatchEvent(new CustomEvent(PROJECT_FILTER_EVENT, { detail: label }));
    document.getElementById('projects')?.scrollIntoView();
  };

  return (
    <section id='skills' className={style.toolbox}>
      <h2>Toolbox</h2>
      <p className={style.intro}>The tools I work with today. Click one to see the projects I built with it.</p>
      <div className={style.groups}>
        {toolboxGroups.map((group) => (
          <div key={group.title} className={`card ${style.group}`}>
            <h3>{group.title}</h3>
            <ul>
              {group.skills.map((id) => {
                const skill = skills.find((s) => s.id === id);
                if (!skill) return null;
                const count = projectCount(id);
                const Icon = icons[id]?.icon;
                const color = icons[id]?.color ?? 'var(--wu-orange)';
                const content = (
                  <>
                    {Icon && <Icon aria-hidden className={style.icon} />}
                    <span>{skill.label}</span>
                    {count > 0 && <small>{count} {count === 1 ? 'project' : 'projects'}</small>}
                    {count === 0 && dailyTools.includes(id) && <small>daily</small>}
                  </>
                );
                return (
                  <li key={id}>
                    {count > 0 ? (
                      <button type='button' className={style.skill} style={{ '--brand': color } as React.CSSProperties} onClick={() => showProjects(skill.label)}
                        aria-label={`${skill.label}: show ${count} ${count === 1 ? 'project' : 'projects'}`}>
                        {content}
                      </button>
                    ) : (
                      <span className={style.skill} style={{ '--brand': color } as React.CSSProperties}>{content}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
      <p className={style.also}>
        <span>Also experienced with:</span> {otherSkills.map((s) => s.label).join(' · ')}
      </p>
    </section>
  );
}
