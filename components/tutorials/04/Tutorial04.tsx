import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import style from "./Tutorial04.module.scss"

const Tutorial04 = () => {
    return (
        <div className={style.Page}>
            <div className={style.header}>
                <p>Tutorial 04</p>
                <p>Slider</p>
            </div>
            <div className={style.container}>
                <div className={style.sliderContainer}>
                    <div className={style.sliderButton}>
                        <FaArrowLeft/>
                    </div>
                    <div className={style.slide}>
                        <div className={style.imgContainer}>
                            
                        </div>
                        <div className={style.textContainer}>
                            <div className={style.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
                            <div className={style.name}>John Doe</div>
                            <div className={style.description}>Professional Template</div>
                        </div>
                    </div>
                    <div className={style.sliderButton}>
                        <FaArrowRight/>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Tutorial04;