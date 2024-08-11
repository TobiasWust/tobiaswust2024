'use client';

import style from './Projects.module.scss';
import projects from "../data/projects";
import Project from "./Project";
import { useMemo, useState } from 'react';
import { Flipped, Flipper, spring } from 'react-flip-toolkit';
import shuffle from '../utils/shuffle';

export default function Projects() {
  const [filter, setFilter] = useState('');

  const shuffledProjects = useMemo(() => shuffle(projects), []);

  const filteredProjects = useMemo(() => (
    shuffledProjects
      .filter(project =>
        !filter
        || project.label.toLowerCase().includes(filter.toLowerCase())
        || project.skills.some(skill => skill.toLowerCase().includes(filter.toLowerCase()))
      )
  ), [filter, shuffledProjects]);

  return (
    <section id='projects'>
      <h2>Built with Passion</h2>
      <div className={style.filter}><input type="text" placeholder="Search" onChange={e => setFilter(e.target.value)} /></div>
      {/* <button onClick={() => setFilter(['stripe'])}>stripe</button> */}
      {/* <button onClick={() => setFilter([])}>all</button> */}
      <Flipper flipKey={filteredProjects.length}>
        <div className={style.projectgrid}>
          {filteredProjects
            .map(project =>
            (<Flipped key={project.id} flipId={project.id} stagger
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
              <Project project={project} />
            </Flipped>)
            )}
        </div>
      </Flipper>
    </section>
  )
}
