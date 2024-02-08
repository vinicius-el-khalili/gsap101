"use client"

import { useEffect, useLayoutEffect, useRef, useState, MouseEvent} from "react";
import style from "./Tutorial02.module.scss"
import gsap from "gsap";
import { Power3 } from "gsap";

const Tutorial02 = () => {

    const rootRef = useRef<HTMLDivElement|null>(null)
    const circleYellow = useRef(null)
    const circleRed = useRef(null)
    const circleBlue = useRef<HTMLDivElement|null>(null)

    const [expand,setExpand] = useState<boolean|string>(false)
    const handleExpand = (e:MouseEvent,classname:string) => { 
        e.stopPropagation()
        if (expand==classname){
            shrink(classname)
            setExpand(false)
            return
        }
        shrinkAll()
        gsap.to(classname,{width:200,height:200,ease:Power3.easeOut,duration:.5})
        setExpand(classname)
    }
    const shrink = (classname:string) => {
        gsap.to(classname,{width:"5rem",height:"5rem",ease:Power3.easeOut,duration:.5})
        setExpand(false)
    }
    const shrinkAll = () => {
        [".cy",".cr",".cb"].map(classname=>{shrink(classname)})
    }
    useLayoutEffect(()=>{
        const context = gsap.context(()=>{

            gsap.from(".cy",{x:40, ease: Power3.easeOut,opacity:0,duration: 2, delay: .0})
            gsap.from(".cr",{x:40, ease: Power3.easeOut,opacity:0,duration: 2, delay: .5})
            gsap.from(".cb",{x:40, ease: Power3.easeOut,opacity:0,duration: 2, delay: 1.})

        },rootRef)
    },[])

    return (
        <>
        <div ref={rootRef} className={style.Page} onClick={shrinkAll}>
            <div className={style.header}>
                <p>Tutorial 02</p>
                <p>Mouse events</p>
            </div>
            <div className={style.container}>

                <div 
                ref={circleYellow} 
                className={`cy ${style.circle} ${style.yellow}`}
                onClick={e=>handleExpand(e,".cy")}
                />

                <div 
                ref={circleRed} 
                className={`cr ${style.circle} ${style.red}`}
                onClick={e=>handleExpand(e,".cr")}
                />

                <div 
                ref={circleBlue} 
                className={`cb ${style.circle} ${style.blue}`}
                onClick={e=>handleExpand(e,".cb")}
                />

            </div>
        </div>
        </>
    );
}
 
export default Tutorial02;