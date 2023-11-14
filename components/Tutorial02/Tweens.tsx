"use client"

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import us from "@/sass/utilityStyles/utilityStyles.module.scss"

const Tweens = () => {

    const rootRef = useRef<HTMLDivElement|null>(null)

    useLayoutEffect(()=>{
        const context = gsap.context(()=>{
            gsap.to(".boxTo",{x:100})
            gsap.from(".boxFrom",{x:100})
            gsap.fromTo(".boxFromTo",{x:-100},{x:100})
            gsap.set(".boxSet",{x:50})
            gsap.fromTo(".wtf",
            {
                width:0,
                height:0,
                fontSize:0,
                borderRadius:0,
                backgroundColor:"blue",
                duration:1.5,
            },
            {
                width:150,
                height:150,
                fontSize:52,
                borderRadius:"100%",
                backgroundColor:"red",
                rotate: 720,
                duration: 1.5,
                repeat: -1,
                repeatDelay:1,
                yoyo: true,
            })
        },rootRef)
        return ()=>{
            context.revert()
        }
    },[])

    return (
        <>
        <h1>Tweens</h1>
        <div ref={rootRef}>

            <p>{`default`}</p>
            <div className={`${us.box}`}/>
            <p>{`to {x:100}`}</p>
            <div className={`${us.box} boxTo`}/>
            <p>{`from {x:100}`}</p>
            <div className={`${us.box} boxFrom`}/>
            <p>{`fromTo {x:-100} {x:100}`}</p>
            <div className={`${us.box} boxFromTo`}/>
            <p>{`set {x:100}`}</p>
            <div className={`${us.box} boxSet`}/>
            <h1>Let's go</h1>
            <div className="wtf">WTF DUDE</div>
            <h1>crazy</h1>

        </div>
        </>
    );
}
 
export default Tweens;