import { useParams } from 'react-router-dom';
import CommentList from '../../components/CommentList/CommentList';
import Comments from '../../components/Comments/Comments';
import Header from '../../components/Header/Header';
import Maps from '../../components/Maps/Maps';
import SinglePost from '../../components/SinglePost/SinglePost';
import './PostDetail.scss';
import DisplayUser from "../../components/DisplayUser/DisplayUser";
import axios from 'axios';
import { useEffect, useState } from 'react';


function PostDetail() {
    const token = sessionStorage.getItem("token");
    const { id } = useParams();
    let image = sessionStorage.getItem("image");
    if (image !== null) {
        image = true;
    } else {
        image = false;
    }
    const [postData, setPostData] = useState();
    const [locations, setLocations] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8080/location/${id}`)
            .then((response) => {
                setPostData(response.data);
                let coordinates = {
                    lng: response.data.long,
                    lat: response.data.lat,
                    zoom: 16
                }

                setLocations(coordinates);

            })
    }, [id])

    return (
        <div className='single-post'>
            <div className="single-post__header">
                <DisplayUser token={token} />
                <Header image={image} />
            </div>
            <div className="single-post__body">
                <div className="single-post__body-left">
                    <div className="single-post__body-left__maps">
                        {postData && <Maps location={locations} />}
                    </div>
                </div>
                <div className="single-post__body-right">
                    <div className='single-post__body-right__posts'>
                        {postData && <SinglePost postData={postData} />}
                    </div>
                    <div className='single-post__body-right__comments'>
                        <Comments post_id={id} />
                    </div>
                    <div className='single-post__body-right__list'>
                        <CommentList id={id} />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default PostDetail