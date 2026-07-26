import { CldImage } from 'next-cloudinary';
import Image from 'next/image';
import { Flipped } from 'react-flip-toolkit';
import { Project as TProject } from '../data/projects';
import skills, { getSkillLogoUrl } from '../data/skills';
import style from './ProjectThumb.module.scss';

export default function ProjectThumb({
  project,
  ...rest
}: {
  project: TProject;
}) {
  return (
    <div className={style.project} {...rest}>
      <div className={style.description}>
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
      </div>
      <div className={style.content}>
        <Flipped inverseFlipId={`project-${project.id}`} scale>
          <div className={style.header}>
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
