import styles from "./skillBox.module.css"

export default function SkillBox({children, nomeSkill}) {
  return(
    <div className={styles.skillBox}>
      {children}

      <h3 className={styles.skillName}>{nomeSkill}</h3>
    </div>
  )
}