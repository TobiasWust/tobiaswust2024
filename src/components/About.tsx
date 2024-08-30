import { VscLinkExternal } from 'react-icons/vsc';
import style from './About.module.scss';

export default function About() {
  return (
    <section id='about' className={style.about}>
      <div>
        <h2>My Story</h2>
        <p><span className={style.highlight}>Hi, I&apos;m Tobias!</span></p>
        <p>I&apos;ve been passionate about software development since I was 11, constantly honing my skills and staying on the cutting edge of technology. With a Bachelor of Science in Business Information Systems, I started my career in the public sector, where I gained four years of valuable experience working with SAP/ABAP.</p>
        <p>Today, I&apos;m a <span className={style.highlight}>freelance developer</span> with a specialized focus on <span className={style.highlight}>web development</span>, particularly using <span className={style.highlight}>React, TypeScript, and Node.js</span>. I&apos;ve worked on a wide range of projects, from small business websites to large-scale applications, and I&apos;m always eager to tackle new challenges and learn new technologies.</p>
        <p>My commitment to staying up-to-date with the latest technologies ensures that I deliver high-quality, modern solutions tailored to my clients&apos; needs.</p>
        <p>Beyond coding, I&apos;m also a <span className={style.highlight}>professional paragliding pilot</span>, bringing the same passion and precision to the skies as I do to my work.</p>
        <p>If you&apos;re looking for a dedicated developer who can bring your web project to life, I&apos;d love to connect and explore how we can work together!</p>
        <p className={style.cv}><a className="link" rel="noopener noreferrer" target="_blank" href="https://cv.wust.dev"><VscLinkExternal />Check out my CV</a></p>
      </div>
    </section>
  )
}
