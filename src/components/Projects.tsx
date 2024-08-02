'use client';

import style from './Projects.module.scss';
import projects from "../data/projects";
import Project from "./Project";
import { useMemo, useState } from 'react';

export default function Projects() {
  const [filter, setFilter] = useState('');

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
      {/* <button onClick={() => setFilter(['stripe'])}>stripe</button> */}
      {/* <button onClick={() => setFilter([])}>all</button> */}
      <div className={style.projectgrid}>
        {filteredProjects
          // .filter(project => filter.length === 0 || filter.some(f => project.skills.includes(f)))
          .map(project =>
            <Project key={project.id} project={project} />
          )}
      </div>
    </section>
  )
}
