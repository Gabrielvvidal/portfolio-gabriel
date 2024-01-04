import { useRef } from "react";
import BtnWhite from "../components/BtnWhite";
import Slider from "../components/Slider";

export default function Project() {
  const scrollContainerRef = useRef(null);

  const handleScroll = (direction) => {
    const scrollAmount = 100;
    const scrollContainer = scrollContainerRef.current;

    if (scrollContainer) {
      if (direction === 'left') {
        scrollContainer.scrollLeft -= scrollAmount;
      } else if (direction === 'right') {
        scrollContainer.scrollLeft += scrollAmount;
      }
    }
  };

  return(
    <div className="projectSection">
      <h2 className="titleProject">Meus projetos</h2>

      <Slider 
        refHook={scrollContainerRef}
        funcaoBtnEsq={() => handleScroll('left')}
        funcaoBtnDir={() => handleScroll('right')}
      />

      <p style={{color: "#ffffff", fontSize: "28px", marginBottom: "10px"}}>Surgiu algum interesse?</p>

      <BtnWhite>
        Entre em contato
      </BtnWhite>
    </div>
  )
}