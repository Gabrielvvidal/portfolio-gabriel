import styles from "./about.module.css"

export default function About() {
  return(
    <div>
      <div className={styles.partOne}>
        <h2 className={styles.titleAbout}>Olá, meu nome é Gabriel!</h2>
        <p className={styles.descAbout}>Sou um apaixonado por programação. Meu foco é desenvolver soluções inteligentes para problemas difíceis.</p>
      </div>

      <div className={styles.partTwo}></div>
    </div>
  )
}