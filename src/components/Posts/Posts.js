import "./Posts.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Arrow from "../../assets/icons/caret-forward-outline.svg";


function Posts({ addressCallBack }) {
    const [location, setLocation] = useState([]);


    useEffect(() => {
        axios.get("http://localhost:8080/location")
            .then((response) => {
                setLocation(response.data);
            })
    }, [])

    const postLocation = (locations) => {
        //Convert address to long and 

        const address = locations.address.split(" ");
        axios.get(`https://api.geoapify.com/v1/geocode/search?text=${address[0]}%20${address[1]}%20${address[2]}%20${locations.city}%2C%20Canada&apiKey=ca75c7ed0b55440c898fab68a7e5739e`)
            .then((response) => {
                //Pass object of long and lat back up
                const addressObj = {
                    lng: response.data.features[0].geometry.coordinates[0],
                    lat: response.data.features[0].geometry.coordinates[1],
                    zoom: 16
                }

                addressCallBack(addressObj);
            })
    }

    return (
        <div className="posts">
            <div className="posts__header">
                <h2 className="posts__header-title">Posts:</h2>
                <div className="posts__header__button">
                    <button className="posts__header__button-link">+ Add Location</button>
                </div>
            </div>

            <div className="posts__location">
                {location.map((posts) => {
                    return (
                        <div onClick={() => { postLocation(posts) }} className="posts__location-post" key={posts.id}>
                            <div className="posts__location-post__details">
                                <h3 className="posts__location-post__details-title">{posts.location_name}</h3>
                                <h3 className="posts__location-post__details-title">{posts.address}</h3>
                                <h3 className="posts__location-post__details-title">{posts.city}</h3>
                            </div>
                            <div className="posts__location-post__level">
                                <Link className="posts__location-post__level-link"><img alt="arrow icon" src={Arrow}/></Link>
                                <h3 className="posts__location-post__level-level">{posts.level}</h3>
                            </div>
                        </div>);
                })}
            </div>
        </div>
    )
}

export default Posts