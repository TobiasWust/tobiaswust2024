'use client';

import Link from 'next/link';
import style from './not-found.module.scss'
import achievementStore from '../achievements/achievementStore';
import { useEffect, useState } from 'react';

export default function NotFound() {

  const [isMounted, setIsMounted] = useState(false);
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
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <Link className="link" href="/">Return Home</Link>
      </div>
    </div>
  )
}
