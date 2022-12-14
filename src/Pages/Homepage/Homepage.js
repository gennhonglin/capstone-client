import "./Homepage.scss";
import Header from "../../components/Header/Header";
import jwt_decode from "jwt-decode";

function Homepage() {
        const token = sessionStorage.getItem("token");
        let image = sessionStorage.getItem("image");
        let display;
        let username;
        if(token === "guest" || token === null) {
            username = "Guest";
            image = true;
        } else {
            display = jwt_decode(token);
            username = display.data.email;
        }


    return(
        <div>
            <h1>Welcome {username}</h1>
            <Header image = {image}/>
        </div>
    )
}


export default Homepage