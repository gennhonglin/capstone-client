import DisplayUser from "../../components/DisplayUser/DisplayUser";
import Header from "../../components/Header/Header";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import "./Profile.scss";

function Profile() {
    const token = sessionStorage.getItem("token");
    let image = sessionStorage.getItem("image");

    if(token === "guest" || token === null) {
        image = true;
    } else {
        image = false;
    }


    return(
        <div className="profile">
            <DisplayUser token = {token} />
            <ProfileCard />
            <Header image = {image}/>
        </div>
    )
}

export default Profile