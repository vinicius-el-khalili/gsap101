import style from "@/sass/pages/RoudedTextPage.module.scss"
import RoundedText from "@/components/rounded-text-cursor/RoundedText";
const RoundedTextPage = () => {
    return (
        <div className={style.Page}>
            <RoundedText/>
        </div>
    );
}
 
export default RoundedTextPage;