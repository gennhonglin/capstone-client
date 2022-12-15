import Header from "../../components/Header/Header";
import "./Location.scss";
import Maps from "../../components/Maps/Maps";
import Posts from "../../components/Posts/Posts";
import { useState } from "react";
import DisplayUser from "../../components/DisplayUser/DisplayUser";


function Location() {
    const token = sessionStorage.getItem("token");
    let image = sessionStorage.getItem("image");
    if(image === null) {
        image = true;
    }

    const initialState = {
        lng: -123.116226,
        lat: 49.246292,
        zoom: 10,
    };

    const [location, setLocation] = useState(initialState);

    const handleCallBack = (childData) => {
        setLocation(childData);
    }

    return (
        <div className="location">
            <DisplayUser token = {token} />
            <div className="location__maps">
                <Maps location={location} />
            </div>
            <div className="location__posts">
                <Posts addressCallBack = {handleCallBack} />
            </div>
            <Header image = {image}/>
        </div>
    )
}

export default Location