import "./Homepage.scss";
import Header from "../../components/Header/Header";
import DisplayUser from "../../components/DisplayUser/DisplayUser";
import Hero from "../../components/Hero/Hero";

function Homepage() {
        const token = sessionStorage.getItem("token");
        let image = sessionStorage.getItem("image");

        if(token === "guest" || token === null) {
            image = true;
        } else {
            image = false;
        }


    return(
        <div className="homepage">
            <DisplayUser token = {token} />
            <Hero />
            <Header image = {image}/>
        </div>
    )
}


export default Homepage