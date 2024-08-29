'use client';

import Link from 'next/link';
import style from './not-found.module.scss'
import achievementStore from '../achievements/achievementStore';
import { useEffect } from 'react';

export default function NotFound() {

  const addAchievement = achievementStore((state) => state.addAchievement);

  useEffect(() => {
    addAchievement('404');
  }, [addAchievement]);

  return (
    <div className={style.notfound}>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link className="link" href="/">Return Home</Link>
    </div>
  )
}
