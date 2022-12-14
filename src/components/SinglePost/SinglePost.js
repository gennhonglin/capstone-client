import "./SinglePost.scss";
import axios from 'axios';
import { useEffect, useState } from 'react';

function SinglePost({id}) {
    const [postData, setPostData] = useState({});
   

    useEffect( () => {
        axios.get(`http://localhost:8080/location/${id}`)
        .then((response) => {
            console.log(response.data);
            setPostData(response.data);
        })
    }, [])


    return (
        <div className='single-post__container'>
            <h3 className='single-post__container-title'>{postData.location_name}</h3>
            <h3 className='single-post__container-title'>{postData.address}</h3>
            <h3 className='single-post__container-title'>{postData.city}</h3>
            <h3 className='single-post__container-title'>{postData.level}</h3>
            <a href={postData.registration} className='single-post__container-title'>Click Here to Register</a>
        </div>
    )
}


export default SinglePost