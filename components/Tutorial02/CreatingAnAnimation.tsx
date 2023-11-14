"use client"

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

const CreatingAnAnimation = () => {

    const rootRef = useRef<HTMLDivElement|null>(null)

    useLayoutEffect(()=>{
        const context = gsap.context(()=>{

        },rootRef)
    },[])

    return (
        <>
        <h1>Creating animations</h1>
        <div ref={rootRef}>

        </div>
        
        </>
    );
}
 
export default CreatingAnAnimation;