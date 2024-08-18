import Image from "next/image";
import styles from "./Nav.module.scss";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Image src='/tw.svg' alt='TW logo' width={40} height={40} />
      <ul>
        <li>
          <Link className="link" href="/#skills">Skills</Link>
        </li>
        <li>
          <Link className="link" href="/#projects">Projects</Link>
        </li>
        <li>
          <Link className="link" href="/#about">About</Link>
        </li>
        <li>
          <Link className="link" href="/#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
