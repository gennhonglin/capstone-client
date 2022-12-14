import axios from "axios";
import { useEffect, useState } from "react";
import "./CommentList.scss";


function CommentList({id}) {
    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/comment/${id}`)
        .then((response) => {

            setList(response.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [list])


    return(
        <div className="comments-list">
            {list.map((posts) => {
                    return (
                        <div className="comments-list__post" key={posts.comment_id}>
                            <div className="comments-list__post__details">
                                <h3 className="comments-list__post__details-info">{posts.comment}</h3>
                                <h3 className="comments-list__post__details-date">{posts.date}</h3>
                            </div>
                        </div>);
                })}
        </div>
    )
}   

export default CommentList