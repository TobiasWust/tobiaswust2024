import { FaBullseye, FaBriefcase, FaComments, FaDraftingCompass, FaRocket, FaShieldAlt } from 'react-icons/fa';
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
    icon: <FaDraftingCompass />,
    title: 'Architecture & judgment',
    text: 'AI can suggest code, but not which trade-offs fit your product. I make decisions that still hold up in two years.',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Quality you can trust',
    text: 'Every line, whether written by me or by AI, is reviewed, tested and secure before it reaches your users.',
  },
  {
    icon: <FaRocket />,
    title: 'AI-assisted delivery',
    text: 'I use tools like Claude Code and GitHub Copilot every day. You get results faster and pay for outcomes, not keystrokes.',
  },
  {
    icon: <FaComments />,
    title: 'Clear communication',
    text: 'I speak both business and tech. You always know where your project stands, with no black box.',
  },
];

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
    </section>
  );
}
