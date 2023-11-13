"use client"

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const Timelines = () => {

    const rootRef = useRef<HTMLDivElement|null>(null)
    const timelineRef = useRef<gsap.core.Timeline|null>(null)

    useLayoutEffect(()=>{

        const context = gsap.context(()=>{
            timelineRef.current = gsap.timeline()
            .to(".rotate",{rotate:"90"})
            .to(".moveX",{x:100, rotate:-90})
            .to(".moveY",{y:-100})
            .to(".moveX2",{x:200, rotate:-45})
            .to(".moveY2",{y:-200, rotate:0})
        }, rootRef)

    },[])

    return (
        <>
        
        <h1>Timelines</h1>
        <div
        ref={rootRef}
        >
            <div
            className="rotate"
            style={{
                width:"100px",
                height:"100px",
                border:"2px solid white",
                borderRadius:"12px"
            }}
            /> 

            <div
            className="moveX moveY"
            style={{
                width:"100px",
                height:"100px",
                border:"2px solid white",
                borderRadius:"12px"
            }}
            />

            <div
            className="moveX moveY moveX2 moveY2"
            style={{
                width:"100px",
                height:"100px",
                border:"2px solid white",
                borderRadius:"12px"
            }}
            />
            

        </div>

        </>
    );
}
 
export default Timelines;