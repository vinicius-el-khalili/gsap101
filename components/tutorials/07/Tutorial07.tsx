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

       },[RootRef]) 
       return ()=>{context.revert()}
    },[])

    return (
        <div className={style.Page}>
            <div className={style.header}>
                <p>07</p>
                <p>Hero Page</p>
            </div>
            <div className={style.container}>
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
                            <div className={style.sideButton}>lorem</div>
                            <div className={style.sideButton}>epsum</div>
                            <div className={style.sideButton}>dolores</div>
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
                                    <div className={style.number}>07</div>
                                </div>
                                <div className={style.buttonContainer}>
                                    <div className={style.button}>Discover<FaArrowRight/> </div>
                                </div>
                            </div>
                            <div className={style.leftContent}>
                                <div>{`sit amet consectetur.`.toUpperCase()}</div>
                                <div>{`Lorem ipsum dolor`.toUpperCase()}</div>
                            </div>
                        </div>
                        <div className={style.rightBar}>
                            <div className={style.wrap}>
                                <p>Lorem</p>
                                <div className={style.bar}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
 
export default Tutorial07;