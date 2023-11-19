"use client"
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import style from "@/sass/components/rounded-text-cursor/RoundedText.module.scss"

const RoundedText = () => {

    const cursorText = "GSAP-Rounded-Text-Cursor-Animation"

    const rootRef = useRef<HTMLDivElement|null>(null)
    useLayoutEffect(()=>{
        const context = gsap.context(()=>{

            for (let i=0;i<cursorText.length;i++){
                let rotation = i*(360/cursorText.length)
                let radius = 100
                let fontSize = 16
                gsap.set(`.cursorLetter${i}`,{
                    border:"1px solid white",
                    x:-fontSize*i + radius*Math.cos(i*2*Math.PI/cursorText.length) + fontSize*cursorText.length/2 - fontSize/2,
                    y: radius*Math.sin(i*2*Math.PI/cursorText.length),
                    rotate: (i*(360/cursorText.length))+90
                })
                gsap.fromTo(".cursorText",{
                    rotate:0
                },{
                    rotate:360,
                    repeat:-1,
                    ease:"none",
                    duration:5
                })
            }

        },rootRef)
        return ()=>{
            context.revert()
        }
    },[])

    return (
        <div className={style.Container} ref={rootRef}>
            <h1>
                <span>GSAP Rounded Text</span><br/>
                Cursor Animation
            </h1>
            <div className={style.cursor}>
                <div className={style.cursorInner}>
                    <div className={`${style.cursorText} cursorText`}>
                        {cursorText.split("").map((letter,index)=>(
                            <div
                            key={`${letter}${index}`}
                            className={`${style.cursorLetter} cursorLetter${index}`}
                            >
                                {letter}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default RoundedText;