import style from "@/sass/pages/Tutorial01.module.scss"
import LogoItem from "@/components/Tutorial01/LogoItem";
import ScopedSelectors from "@/components/Tutorial01/ScopedSelectors";
import ReusableComponents from "@/components/Tutorial01/ReusableComponents";

const Tutorial01 = () => {
    return (
        <>
        
        <LogoItem/>
        <ScopedSelectors/>
        <ReusableComponents/>

        </>
    );
}
 
export default Tutorial01;