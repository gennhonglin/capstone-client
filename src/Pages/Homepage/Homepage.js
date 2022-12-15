import "./Homepage.scss";
import Header from "../../components/Header/Header";
import DisplayUser from "../../components/DisplayUser/DisplayUser";

function Homepage() {
        const token = sessionStorage.getItem("token");
        let image = sessionStorage.getItem("image");

        if(token === "guest" || token === null) {
            image = true;
        }


    return(
        <div>
            <DisplayUser token = {token} />
            
            <Header image = {image}/>
        </div>
    )
}


export default Homepage