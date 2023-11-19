import Alphabet01 from "@/components/Alphabet/Alphabet01";
import Alphabet01Generator from "@/components/Alphabet/Alphabet01Generator";
import wallpaper from "@/public/wallpaper.jpg"

const Alphabet01Page = () => {
    return (
        <div style={{
            position:"relative",
            background: `url(${wallpaper.src})`,
            width:"100vw",
            height:"100vh",
        }}>
        
        <Alphabet01 text="its about" size={20}/>
        <Alphabet01 text="art" size={20}/>
        <Alphabet01 text="its about" size={20}/>
        <Alphabet01 text="consistency" size={20}/>
        <Alphabet01 text="its about" size={20}/>
        <Alphabet01 text="love" size={20}/>
        <Alphabet01 text="vinicius el khalili" size={20}/>

        <Alphabet01Generator/>
        
        </div>
    );
}
 
export default Alphabet01Page;