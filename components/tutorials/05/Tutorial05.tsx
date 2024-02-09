"use client"

import { FaArrowRight } from "react-icons/fa";
import style from "./Tutorial05.module.scss"
import Image from "next/image";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

const Tutorial05 = () => {

    const RootRef = useRef<HTMLDivElement|null>(null)

    useLayoutEffect(()=>{
        const context = gsap.context(()=>{

            gsap.fromTo(".textsContainer",{opacity:0},{opacity:1})
            gsap.to(".p1",{paddingTop:0,duration:.5,delay:.5})
            gsap.to(".p2",{paddingTop:0,duration:.5,delay:.8})
            gsap.to(".p3",{paddingTop:0,duration:.5,delay:1.1})
            gsap.fromTo(".paragraph",{y:20},{y:0,opacity:1,delay:1.6})
            gsap.fromTo(".explore",{x:-40},{x:0,opacity:1,delay:1.8})
            gsap.fromTo(".img1",{y:-40,transform:"scale(0.8)"},{y:0,transform:"scale(1)",opacity:1,delay:1.4})
            gsap.fromTo(".img2",{y: 40,transform:"scale(0.8)"},{y:0,transform:"scale(1)",opacity:1,delay:1.7})

        },[RootRef])
    },[])

    return (
        <div className={style.Page}>
            <div className={style.header}>
                <p>Tutorial 05</p>
                <p>Hero Page</p>
            </div>
            <div className={style.container}>
                <div className={style.HeroContainer} ref={RootRef}>
                    <div className={`textsContainer ${style.textsContainer}`}>
                        <div className={style.textHeader}>
                            <p className="p1">Lorem ipsum dolor sit,</p>
                            <p className="p2">amet consectetur</p>
                            <p className="p3">adipisicing elit.</p>
                        </div>
                        <div className={`paragraph ${style.paragraph}`}>
                            Excepturi deserunt omnis cum ullam, atque magnam facere voluptates consequatur assumenda ad maxime eligendi delectus sapiente quis. Sapiente, rem.
                        </div>
                        <div className={`explore ${style.explore}`}>
                            <div className={style.text}>EXPLORE</div>
                            <div className={style.exploreButton}><FaArrowRight/></div>
                        </div>
                    </div>
                    <div className={style.imagesContainer}>
                        <div className={`img1 ${style.img}`}>
                            <Image src={"/naturalAesthetics01.webp"} alt="" fill style={{objectFit:"cover"}}/>
                        </div>
                        <div className={`img2 ${style.img}`}>
                            <Image src={"/naturalAesthetics02.webp"} alt="" fill style={{objectFit:"cover"}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Tutorial05;