import { useParams } from 'react-router-dom';
import Comments from '../../components/Comments/Comments';
import Header from '../../components/Header/Header';
import Maps from '../../components/Maps/Maps';
import SinglePost from '../../components/SinglePost/SinglePost';
import './PostDetail.scss';


function PostDetail() {
    const { id } = useParams();

    return (
        <div className='single-post'>
            <div className='single-post__posts'>
                <SinglePost id={id}/>
            </div>
            <div className='single-post__comments'>
                <Comments />
            </div>
            <Header />
        </div>
    )
}


export default PostDetail