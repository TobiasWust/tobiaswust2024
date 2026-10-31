'use client';

import { FaBriefcase, FaBullseye, FaShieldAlt } from 'react-icons/fa';
import { useI18n } from '../i18n/I18nProvider';
import { rich } from '../i18n/rich';
import style from './WhyMe.module.scss';

// icons in the same order as t.why.reasons
const icons = [<FaBullseye key='goal' />, <FaBriefcase key='business' />, <FaShieldAlt key='quality' />];

export default function WhyMe() {
  const { t } = useI18n();

  return (
    <section id='why' className={style.why}>
      <h2>{t.why.heading}</h2>
      <p className={style.intro}>{rich(t.why.intro, undefined, 'em')}</p>
      <ul>
        {t.why.reasons.map((reason, i) => (
          <li key={reason.title} className='card'>
            <span className={style.icon}>{icons[i]}</span>
            <div>
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className={style.practice}>
        <h3>{t.why.practiceHeading}</h3>
        <p>{t.why.practiceText}</p>
        <div className={style.split}>
          <div>
            <h4>{t.why.aiDoesHeading}</h4>
            <ul>{t.why.aiDoes.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
          <div>
            <h4>{t.why.iDoHeading}</h4>
            <ul>{t.why.iDo.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}
