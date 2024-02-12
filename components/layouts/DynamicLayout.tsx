"use client"
import style from "@/sass/layout.module.scss"
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
const DynamicLayout = () => {

    const [n,setN] = useState<number>(1)
    const [current,setCurrent] = useState<string>("")
    const setNumber = (number:number) => {
        setCurrent(number.toString().padStart(2, '0'))
        setN(number)
    }

    useEffect(()=>{
        setCurrent(window.location.href.slice(-2))
    },[])

    return (

    <div className={style.header}>

        <div>
            {current}
        </div>

        <MyLink number={2} setN={setNumber}/>
        <MyLink number={3} setN={setNumber}/>
        <MyLink number={4} setN={setNumber}/>
        <MyLink number={5} setN={setNumber}/>
        <MyLink number={6} setN={setNumber}/>
        <MyLink number={7} setN={setNumber}/>
        <MyLink number={8} setN={setNumber}/>

        <div>About</div>
        
    </div>
    
    );
}
 
export default DynamicLayout;

const MyLink = ({number,setN}:{
    number:number,
    setN: (number:number)=>void
}) => {
 
    return (
    <Link href={`/tutorials/${number.toString().padStart(2, '0')}`} onClick={()=>setN(number)}>
        {`${number.toString().padStart(2, '0')}`}
    </Link>
    )
}