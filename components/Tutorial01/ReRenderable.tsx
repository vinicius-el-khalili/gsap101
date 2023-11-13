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
            alignItems:"center"
        }}
        key={key}
        >
            <button
            onClick={()=>{setKey(key+1)}}
            >
                Reset
            </button>
            {children}

        </div>
    );
}
 
export default ReRenderable;