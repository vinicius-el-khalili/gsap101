import style from "@/sass/pages/Tutorial02.module.scss"
import ReRenderable from "@/components/Tutorial01/ReRenderable";
import Tweens from "@/components/Tutorial02/Tweens";
const GettingStartedPage = () => {
    return (
        <div className={style.GettingStartedPage}>
            <ReRenderable>
                <Tweens/>  
            </ReRenderable>
        </div>
    );
}
 
export default GettingStartedPage;