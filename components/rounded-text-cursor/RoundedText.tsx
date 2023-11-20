"use client"
import gsap from "gsap";
import { useLayoutEffect, useRef, useState } from "react";
import style from "@/sass/components/rounded-text-cursor/RoundedText.module.scss"

const RoundedText = () => {

    const [cursorText,setCursorText] = useState<string>("Rotating Text")
    let radius = 100
    let fontSize = 36
    const rootRef = useRef<HTMLDivElement|null>(null)
    useLayoutEffect(()=>{
        const context = gsap.context(()=>{

            for (let i=0;i<cursorText.length+1;i++){
                let rotation = i*(360/(cursorText.length+1))
                gsap.set(`.cursorLetter${i}`,{
                    color:"white",
                    x:-fontSize*i + radius*Math.cos(i*2*Math.PI/(cursorText.length+1)) + fontSize*cursorText.length/2 - fontSize/2,
                    y: radius*Math.sin(i*2*Math.PI/(cursorText.length+1)),
                    rotate: (i*(360/(cursorText.length+1)))+90
                })
                gsap.fromTo(".cursorText",{
                    display:"none",
                    rotate:0
                },{
                    display:"flex",
                    rotate:-360,
                    repeat:-1,
                    ease:"none",
                    duration:10
                })
            }

        },rootRef)
        return ()=>{
            context.revert()
        }
    },[cursorText])

    console.log(cursorText+"_")

    return (
        <div className={style.Container} ref={rootRef}>
            
            <div className={style.inputField}>
                <h1>
                    write here
                </h1>
                <input
                type="text"
                value={cursorText}
                onChange={(e)=>{setCursorText(`${e.target.value}`)}}
                />
            </div>

            <div className={`${style.cursorText} cursorText`}>
                {(cursorText+"-").split("").map((letter,index)=>(
                    <div
                    key={`${letter}${index}`}
                    className={`${style.cursorLetter} cursorLetter${index}`}
                    >
                        {letter==" "?"-":letter}
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default RoundedText;
