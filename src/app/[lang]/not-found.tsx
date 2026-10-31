'use client';

import Link from 'next/link';
import style from './not-found.module.scss'
import achievementStore from '../../achievements/achievementStore';
import { useEffect, useState } from 'react';
import { CldImage } from 'next-cloudinary';
import { useI18n } from '../../i18n/I18nProvider';

export default function NotFound() {

  const [isMounted, setIsMounted] = useState(false);
  const { t } = useI18n();
  const addAchievement = achievementStore((state) => state.addAchievement);

  useEffect(() => {
    setIsMounted(true);
  }, [])

  useEffect(() => {
    if (isMounted) addAchievement('404');
  }, [addAchievement, isMounted]);

  return (
    <div className={style.notfound}>
      <div>
        <h2>{t.notFound.heading}</h2>
        <p>{t.notFound.text}</p>
        <CldImage
          src='tobiaswust.de/sadpuppy'
          width={400}
          height={400}
          alt={t.notFound.image}
        />
        <p>
          <Link className="link" href="/">{t.notFound.home}</Link>
        </p>
      </div>
    </div>
  )
}
