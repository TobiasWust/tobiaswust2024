import style from './Projects.module.scss';
import projects from "../data/projects";
import Project from "./Project";

export default function Projects() {
  return (
    <section id='projects'>
      <h2>Built with Passion</h2>
      <div>Filterbar</div>
      <div className={style.projectgrid}>
        {projects.map(project =>
          <Project key={project.id} project={project} />
        )}
      </div>
    </section>
  )
}
