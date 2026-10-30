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
        <p>I&apos;ve been passionate about software development since I was 11, and I&apos;ve kept honing my skills and staying at the cutting edge of technology ever since. After earning a Bachelor of Science in Business Information Systems, I started my career in the public sector, where I spent four valuable years working with SAP/ABAP.</p>
        <p>Today, I&apos;m a <span className={style.highlight}>freelance developer</span> specializing in <span className={style.highlight}>web development</span>, particularly with <span className={style.highlight}>React, TypeScript, and Node.js</span>. I&apos;ve worked on a wide range of projects, from small business websites to large-scale applications, and I&apos;m always eager to take on new challenges and learn new technologies.</p>
        <p>My commitment to keeping up with the latest technologies means I deliver high-quality, modern solutions tailored to my clients&apos; needs.</p>
        <p>Beyond coding, I&apos;m also a <span className={style.highlight}>professional paragliding pilot</span>, and I bring the same passion and precision to the skies as I do to my work.</p>
        <p>If you&apos;re looking for a dedicated developer to bring your web project to life, I&apos;d love to connect and explore how we can work together!</p>
        <p className={style.cv}><a className="link"
          onClick={() => addAchievement('potentialClient')}
          rel="noopener noreferrer" target="_blank" href="https://cv.wust.dev"><VscLinkExternal />Check out my CV</a>
          <HireMe />
        </p>
      </div>
    </section>
  )
}
