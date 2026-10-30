import { FaCheck, FaUserTie } from 'react-icons/fa';
import style from './AiInPractice.module.scss';

const aiDoes = [
  'Writing features and UI: components, forms, API hooks',
  'Tests and refactoring, including cleaning up legacy parts',
  'Reviews and debugging: spotting bugs and explaining errors',
];

const iDo = [
  'Understanding complex operational and regulatory requirements',
  'Deciding how features fit together and how the code is structured',
  'Reviewing every AI change before it ships',
];

export default function AiInPractice() {
  return (
    <section id='ai' className={style.ai}>
      <h2>AI in practice</h2>
      <p className={style.intro}>
        At <strong>node.energy</strong> I build React interfaces for a renewable energy platform, and AI is part of my daily work there.
        I use <strong>Claude Code</strong>, <strong>GitHub Copilot</strong> and AI chat assistants every day.
      </p>
      <div className={style.columns}>
        <div className='card'>
          <h3><FaCheck /> What AI speeds up</h3>
          <ul>
            {aiDoes.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
        <div className='card'>
          <h3><FaUserTie /> What stays my job</h3>
          <ul>
            {iDo.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </div>
      <p className={style.outro}>
        The result: you get the speed of AI with the care of a senior engineer who knows what the code needs to do.
      </p>
    </section>
  );
}
