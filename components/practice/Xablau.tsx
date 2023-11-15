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

        gsap.context(()=>{},rootRef)

    },[])

    return (
        <>
        
        <h1>Xablau</h1>
        <div
            ref={rootRef}
            style={{
                backgroundColor:"#757575",
                border:"1px solid white",
                height:"200px",
                width:"200px",
                borderRadius:"100%"

            }}
        >
            <Image src={img1} alt="" style={{objectFit:"contain",position:"absolute"}}/>
            <Image src={img2} alt="" style={{objectFit:"contain",position:"absolute"}}/>
            <Image src={img3} alt="" style={{objectFit:"contain",position:"absolute"}}/>
        </div>
        
        </>
    );
}
 
export default Xablau;