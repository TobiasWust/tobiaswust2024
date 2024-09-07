import style from './HireMe.module.scss';

export default function HireMe({ small }: { small?: boolean }) {
  return (
    <a className={`${style.hireme} ${small ? style.small : ''}`} href="/#contact"><span>Hire me</span></a>
  )
}
