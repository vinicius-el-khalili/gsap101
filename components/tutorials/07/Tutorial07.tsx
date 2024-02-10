import Image from 'next/image';
import style from './Tutorial07.module.scss'
import { FaArrowRight } from 'react-icons/fa';

const Tutorial07 = () => {
    return (
        <div className={style.Page}>
            <div className={style.header}>
                <p>07</p>
                <p>Hero Page</p>
            </div>
            <div className={style.container}>
                <div className={style.HeroContainer}>
                    <div className={style.layer1}>
                        <div className={style.stripes}>
                            <div className={`stripe1 ${style.stripe}`}/>
                            <div className={`stripe2 ${style.stripe}`}/>
                            <div className={`stripe3 ${style.stripe}`}/>
                        </div>
                    </div>
                    <div className={style.layer2}>
                        <div className={style.sideBar}>
                            <div className={style.sideButton}>lorem</div>
                            <div className={style.sideButton}>epsum</div>
                            <div className={style.sideButton}>dolores</div>
                        </div>
                        <div className={style.imgContainer}>
                            <div className={style.img} style={{position:"relative"}}>
                                <div className={style.curtain}/>
                                <Image src={"/naturalAesthetics02.webp"} alt='' style={{objectFit:"cover"}} fill/>
                            </div>
                        </div>
                        <div className={style.content}>                               
                            <div className={style.centerContent}>
                                <div className={style.topCenterContent}>
                                    <div className={style.title}>
                                        <p>
                                            <span>lorem</span>ipson
                                        </p>
                                    </div>
                                    <div className={style.number}>07</div>
                                </div>
                                <div className={style.buttonContainer}>
                                    <div className={style.button}>Discover<FaArrowRight/> </div>
                                </div>
                            </div>
                            <div className={style.leftContent}>
                                <div>{`sit amet consectetur.`.toUpperCase()}</div>
                                <div>{`Lorem ipsum dolor`.toUpperCase()}</div>
                            </div>
                        </div>
                        <div className={style.rightBar}>
                            <div className={style.wrap}>
                                <p>Lorem</p>
                                <div className={style.bar}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
 
export default Tutorial07;