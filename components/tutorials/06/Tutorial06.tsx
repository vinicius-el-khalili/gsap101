"use client"

import { useRef } from "react";
import style from "./Tutorial06.module.scss"
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
const Tutorial06 = () => {

    const RootRef = useRef<HTMLDivElement|null>(null)

    return (
        <>
        <div className={style.Page}>
            <div className={style.header}>
                <p>Tutorial 06</p>
                <p>Hero Page</p>
            </div>
            <div className={style.container}>
                <div className={style.HeroContainer}>

                    <div className={style.frontContainer}>
                        <div className={style.textContainer}>
                            <p>LOREM&<span>IPSUM</span></p>
                            <p>CUT FROM</p>
                            <p>THE</p>
                            <p><span>H</span>eart</p>
                        </div>
                        <div className={style.button}>
                            Visit
                            <span><FaArrowRight/></span>
                        </div>
                    </div>

                    <div className={style.backContainer}>

                        <div className={style.imgContainer}>
                            <div className={style.curtain}/>
                            <Image src={"/naturalAesthetics03.webp"} alt="" fill style={{objectFit:"cover"}}/>
                        </div>
                        <div className={style.sideMessage}>
                            <p>et accusantium</p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
        </>
    );
}
 
export default Tutorial06;