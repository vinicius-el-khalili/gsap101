"use client"

import { gsap, Power3 } from "gsap"
import { useEffect, useLayoutEffect, useRef } from "react"
import { FaReact } from "react-icons/fa"
import { IconType } from "react-icons"


const LogoItem = () => {

    const boxRef = useRef<HTMLDivElement|null>(null)

    useLayoutEffect(()=>{
        console.log(boxRef)
        if(!boxRef.current){ return }
        gsap.to(boxRef.current,{
            rotation: "+=360"
        })
    })
    
    return (
        <>
        <h1>Direct useRef</h1>
        <div
        ref={boxRef}
        style={{
            backgroundColor:"darkkhaki",
            width:"100px",
            height:"100px",
            display:"flex",
            alignItems:"center",
            justifyContent:"center"
        }}
        />

        </>
    );
}
 
export default LogoItem;