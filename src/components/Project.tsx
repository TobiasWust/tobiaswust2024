import { CldImage } from 'next-cloudinary';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { VscGithub, VscLinkExternal } from 'react-icons/vsc';
import { Project as TProject } from '../data/projects';
import skills, { getSkillLogoUrl } from '../data/skills';
import style from './Project.module.scss';
import ProjectPlaceholder from './ProjectPlaceholder';
import ProjectKind from './ProjectKind';

export default function Project({
  project,
  closeProject,
  ...rest
}: {
  project: TProject;
  closeProject: () => void;
}) {
  const closeProjectButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeProjectButton.current?.focus();
  }, []);

  return (
    <div
      className={style.project}
      role='dialog'
      aria-modal='true'
      aria-labelledby={`project-title-${project.id}`}
      {...rest}
    >
      <button
        ref={closeProjectButton}
        type='button'
        aria-label='Close project'
        onClick={closeProject}
      >
        X
      </button>
      {project.screenshot ? (
        <CldImage
          src={project.screenshot}
          width='500'
          height='300'
          alt={project.label}
          crop={{
            type: 'auto',
            source: true,
          }}
        />
      ) : (
        <ProjectPlaceholder label={project.label} />
      )}
      <div className={style.content}>
        <div className={style.header}>
          <h3 id={`project-title-${project.id}`}>{project.label}</h3>
          <span>{project.year}</span>
          <ProjectKind kind={project.kind} />
        </div>

        <p>{project.description}</p>
        {project.result && (
          <p className={style.result}>
            <strong>Result:</strong> {project.result}
          </p>
        )}

        <ul className={style.skillSet}>
          {project.skills.map((skill) => {
            const item = skills.find((s) => s.id === skill);
            if (!item) return null;
            return (
              <li key={skill}>
                <Image
                  height='20'
                  width='20'
                  alt={item.label}
                  title={item.label}
                  src={getSkillLogoUrl(item)}
                />
              </li>
            );
          })}
        </ul>
        <div className={style.links}>
          {project.url && (
            <a
              className='link'
              rel='noopener noreferrer'
              target='_blank'
              href={project.url}
            >
              <VscLinkExternal />
              Visit Site
            </a>
          )}
          {project.github && (
            <a
              className='link'
              rel='noopener noreferrer'
              target='_blank'
              href={project.github}
            >
              <VscGithub />
              View on GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
