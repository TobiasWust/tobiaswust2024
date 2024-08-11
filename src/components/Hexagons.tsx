import styles from './Hexagons.module.scss'

export default function Hexagons() {
  return (
    <div className={styles.container}>
      {
        [...Array(8)].map((_, i) => (
          <div className={styles.row} key={i}>
            {
              [...Array(18)].map((_, j) => (
                <div className={styles.hexagon} key={j}></div>
              ))
            }
          </div>
        ))
      }
    </div>
  )
}
