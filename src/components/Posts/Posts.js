import "./Posts.scss";
import axios from "axios";
import { useEffect, useState } from "react";


function Posts() {
    const [location, setLocation] = useState([]);


    useEffect(() => {
        axios.get("http://localhost:8080/location")
        .then((response) => {
            setLocation(response.data);
        })
    }, [])

    return(
        <div className="posts">
            {location.map((posts) => {
                return(
                <div className="posts_location" key={posts.id}>
                    <h3>{posts.location_name}</h3>
                    <h3>{posts.address}</h3>
                    <h3>{posts.city}</h3>
                </div> );
            })}
        </div>
    )
}

export default Posts