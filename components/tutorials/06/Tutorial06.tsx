"use client"

import { useLayoutEffect, useRef } from "react";
import style from "./Tutorial06.module.scss"
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import gsap from "gsap";
import { Power3 } from "gsap";

const Tutorial06 = () => {

    const RootRef = useRef<HTMLDivElement|null>(null)

    useLayoutEffect(()=>{
        const context = gsap.context(()=>{

            gsap.fromTo(".curtain",{width:"0"},{width:"100%",ease:Power3.easeIn})
            gsap.fromTo(".curtain",{x:0},{x:"100%",delay:1,ease:Power3.easeInOut})
            gsap.to(".img",{opacity:1,delay:1,duration:0})
            gsap.fromTo(".img",{transform:"scale(1.2)"},{transform:"scale(1)",opacity:1,delay:1})
            gsap.fromTo(".p1",{y:80},{opacity:1,y:0,ease:Power3.easeOut,duration:1.5,delay:1})
            gsap.fromTo(".p2",{y:"-3.5rem"},{y:0,opacity:1,delay:2})
            gsap.to(".p3",{opacity:1,duration:0.3,delay:2.6})
            gsap.fromTo(".p4",{x:-50},{x:0,opacity:1,delay:2.6,ease:Power3.easeOut})
            gsap.fromTo(".sideMessage",{},{opacity:1,delay:3})
            gsap.fromTo(".button",{x:-50},{x:0,opacity:1,delay:3.5})

        },[RootRef])
        return ()=>{context.revert()}
    },[])

    return (
        <>
        <div className={style.Page}>
            <div className={style.header}>
                <p>06</p>
                <p>Hero Page</p>
            </div>
            <div className={style.container}>
                <div className={style.HeroContainer} ref={RootRef}>

                    <div className={style.frontContainer}>
                        <div className={style.textContainer}>
                            <p className="p1">IPSON&<span>IPSUM</span></p>
                            <p className="p2">Lorems from</p>
                            <p className="p3">THE</p>
                            <p className="p4"><span>H</span>eart</p>
                        </div>
                        <div className={`button ${style.button}`}>
                            Visit
                            <span><FaArrowRight/></span>
                        </div>
                    </div>

                    <div className={style.backContainer}>

                        <div className={style.imgContainer}>
                            <div className={`curtain ${style.curtain}`}/>
                            <Image className={`img ${style.img}`} src={"/naturalAesthetics03.webp"} alt="" fill style={{objectFit:"cover"}}/>
                        </div>
                        <div className={`sideMessage ${style.sideMessage}`}>
                            <p>et accusantium</p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
        </>
    );
}
 
export default Tutorial06;