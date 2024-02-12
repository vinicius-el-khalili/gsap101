"use client"

import { useLayoutEffect, useRef } from "react";
import style from "./Tutorial08.module.scss"
import gsap from "gsap";


const Tutorial08 = () => {

    const RootRef = useRef<HTMLDivElement|null>(null)

    useLayoutEffect(()=>{
        const context = gsap.context(()=>{

            gsap.to(".text",{fontWeight:900,fontStyle:"regular",duration:3})

        },[RootRef])
    },[])

    return (
        <div className={style.Page}>
                <div className={style.HeroContainer} ref={RootRef}>

                    <div style={{fontWeight:100}}>Hello</div>

                </div>
        </div>

        
    );
}
 
export default Tutorial08;