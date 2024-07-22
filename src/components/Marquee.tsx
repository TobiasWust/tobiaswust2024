import Image from "next/image";
import styles from "./Marquee.module.css"
import shuffle from "../utils/shuffle";

export default function Marquee({ items, shuffleItems, reverse }: {
  items: string[]
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
          <li key={item}>
            <Image
              height="100"
              width="100"
              alt={item}
              title={item.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())}
              // src={`https://github.com/gilbarbara/logos/raw/main/logos/${item}.svg`}
              src={`https://cdn.svgporn.com/logos/${item}.svg`}
            />
          </li>
        ))}
      </ul>

      <ul className={`${styles.marquee__content} ${reverse ?? styles.marquee__content_reverse}`}>
        {items.map(item => (
          <li key={item}>
            <Image
              height="100"
              width="100"
              alt={item}
              title={item.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())}
              src={`https://cdn.svgporn.com/logos/${item}.svg`}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
