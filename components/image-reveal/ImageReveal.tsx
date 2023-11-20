"use client"
import style from "./ImageReveal.module.scss"
import Image from "next/image";
const ImageReveal = () => {
    return (
        <div className={style.ImageRevealPage}>
            <h1>IMAGE TRANSITION</h1>
            <div className={style.imageContainer}>
                <Image
                src={"/assets/mountains.jpg"}
                alt=""
                fill
                style={{objectFit:"cover"}}
                />
            </div>
            
        </div>
    );
}
 
export default ImageReveal;