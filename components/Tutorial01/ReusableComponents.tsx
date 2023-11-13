"use client"

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const ReusableComponents = () => {

    const rootRef = useRef<HTMLDivElement|null>(null)
    useLayoutEffect(()=>{
        const context = gsap.context(()=>{
            gsap.to(".rotateRight",{rotation:"+90"})
            gsap.to(".rotateLeft",{rotation:"-90"})
            gsap.to(".moveRight",{x:100})
            gsap.to(".moveLeft",{x:-15})
        },rootRef)
        return ()=>{
            context.revert()
        }
    })
    return (
        <>
        
        <h1>Reusable Components & Multiple Selectors</h1>
        <div
        ref={rootRef}
        style={{
            display:"flex",
            gap:"1rem",
        }}
        >
        
            <Box selector="rotateRight" />
            <Box selector="moveRight" />
            <Box selector="rotateRight moveRight" />
        
        </div>

        </>
    );
}
 
export default ReusableComponents;

// 

const Box = ({selector}:{
    selector:string,
}) => {
    return (
        <>
        <div
        className={selector}
        style={{
            width:"100px",
            height:"100px",
            backgroundColor:"darkorange",
            borderRadius:"12px",
            margin:"10px"
        }}
        />
        
        </>
    )
}