import Image from "next/image";
import styles from "./Marquee.module.css"
import shuffle from "../utils/shuffle";
import { Skills } from "../data/skills";

export default function Marquee({ items, shuffleItems, reverse }: {
  items: Skills
  shuffleItems?: boolean
  reverse?: boolean
}) {
  if (shuffleItems) {
    items = shuffle(items);
  }
  return (
    <div className={styles.marquee}>
      <ul className={`${styles.marquee__content} ${reverse ?? styles.marquee__content_reverse}`}>
        {items.map(item => (
          <li key={item.id}>
            <Image
              height="100"
              width="100"
              alt={item.label}
              title={item.label}
              // src={`https://github.com/gilbarbara/logos/raw/main/logos/${item}.svg`}
              src={`https://cdn.svgporn.com/logos/${item.id}.svg`}
            />
          </li>
        ))}
      </ul>

      <ul className={`${styles.marquee__content} ${reverse ?? styles.marquee__content_reverse}`}>
        {items.map(item => (
          <li key={item.id}>
            <Image
              height="100"
              width="100"
              alt={item.label}
              title={item.label}
              src={`https://cdn.svgporn.com/logos/${item.id}.svg`}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
