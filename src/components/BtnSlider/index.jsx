import styles from "./btnSlider.module.css"

export default function BtnSlider({children, funcao}) {
  return(
    <button 
          className={styles.sliderBtn}
          onClick={funcao}  
    >
      {children}
    </button>
  )
}