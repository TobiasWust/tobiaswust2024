'use client';

import { VscLinkExternal } from 'react-icons/vsc';
import style from './About.module.scss';
import achievementStore from '../achievements/achievementStore';
import HireMe from './HireMe';

export default function About() {
  const addAchievement = achievementStore((state) => state.addAchievement);

  return (
    <section id='about' className={style.about}>
      <div>
        <h2>My Story</h2>
        <p><span className={style.highlight}>Hi, I&apos;m Tobias!</span></p>
        <p>I&apos;m a <span className={style.highlight}>freelance fullstack developer</span> who helps teams ship web products that are fast, maintainable and pleasant to use. My focus is <span className={style.highlight}>React, TypeScript and Node.js</span>, from small business websites to large-scale platforms for renewable energy.</p>
        <p>I&apos;ve been writing software since I was 11. After a B.Sc. in Business Information Systems and four years of SAP/ABAP in the public sector, I moved to the web and never looked back. That background means I&apos;m comfortable translating business and regulatory requirements into clear, working software.</p>
        <p>Beyond coding, I&apos;m a <span className={style.highlight}>professional paragliding pilot</span>. Same passion, same precision, more altitude.</p>
        <p className={style.cv}><a className="link"
          onClick={() => addAchievement('potentialClient')}
          rel="noopener noreferrer" target="_blank" href="https://cv.wust.dev"><VscLinkExternal />Check out my CV</a>
          <HireMe />
        </p>
      </div>
    </section>
  )
}
