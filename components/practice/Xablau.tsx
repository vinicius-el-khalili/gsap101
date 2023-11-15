"use client"

import img1 from "@/components/svgs/111.png"
import img2 from "@/components/svgs/113.png"
import img3 from "@/components/svgs/Vector.png"
import Image from "next/image";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

const Xablau = () => {

    const rootRef = useRef<HTMLDivElement|null>(null)
    useLayoutEffect(()=>{
        gsap.context(()=>{

            gsap.fromTo(".rotate1",{
                rotate: 90,
                duration:1.5,
                ease: "bounce"
            },{
                rotation:"+=45",
                repeat:-1,
                duration:.5,
                yoyo: true                
            })

            gsap.fromTo(".rotate2",{
                rotate: -90,
                duration:1.5,
                ease: "bounce"
            },{
                rotation:"+=45",
                repeat:-1,
                duration:1.5,
                yoyo: true                
            })

        },rootRef)
    },[])

    return (
        <>
        
        <h1>Xablau</h1>
        <div
            ref={rootRef}
            style={{

                backgroundColor:"transparent",
                border:"1px solid white",
                height:"200px",
                width:"200px",
                borderRadius:"100%"

            }}
        >
            <div
            className="rotate1"
            style={{position:"absolute"}}
            >
                <Image src={img1} alt="" style={{objectFit:"contain"}}/>
            </div>
            
            <div
            className="rotate2"
            style={{position:"absolute"}}
            >
                <Image src={img2} alt="" style={{objectFit:"contain"}}/>
            </div>
        </div>
        
        </>
    );
}
 
export default Xablau;