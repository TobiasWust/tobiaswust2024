import Image from "next/image";
import styles from "./marquee.module.css"
import shuffle from "../utils/shuffle";

export default function Marquee({ items }: { items: string[] }) {
  return (
    <div className={styles.marquee}>
      <ul className={styles.marquee__content}>
        {shuffle(items).map(item => (
          <li key={item}>
            <Image
              height="200"
              width="200"
              alt={item}
              title={item.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())}
              // src={`https://github.com/gilbarbara/logos/raw/main/logos/${item}.svg`}
              src={`https://cdn.svgporn.com/logos/${item}.svg`}
            />
          </li>
        ))}
      </ul>

      <ul aria-hidden="true" className={styles.marquee__content}>
        {shuffle(items).map(item => (
          <li key={item}>
            <Image
              height="200"
              width="200"
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
