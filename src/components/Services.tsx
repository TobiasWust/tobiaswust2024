'use client';

import { FaCode, FaCompass, FaLayerGroup, FaRobot } from 'react-icons/fa';
import style from './Services.module.scss';
import { useI18n } from '../i18n/I18nProvider';

export const PROJECT_FILTER_EVENT = 'projects-filter';

// icon and project filter per service, in the same order as t.services.items
const services: { icon: React.ReactNode; filter?: string }[] = [
  { icon: <FaCompass /> },
  { icon: <FaRobot />, filter: 'openai' },
  { icon: <FaLayerGroup />, filter: 'node' },
  { icon: <FaCode />, filter: 'react' },
];

export default function Services() {
  const { t } = useI18n();
  const showProjects = (e: React.MouseEvent, filter: string) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent(PROJECT_FILTER_EVENT, { detail: filter }));
    document.getElementById('projects')?.scrollIntoView();
  };

  return (
    <section id='services' className={style.services}>
      <h2>{t.services.heading}</h2>
      <ul>
        {services.map((service, i) => (
          <li key={t.services.items[i].title} className='card'>
            <span className={style.icon}>{service.icon}</span>
            <h3>{t.services.items[i].title}</h3>
            <p>{t.services.items[i].text}</p>
            {service.filter ? (
              <a className='link' href='/#projects' onClick={(e) => showProjects(e, service.filter!)}>
                {t.services.relatedProjects}
              </a>
            ) : (
              <a className='link' href='/#contact'>
                {t.services.talk}
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
