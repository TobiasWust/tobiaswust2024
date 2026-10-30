import { FaBriefcase, FaBullseye, FaShieldAlt } from 'react-icons/fa';
import style from './WhyMe.module.scss';

const reasons = [
  {
    icon: <FaBullseye />,
    title: 'Directing the work',
    text: 'I break your goals down into clear specs and steer developers and AI tools toward them, so effort goes into what actually matters.',
  },
  {
    icon: <FaBriefcase />,
    title: 'Understanding your business',
    text: '15+ years across renewable energy, the public sector and SaaS taught me to turn complex, even regulatory, requirements into software that works.',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Quality you can trust',
    text: 'Every line, whether written by me or by AI, is reviewed, tested and secure before it reaches your users.',
  },
];

const aiDoes = ['Features and UI', 'Tests and refactoring', 'Reviews and debugging'];
const iDo = ['Understanding the requirements', 'Structuring the code', 'Reviewing every change'];

export default function WhyMe() {
  return (
    <section id='why' className={style.why}>
      <h2>Why senior experience matters more with AI</h2>
      <p className={style.intro}>
        AI made writing code cheap. Knowing <em>what</em> to build, and whether it&apos;s <em>right</em>, became more valuable than ever.
      </p>
      <ul>
        {reasons.map((reason) => (
          <li key={reason.title} className='card'>
            <span className={style.icon}>{reason.icon}</span>
            <div>
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className={style.practice}>
        <h3>In practice at node.energy</h3>
        <p>
          I build React interfaces for a renewable energy platform and use Claude Code, GitHub Copilot and AI chat assistants every day.
        </p>
        <div className={style.split}>
          <div>
            <h4>AI speeds up</h4>
            <ul>{aiDoes.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
          <div>
            <h4>Stays my job</h4>
            <ul>{iDo.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}
