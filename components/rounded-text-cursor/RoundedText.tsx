"use client"
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import style from "@/sass/components/rounded-text-cursor/RoundedText.module.scss"

const RoundedText = () => {

    const rootRef = useRef<HTMLDivElement|null>(null)
    useLayoutEffect(()=>{
        const context = gsap.context(()=>{

            gsap.to(".cursorText",{ border:"1px solid white" })

        },[rootRef])
        return ()=>{
            context.revert()
        }
    },[])

    return (
        <div className={style.Container}>
            <h1>
                <span>GSAP Rounded Text</span><br/>
                Cursor Animation
            </h1>
            <div className={style.cursor}>
                <div className={style.cursorInner}>
                    <div className={`${style.cursorText} cursorText`}>
                        GSAP-Rounded-Text-Cursor-Animation
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default RoundedText;