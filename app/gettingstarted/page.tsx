import style from "@/sass/pages/GettingStarted.module.scss"
import ReRenderable from "@/components/Tutorial01/ReRenderable";
import CreatingAnAnimation from "@/components/Tutorial02/CreatingAnAnimation";
const GettingStartedPage = () => {
    return (
        <div className={style.GettingStartedPage}>
            <ReRenderable>
                <CreatingAnAnimation/>
            </ReRenderable>
        </div>
    );
}
 
export default GettingStartedPage;