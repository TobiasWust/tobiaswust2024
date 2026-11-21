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
import LanguageSwitch from "./LanguageSwitch";
import ThemeToggle from "./ThemeToggle";
import { useI18n } from '../i18n/I18nProvider';

export default function Nav() {
  const { t } = useI18n();
  useConsoleMsg();
  useAscrollMaster();
  useAfullscreenFanatic();
  useADates();
  useAtunic();
  useAcheater();
  useAVisits();

  // markup and classes of the shared wust-ui header (github.com/TobiasWust/wust-ui)
  return (
    <header className={`wu-header ${styles.nav}`}>
      <Link className='wu-brand' href="/" aria-label={t.nav.home}>
        <Image src='/tw.svg' alt='' width={52} height={24} priority />
      </Link>
      <nav aria-label='Main'>
        <ul className='wu-links'>
          <li className='wu-optional'>
            <Link href="/#services">{t.nav.services}</Link>
          </li>
          <li>
            <Link href="/#projects">{t.nav.projects}</Link>
          </li>
          <li>
            <Link href="/#about">{t.nav.about}</Link>
          </li>
          <li className='wu-optional'>
            <Link href="/#contact">{t.nav.contact}</Link>
          </li>
        </ul>
      </nav>
      <LanguageSwitch />
      <ThemeToggle />
      <HireMe small />
    </header>
  );
}
