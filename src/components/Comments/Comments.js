import "./Comments.scss"
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Comments({post_id}) {
    const form = useRef();
    const Navigate = useNavigate();

    const newComment = (e) => {
        e.preventDefault();

        const newComment = {
            player_id: 1,
            post_id: post_id,
            comment: form.current.comments.value,
            date: Date.now()
        }
        
        axios.post('http://localhost:8080/comment', newComment)



    }

    return (
        <div className="comments">
            <form onSubmit={newComment} ref={form} className="comments__form">
                <textarea type="text" name="comments" className="comments__form-text" placeholder="Comment about what you think"></textarea>
                <button type="submit" className="comments__form-button">Submit Comment</button>
            </form>

        </div>
    )
}

export default Comments