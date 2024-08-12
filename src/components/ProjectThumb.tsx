import style from './ProjectThumb.module.scss';
import { Project as TProject } from "../data/projects";
import Image from 'next/image';
import skills from '../data/skills';
import { CldImage } from 'next-cloudinary';

export default function ProjectThumb({ project, ...rest }: { project: TProject }) {
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
      </div>
      <div className={style.content}>
        <div className={style.header}>
          <h3>{project.label}</h3>
          <small>{project.shortDescription}</small>
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
      </div>
    </div>
  )
}
