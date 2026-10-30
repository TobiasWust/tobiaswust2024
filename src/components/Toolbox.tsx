'use client';

import Image from 'next/image';
import projects from '../data/projects';
import skills, { getSkillLogoUrl } from '../data/skills';
import { dailyTools, toolboxGroups } from '../data/toolbox';
import { PROJECT_FILTER_EVENT } from './Services';
import style from './Toolbox.module.scss';

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
                const content = (
                  <>
                    <Image src={getSkillLogoUrl(skill)} alt='' width={20} height={20} />
                    <span>{skill.label}</span>
                    {count > 0 && <small>{count} {count === 1 ? 'project' : 'projects'}</small>}
                    {count === 0 && dailyTools.includes(id) && <small>daily</small>}
                  </>
                );
                return (
                  <li key={id}>
                    {count > 0 ? (
                      <button type='button' className={style.skill} onClick={() => showProjects(skill.label)}
                        aria-label={`${skill.label}: show ${count} ${count === 1 ? 'project' : 'projects'}`}>
                        {content}
                      </button>
                    ) : (
                      <span className={style.skill}>{content}</span>
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
