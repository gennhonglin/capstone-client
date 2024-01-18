import "./SinglePost.scss";
import Maps from "../Maps/Maps.js";



function SinglePost({ postData }) {

    return (
        <div className="single-post__container">
            <div className='single-post__container__detail'>
                <h2 className='single-post__container__detail-title single-post__container__detail-header'>{postData.location_name}</h2>
                <h3 className='single-post__container__detail-title'>{postData.address}</h3>
                <h3 className='single-post__container__detail-title'>{postData.city}</h3>
                <h3 className='single-post__container__detail-title'>{postData.level}</h3>
                <a href={postData.registration} className='single-post__container__detail-title'>Click Here to Register</a>
            </div>
        </div>

    )
}


export default SinglePost