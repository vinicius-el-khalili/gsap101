import style from "@/sass/pages/Tutorial01.module.scss"
import LogoItem from "@/components/Tutorial01/LogoItem";
import ScopedSelectors from "@/components/Tutorial01/ScopedSelectors";
import ReusableComponents from "@/components/Tutorial01/ReusableComponents";
import ReRenderable from "@/components/Tutorial01/ReRenderable";

const Tutorial01 = () => {
    return (
        <>
        
        <ReRenderable>
            <LogoItem/>
            <ScopedSelectors/>
            <ReusableComponents/>
        </ReRenderable>
        
        </>
    );
}
 
export default Tutorial01;