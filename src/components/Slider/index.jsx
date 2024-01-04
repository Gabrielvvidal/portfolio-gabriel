import styles from "./slider.module.css";
import BtnSlider from "../BtnSlider";
import SliderBox from "../SliderBox";

export default function Slider({refHook, funcaoBtnDir, funcaoBtnEsq}) {
  return (
    <div className={styles.sliderContainer}>
      <BtnSlider funcao={funcaoBtnEsq}>
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_19_5)">
            <path
              d="M19.9287 -9.53674e-06L8.04499 11.9C7.22733 12.7215 6.76828 13.8334 6.76828 14.9925C6.76828 16.1516 7.22733 17.2635 8.04499 18.085L19.9425 30L22.5887 27.3487L10.6925 15.435C10.5753 15.3178 10.5095 15.1588 10.5095 14.9931C10.5095 14.8274 10.5753 14.6684 10.6925 14.5512L22.575 2.65124L19.9287 -9.53674e-06Z"
              fill="#0D6DE2"
            />
          </g>
          <defs>
            <clipPath id="clip0_19_5">
              <rect
                width="30"
                height="30"
                fill="white"
                transform="matrix(0 1 -1 0 30 0)"
              />
            </clipPath>
          </defs>
        </svg>
      </BtnSlider>

      <div className={styles.sliderContent} ref={refHook}>
        <SliderBox/>

        <SliderBox/>

        <SliderBox/>

        <SliderBox/>

        <SliderBox/>
      </div>

      <BtnSlider funcao={funcaoBtnDir}>
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_19_10)">
            <path
              d="M10.0713 30L21.955 18.1C22.7727 17.2785 23.2317 16.1666 23.2317 15.0075C23.2317 13.8484 22.7727 12.7365 21.955 11.915L10.0575 7.62939e-06L7.41125 2.65126L19.3075 14.565C19.4247 14.6822 19.4905 14.8412 19.4905 15.0069C19.4905 15.1726 19.4247 15.3316 19.3075 15.4488L7.42501 27.3488L10.0713 30Z"
              fill="#0D6DE2"
            />
          </g>
          <defs>
            <clipPath id="clip0_19_10">
              <rect
                width="30"
                height="30"
                fill="white"
                transform="matrix(0 -1 1 0 0 30)"
              />
            </clipPath>
          </defs>
        </svg>
      </BtnSlider>
    </div>
  );
}
