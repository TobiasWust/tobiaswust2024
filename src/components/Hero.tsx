import styles from './Hero.module.scss'

export default function Hero() {
  return (
    <div className={styles.hero}>
      Tobias Wust
      Fullstack expertise with a passion for adventure.
      <a className="" href="#contact"><span>Hire me</span></a>
      - 15 years of experience
      - React, Node.js, TypeScript
      - Remote work
    </div>
  )
}
