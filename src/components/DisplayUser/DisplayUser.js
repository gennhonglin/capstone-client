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

    function checkUser(username) {
        let log;

        if(username === "Guest") {
            log = <Link onClick={() => {clearStorage()}} className="display-user__container-logout" to={'/login'}>Login</Link>;
            return log;
        } else {
            log = <Link onClick={() => {clearStorage()}} className="display-user__container-logout" to={'/login'}>Logout</Link>;
            return log;
        }
    }


    const clearStorage = () => {
        sessionStorage.clear();
    }

    return(
        <div className="display-user">
            <div className="display-user__container">
                <p className="display-user__container-player">Welcome {username}</p>
                {checkUser(username)}
            </div>
        </div>
    )
}

export default DisplayUser