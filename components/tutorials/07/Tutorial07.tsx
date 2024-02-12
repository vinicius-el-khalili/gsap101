"use client"

import Image from 'next/image';
import style from './Tutorial07.module.scss'
import { FaArrowRight } from 'react-icons/fa';
import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';
import { Power3 } from 'gsap';

const Tutorial07 = () => {

    const RootRef = useRef<HTMLDivElement|null>(null)

    useLayoutEffect(()=>{
       const context = gsap.context(()=>{

            gsap.fromTo(".stripe1",{height:0},{height:"100%",ease:Power3.easeInOut,delay:.0,duration:2})
            gsap.fromTo(".stripe2",{height:0},{height:"100%",ease:Power3.easeInOut,delay:.3,duration:2})
            gsap.fromTo(".stripe3",{height:0},{height:"100%",ease:Power3.easeInOut,delay:.4,duration:2})
            gsap.fromTo(".curtain",{width:0,opacity:1},{width:"100%",delay:1.2})
            gsap.fromTo(".curtain",{},{x:"105%",delay:1.8})
            gsap.to(".img",{opacity:1,duration:0,delay:1.8})
            gsap.fromTo(".img",{transform:"scale(1.1)"},{transform:"scale(1)",delay:1.8})
            gsap.to(".titleBlocker",{opacity:1,delay:2.5, duration:.1})
            gsap.to(".title > p",{opacity:1,delay:2.6, duration:0})
            gsap.to(".titleBlocker",{x:"18vw",width:0,delay:2.6,duration:.4,ease:Power3.easeInOut})
            gsap.fromTo(".number",{y:-20},{y:0,opacity:1,delay:3})
            gsap.fromTo(".button",{y:20},{y:0,opacity:1,delay:3})
            gsap.to(".leftContentBlocker",{height:"20rem",delay:3,opacity:1,duration:.1})
            gsap.to(".leftContentText",{delay:3,opacity:1,duration:0})
            gsap.to(".leftContentBlocker",{height:0,delay:3,duration:.4,ease:Power3.easeInOut })
            gsap.fromTo(".sideButton1",{x:-15},{delay:3.8,x:0,opacity:1})
            gsap.fromTo(".sideButton2",{x:-15},{delay:4.0,x:0,opacity:1})
            gsap.fromTo(".sideButton3",{x:-15},{delay:4.2,x:0,opacity:1})
            gsap.fromTo(".rightBar",{x:15},{delay:4.5,x:0,opacity:1})

       },[RootRef]) 
       return ()=>{context.revert()}
    },[])

    return (
        <div className={style.Page}>
                <div className={style.HeroContainer} ref={RootRef}>
                    <div className={style.layer1}>
                        <div className={style.stripes}>
                            <div className={`stripe1 ${style.stripe}`}/>
                            <div className={`stripe2 ${style.stripe}`}/>
                            <div className={`stripe3 ${style.stripe}`}/>
                        </div>
                    </div>
                    <div className={style.layer2}>
                        <div className={style.sideBar}>
                            <div className={`sideButton1 ${style.sideButton}`}>lorem</div>
                            <div className={`sideButton2 ${style.sideButton}`}>epsum</div>
                            <div className={`sideButton3 ${style.sideButton}`}>dolores</div>
                        </div>
                        <div className={style.imgContainer}>
                            <div className={style.img} style={{position:"relative"}}>
                                <div className={`curtain ${style.curtain}`}/>
                                <Image className={`img ${style.img}`} src={"/naturalAesthetics04.webp"} alt='' style={{objectFit:"cover"}} fill/>
                            </div>
                        </div>
                        <div className={style.content}>                               
                            <div className={style.centerContent}>
                                <div className={style.topCenterContent}>
                                    <div className={`title ${style.title}`}>
                                        <p><span>lorem</span>ipson</p>
                                        <div className={`titleBlocker ${style.titleBlocker}`}/>
                                    </div>
                                    <div className={`number ${style.number}`}>07</div>
                                </div>
                                <div className={style.buttonContainer}>
                                    <div className={`button ${style.button}`}>Discover<FaArrowRight/> </div>
                                </div>
                            </div>
                            <div className={style.leftContent}>
                                <div className={`leftContentBlocker ${style.leftContentBlocker}`}/>
                                <div className={`leftContentText ${style.leftContentText}`}>{`sit amet consectetur.`.toUpperCase()}</div>
                                <div className={`leftContentText ${style.leftContentText}`}>{`Lorem ipsum dolor`.toUpperCase()}</div>
                            </div>
                        </div>
                        <div className={`rightBar ${style.rightBar}`}>
                            <div className={style.wrap}>
                                <p>Lorem</p>
                                <div className={style.bar}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}
 
export default Tutorial07;