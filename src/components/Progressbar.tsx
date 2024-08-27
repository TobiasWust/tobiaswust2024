import style from './Progressbar.module.scss';

export default function Progressbar({ value, max }: {
  value: number,
  max: number
}) {
  return (
    <div className={style.progressbar}>
      <div className={style.maxbar}></div>
      <div className={style.valuebar} style={{ width: `${value / max * 100}%` }}></div>
      <div className={style.label}>
        {value} / {max}
      </div>
    </div>
  )
}
