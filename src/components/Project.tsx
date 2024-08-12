import style from './Project.module.scss';
import { VscGithub, VscLinkExternal } from "react-icons/vsc";
import { Project as TProject } from "../data/projects";
import Image from 'next/image';
import skills from '../data/skills';
import { CldImage } from 'next-cloudinary';

export default function Project({ project, closeProject, ...rest }: { project: TProject, closeProject: () => void }) {
  return (
    <div className={style.project} {...rest}>
      <div className={style.description}>
        {project.screenshot ? <CldImage
          src={project.screenshot}
          width="500"
          height="300"
          alt={project.label}
          crop={{
            type: 'auto',
            source: true
          }}
        /> : <Image src="https://picsum.photos/500/300" alt={project.label} width={500} height={300} />}
        <p>{project.description}</p>
      </div>
      <div className={style.content}>
        <div className={style.header}>
          <h3>{project.label}</h3>
          <span>{project.year}</span>
        </div>
        <button type='button' onClick={closeProject}>X</button>
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
