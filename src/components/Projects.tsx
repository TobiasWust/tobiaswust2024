'use client';

import style from './Projects.module.scss';
import projects from "../data/projects";
import Project from "./Project";
import { useState } from 'react';

export default function Projects() {
  const [filter, setFilter] = useState<string[]>([]);
  return (
    <section id='projects'>
      <h2>Built with Passion</h2>
      <div>Filterbar</div>
      <button onClick={() => setFilter(['stripe'])}>stripe</button>
      <button onClick={() => setFilter([])}>all</button>
      <div className={style.projectgrid}>
        {projects
          .filter(project => filter.length === 0 || filter.some(f => project.skills.includes(f)))
          .map(project =>
            <Project key={project.id} project={project} />
          )}
      </div>
    </section>
  )
}
