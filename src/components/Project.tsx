import style from './Project.module.scss';
import { VscGithub, VscLinkExternal } from "react-icons/vsc";
import { Project as TProject } from "../data/projects";
import Image from 'next/image';
import skills from '../data/skills';

export default function Project({ project }: { project: TProject }) {
  return (
    <div className={style.project}>
      {<Image src={project.screenshot || 'https://picsum.photos/500/300'} alt={project.label} width={500} height={300} />}
      <div className={style.content}>
        <div className={style.header}>
          <h3>{project.label}</h3>
          <span>{project.year}</span>
        </div>
        <ul className={style.skillSet}>
          {
            project.skills.map(skill => {
              const item = skills.find(s => s.id === skill);
              if (!item) return null
              return (
                <li key={skill}>
                  <Image
                    height="20"
                    width="20"
                    alt={item.label}
                    title={item.label}
                    src={`https://cdn.svgporn.com/logos/${item.id}.svg`}
                  />
                </li>
              )
            })
          }
        </ul>
        {/* <p className={style.description}>{project.description}</p> */}
        <div className={style.links}>
          {project.url && <a href={project.url}><VscLinkExternal />Visit Site</a>}
          {project.github && <a href={project.github}><VscGithub />View on GitHub</a>}
        </div>
      </div>
    </div>
  )
}
