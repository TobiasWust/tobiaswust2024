import style from './Footer.module.scss';
import Link from "next/link";
import { GiHearts } from "react-icons/gi";
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.socials}>
        <a href="https://github.com/TobiasWust" rel="noopener noreferrer" target="_blank"><SiGithub /></a>
        <a href="https://www.linkedin.com/in/tobias-wust/" rel="noopener noreferrer" target="_blank"><SiLinkedin /></a>
        <a href="https://www.instagram.com/tobiaswust" rel="noopener noreferrer" target="_blank"><SiInstagram /></a>
      </div>
      <p>
        Copyright © 2024 - Made with{" "}
        <GiHearts /> by{" "}
        <a href="https://www.wust.dev" className="link-hover link">
          Wust
        </a>
      </p>
      <p>
        Sourcecode available on{" "}
        <a
          href="https://github.com/TobiasWust/tobiaswust2024"
          className="link-hover link"
        >
          Github
        </a>
      </p>
      <div>
        <Link href="/imprint">
          Imprint
        </Link>
        <Link href="/privacy">
          Privacy
        </Link>
      </div>
    </footer>
  );
}
