import { FaArrowRight } from "react-icons/fa";
import style from "./Tutorial05.module.scss"
import Image from "next/image";

const Tutorial05 = () => {
    return (
        <div className={style.Page}>
            <div className={style.header}>
                <p>Tutorial 05</p>
                <p>Hero Page</p>
            </div>
            <div className={style.container}>
                <div className={style.HeroContainer}>
                    <div className={style.textsContainer}>
                        <div className={style.textHeader}>
                            <p>Lorem ipsum dolor sit,</p>
                            <p>amet consectetur</p>
                            <p>adipisicing elit.</p>
                        </div>
                        <div className={style.paragraph}>
                            Excepturi deserunt omnis cum ullam, atque magnam facere voluptates consequatur assumenda ad maxime eligendi delectus sapiente quis. Sapiente, rem.
                        </div>
                        <div className={style.explore}>
                            <div className={style.text}>EXPLORE</div>
                            <div className={style.exploreButton}><FaArrowRight/></div>
                        </div>
                    </div>
                    <div className={style.imagesContainer}>
                        <div className={style.img}>
                            <Image src={"/naturalAesthetics01.webp"} alt="" fill style={{objectFit:"cover"}}/>
                        </div>
                        <div className={style.img}>
                            <Image src={"/naturalAesthetics02.webp"} alt="" fill style={{objectFit:"cover"}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Tutorial05;