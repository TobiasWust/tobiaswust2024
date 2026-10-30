import { Project } from '../data/projects';
import style from './ProjectKind.module.scss';

export default function ProjectKind({ kind }: { kind: Project['kind'] }) {
  return (
    <span className={`${style.kind} ${kind === 'client' ? style.client : ''}`}>
      {kind === 'client' ? 'Client work' : 'Side project'}
    </span>
  );
}
