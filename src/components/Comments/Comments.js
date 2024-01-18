import "./Comments.scss"
import { useRef } from "react";
import axios from "axios";
//import { useNavigate } from "react-router-dom";


function Comments({post_id}) {
    const form = useRef();

    const newComment = (e) => {
        e.preventDefault();
        const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

        let commentDate = Date.now()
        let date = new Date(commentDate);
        let months  = date.getMonth();
        let day  = date.getDate();
        let year = date.getFullYear();
        let combinedDate = month[months] + " " + day + " " + year;


        const newComment = {
            player_id: 2,
            post_id: post_id,
            comment: form.current.comments.value,
            date: combinedDate
        }
        
        axios.post('http://localhost:8080/comment', newComment)



    }

    return (
        <div className="comments">
            <form onSubmit={newComment} ref={form} className="comments__form">
                <textarea type="text" name="comments" className="comments__form-text" placeholder="Comment about what you think"></textarea>
                <button type="submit" className="comments__form-button">Submit</button>
            </form>

        </div>
    )
}

export default Comments