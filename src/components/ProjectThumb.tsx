import { CldImage } from 'next-cloudinary';
import Image from 'next/image';
import { Flipped } from 'react-flip-toolkit';
import { Project as TProject } from '../data/projects';
import skills, { getSkillLogoUrl } from '../data/skills';
import style from './ProjectThumb.module.scss';
import ProjectPlaceholder from './ProjectPlaceholder';
import ProjectKind from './ProjectKind';

// max tilt in degrees when the cursor is at a card's edge
const TILT = 6;

// tilt toward the cursor and move the light spot with it (CSS reads the variables)
function tilt(e: React.MouseEvent<HTMLDivElement>) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  const x = (e.clientX - r.left) / r.width;
  const y = (e.clientY - r.top) / r.height;
  el.style.setProperty('--tilt-x', `${(x - 0.5) * TILT * 2}deg`);
  el.style.setProperty('--tilt-y', `${(0.5 - y) * TILT * 2}deg`);
  el.style.setProperty('--shine-x', `${x * 100}%`);
  el.style.setProperty('--shine-y', `${y * 100}%`);
}

function untilt(e: React.MouseEvent<HTMLDivElement>) {
  e.currentTarget.style.removeProperty('--tilt-x');
  e.currentTarget.style.removeProperty('--tilt-y');
}

export default function ProjectThumb({
  project,
  ...rest
}: {
  project: TProject;
}) {
  return (
    <div className={style.project} onMouseMove={tilt} onMouseLeave={untilt} {...rest}>
      <div className={style.description}>
        {project.screenshot ? (
          <CldImage
            src={project.screenshot}
            width='500'
            height='300'
            alt={project.label}
            draggable={false}
            crop={{
              type: 'auto',
              source: true,
            }}
          />
        ) : (
          <ProjectPlaceholder label={project.label} />
        )}
      </div>
      <div className={style.content}>
        <Flipped inverseFlipId={`project-${project.id}`} scale>
          <div className={style.header}>
            <ProjectKind kind={project.kind} />
            <h3>{project.label}</h3>
            <small>{project.shortDescription}</small>
          </div>
        </Flipped>
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
                  draggable={false}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
