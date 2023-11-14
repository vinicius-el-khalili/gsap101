import style from "@/sass/pages/Tutorial02.module.scss"
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