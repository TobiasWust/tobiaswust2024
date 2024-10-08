'use client';

import style from './Projects.module.scss';
import projects, { Project as TProject } from "../data/projects";
import ProjectThumb from "./ProjectThumb";
import { useEffect, useMemo, useState } from 'react';
import { Flipped, Flipper, spring } from 'react-flip-toolkit';
import Project from './Project';
import { createPortal } from 'react-dom';
import achievementStore from '../achievements/achievementStore';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function Projects() {
  const [filter, setFilter] = useState('');
  const [fullscreenProject, setFullscreenProject] = useState<TProject | null>(null);
  const [mounted, setMounted] = useState(false);
  const [projectsOpened, setProjectsOpened] = useState<string[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);

  const addAchievement = achievementStore((state) => state.addAchievement);
  const setCounter = achievementStore((state) => state.setCounter);
  const counters = achievementStore((state) => state.counters);

  const filteredProjects: TProject[] = useMemo(() => (
    projects
      .filter(project =>
        !filter
        || project.label.toLowerCase().includes(filter.toLowerCase())
        || project.description.toLowerCase().includes(filter.toLowerCase())
        || project.skills.some(skill => skill.toLowerCase().includes(filter.toLowerCase()))
      )
      .slice(0, isExpanded ? undefined : 9)
  ), [filter, isExpanded]);

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
    if (projectsOpened.length === projects.length) {
      addAchievement('projectShopper');
    }
  }, [projectsOpened, addAchievement, setCounter, counters.projectsOpened]);

  return (
    <section id='projects' className={style.projects}>
      <h2>Built with Passion</h2>
      <p>
        Here are some things I built.
      </p>
      <div className={style.filter}><input type="text" placeholder="Search for a project or skill..." onChange={e => setFilter(e.target.value)} /></div>
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

              ) : <Flipped><p className={style.noResult}>No projects found :(</p></Flipped>
            }
          </div>
        </Flipped>
      </Flipper>

      {(filteredProjects.length >= 9) &&
        <div className={style.expand}>
          <button className="btn" type="button" onClick={() => setIsExpanded((s) => !s)}>{isExpanded ?
            (<><FaChevronUp />Show less<FaChevronUp /></>) :
            (<><FaChevronDown />Show more<FaChevronDown /></>)}
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
