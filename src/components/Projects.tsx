'use client';

import style from './Projects.module.scss';
import projects from "../data/projects";
import Project from "./Project";
import { useState } from 'react';

export default function Projects() {
  const [filter, setFilter] = useState('');
  console.log('projects', projects);
  return (
    <section id='projects'>
      <h2>Built with Passion</h2>
      <div>Looking for something?</div>
      <input type="text" placeholder="Search" onChange={e => setFilter(e.target.value)} />
      <p>filter: {filter}</p>
      {/* <button onClick={() => setFilter(['stripe'])}>stripe</button> */}
      {/* <button onClick={() => setFilter([])}>all</button> */}
      <div className={style.projectgrid}>
        {projects
          .filter(project =>
            !filter
            || project.label.toLowerCase().includes(filter.toLowerCase())
            || project.skills.some(skill => skill.toLowerCase().includes(filter.toLowerCase()))
          )
          // .filter(project => filter.length === 0 || filter.some(f => project.skills.includes(f)))
          .map(project =>
            <Project key={project.id} project={project} />
          )}
      </div>
    </section>
  )
}
