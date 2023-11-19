"use client"

import Image from "next/image";

const Alphabet01 = ({text,size}:{
    text:string,
    size:number
}) => {


    return (
        <div
        style={{
            display:"flex",
            flexWrap:"wrap",
            width:"100%"
        }}>
            {
            text.split("").map((letter,index)=>{
                if (letter==" "){
                return(
                    <div
                    key={`sp${index}`}
                    style={{
                        height:size,
                        width:size
                    }}
                    />
                )
                }
                return (
                <Image
                src={`/paper-font/${letter}.png`}
                width={size}
                height={size}
                style={{objectFit:"contain"}}
                alt=""
                key={`${letter}${index}`}
                />
                )
            })
            }
        </div>
    );
}
 
export default Alphabet01;
