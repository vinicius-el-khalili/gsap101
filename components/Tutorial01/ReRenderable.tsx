"use client"

import { ReactNode, useState } from "react";

const ReRenderable = ({children}:{
    children: ReactNode
})=>{
    const [key,setKey]=useState<number>(0)
    
    return (
        
        <div
        style={{
            width:"100%",
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            overflow:"hidden"
        }}
        key={key}
        >
            <button
            onClick={()=>{setKey(key+1)}}
            style={{
                border:"1px solid white",
                backgroundColor:"darkblue",
                color:"white",
                padding:"1rem",
                fontSize:"1.2rem",
                margin:"1rem",
                borderRadius:"12px",
                fontWeight:"bolder",
                cursor:"pointer"
            }}
            >
                Reset
            </button>
            {children}

        </div>
    );
}
 
export default ReRenderable;