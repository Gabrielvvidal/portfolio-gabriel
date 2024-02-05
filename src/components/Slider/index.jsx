import { useState,useEffect } from "react";

import styles from "./slider.module.css";
import BtnSlider from "../BtnSlider";
import SliderBox from "../SliderBox";
import leftBtn from "../../assets/left.svg"
import rightBtn from "../../assets/right.svg"
import leftBtnRes from "../../assets/leftRes.svg"
import rightBtnRes from "../../assets/rightRes.svg"

export default function Slider({refHook, funcaoBtnDir, funcaoBtnEsq}) {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.sliderContainer}>
      <BtnSlider funcao={funcaoBtnEsq}>
        <img src={windowSize <= 315 ? leftBtnRes : leftBtn} alt="leftBtn" />
      </BtnSlider>

      <div className={styles.sliderContent} ref={refHook}>
        <SliderBox/>

        <SliderBox/>

        <SliderBox/>

        <SliderBox/>

        <SliderBox/>
      </div>

      <BtnSlider funcao={funcaoBtnDir}>
        <img src={windowSize <= 315 ? rightBtnRes : rightBtn} alt="rightBtn" />
      </BtnSlider>
    </div>
  );
}
