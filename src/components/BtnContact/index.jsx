import style from "./btnContact.module.css"

export default function BtnContact({text, path}) {
  return(
    <>
      <a href={path} target="_blank" className={style.btnContact}>{text}</a>
    </>
  )
}