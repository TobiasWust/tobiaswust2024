import { getCldImageUrl } from 'next-cloudinary';
import { KeyboardEvent, TouchEvent, useRef, useState } from 'react';
import { Project, screenshots } from '../data/projects';
import { useI18n } from '../i18n/I18nProvider';
import ProjectScreenshot from './ProjectScreenshot';
import style from './ScreenshotLightbox.module.scss';

// a horizontal finger movement of at least this many pixels counts as a swipe to the next/previous image
const SWIPE_DISTANCE = 40;

function fullSizeSrc(src: string) {
  return src.startsWith('/') ? src : getCldImageUrl({ src, width: 2000, crop: 'limit' });
}

// the screenshots in the project details: with more than one, arrows (and swipes / arrow keys) page
// through them; a click opens the current one uncropped and as large as the screen allows
export default function ScreenshotLightbox({ project }: { project: Project }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const touchStartX = useRef<number | null>(null);
  const [index, setIndex] = useState(0);
  const { t } = useI18n();

  const images = screenshots(project);
  if (images.length === 0) return <ProjectScreenshot project={project} />;

  const many = images.length > 1;
  const current = images[index] ?? images[0];
  const alt = many ? `${project.label} (${index + 1}/${images.length})` : project.label;

  const go = (step: number) => setIndex((i) => (i + step + images.length) % images.length);
  const close = () => dialog.current?.close();

  const onKeyDown = (e: KeyboardEvent) => {
    if (!many) return;
    if (e.key === 'ArrowLeft') go(-1);
    else if (e.key === 'ArrowRight') go(1);
    else return;
    e.preventDefault();
  };
  const onTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: TouchEvent) => {
    if (touchStartX.current === null || !many) return;
    const distance = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(distance) >= SWIPE_DISTANCE) go(distance < 0 ? 1 : -1);
  };

  // clicks on the arrows must neither open the lightbox nor close it
  const arrows = many && (
    <>
      <button
        type='button'
        className={`${style.arrow} ${style.prev}`}
        aria-label={t.projects.previousScreenshot}
        onClick={(e) => {
          e.stopPropagation();
          go(-1);
        }}
      >
        ‹
      </button>
      <button
        type='button'
        className={`${style.arrow} ${style.next}`}
        aria-label={t.projects.nextScreenshot}
        onClick={(e) => {
          e.stopPropagation();
          go(1);
        }}
      >
        ›
      </button>
    </>
  );

  // wrapped in a div: the project card styles its direct child <button> as the round close button
  return (
    <div
      className={style.wrapper}
      onKeyDown={onKeyDown}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <button
        type='button'
        className={style.trigger}
        aria-label={t.projects.enlargeScreenshot}
        onClick={() => dialog.current?.showModal()}
      >
        <ProjectScreenshot project={project} src={current} alt={alt} />
      </button>
      {arrows}
      {many && (
        <div className={style.dots}>
          {images.map((src, i) => (
            <button
              key={src}
              type='button'
              aria-label={`${t.projects.showScreenshot} ${i + 1}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      )}
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
        <img src={fullSizeSrc(current)} alt={alt} loading='lazy' />
        {arrows}
        <button type='button' className={style.close} aria-label={t.projects.closeScreenshot} onClick={close}>
          X
        </button>
      </dialog>
    </div>
  );
}
