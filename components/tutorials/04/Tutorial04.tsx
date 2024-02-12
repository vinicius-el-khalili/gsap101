"use client"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import style from "./Tutorial04.module.scss"
import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Power3 } from "gsap";

const Tutorial04 = () => {

    const n = 3
    const [slide,setSlide] = useState<number>(1)

    const handleRightSlide = () => {
        if (slide==n){ return }

        gsap.to(`.img0${slide}`,{opacity:0,x:-200,transform:"scale(1.1)"})
        gsap.to(`.img0${slide+1}`,{opacity:1})
        gsap.to(`.img0${slide}`,{x:0,transform:"scale(1)",duration:0,delay:1})
        
        gsap.to(`.subtextContainer${slide}`,{opacity:0})
        gsap.to(`.subtextContainer${slide+1}`,{opacity:1})

        gsap.fromTo(`.subtextContainer${slide+1} > .text`,{x:-20,opacity:0},{x:0,opacity:1,duration:.5})
        gsap.fromTo(`.subtextContainer${slide+1} > .name`,{y:-50,opacity:0},{y:0,opacity:1,delay:.5})
        gsap.fromTo(`.subtextContainer${slide+1} > .description`,{y:10,opacity:0},{y:0,opacity:1,delay:.8})

        setSlide(prevSlide=>prevSlide+1)
    } 

    const handleLeftSlide = () => {
        if (slide<=1){ return }

        gsap.to(`.img0${slide}`,{opacity:0,x:200,transform:"scale(1.1)"})
        gsap.to(`.img0${slide-1}`,{opacity:1})
        gsap.to(`.img0${slide}`,{x:0,transform:"scale(1)",duration:0,delay:1})

        gsap.to(`.subtextContainer${slide}`,{opacity:0})
        gsap.to(`.subtextContainer${slide-1}`,{opacity:1})

        gsap.fromTo(`.subtextContainer${slide-1} > .text`,{x:-20,opacity:0},{x:0,opacity:1,duration:.5})
        gsap.fromTo(`.subtextContainer${slide-1} > .name`,{y:-50,opacity:0},{y:0,opacity:1,delay:.5})
        gsap.fromTo(`.subtextContainer${slide-1} > .description`,{y:10,opacity:0},{y:0,opacity:1,delay:.8})

        setSlide(prevSlide=>prevSlide-1)
    }

    const RootRef = useRef<HTMLDivElement|null>(null)
    useLayoutEffect(()=>{
        const context = gsap.context(()=>{
            gsap.fromTo(`.img0${slide}`,
                {x:-50,opacity:0},
                {x:0,opacity:1,duration:1.5,ease:Power3.easeInOut}
            )
            gsap.to(".subtextContainer",{opacity:1,duration:0})
            gsap.fromTo(`.subtextContainer${slide} > .text`,{x:-20},{x:0,opacity:1,delay:1.25,duration:1.5})
            gsap.fromTo(`.subtextContainer${slide} > .name`,{y:-50},{y:0,opacity:1,delay:2})
            gsap.fromTo(`.subtextContainer${slide} > .description`,{y:10},{y:0,opacity:1,delay:2.5})
        },[RootRef])
    },[])

    return (
    <div className={style.sliderContainer} ref={RootRef}>

        <div className={style.sliderButton} onClick={handleLeftSlide}>
            <FaArrowLeft/>
        </div>

        <div className={style.slide}>
            <div className={style.imgContainer}>
                <Image className={`img01 ${style.img}`} src={`/naturalAesthetics01.webp`} alt="" fill style={{objectFit:"contain"}}/>
                <Image className={`img02 ${style.img}`} src={`/naturalAesthetics02.webp`} alt="" fill style={{objectFit:"contain"}}/>
                <Image className={`img03 ${style.img}`} src={`/naturalAesthetics03.webp`} alt="" fill style={{objectFit:"contain"}}/>
            </div>
            <div className={style.textContainer}>
                <div className={`subtextContainer1 ${style.subtextContainer}`}>
                    <div className={`text ${style.text}`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
                    <div className={`name ${style.name}`}>John Doe</div>
                    <div className={`description ${style.description}`}>Professional Template</div>
                </div>
                <div className={`subtextContainer2 ${style.subtextContainer}`}>
                    <div className={`text ${style.text}`}>Amet consectetur adipisicing elit.</div>
                    <div className={`name ${style.name}`}>Lady Gaga</div>
                    <div className={`description ${style.description}`}>Singer</div>
                </div>
                <div className={`subtextContainer3 ${style.subtextContainer}`}>
                    <div className={`text ${style.text}`}>Adipisicing elit Lorem ipsum dolor sit, amet consectetur.</div>
                    <div className={`name ${style.name}`}>Snoopy</div>
                    <div className={`description ${style.description}`}>Doggy Dog</div>
                </div>
            </div>
        </div>

        <div className={style.sliderButton} onClick={handleRightSlide}>
            <FaArrowRight/>
        </div>

    </div>
    );
}
 
export default Tutorial04;