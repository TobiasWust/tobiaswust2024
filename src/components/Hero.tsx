import styles from './Hero.module.scss'
import Hexagons from './Hexagons'
import HireMe from './HireMe'

export default function Hero() {
  return (
    <div className={styles.hero}>
      <Hexagons />
      <h2>Tobias Wust</h2>
      <h3>Fullstack expertise with a passion for adventure.</h3>
      <HireMe />
      <ul>
        <li>15+ years of experience</li>
        <li>React - Node.js - TypeScript</li>
        <li>Remote work from Germany</li>
      </ul>
    </div>
  )
}
