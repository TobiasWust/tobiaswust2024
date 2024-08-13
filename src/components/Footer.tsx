import style from './Footer.module.scss';
import Link from "next/link";
import { GiHearts } from "react-icons/gi";

export default function Footer() {
  return (
    <footer className={style.footer}>
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
