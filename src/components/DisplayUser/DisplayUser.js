import { Link } from "react-router-dom";
import "./DisplayUser.scss";
import jwt_decode from "jwt-decode";


function DisplayUser({token}) {
    let display;
    let username;
    if(token === "guest" || token === null) {
        username = "Guest";
    } else {
        display = jwt_decode(token);
        username = display.data.name;
    }


    const clearStorage = () => {
        sessionStorage.clear();
    }

    return(
        <div className="display-user">
            <div className="display-user__container">
                <p className="display-user__container-player">Welcome {username}</p>
                <Link onClick={() => {clearStorage()}} className="display-user__container-logout" to={'/login'}>Logout</Link>
            </div>
        </div>
    )
}

export default DisplayUser