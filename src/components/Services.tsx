'use client';

import { FaCode, FaCompass, FaLayerGroup, FaRobot } from 'react-icons/fa';
import style from './Services.module.scss';

export const PROJECT_FILTER_EVENT = 'projects-filter';

type Service = {
  icon: React.ReactNode;
  title: string;
  text: string;
  filter?: string;
};

const services: Service[] = [
  {
    icon: <FaCompass />,
    title: 'Product & Technical Direction',
    text: 'I start with your business, not the code. I turn vague goals into a clear plan, make the architecture calls and direct the work, whether people or AI write the code.',
  },
  {
    icon: <FaRobot />,
    title: 'AI-Powered Features',
    text: 'LLM features that solve real problems, like summaries, search, data extraction and assistants, built with costs, privacy and reliability in mind.',
    filter: 'openai',
  },
  {
    icon: <FaLayerGroup />,
    title: 'Fullstack Products',
    text: 'From database to deployment: Node.js APIs, Supabase and Next.js apps that are built to grow with your business.',
    filter: 'node',
  },
  {
    icon: <FaCode />,
    title: 'Frontend Engineering',
    text: 'Fast, accessible React & TypeScript interfaces that turn complex workflows into something people enjoy using.',
    filter: 'react',
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
            {service.filter ? (
              <a className='link' href='/#projects' onClick={(e) => showProjects(e, service.filter!)}>
                See related projects →
              </a>
            ) : (
              <a className='link' href='/#contact'>
                Let&apos;s talk about your project →
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
