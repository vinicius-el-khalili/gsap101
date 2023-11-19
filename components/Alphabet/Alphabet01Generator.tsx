"use client"

import { useState } from "react";
import Alphabet01 from "./Alphabet01";
import { SubmitHandler, useForm } from "react-hook-form"

type formType = {
    userTextInput: string,
    userSizeInput: number
}

const Alphabet01Generator = () => {

    const [text,setText] = useState<string>("")
    const [size,setSize] = useState<number>(18)
    const { register, handleSubmit } = useForm<formType>()

    const onSubmit: SubmitHandler<formType> = ({userTextInput, userSizeInput}:{
        userTextInput:string,
        userSizeInput: number
    }) => {

        setText(userTextInput)
        setSize(userSizeInput)
        console.log(userTextInput,userSizeInput)

    }

    return (
        <>
        
        <form
        onSubmit={handleSubmit(onSubmit)}
        >
            <h1>Form Header</h1>
            <label>
                <p>Text</p>
                <input
                {...register("userTextInput")}
                type="userTextInput"
                name="userTextInput"
                autoComplete="off"
                placeholder="input"
                />
            </label>
            <label>
                <p>Size</p>
                <input
                {...register("userSizeInput")}
                type="userSizeInput"
                name="userSizeInput"
                autoComplete="off"
                placeholder="input"
                />
            </label>
            <button
            type="submit"
            >
                sub
            </button>
        </form>
        <h1>{text}</h1>
        <Alphabet01 text={text} size={size}/>
        
        </>
    );
}
 
export default Alphabet01Generator;