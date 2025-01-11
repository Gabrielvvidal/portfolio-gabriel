import BtnBlue from "../BtnBlue"
import styles from "./skill.module.css"
import SkillBox from "../SkillBox"
import jsLogo from "../../assets/javascript.svg"
import reactLogo from "../../assets/reactjs.svg"
import nodeLogo from "../../assets/nodejs.svg"
import mysqlLogo from "../../assets/mysql.svg"
import mongoLogo from "../../assets/mongo.svg"

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

        <SkillBox nomeSkill="NodeJS">
          <img src={nodeLogo} alt="reactLogo" />
        </SkillBox>

        <SkillBox nomeSkill="React Native">
          <img src={reactLogo} alt="reactLogo" />
        </SkillBox>

        <SkillBox nomeSkill="MySQL">
          <img src={mysqlLogo} alt="reactLogo" />
        </SkillBox>

        <SkillBox nomeSkill="MongoDB">
          <img src={mongoLogo} alt="reactLogo" />
        </SkillBox>
      </div>

      <BtnBlue>
        Ver Projetos
      </BtnBlue>
    </div>
  )
}