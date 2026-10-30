'use client';

import { FaCode, FaLayerGroup, FaPuzzlePiece } from 'react-icons/fa';
import style from './Services.module.scss';

export const PROJECT_FILTER_EVENT = 'projects-filter';

const services = [
  {
    icon: <FaCode />,
    title: 'Frontend Engineering',
    text: 'Fast, accessible React & TypeScript interfaces that turn complex workflows into something people enjoy using.',
    filter: 'react',
  },
  {
    icon: <FaLayerGroup />,
    title: 'Fullstack Products',
    text: 'From database to deployment: Node.js APIs, Supabase and Next.js apps built to grow with your business.',
    filter: 'node',
  },
  {
    icon: <FaPuzzlePiece />,
    title: 'Extensions & Tools',
    text: 'Chrome and VS Code extensions and internal tools that automate the boring parts of your day.',
    filter: 'extension',
  },
];

export default function Services() {
  const showProjects = (e: React.MouseEvent, filter: string) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent(PROJECT_FILTER_EVENT, { detail: filter }));
    document.getElementById('projects')?.scrollIntoView();
  };

  return (
    <section id='services' className={style.services}>
      <h2>What I can do for you</h2>
      <ul>
        {services.map((service) => (
          <li key={service.title} className='card'>
            <span className={style.icon}>{service.icon}</span>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
            <a className='link' href='/#projects' onClick={(e) => showProjects(e, service.filter)}>
              See related projects →
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
