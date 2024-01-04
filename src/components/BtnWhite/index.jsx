import { Link } from "react-router-dom"
import styles from "./btnWhite.module.css"

export default function BtnWhite({children}){
  return(
    <Link to="/contato">
      <button className={styles.btnWhite}>
        {children}
      </button>
    </Link>
  )
}