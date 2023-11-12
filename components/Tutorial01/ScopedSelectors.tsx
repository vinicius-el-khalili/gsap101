"use client"

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap/gsap-core";

const ScopedSelectors = () => {

    const rootRef = useRef<HTMLDivElement|null>(null)
    const rootRef2 = useRef<HTMLDivElement|null>(null)

    useLayoutEffect(()=>{

        let context = gsap.context(()=>{
            gsap.to(".box",{rotation:"+=180"})
            gsap.to(".circle",{rotation:"+=180"})
        }, rootRef)
        let context2 = gsap.context(()=>{
            gsap.to(".box",{rotation:"-=360"})
            gsap.to(".circle",{rotation:"-=360"})
        }, rootRef2)

        return ()=>{
            context.revert()
            context2.revert()
        }

    })

    return (

        <>

        <h1>Context Scoped Selectors</h1>

        <div style={{display:"flex"}}>

            <div
            ref={rootRef}
            style={{display:"flex"}}>
            
                <div
                className="box"
                style={{
                    width:"100px",
                    height:"100px",
                    backgroundColor:"darkblue"
                }}
                />

                <div
                className="circle"
                style={{
                    width:"100px",
                    height:"100px",
                    backgroundColor:"darkred"
                }}
                />

            </div>

            <div
            ref={rootRef2}
            style={{display:"flex"}}>
            
                <div
                className="box"
                style={{
                    width:"100px",
                    height:"100px",
                    backgroundColor:"darkblue"
                }}
                />

                <div
                className="circle"
                style={{
                    width:"100px",
                    height:"100px",
                    backgroundColor:"darkred"
                }}
                />

            </div>
        
        </div>
        </>
    );
}
 
export default ScopedSelectors;