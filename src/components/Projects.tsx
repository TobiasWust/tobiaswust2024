'use client';

import style from './Projects.module.scss';
import allProjects, { Project as TProject } from "../data/projects";
import ProjectThumb from "./ProjectThumb";
import { useEffect, useMemo, useState } from 'react';
import { Flipped, Flipper, spring } from 'react-flip-toolkit';
import Project from './Project';
import { createPortal } from 'react-dom';
import achievementStore from '../achievements/achievementStore';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { PROJECT_FILTER_EVENT } from './Services';
import { findSkillByLabel } from '../data/skills';
import { useI18n } from '../i18n/I18nProvider';
import { localizeProject } from '../i18n/localize';

export default function Projects() {
  const { t } = useI18n();
  // texts in the current language, so search and cards match what the visitor reads
  const projects = useMemo(() => allProjects.map((p) => localizeProject(p, t)), [t]);
  const [filter, setFilter] = useState('');
  const [fullscreenProject, setFullscreenProject] = useState<TProject | null>(null);
  const [mounted, setMounted] = useState(false);
  const [projectsOpened, setProjectsOpened] = useState<string[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);

  const addAchievement = achievementStore((state) => state.addAchievement);
  const setCounter = achievementStore((state) => state.setCounter);
  const counters = achievementStore((state) => state.counters);

  const filteredProjects: TProject[] = useMemo(() => {
    // an exact skill name (e.g. from the Toolbox) matches that skill only, so counts and results agree
    const skill = findSkillByLabel(filter);
    const text = filter.toLowerCase();
    return projects
      .filter(project => {
        if (!filter) return true;
        if (skill) return project.skills.includes(skill.id);
        return project.label.toLowerCase().includes(text)
          || project.description.toLowerCase().includes(text)
          || project.shortDescription.toLowerCase().includes(text)
          || project.skills.some(s => s.toLowerCase().includes(text));
      })
      .slice(0, isExpanded ? undefined : 9);
  }, [filter, isExpanded, projects]);

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setFullscreenProject(null);
      }
    }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, []);

  useEffect(() => {
    const applyFilter = (e: Event) => setFilter((e as CustomEvent<string>).detail);
    window.addEventListener(PROJECT_FILTER_EVENT, applyFilter);
    return () => window.removeEventListener(PROJECT_FILTER_EVENT, applyFilter);
  }, []);

  // cheatcodes
  useEffect(() => {
    if (filter.toLowerCase() === 'do a barrel roll') {
      setTimeout(() => {
        addAchievement('starfox');
      }, 3000);
      document.querySelector('body')!.classList.add('barrel');
    }

    if (filter.toLowerCase() === '18') {
      addAchievement('polymath');
    }

    if (filter.toLowerCase() === 'goodtimes') {
      addAchievement('networker');
    }

    if (filter.toLowerCase() === 'easy') {
      addAchievement('morserunner');
    }
  }, [filter, addAchievement]);

  // add achievement projectShopper if viewed all projects
  useEffect(() => {
    const max = Math.max(counters.projectsOpened || 0, projectsOpened.length);
    setCounter('projectsOpened', max);
    if (projectsOpened.length === 3) {
      addAchievement('projectProspect');
    }
    if (projectsOpened.length === allProjects.length) {
      addAchievement('projectShopper');
    }
  }, [projectsOpened, addAchievement, setCounter, counters.projectsOpened]);

  return (
    <section id='projects' className={style.projects}>
      <h2>{t.projects.heading}</h2>
      <p>
        {t.projects.intro}
      </p>
      <div className={style.filter}><input type="search" aria-label={t.projects.searchLabel} placeholder={t.projects.searchPlaceholder} value={filter} onChange={e => setFilter(e.target.value)} /></div>
      <Flipper flipKey={filteredProjects.length}
        spring="veryGentle"
      >
        <Flipped stagger>
          <div className={style.projectgrid}>
            {filteredProjects.length > 0 ? filteredProjects
              .map(project =>
              (
                <Flipped key={project.id} flipId={project.id} stagger
                  onAppear={(el, index) => {
                    spring({
                      onUpdate: val => {
                        el.style.opacity = `${val}`;
                      },
                      delay: index * 50
                    });
                  }}
                  onExit={(el, index, removeElement) => {
                    spring({
                      config: { overshootClamping: true },
                      onUpdate: val => {
                        el.style.transform = `scale(${1 - (val as number)})`;
                      },
                      delay: index * 50,
                      onComplete: removeElement
                    })
                  }
                  }
                >
                  <Flipper portalKey='projectPortal' flipKey={fullscreenProject?.id}>
                    {fullscreenProject?.id !== project.id &&
                      <Flipped flipId={`project-${project.id}`} portalKey='projectPortal'>
                        <button type='button' onClick={() => {
                          setFullscreenProject(project)
                          if (!projectsOpened.includes(project.id)) {
                            setProjectsOpened([...projectsOpened, project.id])
                          }
                        }}>
                          <ProjectThumb project={project} />
                        </button>
                      </Flipped>
                    }
                  </Flipper>
                </Flipped>
              )

              ) : <Flipped><p className={style.noResult}>{t.projects.noResult}</p></Flipped>
            }
          </div>
        </Flipped>
      </Flipper>

      {(filteredProjects.length >= 9) &&
        <div className={style.expand}>
          <button className="btn" type="button" onClick={() => {
            if (isExpanded) document.getElementById('projects')?.scrollIntoView();
            setIsExpanded((s) => !s);
          }}>{isExpanded ?
            (<><FaChevronUp />{t.projects.showLess}<FaChevronUp /></>) :
            (<><FaChevronDown />{t.projects.showMore}<FaChevronDown /></>)}
          </button>
        </div>
      }

      {mounted ? createPortal(
        <Flipper portalKey='projectPortal' flipKey={fullscreenProject}>
          {fullscreenProject?.id &&
            <Flipped flipId={`project-${fullscreenProject.id}`} portalKey='projectPortal'>
              <Project
                project={fullscreenProject}
                closeProject={() => setFullscreenProject(null)}
              />
            </Flipped>
          }
        </Flipper>, document.body) : null}
    </section>
  )
}
