import style from "@/sass/pages/Tutorial01.module.scss"
import LogoItem from "@/components/Tutorial01/LogoItem";
import ScopedSelectors from "@/components/Tutorial01/ScopedSelectors";
import ReusableComponents from "@/components/Tutorial01/ReusableComponents";
import ReRenderable from "@/components/Tutorial01/ReRenderable";
import Timelines from "@/components/Tutorial01/Timelines";

const Tutorial01 = () => {
    return (
        <>
        
        <ReRenderable>
            <LogoItem/>
            <ScopedSelectors/>
            <ReusableComponents/>
            <Timelines/>

        </ReRenderable>

        </>
    );
}
 
export default Tutorial01;