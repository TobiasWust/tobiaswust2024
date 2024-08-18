import style from './Project.module.scss';
import { VscGithub, VscLinkExternal } from "react-icons/vsc";
import { Project as TProject } from "../data/projects";
import Image from 'next/image';
import skills from '../data/skills';
import { CldImage } from 'next-cloudinary';
import { useEffect, useRef } from 'react';
import { Flipped } from 'react-flip-toolkit';

export default function Project({ project, closeProject, ...rest }: {
  project: TProject,
  closeProject: () => void
}) {

  const closeProjectButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeProjectButton.current?.focus();
  }, []);

  return (
    <div className={style.project} {...rest}>
      <button ref={closeProjectButton} type='button' onClick={closeProject}>X</button>
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
      <div className={style.content}>
        <div className={style.header}>
          <h3>{project.label}</h3>
          <span>{project.year}</span>
        </div>

        <p>{project.description}</p>

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
        <div className={style.links}>
          {project.url && <a href={project.url}><VscLinkExternal />Visit Site</a>}
          {project.github && <a href={project.github}><VscGithub />View on GitHub</a>}
        </div>
      </div>
    </div>
  )
}
