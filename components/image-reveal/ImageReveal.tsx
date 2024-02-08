"use client"

import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

import asset from "@/public/assets/mountains.jpg"
import style from "./ImageReveal.module.scss"
import Image from "next/image";

const ImageReveal = () => {

    const rootRef = useRef<HTMLDivElement|null>(null)
    useLayoutEffect(()=>{
        const context = gsap.context(()=>{

            gsap.fromTo(".image",{
                opacity:0,
                scale:2
            },{
                opacity:1,
                scale:1
            })
            gsap.fromTo(".textContainer",{
                opacity:0,
                y:200
            },{
                opacity:1,
                y:0
            })

        },rootRef)
    },[])

    return (

        <div
        className={style.ImageRevealPage}
        ref={rootRef}>

            <h1
            className={`textContainer ${style.textContainer}`}
            >
                IMAGE TRANSITION
            </h1>
            <div className={`imageContainer ${style.imageContainer}`}>

                <Image
                className="image"
                src={asset}
                alt=""
                fill
                style={{objectFit:"contain"}}
                />

            </div>
            
        </div>
        
    );
}
 
export default ImageReveal;