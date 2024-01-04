import { Link } from "react-router-dom"
import styles from "./buttonBlue.module.css"

export default function BtnBlue({children}){
  return(
    <Link to="/projetos">
      <button className={styles.btnBlue}>
        {children}
      </button>
    </Link>
  )
}