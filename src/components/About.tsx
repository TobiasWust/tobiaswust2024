'use client';

import { VscLinkExternal } from 'react-icons/vsc';
import style from './About.module.scss';
import achievementStore from '../achievements/achievementStore';
import HireMe from './HireMe';
import { useI18n } from '../i18n/I18nProvider';
import { rich } from '../i18n/rich';

export default function About() {
  const addAchievement = achievementStore((state) => state.addAchievement);
  const { t } = useI18n();

  return (
    <section id='about' className={style.about}>
      <div>
        <h2>{t.about.heading}</h2>
        <p><span className={style.highlight}>{t.about.greeting}</span></p>
        {t.about.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 20)}>{rich(paragraph, style.highlight)}</p>
        ))}
        <p className={style.cv}><a className="link"
          onClick={() => addAchievement('potentialClient')}
          rel="noopener noreferrer" target="_blank" href="https://cv.wust.dev"><VscLinkExternal />{t.about.cv}</a>
          <HireMe />
        </p>
      </div>
    </section>
  )
}
