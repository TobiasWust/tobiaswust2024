import Image from 'next/image';
import { useLayoutEffect, useRef } from 'react';
import { VscGithub, VscLinkExternal } from 'react-icons/vsc';
import { Project as TProject } from '../data/projects';
import skills, { getSkillLogoUrl } from '../data/skills';
import style from './Project.module.scss';
import ProjectScreenshot from './ProjectScreenshot';
import ProjectKind from './ProjectKind';
import { useI18n } from '../i18n/I18nProvider';

export default function Project({
  project,
  closeProject,
  ...rest
}: {
  project: TProject;
  closeProject: () => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const { t } = useI18n();

  // native modal: focus trap, inert page, Esc and the back gesture come from the browser.
  // The <dialog> is a transparent full-screen layer; the visible card inside it is a normal element,
  // because the flip animation can't measure an element that is itself in the top layer.
  useLayoutEffect(() => {
    const el = dialog.current;
    if (el && !el.open) el.showModal();
  }, []);

  return (
    <dialog
      ref={dialog}
      className={style.dialog}
      aria-labelledby={`project-title-${project.id}`}
      // Esc and the back gesture fire `cancel`: let React unmount it instead of the browser hiding it
      // first, so the flip animation back into the card starts from the visible card
      onCancel={(e) => {
        e.preventDefault();
        closeProject();
      }}
      onClose={closeProject}
      // a click on the dialog itself (not the card) is a click next to the card: light dismiss, in every browser
      onClick={(e) => {
        if (e.target === e.currentTarget) closeProject();
      }}
    >
      <div className={style.project} {...rest}>
      <button
        type='button'
        aria-label={t.projects.close}
        onClick={closeProject}
        autoFocus
      >
        X
      </button>
      <ProjectScreenshot project={project} />
      <div className={style.content}>
        <div className={style.header}>
          <h3 id={`project-title-${project.id}`}>{project.label}</h3>
          <span>{project.year}</span>
          <ProjectKind kind={project.kind} />
        </div>

        <p>{project.description}</p>
        {project.result && (
          <p className={style.result}>
            <strong>{t.projects.result}</strong> {project.result}
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
              {t.projects.visitSite}
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
              {t.projects.viewOnGithub}
            </a>
          )}
        </div>
      </div>
      </div>
    </dialog>
  );
}
