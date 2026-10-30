import style from './ProjectPlaceholder.module.scss';

// shown when a project has no screenshot (same 5:3 ratio as the Cloudinary images)
export default function ProjectPlaceholder({ label }: { label: string }) {
  return (
    <div className={style.placeholder} role='img' aria-label={label}>
      <span>{label}</span>
    </div>
  );
}
