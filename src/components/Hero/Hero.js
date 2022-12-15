import "./Hero.scss";
import HeroGif from "../../assets/images/Haikyuu.gif";

function Hero() {
    return(
        <div className="hero">
            <img className="hero-gif" alt="Hero-gif" src={HeroGif}/>
            <h1 className="hero__title">Welcome to GHLVolley</h1>
        </div>
    )
}

export default Hero;