import style from './Footer.module.scss';
import Link from "next/link";
import { GiHearts } from "react-icons/gi";
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.socials}>
        <a href="https://github.com/TobiasWust" rel="noopener noreferrer" target="_blank">
          <SiGithub aria-label='Github' title='Github' />
        </a>
        <a href="https://www.linkedin.com/in/tobias-wust/" rel="noopener noreferrer" target="_blank">
          <SiLinkedin aria-label='LinkedIn' title='LinkedIn' />
        </a>
        <a href="https://www.instagram.com/tobiaswust" rel="noopener noreferrer" target="_blank">
          <SiInstagram aria-label='Instagram' title='Instagram' />
        </a>
      </div>
      <p>
        Copyright © 2024 - Made with{" "}
        <GiHearts /> by{" "}
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
      </div>
    </footer>
  );
}
