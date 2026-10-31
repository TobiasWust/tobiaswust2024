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

  return (
    <nav className={styles.nav}>
      <Link href="/">
        <Image src='/tw.svg' alt={t.nav.home} width={56} height={26} priority />
      </Link>
      <ul>
        <li>
          <Link className="link" href="/#services">{t.nav.services}</Link>
        </li>
        <li>
          <Link className="link" href="/#projects">{t.nav.projects}</Link>
        </li>
        <li>
          <Link className="link" href="/#about">{t.nav.about}</Link>
        </li>
        <li>
          <Link className="link" href="/#contact">{t.nav.contact}</Link>
        </li>
      </ul>
      <LanguageSwitch />
      <HireMe small />
    </nav>
  );
}
