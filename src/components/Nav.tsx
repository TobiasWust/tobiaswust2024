import Image from "next/image";
import styles from "./Nav.module.scss";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Image src='/tw.svg' alt='TW logo' width={40} height={40} />
      <ul>
        <li>
          <Link href="/#about">About</Link>
        </li>
        <li>
          <Link href="/#skills">Skills</Link>
        </li>
        <li>
          <Link href="/#projects">Projects</Link>
        </li>
        <li>
          <Link href="/#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
