import { getCldImageUrl } from 'next-cloudinary';
import { useRef } from 'react';
import { Project } from '../data/projects';
import { useI18n } from '../i18n/I18nProvider';
import ProjectScreenshot from './ProjectScreenshot';
import style from './ScreenshotLightbox.module.scss';

// the screenshot in the project details, clickable to see it uncropped and as large as the screen allows
export default function ScreenshotLightbox({ project }: { project: Project }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const { t } = useI18n();

  if (!project.screenshot) return <ProjectScreenshot project={project} />;

  const src = project.screenshot.startsWith('/')
    ? project.screenshot
    : getCldImageUrl({ src: project.screenshot, width: 2000, crop: 'limit' });

  const close = () => dialog.current?.close();

  return (
    <>
      <button
        type='button'
        className={style.trigger}
        aria-label={t.projects.enlargeScreenshot}
        onClick={() => dialog.current?.showModal()}
      >
        <ProjectScreenshot project={project} />
      </button>
      {/* a nested modal on top of the project dialog. React lets cancel/close/click bubble to the
          project dialog's handlers, so they stop here: closing the image must not close the project */}
      <dialog
        ref={dialog}
        className={style.lightbox}
        aria-label={project.label}
        onCancel={(e) => e.stopPropagation()}
        onClose={(e) => e.stopPropagation()}
        onClick={(e) => {
          e.stopPropagation();
          close();
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- full-size original, loaded only when opened */}
        <img src={src} alt={project.label} loading='lazy' />
        <button type='button' aria-label={t.projects.closeScreenshot} onClick={close}>
          X
        </button>
      </dialog>
    </>
  );
}
