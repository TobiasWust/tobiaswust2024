'use client';

import style from './Projects.module.scss';
import projects, { Project as TProject } from "../data/projects";
import ProjectThumb from "./ProjectThumb";
import { useMemo, useState } from 'react';
import { Flipped, Flipper, spring } from 'react-flip-toolkit';
import Project from './Project';
import { createPortal } from 'react-dom';
import ClientPortal from './ClientPortal';

export default function Projects() {
  const [filter, setFilter] = useState('');
  const [fullscreenProject, setFullscreenProject] = useState<TProject | null>(null);

  const filteredProjects = useMemo(() => (
    projects
      .filter(project =>
        !filter
        || project.label.toLowerCase().includes(filter.toLowerCase())
        || project.skills.some(skill => skill.toLowerCase().includes(filter.toLowerCase()))
      )
  ), [filter]);

  return (
    <section id='projects'>
      <h2>Built with Passion</h2>
      <div className={style.filter}><input type="text" placeholder="Search" onChange={e => setFilter(e.target.value)} /></div>
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
                        <div onClick={() => { setFullscreenProject(project) }}>
                          <ProjectThumb project={project} />
                        </div>
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

      <ClientPortal selector="document.body">
        <Flipper portalKey='projectPortal' flipKey={fullscreenProject}>
          {fullscreenProject?.id &&
            <Flipped flipId={`project-${fullscreenProject.id}`} portalKey='projectPortal'>
              <Project
                project={fullscreenProject}
                closeProject={() => setFullscreenProject(null)}
              />
            </Flipped>
          }
        </Flipper>, document.body
      </ClientPortal>
    </section>
  )
}
