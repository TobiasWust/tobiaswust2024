'use client';

import Image from "next/image";
import styles from "./Nav.module.scss";
import Link from "next/link";
import useConsoleMsg from '../utils/useConsoleMsg';
import useAscrollMaster from '../achievements/useAscrollMaster';
import useAfullscreenFanatic from '../achievements/useAfullscreenFanatic';
import useADates from '../achievements/useADates';
import useAVisits from "../achievements/useAVisits";
import useAtunic from "../achievements/useAtunic";
import useAcheater from "../achievements/useAcheater";
import HireMe from "./HireMe";

export default function Nav() {
  useConsoleMsg();
  useAscrollMaster();
  useAfullscreenFanatic();
  useADates();
  useAtunic();
  useAcheater();
  useAVisits();

  return (
    <nav className={styles.nav}>
      <Link href="/">
        <Image src='/tw.svg' alt='TW logo' width={40} height={40} />
      </Link>
      <ul>
        <li>
          <Link className="link" href="/#projects">Projects</Link>
        </li>
        <li>
          <Link className="link" href="/#about">About</Link>
        </li>
      </ul>
      <HireMe small />
    </nav>
  );
}
