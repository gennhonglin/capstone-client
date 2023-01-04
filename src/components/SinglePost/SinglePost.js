import "./SinglePost.scss";
import axios from 'axios';
import { useEffect, useState } from 'react';
import Maps from "../Maps/Maps.js";

// function Child({locations}) {
//     return (
//         <div className="single-post__container-maps">
//             <Maps location={locations} />
//         </div>
//     )
// }

function SinglePost({ id }) {
    
    // const initialState = {
    //     lng: -123.116226,
    //     lat: 49.246292,
    //     zoom: 10,
    // };
    // const [locations, setLocations] = useState(initialState);
    const [postData, setPostData] = useState({});



    useEffect(() => {
        axios.get(`http://localhost:8080/location/${id}`)
            .then((response) => {
                setPostData(response.data);
                // let coordinates = {
                //     lng: locations.lng,
                //     lat: locations.lat,
                //     zoom: 10
                // }
        
                // setLocations(coordinates);

            })
    }, [id])




    return (
        <div>
            {/* <Child locations={locations} /> */}
            <div className='single-post__container'>
                <h3 className='single-post__container-title'>{postData.location_name}</h3>
                <h3 className='single-post__container-title'>{postData.address}</h3>
                <h3 className='single-post__container-title'>{postData.city}</h3>
                <h3 className='single-post__container-title'>{postData.level}</h3>
                <a href={postData.registration} className='single-post__container-title'>Click Here to Register</a>
            </div>
        </div>

    )
}


export default SinglePost