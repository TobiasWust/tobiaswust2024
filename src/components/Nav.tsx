'use client';

import Image from "next/image";
import styles from "./Nav.module.scss";
import Link from "next/link";
import useConsoleMsg from '../utils/useConsoleMsg';
import useAscrollMaster from '../achievements/useAscrollMaster';
import useAfullscreenFanatic from '../achievements/useAfullscreenFanatic';
import useADates from '../achievements/useADates';

export default function Nav() {
  useConsoleMsg();
  useAscrollMaster();
  useAfullscreenFanatic();
  useADates();

  return (
    <nav className={styles.nav}>
      <Link href="/">
        <Image src='/tw.svg' alt='TW logo' width={40} height={40} />
      </Link>
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
