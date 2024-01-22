import styles from "./slider.module.css";
import BtnSlider from "../BtnSlider";
import SliderBox from "../SliderBox";
import leftBtn from "../../assets/left.svg"
import rightBtn from "../../assets/right.svg"

export default function Slider({refHook, funcaoBtnDir, funcaoBtnEsq}) {
  return (
    <div className={styles.sliderContainer}>
      <BtnSlider funcao={funcaoBtnEsq}>
        <img src={leftBtn} alt="leftBtn" />
      </BtnSlider>

      <div className={styles.sliderContent} ref={refHook}>
        <SliderBox/>

        <SliderBox/>

        <SliderBox/>

        <SliderBox/>

        <SliderBox/>
      </div>

      <BtnSlider funcao={funcaoBtnDir}>
        <img src={rightBtn} alt="rightBtn" />
      </BtnSlider>
    </div>
  );
}
