'use client';

import style from './Footer.module.scss';
import Link from "next/link";
import { GiHearts } from "react-icons/gi";
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";
import achievementStore from '../achievements/achievementStore';
import { useEffect, useState } from 'react';
import EmailLink from './EmailLink';
import { OPEN_CONSENT_EVENT } from './CookieConsent';

export default function Footer() {

  const [socialsClicked, setSocialsClicked] = useState<string[]>([]);
  const addAchievement = achievementStore((state) => state.addAchievement);
  const counters = achievementStore((state) => state.counters);
  const setCounter = achievementStore((state) => state.setCounter);

  // add achievement socialButterfly if clicked all socials
  useEffect(() => {
    const max = Math.max(counters?.socialsClicked || 0, socialsClicked.length);
    setCounter('socialsClicked', max);
    if (socialsClicked.length === 3) {
      addAchievement('socialButterfly');
    }
  }, [socialsClicked, addAchievement, counters.socialsClicked, setCounter]);

  return (
    <footer className={style.footer}>
      <p className={style.cta}>
        Got a project in mind? <a className="link" href="/#contact">Let&apos;s talk</a>
      </p>
      <p>
        <EmailLink className="link" />
      </p>
      <div className={style.socials}>
        <a href="https://github.com/TobiasWust" rel="noopener noreferrer" target="_blank"
          onClick={() => {
            if (!socialsClicked.includes('github')) {
              setSocialsClicked([...socialsClicked, 'github'])
            }
          }}
        >
          <SiGithub aria-label='Github' title='Github' />
        </a>
        <a href="https://www.linkedin.com/in/tobias-wust/" rel="noopener noreferrer" target="_blank"
          onClick={() => {
            if (!socialsClicked.includes('linkedin')) {
              setSocialsClicked([...socialsClicked, 'linkedin'])
            }
          }}
        >
          <SiLinkedin aria-label='LinkedIn' title='LinkedIn' />
        </a>
        <a href="https://www.instagram.com/tobiaswust" rel="noopener noreferrer" target="_blank"
          onClick={() => {
            if (!socialsClicked.includes('insta')) {
              setSocialsClicked([...socialsClicked, 'insta'])
            }
          }}
        >
          <SiInstagram aria-label='Instagram' title='Instagram' />
        </a>
      </div>
      <p>
        Copyright © {new Date().getFullYear()} - Made with{" "}
        <GiHearts onClick={() => {
          addAchievement('secretLove');
        }} /> by{" "}
        <a className="link" rel="noopener noreferrer" target="_blank" href="https://www.wust.dev">
          Wust
        </a>
      </p>
      <p>
        Sourcecode available on{" "}
        <a
          className="link"
          rel="noopener noreferrer" target="_blank"
          href="https://github.com/TobiasWust/tobiaswust2024"
        >
          Github
        </a>
      </p>
      <div>
        <Link className="link" href="/achievements">
          Achievements
        </Link>
      </div>
      <div>
        <Link className="link" href="/imprint">
          Imprint
        </Link>
        <Link className="link" href="/privacy">
          Privacy Policy
        </Link>
        <button type="button" className={`link ${style.consentButton}`}
          onClick={() => window.dispatchEvent(new Event(OPEN_CONSENT_EVENT))}>
          Privacy settings
        </button>
      </div>
    </footer>
  );
}
