'use client';

import { Project } from '../data/projects';
import { useI18n } from '../i18n/I18nProvider';
import style from './ProjectKind.module.scss';

export default function ProjectKind({ kind }: { kind: Project['kind'] }) {
  const { t } = useI18n();
  return (
    <span className={`${style.kind} ${kind === 'client' ? style.client : ''}`}>
      {kind === 'client' ? t.projects.client : t.projects.side}
    </span>
  );
}
