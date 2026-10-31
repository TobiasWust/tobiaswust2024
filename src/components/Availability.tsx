'use client';

import { useI18n } from '../i18n/I18nProvider';
import style from './Availability.module.scss';

export default function Availability() {
  const { t } = useI18n();
  return <p className={style.availability}>{t.hero.availability}</p>;
}
