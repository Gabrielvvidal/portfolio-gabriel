import fotoPerfil from "../assets/fotoPerfil.jpeg"
import BtnContact from "../components/BtnContact"

export default function Contact() {
  return(
    <div className="contactSection">
      <h2 className="titleContact">Contato</h2>

      <img src={fotoPerfil} alt="foto-perfil" className="fotoPerfil"/>

      <p className="nameContact">Gabriel Vieira Vidal de Carvalho</p>

      <div className="buttonsContact">
        <BtnContact text="Meu CV" path="https://drive.google.com/uc?export=download&id=1g9BrAud08SsEeFiNM2usVLue7Uil8ti5"/>

        <BtnContact text="E-mail" path="mailto:gabrielvieiravidal2005@gmail.com"/>

        <BtnContact text="LinkedIn" path="https://www.linkedin.com/in/gabrielvvidal/"/>
      </div> 
    </div>
  )
}