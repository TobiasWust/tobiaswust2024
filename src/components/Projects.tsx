'use client';

import style from './Projects.module.scss';
import projects, { Project as TProject } from "../data/projects";
import ProjectThumb from "./ProjectThumb";
import { useEffect, useMemo, useRef, useState } from 'react';
import { Flipped, Flipper, spring } from 'react-flip-toolkit';
import Project from './Project';
import { createPortal } from 'react-dom';
import useConsoleMsg from '../utils/useConsoleMsg';
import useAscrollMaster from '../achievements/useAscrollMaster';
import useAchievement from '../achievements/useAchievement';

export default function Projects() {
  const [filter, setFilter] = useState('');
  const [fullscreenProject, setFullscreenProject] = useState<TProject | null>(null);
  const [mounted, setMounted] = useState(false);

  useConsoleMsg();
  useAscrollMaster();
  const { addAchievement } = useAchievement();

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

  const filteredProjects = useMemo(() => (
    projects
      .filter(project =>
        !filter
        || project.label.toLowerCase().includes(filter.toLowerCase())
        || project.description.toLowerCase().includes(filter.toLowerCase())
        || project.skills.some(skill => skill.toLowerCase().includes(filter.toLowerCase()))
      )
  ), [filter]);

  useEffect(() => {
    // cheatcodes
    if (filter.toLowerCase() === 'do a barrel roll') {
      setTimeout(() => {
        addAchievement('starfox');
      }, 3000);
      document.querySelector('body')!.classList.add('barrel');
    }

    if (filter.toLowerCase() === '18') {
      addAchievement('polymath');
    }
  }, [filter, addAchievement]);

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
        <Flipped>
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
