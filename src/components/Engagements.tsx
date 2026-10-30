import { FaBoxOpen, FaChalkboardTeacher, FaChessKnight, FaUsers } from 'react-icons/fa';
import style from './Engagements.module.scss';

const engagements = [
  {
    icon: <FaBoxOpen />,
    title: 'Project-based',
    text: 'A clearly defined scope, delivered end-to-end, from the first plan to production.',
  },
  {
    icon: <FaUsers />,
    title: 'Team extension',
    text: 'I join your team as a senior developer and get productive fast, as long as you need me.',
  },
  {
    icon: <FaChessKnight />,
    title: 'Fractional tech lead',
    text: 'Part-time technical direction: architecture, code reviews and the decisions that keep you on track.',
  },
  {
    icon: <FaChalkboardTeacher />,
    title: 'AI workshop / audit',
    text: 'I help your team adopt AI-assisted development, or plan AI features that are worth building.',
  },
];

export default function Engagements() {
  return (
    <section id='work-together' className={style.engagements}>
      <h2>Ways to work together</h2>
      <ul>
        {engagements.map((engagement) => (
          <li key={engagement.title} className='card'>
            <span className={style.icon}>{engagement.icon}</span>
            <h3>{engagement.title}</h3>
            <p>{engagement.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
