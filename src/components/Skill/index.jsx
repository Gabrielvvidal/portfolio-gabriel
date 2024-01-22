import BtnBlue from "../BtnBlue"
import styles from "./skill.module.css"
import SkillBox from "../SkillBox"
import jsLogo from "../../assets/javascript.svg"
import reactLogo from "../../assets/reactjs.svg"

export default function Skill() {
  return(
    <div className={styles.skillContainer}>
      <h2 className={styles.titleSkill}>Minhas habilidades</h2>

      <div className={styles.showSkill}>
        <SkillBox nomeSkill="JavaScript">
          <img src={jsLogo} alt="JsLogo" />
        </SkillBox>

        <SkillBox nomeSkill="React">
          <img src={reactLogo} alt="reactLogo" />
        </SkillBox>
      </div>

      <BtnBlue>
        Ver Projetos
      </BtnBlue>
    </div>
  )
}