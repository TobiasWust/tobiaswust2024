import Image from 'next/image';
import { getSkillLogoUrl, Skill, Skills } from '../data/skills';
import shuffle from '../utils/shuffle';
import styles from './Marquee.module.css';

function MarqueeItem({ item }: { item: Skill }) {
  return (
    <li>
      <Image
        height='100'
        width='100'
        alt={item.label}
        title={item.label}
        src={getSkillLogoUrl(item)}
      />
    </li>
  );
}

export default function Marquee({
  items,
  shuffleItems,
  reverse,
}: {
  items: Skills;
  shuffleItems?: boolean;
  reverse?: boolean;
}) {
  if (shuffleItems) {
    items = shuffle(items);
  }
  return (
    <div className={styles.marquee}>
      <ul
        className={`${styles.marquee__content} ${reverse ? styles.marquee__content_reverse : ''}`}
      >
        {items.map((item) => (
          <MarqueeItem key={item.id} item={item} />
        ))}
      </ul>

      <ul
        aria-hidden='true'
        className={`${styles.marquee__content} ${reverse ? styles.marquee__content_reverse : ''}`}
      >
        {items.map((item) => (
          <MarqueeItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}
