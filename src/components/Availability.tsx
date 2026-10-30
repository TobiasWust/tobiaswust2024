import { AVAILABILITY } from '../data/contact';
import style from './Availability.module.scss';

export default function Availability() {
  return <p className={style.availability}>{AVAILABILITY}</p>;
}
