import { useParams } from 'react-router-dom';
import CommentList from '../../components/CommentList/CommentList';
import Comments from '../../components/Comments/Comments';
import Header from '../../components/Header/Header';
//import Maps from '../../components/Maps/Maps';
import SinglePost from '../../components/SinglePost/SinglePost';
import './PostDetail.scss';
import DisplayUser from "../../components/DisplayUser/DisplayUser";


function PostDetail() {
    const token = sessionStorage.getItem("token");
    const { id } = useParams();
    let image = sessionStorage.getItem("image");
    if(image === null) {
        image = true;
    } else {
        image = false;
    }

    return (
        <div className='single-post'>
            <DisplayUser token = {token} />
            <div className='single-post__posts'>
                <SinglePost id={id}/>
            </div>
            <div className='single-post__comments'>
                <Comments post_id = {id} />
            </div>
            <div className='single-post__list'>
                <CommentList id = {id} />
            </div>
            <Header image = {image}/>
        </div>
    )
}


export default PostDetail