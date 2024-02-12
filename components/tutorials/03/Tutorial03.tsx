"use client"

import Image from "next/image";
import style from "./Tutorial03.module.scss"
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Power4 } from "gsap";

const Tutorial03 = () => {

    const RootRef = useRef<HTMLDivElement|null>(null)
    const imgRef = useRef<HTMLDivElement|null>(null)

    useLayoutEffect(()=>{
        const context = gsap.context(()=>{

            gsap.to(".imgContainer",{ width:"100%", duration:1.4, ease:Power4.easeInOut })
            gsap.from(".img",{ transform:"scale(1.5)", duration:1 })

        },[RootRef])
    },[])

    return (
    <div className={style.container} ref={RootRef}>
        <div className={`imgContainer ${style.imgContainer}`} ref={imgRef}>
            <Image className="img" src={"/hilma.webp"} alt="" fill style={{objectFit:"cover"}}/>
        </div>
    </div>
    );
}
 
export default Tutorial03;