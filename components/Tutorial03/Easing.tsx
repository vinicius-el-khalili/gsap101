"use client"
import gsap from "gsap";
import { useRef, useLayoutEffect } from "react";
import us from "@/sass/utilityStyles/utilityStyles.module.scss"

const Easing = () => {

    const rootRef = useRef<HTMLDivElement|null>(null)

    useLayoutEffect(()=>{
        const context = gsap.context(()=>{

            gsap.to(".default",{x:100, repeat:-1, yoyo: true})

            gsap.to(".power1in",{x:100, repeat:-1, yoyo:true, ease:"power1.in"})
            gsap.to(".power2in",{x:100, repeat:-1, yoyo:true, ease:"power2.in"})
            gsap.to(".power3in",{x:100, repeat:-1, yoyo:true, ease:"power3.in"})
            gsap.to(".power4in",{x:100, repeat:-1, yoyo:true, ease:"power4.in"})

            gsap.to(".power1out",{x:100, repeat:-1, yoyo:true, ease:"power1.out"})
            gsap.to(".power2out",{x:100, repeat:-1, yoyo:true, ease:"power2.out"})
            gsap.to(".power3out",{x:100, repeat:-1, yoyo:true, ease:"power3.out"})
            gsap.to(".power4out",{x:100, repeat:-1, yoyo:true, ease:"power4.out"})

            gsap.to(".power1inOut",{x:100, repeat:-1, yoyo:true, ease:"power1.inOut"})
            gsap.to(".power2inOut",{x:100, repeat:-1, yoyo:true, ease:"power2.inOut"})
            gsap.to(".power3inOut",{x:100, repeat:-1, yoyo:true, ease:"power3.inOut"})
            gsap.to(".power4inOut",{x:100, repeat:-1, yoyo:true, ease:"power4.inOut"})


        },rootRef)
        return ()=>{context.revert()}
    },[])

    return (
        <div ref={rootRef}>
          <h1>Easing</h1>

          <p>PowerX.in</p>
          <div className={`${us.box} default`}/>
          <div className={`${us.box} power1in`}/>
          <div className={`${us.box} power2in`}/>
          <div className={`${us.box} power3in`}/>
          <div className={`${us.box} power4in`}/>

          <p>PowerX.out</p>
          <div className={`${us.box} default`}/>
          <div className={`${us.box} power1out`}/>
          <div className={`${us.box} power2out`}/>
          <div className={`${us.box} power3out`}/>
          <div className={`${us.box} power4out`}/>

          <p>PowerX.inOut</p>
          <div className={`${us.box} default`}/>
          <div className={`${us.box} power1inOut`}/>
          <div className={`${us.box} power2inOut`}/>
          <div className={`${us.box} power3inOut`}/>
          <div className={`${us.box} power4inOut`}/>


        </div>
    );
}
 
export default Easing;